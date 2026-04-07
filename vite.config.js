import { readdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const rootDir = dirname(fileURLToPath(import.meta.url))
const templateEntries = Object.fromEntries(
  readdirSync(resolve(rootDir, 'templates'))
    .filter((file) => file.endsWith('.html'))
    .map((file) => [`templates/${file.replace(/\.html$/, '')}`, resolve(rootDir, 'templates', file)])
)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        ...templateEntries,
      },
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined
          }

          if (id.includes('lucide-react')) {
            return 'icons-vendor'
          }

          if (id.includes('gsap')) {
            return 'motion-vendor'
          }

          if (id.includes('react-helmet-async')) {
            return 'seo-vendor'
          }

          return undefined
        },
      },
    },
  },
})
