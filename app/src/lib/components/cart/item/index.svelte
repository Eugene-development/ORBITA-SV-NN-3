<script>
	import { reject, without } from 'lodash';
	import { lengthCart, idProductsInCart, prodInCart, allProducts } from '$lib/store/stores.js';
	$: quantity = 1;
	$: total = $prodInCart.reduce((sum, product) => {
		let price = product.price?.value;
		return sum + price * quantity;
	}, 0);

	const deleteProductFromCart = async (id) => {
		arrayCart = reject($prodInCart, (item) => item.id === id);
		prodInCart.update(() => arrayCart);

		const itemsCart = JSON.parse(localStorage.getItem('inCart'));
		const newItemsCart = without(itemsCart, id);
		localStorage.setItem('inCart', JSON.stringify(newItemsCart));

		lengthCart.update(() => arrayCart.length);
	};

	export let id;
	export let value;
	export let price;
	export let unit;
	// export let img
	export let idx;
</script>

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
	<td class="px-3 py-4 text-sm text-gray-500">{(price?.value * quantity).toFixed(2)}</td>
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
