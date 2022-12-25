<script>
	/** @type {import('./$types').PageData} */
	import axios from 'axios';
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

		// const url = `/store-cart`;
		// const payloadCart = {
		// 	product_id: id,
		// 	sessionUser: localStorage.getItem('session_user')
		// };
		// const domain = import.meta.env.VITE_API_CART;
		// const apiCart = {
		// 	baseURL: `${domain}`,
		// 	headers: {
		// 		Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
		// 	}
		// };
		// await axios.post(url, payloadCart, apiCart);
	};

	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
</svelte:head>

<div class="py-8">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl space-y-2 lg:max-w-none">
			<span class="text-lg font-semibold uppercase leading-6 tracking-wider text-indigo-700">
				Категория
			</span>

			<h1 class="text-3xl font-bold text-slate-800 sm:text-4xl lg:text-5xl">
				{data.category.category_one.value}
			</h1>
			<p class="text-xl text-slate-800">
				Приобретайте товар "{data.category.category_one.value}" в Нижнем Новгороде по низким ценам с
				доставкой или самовывозом
			</p>
		</div>
	</div>
</div>

<div class="bg-gradient-to-b from-white  to-slate-50">
	<div class="p-8">
		<ul class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
			{#each data.category.category_one?.product as { id, value, slug, price, unit, image }}
				<li
					class="col-span-1 flex flex-col divide-y divide-slate-200 rounded-lg border-2 border-slate-100 bg-white text-center shadow-lg shadow-slate-500/50 ring-1 ring-slate-100 ring-offset-1"
				>
					<a data-sveltekit-prefetch href="/product/{slug}">
						<div class="flex flex-1 flex-col p-8">
							{#if image}
								<img
									src="{data.pathAWS}{image.hash}"
									alt="product"
									class="mx-auto h-32 w-32 flex-shrink-0 object-contain"
								/>
							{:else}
								<img
									src="https://img2.freepng.ru/20181125/wbe/kisspng-apartment-renting-london-residential-house-product-5bfa6d06347989.212131131543138566215.jpg"
									alt="product"
									class="mx-auto h-32 w-32 flex-shrink-0 object-contain"
								/>
							{/if}
							<h3
								class="mt-6 h-10 text-sm font-medium lowercase text-slate-900 first-letter:uppercase whitespace-normal"
							>
								{value}-{id}
							</h3>
							<dl class="mt-1 flex flex-grow flex-col justify-between">
								<dt class="sr-only">Title</dt>
								<dt class="sr-only">Product</dt>
								<dd class="mt-4">
									{#if price}
										<span
											class="rounded-full bg-indigo-900 px-3 py-1.5 text-base font-medium text-slate-100"
											>{price?.value}
											р/{unit?.value}</span
										>
									{:else}
										<span
											class="rounded-full bg-indigo-900 px-3 py-1.5 text-base font-medium text-slate-100"
											>Цена не указана</span
										>
									{/if}
								</dd>
							</dl>
						</div>
					</a>
					<div>
						<div class="-mt-px flex divide-x divide-slate-200">
							<div class="flex w-0 flex-1">
								{#if browser && InCart.some((arrVal) => id === arrVal)}
									<div
										class="relative inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent bg-indigo-900 py-2 text-sm font-medium text-slate-50 hover:text-slate-100 focus:outline-none"
									>
										<svg
											class="h-6 w-6 text-gray-50"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
											/>
										</svg>
										<span class="ml-3">В корзине</span>
									</div>
								{:else if price}
									<button
										on:click|preventDefault|once={sendToCart(id)}
										class="relative inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-2 text-sm font-medium text-slate-700 hover:text-slate-500"
									>
										<svg
											class="h-6 w-6 text-red-800"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
											/>
										</svg>
										<span class="ml-3">В корзину</span>
									</button>
								{/if}
							</div>

							<div class="-ml-px flex w-0 flex-1">
								<!--                        <div v-if="productsInCart.some(arrVal => productID.id === arrVal)" class="-ml-px w-0 flex-1 flex">-->
								<!--                <div class="relative mx-8 flex-1 inline-flex items-center justify-center text-sm text-slate-700 font-medium border  border-transparent rounded-bl-lg hover:text-slate-500">-->
								<!--                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
								<!--                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />-->
								<!--                  </svg>-->

								<!--                    <div class="mt-1 mx-4">-->
								<!--                      <input type="email" name="email" id="email" class="h-6 shadow-sm focus:ring-slate-500 focus:border-slate-500 block w-full sm:text-sm border-slate-300 rounded-md text-center" placeholder="1">-->
								<!--                    </div>-->

								<!--                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" >-->
								<!--                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />-->
								<!--                  </svg>-->
								<!--                </div>-->
								<a
									data-sveltekit-prefetch
									href="/product/{slug}"
									class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-2 text-sm  font-medium text-slate-700 hover:text-slate-500"
								>
									<svg
										class="h-6 w-6 text-red-800"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
										/>
										<path
											d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
										/>
									</svg>
									<span class="ml-3">Подробнее</span>
								</a>
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>





			<div class="relative mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:mt-8 lg:px-8">
			<div class="mx-auto max-w-md lg:max-w-7xl">
				<div class="rounded-lg bg-slate-50 px-6 py-8 sm:p-10 lg:flex lg:items-center">
					<!--            <div v-for="(text, idx) of head.text" :key="text.id" class="rounded-lg bg-slate-50 px-6 py-8 sm:p-10 lg:flex lg:items-center">-->
					<div class="flex-1">
						<div>
							<h2
								class="inline-flex rounded-full bg-white px-4 py-1 text-2xl font-semibold tracking-wide text-slate-800"
							>
								 {data.category.category_one.value}. Цены, ассортимент и дополнительные услуги.
							</h2>
						</div>
						<div class="mt-8 text-lg text-slate-600">{@html data.category.category_one.text[0]?.value}</div>
					</div>
				</div>
				<div class="mt-6 rounded-md shadow lg:flex-shrink-0">
					<a
						href="/information/action"
						class="flex items-center justify-center rounded-md border border-transparent bg-slate-50 px-5 py-3 text-base font-medium text-slate-900 hover:bg-slate-100"
					>
						{data.category.category_one.value} по низким ценам с доставкой в Нижнем Новгороде. Звоните!
					</a>
				</div>
			</div>
		</div>

</div>
