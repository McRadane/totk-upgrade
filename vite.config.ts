import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'apple-touch-icon-*.png',
        'favicon-*.png',
        'mstile-150x150.png',
        'safari-pinned-tab.svg',
        'browserconfig.xml',
      ],
      manifest: {
        name: 'TOTK Armor Upgrade',
        short_name: 'TOTK Armors',
        description: 'Tears of the Kinkdom Armor Upgrade',
        scope: "/totk-upgrade/",
        start_url: "/totk-upgrade/",
        background_color: "#ffffff",
        theme_color: '#ffffff',
        display: "standalone",
        icons: [
          {
            src: '/totk-upgrade/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/totk-upgrade/android-chrome-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  base: "/totk-upgrade/"
})
