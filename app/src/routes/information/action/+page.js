/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';
import { contentActions } from '$lib/data/actions';
export async function load({ params }) {
	pageH1.update(() => 'Акции');
	return { contentActions };
}
