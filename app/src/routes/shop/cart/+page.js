/** @type {import('./$types').PageLoad} */
import { browser } from '$app/environment';
import { pageH1, prodInCart } from '$lib/store/stores.js';
import { reject, without, pullAllBy, forEach, find, filter } from 'lodash';
// import { idProductsInCart } from '$lib/store/stores.js';

import { request, gql } from 'graphql-request';
import { ALL_PRODUCTS } from '$lib/GQL/query/product';

export async function load() {
	const url = import.meta.env.VITE_URL;
	const variables = {
		key: '1'
	};
	const ccc = await request(url, ALL_PRODUCTS, variables);
	// console.log(ccc);
	// const { allProducts } = data;
	// const idProductsInCart = browser && JSON.parse(localStorage.getItem('inCart'));
	// let productsInCart = [];
	// forEach(idProductsInCart, function (product) {
	// 	productsInCart = [...productsInCart, find(ccc.product, ['id', product])];
	// });
	// forEach(productsInCart, function (item) {
	// 	item.quantity = 1;
	// });

	// prodInCart.update(() => productsInCart);
	pageH1.update(() => 'Корзина');

	return { ccc };
}
