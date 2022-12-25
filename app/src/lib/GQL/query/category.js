import { gql } from 'graphql-request';

export const ONE_CATEGORY = gql`
	query category($slug: String!, $key: String!) {
		category_one(slug: $slug, key: $key) {
			value
			text {
				value
			}
			product {
				id
				value
				slug
				price {
					value
				}
				unit {
					value
				}
				image {
					hash
					alt
				}
			}
		}
	}
`;
