// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://www.flowarc.dev",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
    robotsTxt(),
    sanity({
      projectId: "vd2f4osv",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/admin",
    }),
  ],
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  adapter: vercel(),
});