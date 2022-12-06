/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';

export async function load() {
	pageH1.update(() => 'Контакты');

	return {};
}
