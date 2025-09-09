// netlify/functions/server.js
const { createRequestHandler } = require("@remix-run/netlify");

module.exports = createRequestHandler({
  build: require("../../build/index.js"),
});