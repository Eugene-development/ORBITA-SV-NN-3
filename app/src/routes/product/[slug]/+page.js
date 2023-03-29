/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';

export async function load({ data }) {
	const { product } = data;
	const title = data.product.product_one.value + ' | ' + 'Интернет-магазин «Орбита-Строй»';

	// const title =
	// 	'База стройматериалов Орбита-Строй || ' +
	// 	data.product.product_one.value +
	// 	' в Нижнем Новгороде с доставкой.';
	const description =
		'Магазин стройматериалов «Орбита-Строй» предлагает купить ' +
		data.product.product_one.value +
		' по выгодной цене в Нижнем Новгороде оптом и в розницу, товары всегда в наличии. Осуществляем доставку по городу и области.';
	// const description =
	// 	"У нас вы можете купить товар '" +
	// 	data.product.product_one.value +
	// 	"' по доступной цене. Есть услуги доставки и грузчиков.";
	// data.product.product_one.value +
	// 	' в наличии с доставкой по Нижнему Новгороду и региону. Работаем по субботам и праздникам.';

	const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS;
	// pageH1.update(() => data.product.product_one.value);
	pageH1.update(() => 'Интернет магазин стройматериалов "Орбита-Строй"');

	return { title, description, product, pathAWS };
}
