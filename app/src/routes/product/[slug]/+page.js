/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';

export async function load({ data }) {
	const { product } = data;
	const title =
		'База стройматериалов Орбита-Строй || ' +
		data.product.product_one.value +
		' в Нижнем Новгороде с доставкой.';
	const description =
		"У нас вы можете купить товар '" +
		data.product.product_one.value +
		"' по доступной цене. Есть услуги доставки и грузчиков.";
	data.product.product_one.value +
		' в наличии с доставкой по Нижнему Новгороду и региону. Работаем по субботам и праздникам.';

	const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS;
	pageH1.update(() => data.product.product_one.value);

	return { title, description, product, pathAWS };
}
