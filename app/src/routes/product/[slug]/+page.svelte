<script>
	/** @type {import('./$types').PageData} */
	import axios from 'axios';
	import { browser } from '$app/environment';
	import {
		lengthCart,
		idProductsInCart,
		visibleDescription,
		visiblePayment,
		visibleDelivery
	} from '$lib/store/stores.js';

	const changeVisibleDescriptionInfo = () => {
		visibleDescription.update(() => true);
		visiblePayment.update(() => false);
		visibleDelivery.update(() => false);
	};
	const changeVisiblePaymentInfo = () => {
		visibleDescription.update(() => false);
		visiblePayment.update(() => true);
		visibleDelivery.update(() => false);
	};
	const changeVisibleDeliveryInfo = () => {
		visibleDescription.update(() => false);
		visiblePayment.update(() => false);
		visibleDelivery.update(() => true);
	};

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

		const url = `/store-cart`;
		const payloadCart = {
			product_id: id,
			sessionUser: localStorage.getItem('session_user')
		};
		const domain = import.meta.env.VITE_API_CART;
		const apiCart = {
			baseURL: `${domain}`,
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
			}
		};
		await axios.post(url, payloadCart, apiCart);
	};

	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
</svelte:head>

<div>
	<div class="px-4">
		<!--        <div id="start" class="p-10 mx-auto sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50 via-white to-slate-50 shadow-md shadow-slate-200/50 mb-4">-->
		<!--            <div class="flex flex-col text-center w-full">-->
		<!--                <h1 class=" text-4xl font-medium title-font text-slate-900 lowercase first-letter:uppercase">{ nameProduct }</h1>-->
		<!--            </div>-->
		<!--        </div>-->

		<section class="body-font overflow-hidden text-slate-600">
			<div class="container mx-auto py-12">
				<div class="mx-auto flex flex-wrap">
					<div class="mb-6 w-full lg:mb-0 lg:w-1/2 lg:py-6 lg:pr-12">
						<p class="title-font text-base tracking-widest text-red-500">НАИМЕНОВАНИЕ</p>
						<h2
							class="title-font my-4 text-xl font-medium lowercase text-slate-900 first-letter:uppercase"
						>
							{data.product.product_one.value}
							<!-- {data.product.product_one.value}-{data.product.product_one.id} -->
						</h2>
						<div class="mb-4 flex">
							<button
								on:click={changeVisibleDescriptionInfo}
								class="flex-grow border-slate-300  py-2 px-1 text-lg focus:outline-none {$visibleDescription
									? 'border-b-2 font-bold'
									: 'font-normal'}">Описание</button
							>
							<button
								on:click={changeVisiblePaymentInfo}
								class="flex-grow border-slate-300 py-2 px-1 text-lg focus:outline-none {$visiblePayment
									? 'border-b-2 font-bold'
									: 'font-normal '}">Оплата</button
							>
							<button
								on:click={changeVisibleDeliveryInfo}
								class="flex-grow border-slate-300 py-2 px-1 text-lg focus:outline-none {$visibleDelivery
									? 'border-b-2 font-bold'
									: 'font-normal '}">Доставка</button
							>
						</div>

						{#if $visibleDescription}
							<!-- TODO: переделать -->
							{#if data.product.product_one.text}
								<p class="mb-4 leading-relaxed ">{@html data.product.product_one.text.value}</p>
							{:else}
								<p class="mb-4 leading-relaxed ">Описание товара отсутствует</p>
							{/if}
						{:else if $visiblePayment}
							<p class="mb-4 leading-relaxed">
								Мы предлагаем следующие варианты оплаты: <br />
								* Оплата наличными курьеру при получении товара;<br />
								* Оплата картой через терминал или наличными в нашем офисе;<br />
								* Банковский перевод (для юридических лиц). Мы отправим счет с вашими платежными реквизитами
								на указанный вами адрес электронной почты. Доставка (или самовывоз) товара будет организована
								после того, как мы получим платеж на счет.
							</p>
						{:else if $visibleDelivery}
							<p class="mb-4 leading-relaxed">
								Доставка компании «Орбита-Строй» осуществляется следующими способами:<br />
								* Самовывоз (с базы в г. Дзержинск);<br />
								* Доставка по Нижнему Новгороду и области от 1 200 рублей (подробности уточняйте у менеджеров);<br
								/>
								* Доставка бесплатная, при заказе товаров более, чем на 15 000 рублей.<br />
								Доставка осуществляется по графику (пн - сб);<br />
								Наша компания предлагает услуги разгрузки и подъема на этаж (оплачивается отдельно).
							</p>
						{/if}

						<a data-sveltekit-prefetch href="/products/{data.product.product_one.parent.slug}">
							<div class="flex border-t border-slate-200 py-2">
								<span class="text-slate-500">Вернуться в категорию:</span>
								<span class="ml-auto text-base text-red-500 hover:text-red-600"
									>{data.product.product_one.parent.value}</span
								>
							</div>
						</a>

						<div class="flex border-t border-slate-200 py-2">
							<span class="text-slate-500">Единица измерения:</span>
							<span class="ml-auto text-slate-900"
								>{data.product.product_one.unit?.value || 'Не указана'}</span
							>
						</div>
						<div class="mb-6 flex border-t border-b border-slate-200 py-2">
							<span class="text-slate-500">Наличие:</span>
							<span class="flex ml-auto text-slate-900"
								>В наличии
								<svg
									class="flex-shrink-0 w-5 h-5 ml-2 mt-1 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/></svg
								>
							</span>
						</div>
						<div class="flex">
							{#if data.product.product_one.price}
								<span
									class="title-font rounded-2xl bg-cyan-900 py-2 px-4 text-lg font-medium text-slate-100"
									>{data.product.product_one.price?.value} р/{data.product.product_one.unit
										?.value || ''}.</span
								>
							{:else}
								<span
									class="title-font rounded-2xl bg-cyan-900 py-2 px-4 text-lg font-medium text-slate-100"
									>Цена не указана</span
								>
							{/if}

							{#if browser && !$idProductsInCart.some((arrVal) => data.product.product_one.id === arrVal) && data.product.product_one.price}
								<button
									on:click|preventDefault|once={sendToCart(data.product.product_one.id)}
									type="button"
									class="ml-auto flex items-center justify-center rounded-md border border-transparent bg-slate-50 py-2 px-6 text-sm font-medium text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-50"
								>
									<svg
										class="h-5 w-5 text-red-500"
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
							{:else if !data.product.product_one.price}
								<span class="" />
							{:else}
								<div
									class="ml-auto flex items-center justify-center rounded-md border border-transparent bg-cyan-900 py-2 px-6 text-base font-medium text-slate-100 "
								>
									<svg
										class="h-5 w-5 text-red-400"
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
							{/if}
							<!--                            <button-->
							<!--                                    class="rounded-full w-10 h-10 bg-slate-100 p-0 border-0 inline-flex productsID-center justify-center text-slate-500 ml-4 hover:bg-red-900"-->
							<!--                                    wfd-id="156">-->
							<!--                                <svg class="w-5 h-5" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"-->
							<!--                                     stroke-width="2" viewBox="0 0 24 24">-->
							<!--                                    <path-->
							<!--                                            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>-->
							<!--                                </svg>-->
							<!--                            </button>-->
						</div>
					</div>

					{#if data.product.product_one.image?.hash}
						<img
							alt="ecommerce"
							class="max-w-xl rounded border-2 border-slate-50 object-contain object-center p-8 shadow-lg shadow-slate-500/50 ring-1 ring-slate-50 ring-offset-1 lg:w-1/2"
							src="{data.pathAWS}{data.product.product_one.image.hash}"
						/>
					{/if}
				</div>
			</div>
		</section>
	</div>
</div>
