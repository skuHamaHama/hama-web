import { Express } from "express";
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app: Express) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://49.50.162.61:8088",
      changeOrigin: true,
    })
  );
};
