import { env } from "cloudflare:workers";

export interface Activity {
  total: number;
  days: { date: string; count: number; level: number }[];
  repos: { name: string; url: string; description: string | null; pushedAt: string; language: string | null }[];
}

const LEVELS: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

const QUERY = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount contributionLevel } }
      }
    }
    repositories(first: 10, privacy: PUBLIC, ownerAffiliations: OWNER, orderBy: { field: PUSHED_AT, direction: DESC }) {
      nodes { name url description pushedAt primaryLanguage { name } }
    }
  }
}`;

// Public repos for sites that are no longer running.
const HIDDEN_REPOS = new Set(["eastbayblinds.com"]);
const REPO_COUNT = 4;

// GitHub's API is slow-ish and rate limited, so each Cloudflare location keeps a copy for an hour.
const CACHE_SECONDS = 60 * 60;

export async function getActivity(login: string): Promise<Activity | undefined> {
  const token = env.GH_ACTIVITY_TOKEN;
  if (!token) return undefined;

  const cache = await caches.open("github-activity");
  const cacheKey = new Request(`https://cache.internal/github-activity/${login}`);
  const cached = await cache.match(cacheKey);
  if (cached) return cached.json();

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "morgannstovold.com",
    },
    body: JSON.stringify({ query: QUERY, variables: { login } }),
  });
  if (!response.ok) {
    console.error("GitHub activity request failed", response.status, await response.text());
    return undefined;
  }

  const { data } = (await response.json()) as { data?: { user: GitHubUser } };
  if (!data?.user) return undefined;

  const calendar = data.user.contributionsCollection.contributionCalendar;
  const activity: Activity = {
    total: calendar.totalContributions,
    days: calendar.weeks.flatMap((week) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
        level: LEVELS[day.contributionLevel] ?? 0,
      })),
    ),
    repos: data.user.repositories.nodes
      .filter((repo) => !HIDDEN_REPOS.has(repo.name))
      .slice(0, REPO_COUNT)
      .map((repo) => ({
        name: repo.name,
        url: repo.url,
        description: repo.description,
        pushedAt: repo.pushedAt,
        language: repo.primaryLanguage?.name ?? null,
      })),
  };

  await cache.put(
    cacheKey,
    new Response(JSON.stringify(activity), { headers: { "Cache-Control": `max-age=${CACHE_SECONDS}` } }),
  );
  return activity;
}

interface GitHubUser {
  contributionsCollection: {
    contributionCalendar: {
      totalContributions: number;
      weeks: { contributionDays: { date: string; contributionCount: number; contributionLevel: string }[] }[];
    };
  };
  repositories: {
    nodes: {
      name: string;
      url: string;
      description: string | null;
      pushedAt: string;
      primaryLanguage: { name: string } | null;
    }[];
  };
}
