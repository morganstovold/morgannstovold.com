import type { APIRoute } from "astro";

const pages = ["/", "/contact"];

export const GET: APIRoute = ({ site, url }) => {
  const urls = pages.map((path) => `<url><loc>${new URL(path, site ?? url)}</loc></url>`);
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}</urlset>`,
    { headers: { "Content-Type": "application/xml" } },
  );
};
