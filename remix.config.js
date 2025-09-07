/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  // Netlify deployment configuration
  assetsBuildDirectory: "build/client/assets",
  publicPath: "/assets/",
  serverBuildPath: "build/server/index.js",
  ignoredRouteFiles: ["**/.*"],
};