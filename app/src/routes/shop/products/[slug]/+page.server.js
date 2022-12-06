/** @type {import('./$types').PageServerLoad} */
import { request } from 'graphql-request';
import { ONE_CATEGORY } from '$lib/GQL/query/category';
export async function load({ params }) {
	const url = import.meta.env.VITE_URL;
	const { slug } = params;
	const variables = {
		slug,
		key: '1'
	};
	const category = await request(url, ONE_CATEGORY, variables);
	if (category) return { category };
}
