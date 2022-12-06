/** @type {import('./$types').PageServerLoad} */
import { request } from 'graphql-request';
import { ONE_PRODUCT } from '$lib/GQL/query/product';
export async function load({ params }) {
	const url = import.meta.env.VITE_URL;
	const { slug } = params;
	const variables = {
		slug,
		key: '1'
	};
	const product = await request(url, ONE_PRODUCT, variables);
	if (product) return { product };
}
