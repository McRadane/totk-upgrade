import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

import purgecss from "@fullhuman/postcss-purgecss";
import autoprefixer from "autoprefixer";
import { type PluginItem } from "@babel/core";

import type * as PostCSS from "postcss";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const postcssPlugins: PostCSS.AcceptedPlugin[] = [];
  const babelPlugins: PluginItem[] = [
    [
      "formatjs",
      {
        idInterpolationPattern: "[sha512:contenthash:base64:6]",
        ast: true
      }
    ]
  ];

  if (mode === "production") {
    postcssPlugins.push(
      purgecss({
        content: ["./index.html", "./src/**/*.tsx"]
      })
    );

    babelPlugins.push(["react-remove-properties", { properties: ["data-testid"] }]);
  }

  postcssPlugins.push(autoprefixer);

  return {
    css: {
      postcss: {
        plugins: postcssPlugins
      }
    },
    plugins: [
      react({
        babel: {
          plugins: babelPlugins
        }
      }),
      VitePWA({
        includeAssets: [
          "favicon.ico",
          "apple-touch-icon.png",
          "apple-touch-icon-*.png",
          "favicon-*.png",
          "mstile-150x150.png",
          "safari-pinned-tab.svg",
          "browserconfig.xml"
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
              type: "image/png"
            },
            {
              src: env.VITE_BASE + "android-chrome-384x384.png",
              sizes: "384x384",
              type: "image/png"
            },
            {
              src: env.VITE_BASE + "android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png"
            },
            {
              src: env.VITE_BASE + "maskable_icon.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable"
            }
          ]
        }
      })
    ],
    base: env.VITE_BASE,
    define: {
      APP_VERSION: JSON.stringify(process.env.npm_package_version)
    },
    test: {
      open: false,
      globals: true,
      setupFiles: './tests/setup.js',
      coverage: {
        all: true,
        include: ["src/**"],
        src: "./src",
        reportsDirectory: "./temp/coverage",
        reporter: ['text', 'html', 'lcov']
      },
      environmentMatchGlobs: [
        ['**\/*.test.tsx', 'happy-dom'],
      ]
    }
  };
});
