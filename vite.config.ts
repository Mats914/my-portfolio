import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Makes CSS non-render-blocking (critical CSS inlines above-fold, rest loads async)
function cssAsyncPlugin() {
  return {
    name: "css-async",
    transformIndexHtml(html: string) {
      return html.replace(
        /(<link rel="stylesheet"[^>]*?)>/g,
        (match) => {
          const hrefMatch = match.match(/href="([^"]+)"/);
          if (!hrefMatch) return match;
          return match.replace(/>$/, ' media="print" onload="this.media=\'all\'">') +
            `<noscript><link rel="stylesheet" href="${hrefMatch[1]}"></noscript>`;
        }
      );
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), cssAsyncPlugin(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Disable modulepreload to fix console warnings:
    // - "Credentials mode does not match" (crossorigin mismatch)
    // - "Preloaded but not used within a few seconds"
    modulePreload: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/react-router")) {
            return "react-vendor";
          }
          if (id.includes("node_modules/framer-motion")) {
            return "framer-motion";
          }
        },
      },
    },
  },
}));
