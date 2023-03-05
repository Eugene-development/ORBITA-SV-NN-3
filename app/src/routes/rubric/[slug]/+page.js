/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';

export async function load({ data }) {
	const { catalog } = data;
	const title = data.catalog.catalog_one.value + '|' + 'Интернет-магазин «Орбита-Строй»';

	// const title =
	// 	"База стройматериалов 'Орбита-Строй' || " +
	// 	data.catalog.catalog_one.value +
	// 	' в  Нижнем Новгороде';
	const description =
		'Магазин стройматериалов «Орбита-Строй» предлагает купить ' +
		data.catalog.catalog_one.value +
		' по выгодной цене в Нижнем Новгороде оптом и в розницу, товары всегда в наличии. Осуществляем доставку по городу и области.';

	// const description =
	// 	data.catalog.catalog_one.value +
	// 	' по низким ценам в Нижнем Новгороде и области. Предлагаем отличные цены для товара ' +
	// 	data.catalog.catalog_one.value +
	// 	'.';

	// pageH1.update(() => data.catalog.catalog_one.value);

	return { title, description, catalog };
}
