/** @type {import('./$types').PageLoad} */
import { browser } from '$app/environment';
import { pageH1, idProductsInCart } from '$lib/store/stores.js';

export async function load({ data }) {
	const { category } = data;
	const title =
		"База стройматериалов 'Орбита-Строй'" +
		' || ' +
		data.category.category_one.value +
		' в Нижнем Новгороде по выгодным ценам';
	const description =
		'Продажа оптом и в розницу. ' +
		data.category.category_one.value +
		' в Нижнем Новгороде и регионе.';
	const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS;
	// pageH1.update(() => data.category.category_one.value);

	return { title, description, category, pathAWS };
}
