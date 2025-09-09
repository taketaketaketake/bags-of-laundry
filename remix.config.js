/** @type {import('@remix-run/dev').AppConfig} */
export default {
  // Remove Netlify-specific build paths - let Remix handle defaults
  ignoredRouteFiles: ["**/.*"],

  // Use ES modules for better compatibility
  serverModuleFormat: "esm",

  // Future flags (removes warnings from build logs)
    future: {
      v3_fetcherPersist: true,
      v3_lazyRouteDiscovery: true,
      v3_relativeSplatPath: true,
      v3_singleFetch: true,
      v3_throwAbortReason: true,
    },
};
