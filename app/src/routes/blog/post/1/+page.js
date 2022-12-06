/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';

import { contentPost } from '$lib/data/blog/post/1';
export async function load() {
	pageH1.update(() => 'Пост блога');

	return { contentPost };
}
