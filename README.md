# morgannstovold.com

Personal site and freelance portfolio. [Astro](https://astro.build) on [Cloudflare Workers](https://developers.cloudflare.com/workers/), deployed with [Alchemy](https://alchemy.run).

Pages are prerendered to static HTML. Two parts render on request as [server islands](https://docs.astro.build/en/guides/server-islands/):

- **GitHub activity** (`src/components/ActivityFeed.astro`): contribution calendar and recent repos from GitHub's GraphQL API, cached for an hour per Cloudflare location.
- **Contact form** (`src/components/ContactForm.astro`): an Astro Action that checks [Turnstile](https://developers.cloudflare.com/turnstile/) and sends mail through [Resend](https://resend.com). `/contact` renders the same form without JavaScript.

Copy lives in `src/site.ts` (projects, services, timeline, links).

## Develop

```bash
bun install
bun run dev            # http://localhost:1337
```

Outside `prod`, Turnstile uses Cloudflare's always-pass test keys and email sending is disabled. The activity section uses your Alchemy profile's GitHub login when it has one (`alchemy profile edit --add GitHub`, method `gh-cli`), and otherwise shows a link to the GitHub profile.

```bash
bun run check          # astro check + oxlint + oxfmt
bun run images         # shrink oversized images in src/
```

## Deploy

Pushes to `master` deploy to production and pull requests get preview stages (`.github/workflows/deploy.yml`).

One-time CI setup: mints a scoped Cloudflare API token and writes the GitHub secrets and variables the workflow reads. `GH_ACTIVITY_TOKEN` is copied from the profile's GitHub login (the `gh` CLI token), so `.env` only needs `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL`:

```bash
bun alchemy deploy --config stacks/github.ts --profile admin
```
