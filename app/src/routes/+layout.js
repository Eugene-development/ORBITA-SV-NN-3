/** @type {import('./$types').LayoutLoad} */
import { contentCatalog } from '$lib/data/catalog/index';
import { contentInformationMenu } from '$lib/data/informationMenu/index';

// Устанавливаем сессию юзера, если её нет для корзины и записываем в стор //
import { sessionUser, lengthCart, idProductsInCart } from '$lib/store/stores.js';
import { browser } from '$app/environment';
browser &&
	localStorage.getItem('session_user') === null &&
	localStorage.setItem('session_user', crypto.randomUUID());
browser && sessionUser.update(() => localStorage.getItem('session_user'));
// --- //

// Фиксируем и считаем количество элементов в корзине при перезагрузке страницы и записываем в стор //
const productsInCart = browser && JSON.parse(localStorage.getItem('inCart'));
if (productsInCart !== null) {
	idProductsInCart.update(() => productsInCart);
	lengthCart.update(() => productsInCart.length);
}
// --- //

export async function load() {
	return { contentCatalog, contentInformationMenu };
}
