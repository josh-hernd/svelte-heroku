import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: adapter({
			// default options are shown
			out: 'build',
			precompress: false,
			env: {
				port: process.env.PORT
			}
		}),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
	vite: {
		server: {
			hmr: {
				host: '0.0.0.0',
				port: 3000,
				protocol: 'ws'
			},
			watch: {
				usePolling: true,
			},
		},
	}
};

export default config;