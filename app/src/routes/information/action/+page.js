/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';
import { contentActions } from '$lib/data/actions';
import { onMount } from 'svelte';

let path = '';

export async function load({ params }) {
	pageH1.update(() => 'Акции');

	console.log(params);
	return { contentActions };
}
