/** @type {import('./$types').PageServerLoad} */
import { request } from 'graphql-request';
import { ONE_CATALOG } from '$lib/GQL/query/catalog';

export async function load({ params }) {
	const url = import.meta.env.VITE_URL;
	const { slug } = params;
	const variables = {
		slug,
		key: '1'
	};
	const catalog = await request(url, ONE_CATALOG, variables);
	if (catalog) return { catalog };
}
