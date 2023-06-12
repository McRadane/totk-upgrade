import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";
import purgecss from "@fullhuman/postcss-purgecss";
import autoprefixer from "autoprefixer";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const postcssPlugins = [];

  if (mode === "production") {
    postcssPlugins.push(
      purgecss({
        content: ["./index.html", "./src/**/*.tsx"],
      })
    );
  }

  postcssPlugins.push(autoprefixer);

  return {
    css: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
    plugins: [
      react({
        babel: {
          plugins: [
            [
              "formatjs",
              {
                idInterpolationPattern: "[sha512:contenthash:base64:6]",
                ast: true,
              },
            ],
          ],
        },
      }),
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
            {
              src: env.VITE_BASE + "android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: env.VITE_BASE + "maskable_icon.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
      }),
    ],
    base: env.VITE_BASE,
    define: {
      APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
  };
});
