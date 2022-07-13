import { resolve } from 'path';
// eslint-disable-next-line
import { defineConfig } from 'vite';
// eslint-disable-next-line
import react from '@vitejs/plugin-react';

export const aliases = {
  '@': resolve(__dirname, './src'),
  '@u': resolve(__dirname, './src/utils'),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases,
  },
});
