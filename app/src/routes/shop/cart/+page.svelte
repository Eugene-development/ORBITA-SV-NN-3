<script>
	/** @type {import('./$types').PageData} */
	import { reject, without, pullAllBy, forEach, find, filter } from 'lodash';
	import axios from 'axios';
	import { lengthCart, idProductsInCart, prodInCart, allProducts } from '$lib/store/stores.js';

	$: total = $prodInCart.reduce((sum, product) => {
		let price = product.price?.value;
		return sum + price * product.quantity;
	}, 0);
	$: totalSum = (total - total * 0.05).toFixed(2);
	$: first_name = '';
	$: phone = '';
	$: address = '';
	$: comments = '';

	let paymentCart = false;

	$: arrayCart = [];
	const deleteProductFromCart = async (id) => {
		arrayCart = reject($prodInCart, (item) => item.id === id);
		prodInCart.update(() => arrayCart);

		const itemsCart = JSON.parse(localStorage.getItem('inCart'));
		const newItemsCart = without(itemsCart, id);
		localStorage.setItem('inCart', JSON.stringify(newItemsCart));

		lengthCart.update(() => arrayCart.length);

		const productsInCart = JSON.parse(localStorage.getItem('inCart'));
		idProductsInCart.update(() => productsInCart);
	};

	const sendMail = () => {
		const informationForm = {
			name: first_name,
			phone,
			address,
			comments
		};
		const data = {
			products: $prodInCart,
			totalSum: totalSum,
			information: informationForm
		};
		const apiMail = {
			baseURL: `${import.meta.env.VITE_API_MAIL}`,
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
				// 'access-control-allow-origin': "*",
				// 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
				// 'Access-Control-Allow-Methods': '*',
			}
		};
		axios.post('/sendOrder', data, apiMail);
	};
	const payYouKassa = async () => {
		if (paymentCart === true) {
			const apiCart = {
				baseURL: `${import.meta.env.VITE_API_CART}`,
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
				}
			};
			const response = await axios.get('/yandex/' + totalSum, apiCart);
			window.location =
				'https://yoomoney.ru/api-pages/v2/payment-confirm/epl?orderId=' + response.data.id;
		}
	};
	const cleanData = () => {
		localStorage.removeItem('inCart');
		lengthCart.update(() => 0);
		prodInCart.update(() => []);
		idProductsInCart.update(() => []);
		allProducts.update(() => []);
	};

	const sendOrder = () => {
		sendMail();
		payYouKassa();
		cleanData();
	};

	import { browser } from '$app/environment';

	export let data;
	// console.log(data);

	const idProducts = browser && JSON.parse(localStorage.getItem('inCart'));
	let productsInCart = [];
	forEach(idProducts, function (product) {
		productsInCart = [...productsInCart, find(data.ccc.product, ['id', product])];
	});
	forEach(productsInCart, function (item) {
		item.quantity = 1;
	});
	prodInCart.update(() => productsInCart);
</script>

<svelte:head>
	<title>"Орбита-строй" | Корзина</title>
	<meta
		content="Корзина интернет-магазина стройматериалов компании 'Орбита строй'"
		name="description"
	/>
</svelte:head>

<div class="">
	<!--  <div class="p-10 mx-auto sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50 via-white to-slate-50 shadow-md shadow-slate-200/50 mb-4">-->
	<!--    <div class="flex flex-col text-center w-full">-->
	<!--      <h1 class=" text-5xl font-medium title-font text-slate-900 lowercase first-letter:uppercase">Корзина</h1>-->
	<!--    </div>-->
	<!--  </div>-->

	{#if $lengthCart > 0}
		<div class="px-4 sm:px-6 lg:px-8">
			<div class="sm:flex sm:items-center">
				<div class="sm:flex-auto">
					<h1 class="text-xl font-semibold text-gray-900">Ваша корзина</h1>
					<p class="mt-2 text-sm text-gray-700">После отправки заказа с вами свяжется менеджер</p>
				</div>
				<!--      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">-->
				<!--        <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Add user</button>-->
				<!--      </div>-->
			</div>
			<div
				class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg"
			>
				<table class="min-w-full divide-y divide-gray-300 bg-gray-50">
					<thead class="">
						<tr>
							<th
								scope="col"
								class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
								>Наименование:</th
							>
							<th
								scope="col"
								class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
								>Цена:</th
							>
							<th
								scope="col"
								class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
								>Количество:</th
							>
							<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>Итого:</th
							>
							<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
								<span class="sr-only">Удалить</span>
							</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-200">
						<!-- {#each productsInCart as { id, value, price, unit, img, quantity }, idx} -->
						{#each $prodInCart as { id, value, price, unit, img, quantity }, idx}
							<tr>
								<td
									class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900  sm:w-auto sm:max-w-none sm:pl-6"
								>
									{idx + 1}. <span class="ml-1 first-letter:uppercase">{value}</span>
									<dl class="font-normal lg:hidden">
										<dt class="sr-only">Цена</dt>
										<dd class="mt-1 truncate">
											<span
												class="inline-flex rounded-md bg-indigo-100 px-2 text-xs font-semibold leading-5 text-indigo-900"
											>
												Цена: {price?.value} руб/{unit?.value}
											</span>
										</dd>
										<dt class="sr-only sm:hidden">Количество</dt>
										<dd class="mt-2 mr-20 truncate text-gray-500 sm:hidden">
											<input
												type="text"
												class="block w-full rounded-md border-indigo-300 pr-8 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm"
												bind:value={quantity}
											/>
										</dd>
									</dl>
								</td>
								<td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell ">
									<span
										class="inline-flex rounded-md bg-indigo-100 px-3 py-1 text-sm font-semibold leading-5 text-indigo-900"
									>
										{price?.value} руб/{unit?.value}
									</span>
								</td>
								<td class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
									<input
										type="text"
										class="-mr-48 block w-full rounded-md border-indigo-300 pr-16 focus:border-indigo-500 focus:ring-indigo-600 sm:text-sm"
										bind:value={quantity}
									/>
								</td>
								<td class="px-3 py-4 text-sm text-gray-500"
									>{(price?.value * quantity).toFixed(2)}</td
								>
								<td class="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
									<button
										on:click={deleteProductFromCart(id)}
										class="inline-flex items-center rounded-full border border-transparent bg-red-800 p-1.5 text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
										type="button"
									>
										<svg
											class="h-4 w-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M6 18L18 6M6 6l12 12"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
											/>
										</svg>
									</button>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	{:else}
		<div class="m-8">
			<!-- This example requires Tailwind CSS v2.0+ -->
			<div class="rounded-md bg-blue-50 p-4">
				<div class="flex ">
					<div class="flex-shrink-0">
						<!-- Heroicon name: solid/information-circle -->
						<svg
							aria-hidden="true"
							class="h-5 w-5 text-blue-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								clip-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								fill-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="ml-3 flex-1 md:flex md:justify-between">
						<p class="text-sm text-indigo-700">Корзина пуста. Ждём вас снова за покупками.</p>
						<!--            <p class="mt-3 text-sm md:mt-0 md:ml-6">-->
						<!--              <a href="#" class="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">Назад <span aria-hidden="true">&rarr;</span></a>-->
						<!--            </p>-->
					</div>
				</div>
			</div>
		</div>
	{/if}

	{#if $lengthCart > 0}
		<div class="m-8 text-right">
			<span
				class="inline-flex  rounded-md bg-indigo-100 px-3.5 py-1 text-xs font-medium text-indigo-800 sm:text-base"
				>ИТОГО (с учётом скидки 5%): {totalSum} руб.</span
			>
		</div>

		<form
			class="m-8 space-y-6 rounded-md border-2 border-slate-100 bg-gray-50"
			on:submit|preventDefault={sendOrder}
		>
			<div class="px-4 py-5 shadow sm:rounded-lg sm:p-6">
				<div class="md:grid md:grid-cols-3 md:gap-6">
					<div class="md:col-span-1">
						<h3 class="text-lg font-medium leading-6 text-gray-900">Дополнительная информация</h3>
						<p class="mt-1 text-sm text-gray-500">Укажите ваши данные.</p>
					</div>
					<div class="mt-5 md:col-span-2 md:mt-0">
						<div class="mb-8 grid grid-cols-6 gap-6">
							<div class="col-span-6 ">
								<label class="block text-sm font-medium text-gray-700" for="first_name"
									>Ваше имя:</label
								>
								<input
									type="text"
									required
									id="first_name"
									class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-800 sm:text-sm"
									name="first_name"
									bind:value={first_name}
								/>
							</div>
							<div class="col-span-6">
								<label class="block text-sm font-medium text-gray-700" for="phone">Телефон:</label>
								<input
									type="text"
									required
									id="phone"
									class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-800 sm:text-sm"
									name="phone"
									bind:value={phone}
								/>
								<div class="col-span-6 mt-6">
									<label class="block text-sm font-medium text-gray-700" for="street_address"
										>Адрес доставки:</label
									>
									<input
										type="text"
										id="street_address"
										class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-800 sm:text-sm"
										name="street_address"
										bind:value={address}
									/>
								</div>
								<div class="col-span-6 mt-6">
									<label class="block text-sm font-medium text-gray-700" for="comments"
										>Комментарий:</label
									>
									<input
										type="text"
										id="comments"
										class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-800 sm:text-sm"
										name="comments"
										bind:value={comments}
									/>
								</div>
							</div>
						</div>

						<label>
							<span class="text-red-700">Оплатить картой: </span>
							<input class="text-red-800" type="checkbox" bind:checked={paymentCart} />
						</label>

						{#if paymentCart}
							<p class="mt-2">После отправки заказа вы будете направлены на страницу оплаты.</p>
						{/if}
					</div>
				</div>

				<div class="mt-8 flex justify-end">
					<!--{#if (visibleSendOrder)}-->
					<button
						type="submit"
						class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-red-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2"
						>Отправить менеджеру</button
					>
					<!--          <span on:click={ sendOrderViaYandex } class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800">Отправить менеджеру и оплатить картой</span>-->

					<!--  {:else }-->
					<!--<button-->
					<!--  class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800"-->
					<!--  type="button">-->
					<!--  Ожидайте подтверждения менеджера-->
					<!--</button>-->
					<!--  {/if}-->
				</div>
			</div>
		</form>
	{/if}
</div>
