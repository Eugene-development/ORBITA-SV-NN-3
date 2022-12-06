/** @type {import('./$types').PageServerLoad} */
import { request, gql } from 'graphql-request';
import { ALL_PRODUCTS } from '$lib/GQL/query/product';

export async function load() {
	// const url = import.meta.env.VITE_URL;
	// const variables = {
	// 	key: '1'
	// };
	// const allProducts = await request(url, ALL_PRODUCTS, variables);

	// return { allProducts };
	return {};
}
