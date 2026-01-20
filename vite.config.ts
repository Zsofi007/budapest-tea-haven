import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Set base path for GitHub Pages
  // Repository: https://github.com/Zsofi007/budapest-tea-haven
  // Site will be at: https://zsofi007.github.io/budapest-tea-haven/
  base: process.env.GITHUB_PAGES_BASE || "/budapest-tea-haven/",
  server: {
    host: "::",
    port: 5432,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
