import { Express } from "express";
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app: Express) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://43.202.132.83:8088",
      changeOrigin: true,
    })
  );
};
