import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Inspect from 'vite-plugin-inspect';

import { config } from 'dotenv';
import mdx from '@mdx-js/rollup';
import * as path from 'path';

config();

export default defineConfig(() => {
  return {
    resolve: {
      alias: [
        { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
        { find: '@core', replacement: path.resolve(__dirname, 'src/core') },
        {
          find: '@domain',
          replacement: path.resolve(__dirname, 'src/domain'),
        },
        {
          find: '@features',
          replacement: path.resolve(__dirname, 'src/features'),
        },
        { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
        { find: '@i18n', replacement: path.resolve(__dirname, 'src/i18n') },
        { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
        { find: '@routes', replacement: path.resolve(__dirname, 'src/routes') },
        { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      ],
    },
    server: {
      open: true,
      port: 3000,
    },
    plugins: [mdx(), react(), Inspect()],
    build: {
      sourcemap: true,
    },
  };
});
