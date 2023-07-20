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
				Рубрика
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
							<svg
								class="h-5 w-5 flex-shrink-0 text-slate-500"
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
							<a
								data-sveltekit-prefetch
								data-sveltekit-noscroll
								href="/rubric/{data.rubric.rubric_one.parent.slug}"
								class="ml-4 text-base md:text-xl font-medium text-slate-600 "
								>{data.rubric.rubric_one.parent.value}</a
							>
						</div>
					</div>

					<!-- <div>
						<div class="flex items-center">
							<svg class="h-5 w-5 flex-shrink-0 text-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
							</svg>
							<span class="ml-4 text-base md:text-xl font-medium text-slate-600 ">{data.rubric.rubric_one.value}</span>
						</div>
					</div> -->
				</div>
			</nav>

			<h1 class="text-4xl font-bold text-slate-800 sm:text-5xl lg:text-6xl">
				{data.rubric.rubric_one.value}
			</h1>
			<p class="max-w-3xl text-xl mx-auto text-slate-800">
				Купите товар "{data.rubric.rubric_one.value}" в Нижнем Новгороде по низкой цене с доставкой
				или самовывозом
			</p>
		</div>
	</div>
</div>

<div>
	<div class="  ">
		<!--        <div class="flex w-1/3 max-w-sm flex-col flex-grow border-r border-slate-200 pt-8 pb-4 overflow-y-auto hidden xl:block">-->
		<!--            <div class="mb-6 flex items-center flex-shrink-0 px-4">-->
		<!--                &lt;!&ndash;          <svg class="text-slate-500 mr-3 h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"&ndash;&gt;-->
		<!--                &lt;!&ndash;               xmlns="http://www.w3.org/2000/svg">&ndash;&gt;-->
		<!--                &lt;!&ndash;            <path&ndash;&gt;-->
		<!--                &lt;!&ndash;              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"&ndash;&gt;-->
		<!--                &lt;!&ndash;              stroke-linecap="round" stroke-linejoin="round"&ndash;&gt;-->
		<!--                &lt;!&ndash;              stroke-width="2"/>&ndash;&gt;-->
		<!--                &lt;!&ndash;          </svg>&ndash;&gt;-->
		<!--                <div class="text-slate-800 text-2xl">-->
		<!--                    <strong>{ nameRubric }:</strong>-->
		<!--                </div>-->
		<!--            </div>-->

		<!--            <hr>-->
		<!--            <div class="mt-5 flex-grow flex flex-col">-->
		<!--                <nav aria-label="Sidebar" class="flex-1 px-2 space-y-1">-->
		<!--                    &lt;!&ndash; Current: "bg-slate-100 text-slate-900", Default: "text-slate-600 hover:bg-slate-50 hover:text-slate-900" &ndash;&gt;-->

		<!--                    {#each category as {id, slug, name, product}}-->
		<!--                    <a sveltekit:prefetch sveltekit:noscroll href='/products/{slug}'-->
		<!--                              class="text-slate-800 hover:bg-slate-50 hover:text-slate-900 hover:shadow-md hover:shadow-slate-100/50 group flex items-center px-2 py-2 text-sm font-medium rounded-md">-->
		<!--                        &lt;!&ndash; Heroicon name: outline/folder &ndash;&gt;-->
		<!--                        &lt;!&ndash;                <svg aria-hidden="true" class="text-slate-400 group-hover:text-slate-500 mr-3 h-6 w-6"&ndash;&gt;-->
		<!--                        &lt;!&ndash;                     fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">&ndash;&gt;-->
		<!--                        &lt;!&ndash;                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"&ndash;&gt;-->
		<!--                        &lt;!&ndash;                        stroke-linecap="round"&ndash;&gt;-->
		<!--                        &lt;!&ndash;                        stroke-linejoin="round"&ndash;&gt;-->
		<!--                        &lt;!&ndash;                        stroke-width="2"/>&ndash;&gt;-->
		<!--                        &lt;!&ndash;                </svg>&ndash;&gt;-->

		<!--                        &rarr; { name }-->

		<!--                        <span class="bg-red-700 text-slate-50 ml-auto inline-block py-0.5 px-2 text-xs font-medium rounded-full">-->
		<!--                          { product.length }-->
		<!--                        </span>-->
		<!--                    </a>-->
		<!--                    {/each}-->
		<!--                </nav>-->
		<!--            </div>-->
		<!--        </div>-->

		<!-- This example requires Tailwind CSS v2.0+ -->
		<div class="relative px-2 pb-4 sm:px-6 lg:px-8  lg:pb-8">
			<div class="">
				<!--                <div class="pt-12 sm:pt-16 lg:pt-20">-->
				<!--                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">-->
				<!--                        <div class="text-center">-->
				<!--                            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">{ nameRubric }</h2>-->
				<!--                            {#if text}-->
				<!--                            <p class="mt-4 text-xl text-gray-600">{text.descriptionText}</p>-->
				<!--                                {:else }-->
				<!--                                <p class="mt-4 text-xl text-gray-600">Скидка пять проц</p>-->

				<!--                            {/if}-->
				<!--                        </div>-->
				<!--                    </div>-->
				<!--                </div>-->
				<div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
					<div class="relative">
						<!--                        <div class="absolute inset-0 h-1/2 bg-gray-100"></div>-->
						<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
							{#each data.rubric.rubric_one.category as { value, slug, product, text }}
								<div
									class="mx-auto mb-8 max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none "
								>
									<div class="flex-1 bg-gray-50 px-6 py-8 lg:p-12">
										<h3
											class="text-2xl md:text-3xl font-extrabold text-gray-900 sm:text-4xl text-center"
										>
											{value}
										</h3>
										<!-- {#if text}
											<p class="mt-6 text-base text-gray-500">{text.descriptionText}</p>
										{:else}
											<p class="mt-6 text-base text-gray-500">Цена снижена</p>
										{/if} -->
										<div class="hidden md:block mt-8">
											<div class="flex items-center">
												<h4
													class="flex-shrink-0 bg-gray-50 pr-4 text-sm font-semibold uppercase tracking-wider text-red-700"
												>
													Общая информация
												</h4>
												<div class="flex-1 border-t-2 border-gray-200" />
											</div>
											<ul
												class=" mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0"
											>
												<li class="flex items-start lg:col-span-1">
													<div class="flex-shrink-0">
														<!-- Heroicon name: solid/check-circle -->
														<svg
															class="h-5 w-5 text-red-700"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															aria-hidden="true"
														>
															<path
																fill-rule="evenodd"
																d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
																clip-rule="evenodd"
															/>
														</svg>
													</div>
													<p class="ml-3 text-sm text-gray-700">Оптовикам скидки</p>
												</li>

												<li class="flex items-start lg:col-span-1">
													<div class="flex-shrink-0">
														<!-- Heroicon name: solid/check-circle -->
														<svg
															class="h-5 w-5 text-red-700"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															aria-hidden="true"
														>
															<path
																fill-rule="evenodd"
																d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
																clip-rule="evenodd"
															/>
														</svg>
													</div>
													<p class="ml-3 text-sm text-gray-700">Наличие на складе</p>
												</li>

												<li class="flex items-start lg:col-span-1">
													<div class="flex-shrink-0">
														<!-- Heroicon name: solid/check-circle -->
														<svg
															class="h-5 w-5 text-red-700"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															aria-hidden="true"
														>
															<path
																fill-rule="evenodd"
																d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
																clip-rule="evenodd"
															/>
														</svg>
													</div>
													<p class="ml-3 text-sm text-gray-700">Доставка</p>
												</li>

												<li class="flex items-start lg:col-span-1">
													<div class="flex-shrink-0">
														<!-- Heroicon name: solid/check-circle -->
														<svg
															class="h-5 w-5 text-red-700"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															aria-hidden="true"
														>
															<path
																fill-rule="evenodd"
																d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
																clip-rule="evenodd"
															/>
														</svg>
													</div>
													<p class="ml-3 text-sm text-gray-700">Безнал</p>
												</li>
											</ul>
										</div>
									</div>
									<div
										class="bg-gray-100 py-8 px-6 text-center sm:border-t-2 lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center  lg:border-l-2 lg:p-12"
									>
										<p class="text-lg font-medium leading-6 text-gray-900">
											В этой товарной категории
										</p>
										<div
											class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900"
										>
											{#if product.length < 10}
												<span> 0{product.length} </span>
											{:else}
												<span> {product.length} </span>
											{/if}
											<span class="ml-3 text-xl font-medium text-gray-500"> поз. </span>
										</div>
										<p class="mt-4 text-sm">
											<a
												data-sveltekit-prefetch
												href="/products/{slug}"
												class="font-medium text-gray-500 underline"
											>
												Выберите нужную позицию
											</a>
										</p>
										<div class="mt-6">
											<div class="rounded-md shadow">
												<a
													data-sveltekit-prefetch
													href="/products/{slug}"
													class="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-tr from-indigo-500 via-indigo-900 to-indigo-700 px-5 py-3 text-base font-medium text-white hover:bg-gradient-to-bl"
												>
													Выбрать
												</a>
											</div>
										</div>
										<div class="mt-4 text-sm">
											<a href="/shop/cart" class="font-medium text-gray-900"> Перейти в корзину </a>
										</div>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-xl lg:max-w-7xl">
					<div class="rounded-lg bg-slate-50 px-6 py-8 sm:p-10 lg:flex lg:items-center">
						<!--            <div v-for="(text, idx) of head.text" :key="text.id" class="rounded-lg bg-slate-50 px-6 py-8 sm:p-10 lg:flex lg:items-center">-->
						<div class="flex-1">
							<div class="">
								<h2 class="mx-auto px-4 py-1 text-xl text-center tracking-wide text-slate-800">
									<strong class="text-3xl md:text-4xl">{data.rubric.rubric_one.value}</strong>
									<br />
									<!-- <p class="pt-2">Наши цены, ассортимент товаров и применение.</p> -->
								</h2>
							</div>
							{#each data.rubric.rubric_one?.text as { key, value }}
								{#if key === '10'}
									<div class="mt-8 text-lg text-slate-700">{@html value}</div>
								{/if}
							{/each}
						</div>
					</div>
					<div class="mt-6 rounded-md shadow lg:flex-shrink-0">
						<!-- <a
							href="/information/action"
							class="flex items-center justify-center rounded-md border border-transparent bg-slate-700 px-5 py-3 text-base text-center font-medium text-slate-50 hover:bg-slate-800"
						>
							{data.rubric.rubric_one.value} по низкой цене с доставкой в Дзержинске. Cледите за нашими
							акциями!
						</a> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
