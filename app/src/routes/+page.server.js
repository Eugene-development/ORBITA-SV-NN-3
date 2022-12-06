/** @type {import('./$types').PageServerLoad} */
import { request, gql } from 'graphql-request';

export async function load() {
	const query = gql`
		query all_rubric {
			rubric {
				id
				value
			}
		}
	`;
	// const query = gql`
	// 	query all_rubric {
	// 		rubric {
	// 			id
	// 			value
	// 			is_active
	// 			created_at
	// 			updated_at
	// 			parent: parentable {
	// 				... on Catalog {
	// 					id
	// 					value
	// 				}
	// 			}
	// 		}
	// 	}
	// `;
	const test888 = await request('https://gost-remont.com/graphql/', query);
	if (test888) return { test888 };
}
