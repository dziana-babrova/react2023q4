import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      assets: path.resolve(__dirname, './src/assets'),
      pages: path.resolve(__dirname, './src/pages'),
      consts: path.resolve(__dirname, './src/consts'),
      services: path.resolve(__dirname, './src/services'),
      hooks: path.resolve(__dirname, './src/hooks'),
      context: path.resolve(__dirname, './src/context'),
      'test-data': path.resolve(__dirname, './src/test-data'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "src/styles/colors.scss"; @import "src/styles/sizes.scss"; @import "src/styles/fonts.scss"; @import "src/styles/mixins.scss";',
      },
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
