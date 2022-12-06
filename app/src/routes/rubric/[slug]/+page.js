/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';

export async function load({ data }) {
	const { catalog } = data;
	const title =
		"База строительных материалов 'Орбита-Строй' | " +
		data.catalog.catalog_one.value +
		' в Дзержинске';
	const description =
		data.catalog.catalog_one.value +
		' по низким ценам в Дзержинске и регионе. Предлагаем доставку и скидки для товара ' +
		data.catalog.catalog_one.value +
		'.';

	pageH1.update(() => data.catalog.catalog_one.value);

	return { title, description, catalog };
}
