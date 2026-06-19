import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  server: {
    port: Number(process.env.MOTIF_WEB_PORT || 4388),
    strictPort: Boolean(process.env.MOTIF_WEB_PORT),
    proxy: {
      "/api": process.env.MOTIF_API_URL || "http://localhost:4389",
    },
  },
});
