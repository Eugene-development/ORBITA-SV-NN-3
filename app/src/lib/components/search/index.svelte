<script>
	import axios from 'axios';

	import { visibleSearch, allProducts } from '$lib/store/stores.js';
	import { useInvert } from '$lib/functions/invert';
	const { invert } = useInvert;

	import { fade } from 'svelte/transition';
	// import { formSearch, allProd } from '$stores/store.js';

	// const changeVisibleFormSearch = () => formSearch.update(invert); //Сеттер
	// let visibleFormSearch;
	// formSearch.subscribe((value) => (visibleFormSearch = value)); //Геттер

	// import { elasticOut } from 'svelte/easing';
	//
	// export let visible;
	//
	// function whoosh(node, params) {
	//     const existingTransform = getComputedStyle(node).transform.replace('none', '');
	//
	//     return {
	//         delay: params.delay || 0,
	//         duration: params.duration || 400,
	//         easing: params.easing || elasticOut,
	//         css: (t, u) => `transform: ${existingTransform} scale(${t})`
	//     };
	// }

	let value = '';
	let result = [];
	$: if (value.length >= 3) {
		// let products;
		// allProducts.subscribe((value) => (products = value));

		const search = (query) =>
			$allProducts.product.filter(({ value }) => value.toLowerCase().includes(query));
		// const search = (query) => products.product.filter(({ value }) => value.toLowerCase().includes(query));
		const query = value.toLowerCase();
		result = search(query);
	}

	import { browser } from '$app/environment';
	import { lengthCart, idProductsInCart } from '$lib/store/stores.js';

	let InCart;
	idProductsInCart.subscribe((value) => (InCart = value));

	const sendToCart = async (id) => {
		if (browser && localStorage.getItem('inCart') === null) {
			browser && localStorage.setItem('inCart', JSON.stringify([id]));
		} else {
			const itemsCart = JSON.parse(localStorage.getItem('inCart'));
			const newItemsCart = [...itemsCart, id];
			localStorage.setItem('inCart', JSON.stringify(newItemsCart));
		}

		const productsInCart = JSON.parse(localStorage.getItem('inCart'));
		lengthCart.update(() => productsInCart.length);
		idProductsInCart.update(() => productsInCart);
	};
</script>

{#if $visibleSearch}
	<div
		in:fade={{ duration: 300 }}
		out:fade
		class="fixed inset-0 z-40 overflow-y-auto p-4 sm:p-6 md:p-20"
		role="dialog"
		aria-modal="true"
	>
		<!--
          Background overlay, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
        -->

		<div class="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" aria-hidden="true" />

		<!--
          Command palette, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
		<div
			class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
		>
			<div class="absolute right-0 z-50 h-7 p-4">
				<button
					on:click={() => visibleSearch.update(invert)}
					type="button"
					class=" text-gray-400 hover:text-gray-500"
				>
					<span class="sr-only">Close panel</span>
					<!-- Heroicon name: outline/x -->
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<div class="relative bg-gray-700">
				<!-- Heroicon name: solid/search -->
				<svg
					class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-50"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd"
					/>
				</svg>
				<input
					bind:value
					type="text"
					class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-50 placeholder-gray-50 focus:ring-0 sm:text-sm "
					placeholder="Введите наименование..."
					role="combobox"
					aria-expanded="false"
					aria-controls="options"
				/>
			</div>

			<!-- Results, show/hide based on command palette state -->
			<ul class="max-h-96 scroll-py-3 overflow-y-auto p-3" id="options" role="listbox">
				<!-- Active: "bg-gray-100" -->

				{#each result as { id, value, slug, price, unit }, i}
					<div class="m-2">
						<li
							class="group flex cursor-default select-none rounded-xl p-2 hover:bg-slate-50"
							id="option-1"
							tabindex="-1"
						>
							<span>
								{i + 1}.
								<!-- <svg
								class="h-4 w-4 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
								/>
							</svg> -->
							</span>
							<a
								href="/shop/product/{slug}"
								sveltekit:prefetch
								sveltekit:noscroll
								on:click={() => visibleSearch.update(invert)}
								class="ml-4 mt-0.5 flex-auto "
							>
								<!-- Active: "text-gray-900", Not Active: "text-gray-700" -->
								<p class="text-sm font-medium lowercase  text-gray-700 first-letter:uppercase">
									{value} - {price?.value} руб/{unit?.value}
								</p>
								<!-- Active: "text-gray-700", Not Active: "text-gray-500" -->
								<p class="text-sm text-gray-500" />
							</a>
						</li>
						{#if browser && !InCart.some((arrVal) => id === arrVal)}
							<button
								on:click|preventDefault|once={sendToCart(id)}
								type="button"
								class="ml-10 rounded-md text-sm text-gray-100 bg-cyan-600 hover:bg-cyan-700 px-3 py-0.5"
								>В корзину</button
							>
						{:else}
							<button class="ml-10 rounded-md text-sm text-gray-100 bg-cyan-800 px-3 py-0.5"
								>В корзине</button
							>
						{/if}
					</div>
				{:else}
					<div class="py-14 mr-6 text-center text-sm sm:px-14 ">
						<svg
							class="mx-auto h-6 w-6 text-gray-400"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<p class="mt-4 font-semibold text-gray-900">Здесь пока пусто</p>
						<p class="mt-2 text-gray-500">Введите наименование товара</p>
					</div>
				{/each}
			</ul>
		</div>
	</div>
{/if}
