import { writable } from 'svelte/store';

export const sessionUser = writable('');
export const visibleMobileMenu = writable(false);
export const visibleInformationMenu = writable(false);
export const visibleCatalog = writable(false);
export const visibleSearch = writable(false);
export const banner = writable(true);

export const visibleDescription = writable(true);
export const visiblePayment = writable(false);
export const visibleDelivery = writable(false);

export const allProducts = writable([]);
export const lengthCart = writable(0);
export const idProductsInCart = writable([]);
export const prodInCart = writable([]);
export const quantity = writable(1);

export const slideOne = writable(false);
export const slideTwo = writable(true);
export const slideThree = writable(false);
export const slideFour = writable(false);

export const pageH1 = writable('Интернет магазин стройматериалов "Орбита-Строй"');
