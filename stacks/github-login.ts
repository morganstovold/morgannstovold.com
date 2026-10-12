import * as GitHub from "alchemy/GitHub";
import * as GitHubCredentials from "alchemy/GitHub/Credentials";
import * as Effect from "effect/Effect";

/**
 * The token Alchemy resolves for GitHub from the current profile: the `gh` CLI login locally, or the
 * job's GITHUB_TOKEN in Actions. Used as the read token for the site's GitHub activity section.
 */
export const githubLoginToken = Effect.gen(function* () {
  const credentials = yield* yield* GitHub.GitHubCredentials;
  return credentials.token;
}).pipe(Effect.provide(GitHubCredentials.fromAuthProvider()));
