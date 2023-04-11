/** @type {import('./$types').PageLoad} */
import { browser } from '$app/environment';
import { pageH1, idProductsInCart } from '$lib/store/stores.js';

export async function load({ data }) {
	const { category } = data;
	let title;
	let description;
	if (
		category.category_one.seoTitle.value === 'test' ||
		category.category_one.seoTitle.value === null
	) {
		// const title =
		// 	"База стройматериалов 'Орбита-Строй'" +
		// 	' || ' +
		// 	' Купить товар "' +
		// 	data.category.category_one.value +
		// 	'" в Нижнем Новгороде по выгодной цене';

		title = data.category.category_one.value + ' | ' + 'Интернет-магазин «Орбита-Строй»';
		description =
			'Магазин стройматериалов «Орбита-Строй» предлагает купить ' +
			data.category.category_one.value +
			' по выгодной цене в Нижнем Новгороде оптом и в розницу, товары всегда в наличии. Осуществляем доставку по городу и области.';
		// const description =
		// 	data.category.category_one.value +
		// 	' в Нижнем Новгороде и регионе по доступным ценам в наличии со склада и под заказ. ' +
		// 	'Продажа оптом и в розницу физическим и юридическим лицам.';
	} else {
		title = category.category_one.seoTitle.value;
	}
	const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS;
	// pageH1.update(() => data.category.category_one.value);
	pageH1.update(() => 'Интернет магазин стройматериалов "Орбита-Строй"');

	return { title, description, category, pathAWS };
}
