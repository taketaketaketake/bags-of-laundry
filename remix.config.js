/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  // Netlify deployment configuration
  assetsBuildDirectory: "build/client/assets",
  publicPath: "/assets/",
  serverBuildPath: "build/server/index.js",
  ignoredRouteFiles: ["**/.*"],

    // Future flags (removes warnings from build logs)
    future: {
      v3_fetcherPersist: true,
      v3_lazyRouteDiscovery: true,
      v3_relativeSplatPath: true,
      v3_singleFetch: true,
      v3_throwAbortReason: true,
    },
};