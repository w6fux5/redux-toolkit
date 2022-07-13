import { resolve } from 'path';
// eslint-disable-next-line
import { defineConfig } from 'vite';
// eslint-disable-next-line
import react from '@vitejs/plugin-react';

export const aliases = {
  '@': resolve(__dirname, './src/'),
  '@s': resolve(__dirname, './src/store/'),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases,
  },
});
