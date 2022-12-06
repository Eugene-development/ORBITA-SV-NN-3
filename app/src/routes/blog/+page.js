/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';
import { contentBlog } from '$lib/data/blog';

export async function load() {
	pageH1.update(() => 'Наш блог');
	return { contentBlog };
}
