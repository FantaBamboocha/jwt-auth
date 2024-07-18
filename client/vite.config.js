import { defineConfig } from "vite";
import fs from "fs";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@api": "/src/api",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@store": "/src/store",
      "#types": "/src/types",
      "@utils": "/src/utils",
    },
  },
  server: {
    https: {
      key: fs.readFileSync("localhost+1-key.pem"),
      cert: fs.readFileSync("localhost+1.pem"),
    },
    port: 5173,
  },
});
