import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/E-commerce/',
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    hmr: {
      path: '/ws',  // or try just true if this causes issues
    },
  },
})
