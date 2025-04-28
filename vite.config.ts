import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Custom configuration

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 5000,
  },
  plugins: [
    react(),
    // Add any custom plugins here
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
