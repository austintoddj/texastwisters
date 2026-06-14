import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@/images': path.resolve(__dirname, 'public/images'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  test: {
    environment: 'jsdom',
    include: ['tests/unit/**/*.spec.{ts,tsx}'],
    setupFiles: ['./tests/unit/setup.ts']
  },
  build: {
    sourcemap: true
  },
  plugins: []
})
