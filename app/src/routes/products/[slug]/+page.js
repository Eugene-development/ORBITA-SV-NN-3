/** @type {import('./$types').PageLoad} */
import { browser } from '$app/environment';
import { pageH1, idProductsInCart } from '$lib/store/stores.js';

export async function load({ data }) {
	const { category } = data;
	// let title;
	// let description;
	// if (category.category_one.seoTitle === null || category.category_one.seoTitle.value === 'test') {
	// 	title = data.category.category_one.value + ' | ' + 'Интернет-магазин «Орбита-Строй»';
	// } else {
	// 	title = category.category_one.seoTitle.value;
	// }

	// if (
	// 	category.category_one.seoDescription === null ||
	// 	category.category_one.seoDescription.value === 'test'
	// ) {
	// 	description =
	// 		'Магазин стройматериалов «Орбита-Строй» предлагает купить ' +
	// 		data.category.category_one.value +
	// 		' по выгодной цене в Нижнем Новгороде оптом и в розницу, товары всегда в наличии. Осуществляем доставку по городу и области.';
	// } else {
	// 	description = category.category_one.seoDescription.value;
	// }

	const getTitle = (category) => {
		const defaultTitle = `${category.category_one.value} | Интернет-магазин «Орбита-Строй»`;
		const seoTitle = category.category_one.seoTitle?.value;
		const title = seoTitle !== null && seoTitle !== 'test' ? seoTitle : defaultTitle;
		return title;
	};

	const getDescription = (category) => {
		const defaultDescription = `Магазин стройматериалов «Орбита-Строй» предлагает купить ${category.category_one.value} по выгодной цене в Нижнем Новгороде оптом и в розницу, товары всегда в наличии. Осуществляем доставку по городу и области.`;
		const seoDescription = category.category_one.seoDescription?.value;
		const description =
			seoDescription !== null && seoDescription !== 'test' ? seoDescription : defaultDescription;
		return description;
	};

	const title = getTitle(category);
	const description = getDescription(category);

	const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS;
	// pageH1.update(() => data.category.category_one.value);
	pageH1.update(() => 'Интернет магазин стройматериалов "Орбита-Строй"');

	return { title, description, category, pathAWS };
}
