import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";
import * as path from "path";

const pwaConfig: Parameters<typeof VitePWA>[0] = {
  registerType: "autoUpdate",
  includeAssets: ["favicon/*.*", "robots.txt", "fonts/*.*"],
  manifest: {
    name: "Phasmophobia Journal",
    short_name: "Phasmophobia Journal",
    description: "Web App to accompany the game Phasmophobia",
    icons: [
      {
        src: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#18181b",
    background_color: "#18181b",
    start_url: "./",
    scope: ".",
    display: "fullscreen",
    orientation: "portrait"
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), VitePWA(pwaConfig)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
