<script>
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

	export let actions;
</script>

<div class="bg-white">
	<div class="mx-auto max-w-2xl mt-4 py-8 px-4 sm:py-12 sm:px-6 lg:max-w-full lg:px-8">
		<div class="p-8">
			<ul class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
				{#each actions as { id, action, price, description, unit, link, img }}
					<li
						class="transition ease-in-out hover:scale-105 col-span-1 flex flex-col divide-y divide-slate-200 rounded-lg border-2 border-slate-100 bg-white text-center shadow-lg shadow-slate-500/50 ring-1 ring-slate-100 ring-offset-1"
					>
						<a href={link}>
							<div class="flex flex-1 flex-col p-8">
								{#if img}
									<img
										src={img}
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
								<p
									class="mt-6 mb-2 h-10 text-sm font-medium lowercase text-slate-900 first-letter:uppercase whitespace-normal"
								>
									{action}
								</p>
								<dl class="mt-1 flex flex-grow flex-col justify-between">
									<dt class="sr-only">Title</dt>
									<dt class="sr-only">Product</dt>
									<dd class="mt-4">
										{#if price}
											<span
												class="rounded-full bg-indigo-900 px-3  py-1.5 text-base font-medium text-slate-100"
												>{price} руб.</span
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
										href={link}
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

		<!-- <div class="mt-6 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
			{#each actions as { id, action, price, description, link, img }}
				<div
					class="group rounded-md relative shadow-lg shadow-slate-400/50 p-3 transition ease-in-out hover:scale-105"
				>
					<div
						class="h-56 p-8 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md  group-hover:opacity-75 lg:aspect-none"
					>
						<img src={img} alt="" class=" my-2  object-contain " />
					</div>
					<div class="mt-4 h-16 flex justify-between">
						<div>
							<h3 class="pl-2 text-sm text-gray-700">
								<span aria-hidden="true" class="inset-0" />
								{action}
							</h3>
						</div>
						<p class="mx-1 text-sm font-medium text-gray-900">{price}р.</p>
					</div>
					{#if browser && !InCart.some((arrVal) => id === arrVal)}
						<button
							on:click|preventDefault|once={sendToCart(id)}
							type="button"
							class="m-2 px-3 py-1 align-bottom rounded-md text-base text-gray-100 bg-indigo-600 hover:bg-indigo-700"
							>В корзину</button
						>
					{:else}
						<button
							class="m-2 px-3 py-1 align-bottom rounded-md text-base text-gray-100 bg-indigo-800 hover:bg-indigo-700"
							>В корзине</button
						>
					{/if}
				</div>
			{/each}
		</div> -->
	</div>
</div>
