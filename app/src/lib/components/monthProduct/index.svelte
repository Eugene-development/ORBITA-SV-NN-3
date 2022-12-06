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
</script>

<div class="my-12 text-center text-base">
	<div>
		<h2 class="text-base font-semibold uppercase tracking-wide text-indigo-600">акция</h2>
		<h3 class="mt-2 text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl">
			Товар месяца
		</h3>
	</div>
</div>

<div class="relative overflow-hidden bg-white">
	<div class=" mx-auto max-w-full">
		<div
			class="pl-24 relative z-10 bg-slate-100 pb-8 sm:pb-12 md:pb-16 lg:w-full lg:max-w-4xl lg:pb-20 xl:pb-24"
		>
			<svg
				class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
				fill="currentColor"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<polygon points="50,0 100,0 50,100 0,100" />
			</svg>

			<div>
				<div class="relative px-4 pt-6 sm:px-6 lg:px-8" />
			</div>

			<main
				class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
			>
				<div class="sm:text-center lg:text-left">
					<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
						<span class="block xl:inline">Штукатурка</span> <br />
						<span class="block text-indigo-600 xl:inline">KNAUF ROTBAND</span>
					</h1>
					<p
						class="mt-3 text-base text-gray-700 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
					>
						440 рублей за упаковку 30 кг.
					</p>
					<p
						class="mt-3 text-base text-gray-700 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
					>
						Цвет штукатурки - белый.
					</p>
					<p
						class="mt-3 text-base text-gray-700 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
					>
						Уточняйте количество на складе.
					</p>
					<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
						{#if browser && !InCart.some((arrVal) => '436' === arrVal)}
							<div class="rounded-md shadow">
								<button
									on:click|preventDefault|once={() => sendToCart('436')}
									type="button"
									class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
									>В корзину</button
								>
							</div>
						{:else}
							<div class="rounded-md shadow">
								<div
									class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-800 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
								>
									В корзине
								</div>
							</div>
						{/if}
						<div class="mt-3 sm:mt-0 sm:ml-3">
							<a
								href="/shop/product/stukaturnaya-smes-knauf-rotband-belaya-30-kg"
								class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
								>Подробнее</a
							>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
	<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/3">
		<img
			class="py-24 h-56 w-full object-cover sm:h-56 md:h-72 lg:h-full lg:w-full hidden md:block"
			src="https://www.astmnsk.ru/image/cache/data/band2-600x315.jpg"
			alt=""
		/>
		<!-- <img
			class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
			src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
			alt=""
		/> -->
	</div>
</div>
