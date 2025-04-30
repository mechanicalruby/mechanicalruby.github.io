import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import relativeImages from "mdsvex-relative-images";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: true,
			strict: true,
			paths: {
				base: process.env.NODE_ENV === 'production' ? '/blog' : '',
			}
		})
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
            remarkPlugins: [relativeImages]
		})
	]
};

export default config;
