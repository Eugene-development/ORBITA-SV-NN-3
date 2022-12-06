/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';

export async function load({ data }) {
	const { product } = data;
	const title =
		'База стройматериалов Орбита-Строй | ' +
		data.product.product_one.value +
		' в Дзержинске со склада.';
	const description =
		"У нас вы можете купить товар '" +
		data.product.product_one.value +
		"' по очень низкой цене. Есть услуги доставки и грузчики.";
	data.product.product_one.value +
		' в наличии с доставкой по Дзержинску и области. Работаем по субботам и праздникам.';

	const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS;
	pageH1.update(() => data.product.product_one.value);

	return { title, description, product, pathAWS };
}
