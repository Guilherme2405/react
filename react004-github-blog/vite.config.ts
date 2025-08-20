import { defineConfig } from "vite";

import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/context": path.resolve(__dirname, "./src/context"), // Novo alias
    },
  },

  server: {
    port: 3000,
  },
});
