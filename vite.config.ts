import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";

// Define your site URL
const SITE_URL = "https://architechinnovate.com";

// List all the static routes you want crawlers to find
const pages = [{ url: "/", changefreq: "weekly", priority: 1.0 }];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  build: {
    outDir: "dist",
    sourcemap: true, // 👈 add this
  },
  // server: {
  //   host: "::",
  //   port: 8080,
  // },
  plugins: [
    react(),
    {
      name: "generate-sitemap",
      closeBundle: async () => {
        try {
          const sitemap = new SitemapStream({ hostname: SITE_URL });
          pages.forEach((page) => sitemap.write(page));
          sitemap.end();

          const xml = await streamToPromise(sitemap);
          const outputDir = path.resolve(__dirname, "dist");
          const filePath = path.resolve(outputDir, "sitemap.xml");

          fs.mkdirSync(outputDir, { recursive: true });
          fs.writeFileSync(filePath, xml.toString());

          console.log("✅ Sitemap generated successfully:", filePath);
        } catch (err) {
          console.error("❌ Error generating sitemap:", err);
        }
      },
    },
  ],
  // plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
