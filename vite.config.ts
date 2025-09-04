// vite.config.ts
import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";

export default defineConfig({
  plugins: [remix()],
  css: {
    postcss: './postcss.config.js',
  },
});