import { defineConfig } from 'vitest/config';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/*': path.resolve(__dirname, './src/*'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      all: true,
      enabled: true,
      provider: 'v8',
      reporter: ['text'],
      include: ['src/**/*.tsx', 'src/**/*.ts'],
      exclude: ['src/types/*', 'src/consts/*', 'src/vite-env.d.ts'],
    },
  },
});
