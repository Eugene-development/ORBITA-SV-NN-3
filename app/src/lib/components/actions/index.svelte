<script>
	// import { pageTitle } from '$stores/store.js';

	// pageTitle.update(() => 'Акции');

	// export let actions;
</script>

<svelte:head>
	<title>Акции</title>
	<meta name="description" content="Акции от компании 'Орбита строй'" />
</svelte:head>

<div class="py-8 sm:py-10">
	<div class="relative sm:py-16">
		<div aria-hidden="true" class="hidden sm:block">
			<div class="absolute inset-y-0 left-0 w-1/2 bg-gray-100 rounded-r-3xl" />
			<svg
				class="absolute top-8 left-1/2 -ml-3"
				width="404"
				height="392"
				fill="none"
				viewBox="0 0 404 392"
			>
				<defs>
					<pattern
						id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
					</pattern>
				</defs>
				<rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
			</svg>
		</div>
		<div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
			<div
				class="relative rounded-2xl px-6 py-10 bg-indigo-700 overflow-hidden shadow-xl sm:px-12 sm:py-20"
			>
				<div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
					<svg
						class="absolute inset-0 h-full w-full"
						preserveAspectRatio="xMidYMid slice"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 1463 360"
					>
						<path
							class="text-indigo-600 text-opacity-40"
							fill="currentColor"
							d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
						/>
						<path
							class="text-indigo-800 text-opacity-40"
							fill="currentColor"
							d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
						/>
					</svg>
				</div>
				<div class="relative">
					<div class="sm:text-center">
						<h2 class="text-xl font-extrabold text-white text-center tracking-tight md:text-3xl">
							Скидка для всех, при заказе через сайт -5% ко всем ценам
						</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- <div>
	{#each actions as { action, price, description, link }}
		<div class=" py-8 sm:py-12">
			<div class="relative sm:py-16">
				<div aria-hidden="true" class="hidden sm:block">
					<div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
					<svg
						class="absolute top-8 left-1/2 -ml-3"
						width="404"
						height="392"
						fill="none"
						viewBox="0 0 404 392"
					>
						<defs>
							<pattern
								id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
							</pattern>
						</defs>
						<rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
					</svg>
				</div>
				<div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
					<div
						class="relative rounded-2xl px-6 py-10 bg-indigo-700 overflow-hidden shadow-xl sm:px-12 sm:py-20"
					>
						<div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
							<svg
								class="absolute inset-0 h-full w-full"
								preserveAspectRatio="xMidYMid slice"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 1463 360"
							>
								<path
									class="text-indigo-600 text-opacity-40"
									fill="currentColor"
									d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
								/>
								<path
									class="text-indigo-800 text-opacity-40"
									fill="currentColor"
									d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
								/>
							</svg>
						</div>
						<a href={link} class="relative" sveltekit:prefetch>
							<div class="sm:text-center">
								<h2 class="my-4 text-2xl font-extrabold text-white tracking-tight md:text-5xl">
									{action}
								</h2>
								<span class="text-5xl font-extrabold text-white">{price} руб.</span>
								<p class="mt-6 mx-auto max-w-2xl text-lg text-indigo-50">
									{description}
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="py-8 sm:py-12">
			<div class="relative sm:py-16">
				<div aria-hidden="true" class="hidden sm:block">
					<div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
					<svg
						class="absolute top-8 left-1/2 -ml-3"
						width="404"
						height="392"
						fill="none"
						viewBox="0 0 404 392"
					>
						<defs>
							<pattern
								id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
							</pattern>
						</defs>
						<rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
					</svg>
				</div>
				<div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
					<div
						class="relative rounded-2xl px-6 py-10 bg-indigo-700 overflow-hidden shadow-xl sm:px-12 sm:py-20"
					>
						<div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
							<svg
								class="absolute inset-0 h-full w-full"
								preserveAspectRatio="xMidYMid slice"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 1463 360"
							>
								<path
									class="text-indigo-600 text-opacity-40"
									fill="currentColor"
									d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
								/>
								<path
									class="text-indigo-800 text-opacity-40"
									fill="currentColor"
									d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
								/>
							</svg>
						</div>
						<div class="relative">
							<div class="sm:text-center">
								<h2 class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
									Акций на данный момент нет
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div> -->
