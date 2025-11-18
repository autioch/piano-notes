// @ts-check
import { defineConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://astro.build/config
export default defineConfig({
    site: 'https://autioch.github.io/',
    base: '/piano-notes',
	vite: {
		plugins: [tsconfigPaths()]
	}
});
