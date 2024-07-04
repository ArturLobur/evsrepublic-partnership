import { defineConfig } from 'vite'
import path from 'path';
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    viteReact()
  ],
  build: {
    outDir: path.join(__dirname, 'build'),
  },
})