import { Express } from "express"; // Express 애플리케이션의 타입을 가져옴
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app: Express) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://43.202.132.83:8088",
      changeOrigin: true,
    })
  );
};
