<script>
	import Information from './information/index.svelte';
	import { useInvert } from '$lib/functions/broker';
	import { visibleMobileMenu, lengthCart } from '$lib/store/stores.js';
	const { invert } = useInvert;

	export let informationMenu;
</script>

<div class="px-4 relative -mx-1 bg-white">
	<div aria-hidden="true" class="pointer-events-none absolute inset-0 z-30 shadow" />
	<div class="relative z-20">
		<div
			class="mx-auto flex max-w-full items-center justify-between px-2 py-4 sm:px-6 sm:py-3 md:space-x-8 lg:px-10"
		>
			<div>
				<a class="flex" href="/">
					<span class="sr-only">Logo</span>
					<img
						alt="Logo"
						class="h-8 w-auto sm:h-8"
						src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/logo/logo.png"
					/>
				</a>
			</div>

			<!-- Mobile -->
			<div class="flex items-center md:ml-12 lg:hidden">
				<a
					class="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-3 py-1 text-base font-medium text-white shadow-lg shadow-gray-700/50 hover:bg-gray-800"
					href="/shop/cart"
					sveltekit:noscroll
				>
					<svg
						class="mr-1 h-5 w-5"
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
					Корзина (
					<div class="mx-none sm:mx-1 text-red-500">{$lengthCart}</div>
					)
				</a>
			</div>

			<div class="-my-2 -mr-2 lg:hidden">
				<button
					aria-expanded="false"
					class="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
					on:click={() => visibleMobileMenu.update(invert)}
					type="button"
				>
					<span class="sr-only">Открыть меню</span>
					<span class="mx-2">Меню</span>
					<svg
						aria-hidden="true"
						class="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4 6h16M4 12h16M4 18h16"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						/>
					</svg>
				</button>
			</div>

			<!-- PC -->
			<div class="hidden sm:items-center sm:justify-between lg:flex lg:flex-1">
				<nav class="flex space-x-8 font-semibold">
					<a class="text-base text-indigo-900 hover:text-red-800 " href="/">Главная</a>
					<a class="text-base text-indigo-900 hover:text-red-800" href="/about">Компания</a>
					<Information {informationMenu}/>
					<a class="text-base text-indigo-900 hover:text-red-800" href="/blog"> Блог </a>
					<a class="text-base text-indigo-900 hover:text-red-800" href="/information/action">Акции</a>
					<a class="text-base text-indigo-900 hover:text-red-800" href="/contact"> Контакты </a>
					<!-- svelte-ignore security-anchor-rel-noreferrer -->
					<a
						class="text-base text-indigo-900 hover:text-red-800"
						href="https://vk.com/orbita_stroy"
						target="_blank"
					>
						VK
					</a>
				</nav>
				<div class="flex items-center md:ml-12">
					<a
						class="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-900 px-4 py-1 text-base font-medium text-white shadow-lg shadow-gray-900/50 hover:bg-gray-800"
						href="/shop/cart"
					>
						<svg
							class="mr-1 h-5 w-5"
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
						Корзина (
						<div class="mx-1 text-red-500">{$lengthCart}</div>
						)
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
