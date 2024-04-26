/// <reference types="vitest" />
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react-swc'
import viteTsconfigPaths from 'vite-tsconfig-paths';
import path from 'path'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), dts()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, '/src'),
      "@atoms": path.resolve(__dirname, '/src/atoms'),
      "@types": path.resolve(__dirname, '/src/types')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './tests/setup.ts',
    coverage: {
      include: ['src/ui/**/*.{ts,tsx}'],
      exclude: [
        ...configDefaults.exclude, // toda la config para excluir modules
        'src/ui/**/**/*.stories.{ts,tsx}',
      ],
      thresholds: {
        lines: 40,
        functions: 40,
        branches: 40,
        statements: 40
      }
    }
  }
})