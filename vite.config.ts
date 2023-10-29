import { defineConfig } from 'vite';
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
});
