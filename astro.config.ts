// The Cloudflare adapter is injected by Alchemy's `Cloudflare.Website.Astro`.
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  // Pages build to contact.html (not contact/index.html) so Cloudflare serves /contact without a redirect.
  build: { format: "file" },
  trailingSlash: "never",
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Fraunces",
      cssVariable: "--font-fraunces-family",
      weights: ["300 600"],
      styles: ["normal", "italic"],
      fallbacks: ["serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter-family",
      weights: ["300 700"],
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono-family",
      weights: ["400 500"],
      fallbacks: ["monospace"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
