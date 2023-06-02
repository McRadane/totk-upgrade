import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";
import purgecss from "@fullhuman/postcss-purgecss";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  console.log({ mode, env });

  return {
    css: {
      postcss: {
        plugins: [
          mode === 'production' ? purgecss({
            content: [
              "./index.html",
              "./src/**/*.tsx",
              "./node_modules/mdb-ui-kit/js/mdb.min.js",
            ],
          }) : undefined,
        ],
      },
    },
    plugins: [
      react(),
      VitePWA({
        includeAssets: [
          "favicon.ico",
          "apple-touch-icon.png",
          "apple-touch-icon-*.png",
          "favicon-*.png",
          "mstile-150x150.png",
          "safari-pinned-tab.svg",
          "browserconfig.xml",
        ],
        manifest: {
          name: env.VITE_SITE_NAME,
          short_name: env.VITE_SITE_SHORTNAME,
          description: env.VITE_SITE_TITLE,
          scope: env.VITE_BASE,
          start_url: env.VITE_BASE,
          background_color: env.VITE_THEME_COLOR,
          theme_color: env.VITE_THEME_COLOR,
          display: "standalone",
          icons: [
            {
              src: env.VITE_BASE + "android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: env.VITE_BASE + "android-chrome-384x384.png",
              sizes: "384x384",
              type: "image/png",
            },
          ],
        },
      }),
    ],
    base: env.VITE_BASE,
  };
});
