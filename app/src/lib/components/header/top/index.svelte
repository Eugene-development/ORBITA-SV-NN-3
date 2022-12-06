<script>
	import { visibleSearch, allProducts } from '$lib/store/stores.js';
	import { useInvert } from '$lib/functions/invert';
	const { invert } = useInvert;

	import { request } from 'graphql-request';
	import { ALL_PRODUCTS } from '$lib/GQL/query/product';

	const getAllProducts = async () => {
		const url = import.meta.env.VITE_URL;
		const variables = {
			key: '1'
		};
		// TODO: переименуй category
		const category = await request(url, ALL_PRODUCTS, variables);
		allProducts.update(() => category);
	};
	const handleSearch = () => {
		if (!$allProducts.product) getAllProducts();
		visibleSearch.update(invert);
	};
</script>

<nav class="bg-indigo-800">
	<!-- PC  -->
	<div class="py-1 mx-auto hidden max-w-full px-6 sm:px-8 lg:block lg:px-8">
		<div class="relative flex h-12 items-center justify-between">
			<div class="flex items-center px-1 lg:px-0">
				<div class=" ">
					<div class="flex space-x-1">
						<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
						<!--                            <svg class="h-5 w-5 text-red-500" fill="none" stroke="currentColor"-->
						<!--                                 stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
						<!--                                <path d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"-->
						<!--                                      stroke-linecap="round"-->
						<!--                                      stroke-linejoin="round"/>-->
						<!--                            </svg>-->
						<!--                            <p class="text-gray-300 pr-3 rounded-md text-base font-medium">8 (800) 555-8-111</p>-->

						<svg
							class="h-7 w-7 text-red-500"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<a href="tel:+79023033654" class="rounded-md pr-2 mt-0.5 text-lg font-medium text-white"
							>8 (902) 303-36-54</a
						>

						<svg
							class="h-7 w-7 text-red-500"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<a href="tel:+79306888862" class="rounded-md pr-2 mt-0.5 text-lg font-medium text-white"
							>8 (930) 688-88-62</a
						>

						<svg
							class="h-8 w-8 text-red-500"
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
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						<span class="rounded-md mt-0.5 pr-2 text-xl font-medium text-white"
							>info@orbita-stroy.com</span
						>
					</div>
				</div>
			</div>
			<!-- <div class="flex-1 flex justify-center px-2 lg:ml-6 ">
			                   <div class="max-w-lg w-full lg:max-w-xs">
			                       <label for="search" class="sr-only">Поиск</label>
			                       <button id="search" class="ml-8 inline-flex items-center px-12 py-1 border border-transparent rounded-md text-base font-medium text-slate-800 bg-slate-100 hover:bg-slate-800 shadow-lg shadow-slate-700/50">
			                           <svg aria-hidden="true" class="h-5 w-5 text-gray-400 mr-4" fill="currentColor"
			                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			                               <path clip-rule="evenodd"
			                                     d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
			                                     fill-rule="evenodd"/>
			                           </svg>
			                           Поиск
			                       </button>
			                   </div>
			               </div> -->

			<div class=" hidden lg:ml-4 lg:block">
				<div class="flex items-center">
					<div class=" flex items-center md:ml-12">
						<button
							data-sveltekit-prefetch
							data-sveltekit-noscroll
							class=" inline-flex items-center justify-center rounded-md border  border-transparent bg-slate-100 py-0.5 pl-3 pr-12 text-base font-medium text-gray-500 hover:bg-slate-200  "
							on:click={handleSearch}
						>
							<svg
								aria-hidden="true"
								class="mr-1 h-6 w-6 text-gray-500"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									clip-rule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									fill-rule="evenodd"
								/>
							</svg>
							Поиск товара
						</button>
					</div>

					<button
						class="ml-8 flex-shrink-0 rounded-full bg-red-700 p-1 text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
						type="button"
					>
						<span class="sr-only">View notifications</span>
						<svg
							aria-hidden="true"
							class="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</svg>
					</button>

					<!-- Profile dropdown -->
					<div class="relative ml-4 flex-shrink-0">
						<!--                            <div>-->
						<!--                                <button type="button" class="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">-->
						<!--                                    <span class="sr-only">Open user menu</span>-->
						<!--                                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
						<!--                                </button>-->
						<!--                            </div>-->

						<svg
							class="h-8 w-8 text-red-600"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								clip-rule="evenodd"
								d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
								fill-rule="evenodd"
							/>
						</svg>

						<!--
                              Dropdown menu, show/hide based on menu state.

                              Entering: "transition ease-out duration-100"
                                From: "transform opacity-0 scale-95"
                                To: "transform opacity-100 scale-100"
                              Leaving: "transition ease-in duration-75"
                                From: "transform opacity-100 scale-100"
                                To: "transform opacity-0 scale-95"
                            -->
						<!--                            <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">-->
						<!--                                &lt;!&ndash; Active: "bg-gray-100", Not Active: "" &ndash;&gt;-->
						<!--                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>-->
						<!--                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>-->
						<!--                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>-->
						<!--                            </div>-->
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="lg:hidden" id="mobile-menu">
		<div class="border-t border-gray-700 pt-4 pb-3">
			<div class="items-center px-5">
				<!--                    <div class="flex-shrink-0">-->
				<!--                        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
				<!--                    </div>-->
				<!-- <svg
					class="h-6 w-6 text-red-500"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						clip-rule="evenodd"
						d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						fill-rule="evenodd"
					/>
				</svg> -->

				<div class="justify-between flex items-center">
					<button
						on:click={handleSearch}
						class=" inline-flex items-center justify-center rounded-md border  border-transparent bg-slate-100 py-0.5 pl-2 pr-4 text-base font-medium text-gray-500 hover:bg-slate-200  "
					>
						<svg
							aria-hidden="true"
							class="mr-2 h-5 w-5 text-gray-500"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								clip-rule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								fill-rule="evenodd"
							/>
						</svg>
						Поиск товара
					</button>
					<button
						class="flex-shrink-0 rounded-full bg-red-500  p-1 text-slate-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
						type="button"
					>
						<span class="sr-only">View notifications</span>
						<svg
							aria-hidden="true"
							class="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>

		<div class="space-y-1 px-1 pt-2 pb-3 sm:px-4 md:px-8 ">
			<div class="mx-auto flex items-center justify-between px-4">
				<div class="flex">
					<svg
						class="h-6 w-6 text-red-500"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<a
						class="rounded-md pl-1 text-sm font-medium text-gray-200 sm:text-base md:text-lg"
						href="tel:+79023033654">8 902-303-36-54</a
					>
				</div>

				<div class="flex">
					<svg
						class="h-6 w-6 text-red-500 "
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<a
						class="rounded-md pl-1 text-sm font-medium text-gray-200 sm:text-base md:text-lg"
						href="tel:+79306888862">8 930-688-88-62</a
					>
				</div>
			</div>
		</div>
	</div>
</nav>
