<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
</svelte:head>

<div class="py-8">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl space-y-2 lg:max-w-none">
			<!-- <span class="text-lg font-semibold uppercase leading-6 tracking-wider text-indigo-700">
				Раздел
			</span> -->
			<nav class="flex mb-6" aria-label="Breadcrumb">
				<div class="flex items-center space-x-4 mx-auto">
					<div>
						<div>
							<a href="/" class="text-slate-500 hover:text-slate-600">
								<!-- Heroicon name: mini/home -->
								<svg
									class="h-6 w-6 flex-shrink-0"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="sr-only">Главная</span>
							</a>
						</div>
					</div>

					<div>
						<div class="flex items-center">
							<!-- Heroicon name: mini/chevron-right -->
							<svg
								class="h-6 w-6 flex-shrink-0 text-slate-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="ml-4 text-base md:text-xl font-medium text-slate-600 "
								>{data.catalog.catalog_one.value}</span
							>
						</div>
					</div>
				</div>
			</nav>
			<h1 class="text-4xl font-extrabold text-slate-800 sm:text-5xl lg:text-6xl">
				{data.catalog.catalog_one.value}
			</h1>
			<p class="max-w-3xl text-xl mx-auto text-slate-800">
				Купите товар "{data.catalog.catalog_one.value}" в Нижнем Новгороде по низким ценам с
				доставкой или самовывозом
			</p>
		</div>
	</div>
</div>

<div class="bg-white">
	<div class="mt-6 pb-12  sm:pb-16  lg:pb-24">
		<div class="relative">
			<div class="absolute inset-0 h-3/4" />
			<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div
					class="mt-6 space-y-4 sm:mt-8 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3"
				>
					{#each data.catalog.catalog_one.rubric as { slug, value }}
						<div
							class="flex flex-col overflow-hidden rounded-lg border-2 shadow-lg shadow-indigo-200/50"
						>
							<div class="px-6 py-8 text-center sm:p-10 sm:pb-6">
								<div>
									<h3
										class="inline-flex rounded-full bg-red-50 px-8 py-1  text-sm font-semibold uppercase tracking-wide text-red-900"
										id="tier-standard"
									>
										{data.catalog.catalog_one.value}
									</h3>
								</div>
								<div class="mt-4  items-baseline text-center text-2xl font-extrabold">
									{value}
								</div>
								<!--                                                  <p class="mt-5 text-lg text-slate-500">-->
								<!--                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.-->
								<!--                                                  </p>-->
							</div>
							<div
								class="flex flex-1 flex-col justify-between px-6 pb-6 transition ease-in-out hover:scale-105"
							>
								<ul class="space-y-2" />
								<div class="mb-2 rounded-md shadow-lg shadow-indigo-500/50">
									<a
										data-sveltekit-prefetch
										href="/category/{slug}"
										class="block w-full rounded-md border border-indigo-900 bg-gradient-to-r from-indigo-500 via-indigo-800 to-indigo-500 py-2 text-center text-sm font-semibold text-white duration-300 ease-in hover:bg-indigo-900 hover:from-indigo-800 hover:via-indigo-500 hover:to-indigo-800"
									>
										В каталог
									</a>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="relative mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:mt-8 lg:px-8">
			<div class="mx-auto max-w-md lg:max-w-7xl">
				<div class="rounded-lg bg-slate-50 px-6 py-8 sm:p-10 lg:flex lg:items-center">
					<!--            <div v-for="(text, idx) of head.text" :key="text.id" class="rounded-lg bg-slate-50 px-6 py-8 sm:p-10 lg:flex lg:items-center">-->
					<div class="flex-1">
						<!-- <div>
							<h2
								class="inline-flex rounded-full bg-white px-4 py-1 text-2xl font-semibold tracking-wide text-slate-800"
							>
								{data.catalog.catalog_one.value}. Цены, ассортимент и дополнительные услуги.
							</h2>
						</div> -->
						<div class="mt-8 text-lg text-slate-600">
							{@html data.catalog.catalog_one.text[1]?.value}
						</div>
					</div>
				</div>
				<div class="mt-6 rounded-md shadow lg:flex-shrink-0">
					<a
						href="/information/action"
						class="flex items-center justify-center rounded-md border border-transparent bg-slate-50 px-5 py-3 text-base font-medium text-slate-900 hover:bg-slate-100"
					>
						{data.catalog.catalog_one.value} по низким ценам с доставкой в Нижнем Новгороде. Звоните!
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
