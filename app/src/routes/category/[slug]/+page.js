/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';

export async function load({ data }) {
	const { rubric } = data;
	const title = data.rubric.rubric_one.value + '|' + 'Интернет-магазин «Орбита-Строй»';
	// const title =
	// 	data.rubric.rubric_one.value +
	// 	' от базы Орбита-Строй' +
	// 	' | ' +
	// 	data.rubric.rubric_one.value +
	// 	' в Нижнем Новгороде со склада.';
	const description =
		'Магазин стройматериалов «Орбита-Строй» предлагает купить ' +
		data.rubric.rubric_one.value +
		' по выгодной цене в Нижнем Новгороде оптом и в розницу, товары всегда в наличии. Осуществляем доставку по городу и области.';

	// const description =
	// 	data.rubric.rubric_one.value +
	// 	' в Нижнем Новгороде и области. ' +
	// 	'Постоянные акции. ' +
	// 	data.rubric.rubric_one.value +
	// 	' по низким ценам со скидками. Есть доставка.';
	// pageH1.update(() => data.rubric.rubric_one.value);

	return { title, description, rubric };
}
