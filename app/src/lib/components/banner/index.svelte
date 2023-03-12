<script>
	import { banner } from '$lib/store/stores.js';
	import { useInvert } from '$lib/functions/invert';
	const { invertToFalse } = useInvert;
</script>

{#if $banner}
	<a href="/information/action">
		<div class="relative bg-gray-800">
			<div class="flex mx-auto max-w-full py-2 px-3 sm:px-6 lg:px-8">
				<div class=" hidden md:block">
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-5 h-5 text-white"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
							/>
						</svg>
						<span class="text-white ml-2 text-sm">Нижний Новгород</span>
					</div>
				</div>
				<div class="mx-auto px-2 sm:text-center">
					<p class="font-medium text-sm text-white antialiased">
						<!-- <span class="md:hidden">Специальные цены на утеплитель от 725р.</span>
					<span class="hidden md:inline">
						Спецпредложение. Только в эти дни!!! Специальные цены на утеплитель от 725р.</span
					> -->
						<span class="md:hidden">Обратите внимание на наши сезонные предложения.</span>
						<span class="hidden md:inline">
							Обратите внимание на наши сезонные предложения и акции.</span
						>
						<!-- <span class="block sm:ml-2 sm:inline-block">
						<a href="/information/action" class="font-bold text-white underline">
							Подробнее <span aria-hidden="true">&rarr;</span></a
						>
					</span> -->
					</p>
				</div>

				<div
					class="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2"
				>
					<button
						type="button"
						on:click={() => banner.update(invertToFalse)}
						class="flex rounded-md p-2 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white"
					>
						<span class="sr-only">Dismiss</span>
						<!-- Heroicon name: outline/x -->
						<svg
							class="h-3 w-3 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	</a>
{/if}
