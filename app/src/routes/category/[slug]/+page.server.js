/** @type {import('./$types').PageServerLoad} */
import { request } from 'graphql-request';
import { ONE_RUBRIC } from '$lib/GQL/query/rubric';
export async function load({ params }) {
	const url = import.meta.env.VITE_URL;
	const { slug } = params;
	const variables = {
		slug,
		key: '1'
	};
	const rubric = await request(url, ONE_RUBRIC, variables);
	if (rubric) return { rubric };
}
