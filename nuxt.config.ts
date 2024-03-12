export default defineNuxtConfig({
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
  ssr: false,
  app: {
    keepalive: true,
  },
  experimental: {
    payloadExtraction: false,
  },
  sourcemap: {
    server: true,
    client: false,
  },
  css: [
    "element-plus/dist/index.css",
    "element-plus/theme-chalk/dark/css-vars.css",
    "@/assets/css/main.css",
  ],
  modules: ["@unocss/nuxt"],
  devtools: { enabled: true },
});
