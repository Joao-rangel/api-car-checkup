import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {},
  resolve: {
    alias: {
      '@modules': './src/modules',
      '@shared': './src/shared',
    },
  },
});
