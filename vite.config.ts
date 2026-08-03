import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";
import fs from "node:fs";

// Emits a 404.html copy of index.html so GitHub Pages serves the SPA
// for direct navigation / refresh on client-side routes like /programs.
function githubPagesSpaFallback() {
  return {
    name: "github-pages-spa-fallback",
    apply: "build" as const,
    closeBundle() {
      const dist = path.resolve(__dirname, "dist");
      const index = path.join(dist, "index.html");
      const notFound = path.join(dist, "404.html");
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, notFound);
      }
    },
  };
}

// Injects a <link rel="preload"> for the hero background (the LCP element) into
// index.html at build time, using the hashed filenames Vite emits.
function preloadHeroImage() {
  return {
    name: "preload-hero-image",
    apply: "build" as const,
    closeBundle() {
      const dist = path.resolve(__dirname, "dist");
      const indexPath = path.join(dist, "index.html");
      const assetsDir = path.join(dist, "assets");
      if (!fs.existsSync(indexPath) || !fs.existsSync(assetsDir)) return;
      const files = fs.readdirSync(assetsDir);
      const small = files.find((f) => /^hero-bg-960-.*\.webp$/.test(f));
      const full = files.find((f) => /^hero-bg-(?!960)[^/]*\.webp$/.test(f));
      if (!small && !full) return;
      const href = `/assets/${small ?? full}`;
      const srcset = [small && `/assets/${small} 960w`, full && `/assets/${full} 1920w`]
        .filter(Boolean)
        .join(", ");
      const tag = `<link rel="preload" as="image" fetchpriority="high" href="${href}" imagesrcset="${srcset}" imagesizes="100vw" />`;
      const html = fs.readFileSync(indexPath, "utf8");
      if (html.includes('rel="preload" as="image"')) return;
      fs.writeFileSync(indexPath, html.replace("</head>", `  ${tag}\n  </head>`));
    },
  };
}


export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss(), tsconfigPaths(), preloadHeroImage(), githubPagesSpaFallback()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react/") || id.includes("node_modules/scheduler")) {
            return "react-vendor";
          }
          if (id.includes("node_modules/react-router")) return "router";
          return undefined;
        },
      },
    },
  },

});
