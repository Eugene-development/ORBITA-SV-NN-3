/** @type {import('./$types').PageLoad} */
import { browser } from '$app/environment';
import { pageH1, idProductsInCart } from '$lib/store/stores.js';

export async function load({ data }) {
	const { category } = data;
	const title =
		"База стройматериалов 'Орбита-Строй'" +
		' || ' +
		' Купить товар "' +
		data.category.category_one.value +
		'" в Нижнем Новгороде по выгодной цене';
	const description =
		data.category.category_one.value +
		' в Нижнем Новгороде и регионе по доступным ценам в наличии со склада и под заказ. ' +
		'Продажа оптом и в розницу физическим и юридическим лицам.';
	const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS;
	// pageH1.update(() => data.category.category_one.value);

	return { title, description, category, pathAWS };
}
