import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// additional vite config
		vite: () => ({
			// add more aliases
			resolve: {
				alias: {
					$actions: resolve("src/lib/actions"),
					$components: resolve("src/lib/components"),
					$css: resolve("src/lib/css"),
					$stores: resolve("src/lib/stores"),
					$util: resolve("src/lib/util"),
				}
			}
		}),
	}
};

export default config;
