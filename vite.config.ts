import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base:'/',
  build: {
    outDir: '.', // 👈 output directly into repo root
    emptyOutDir: false, // avoid deleting config files
    sourcemap: true, // 👈 add this
  },
  // server: {
  //   host: "::",
  //   port: 8080,
  // },
  plugins: [react()],
  // plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
