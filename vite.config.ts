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
  let heroFull = "";
  let heroSmall = "";
  return {
    name: "preload-hero-image",
    apply: "build" as const,
    enforce: "post" as const,
    generateBundle(_options: unknown, bundle: Record<string, { fileName?: string }>) {
      for (const file of Object.keys(bundle)) {
        if (/hero-bg-960-.*\.webp$/.test(file)) heroSmall = "/" + file;
        else if (/hero-bg-.*\.webp$/.test(file)) heroFull = "/" + file;
      }
    },
    transformIndexHtml: {
      order: "post" as const,
      handler(html: string) {
        if (!heroSmall && !heroFull) return html;
        const tag = `<link rel="preload" as="image" fetchpriority="high" href="${heroSmall || heroFull}" imagesrcset="${heroSmall} 960w, ${heroFull} 1920w" imagesizes="100vw" />`;
        return html.replace("</head>", `  ${tag}\n  </head>`);
      },
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
  },
});
