import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment'
  },
  resolve: {
    alias: {
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
