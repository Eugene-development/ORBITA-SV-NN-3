<script>
	import { page } from '$app/stores';
	import { visibleCatalog } from '$lib/store/stores.js';
	import { useInvert } from '$lib/functions/broker';
	const { invert } = useInvert;

	export let catalog;
</script>

{#if true}
	<!-- {#if $visibleCatalog} -->
	<div class="mt-4 bg-white pb-4 sm:pb-6">
		<div class="relative">
			<div class="absolute inset-0 h-1/2 border-b border-slate-200 bg-white" />
			<!-- <div class="absolute inset-0 h-1/2 bg-gradient-to-r from-gray-200 via-slate-100 to-gray-200 border-b border-slate-200"></div> -->
			<div class="relative mx-auto max-w-full px-4 sm:px-6 lg:px-8">
				<div class="mx-auto w-full">
					<div class="rounded-lg bg-white shadow-md shadow-gray-700/50 lg:hidden">
						{#each catalog as { slug, name }}
							<a
								data-sveltekit-prefetch
								data-sveltekit-noscroll
								href="/rubric/{slug}"
								on:click={() => visibleCatalog.update(invert)}
								class="flex flex-col border border-gray-200 bg-gradient-to-tr from-indigo-500 via-indigo-900 to-indigo-700 px-4 py-2 text-center hover:bg-gradient-to-bl sm:border-r sm:border-l"
							>
								<span
									class="order-2 text-sm font-medium leading-6 tracking-wider text-white antialiased"
								>
									{name}
								</span>
							</a>
						{/each}
					</div>
					<!-- <div class="mb-2 mt-2 lg:mt-0 text-lg md:text-2xl text-gray-800 text-center lg:text-left">
						<span class="text-red-800">Наши</span> цены сэкономят
						<span class="text-red-800">Ваши</span> деньги
					</div> -->

					<div
						class="hidden rounded-lg bg-white shadow-md shadow-gray-700/50 lg:grid lg:grid-cols-6"
					>
						{#each catalog as { slug, name }}
							<a
								data-sveltekit-noscroll
								href="/rubric/{slug}"
								class="flex flex-col  border border-gray-200 p-4 text-center hover:border-red-800 hover:bg-gradient-to-l hover:from-red-900 hover:via-red-800 hover:to-red-900 sm:border-r sm:border-l 
								{$page.url.pathname === '/shop/rubric/' + slug
									? 'bg-gradient-to-r from-red-900 via-red-800 to-red-900'
									: 'bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900'}"
							>
								<span
									class="delay-50 duration-50 order-2 text-sm font-medium leading-6 tracking-wider text-white transition ease-in-out hover:scale-110"
								>
									{name}
								</span>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="mt-4 bg-white pb-4 sm:pb-6">
		<div class="relative">
			<div class="absolute inset-0 h-1/2 border-b border-slate-200 bg-white" />
			<div class="relative mx-auto max-w-full px-4 sm:px-6 lg:px-8 ">
				<div class="mx-auto w-full ">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<button
						on:click={() => visibleCatalog.update(invert)}
						class="rounded-md border w-full border-gray-200 bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-700 text-center shadow-md shadow-gray-700/50 hover:from-indigo-800 hover:via-indigo-700 hover:to-indigo-800 "
					>
						<p class="p-3">
							<span class="text-2xl font-medium tracking-wider text-white animate-pulse">
								Каталог стройматериалов
							</span>
						</p>
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
