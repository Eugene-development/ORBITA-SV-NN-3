/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';
import { contentActions } from '$lib/data/actions';

export async function load({ data }) {
	pageH1.update(() => 'База строительных материалов');

	return { contentActions };
}
