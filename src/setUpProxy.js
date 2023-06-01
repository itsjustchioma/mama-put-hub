import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://cloud.appwrite.io/v1",
      changeOrigin: true,
    })
  );
}
