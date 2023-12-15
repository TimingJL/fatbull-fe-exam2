import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    // https://github.com/vitejs/vite/issues/1973#issuecomment-787571499
    define: {
      'process.env': {},
    },
    base: '/fatbull-fe-exam2',
    resolve: {
      alias: {
        src: '/src',
      },
    },
    server: {
      host: 'localhost',
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'dist',
    },
    plugins: [
      tsconfigPaths(),
      react(),
      // svgr options: https://react-svgr.com/docs/options/
      svgr({ svgrOptions: { icon: true } }),
    ],
  };
});
