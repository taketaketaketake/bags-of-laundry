// vite.config.mts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vitePlugin as remix } from "@remix-run/dev";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
      },
    }),
  ],
  css: {
    postcss: "./postcss.config.js",
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "app"),
    },
  },
});
