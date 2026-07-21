// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Keep self-hosted font files as separate cacheable assets instead of
  // base64-inlining them into each page's CSS. Several landing pages share
  // the same @fontsource family, so this lets the browser cache one copy
  // of each font across the whole site instead of re-downloading it inline
  // on every page — smaller CSS payloads and better repeat-visit performance.
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
