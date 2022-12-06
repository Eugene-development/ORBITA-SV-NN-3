<script>
	import { visibleInformationMenu } from '$lib/store/stores.js';

	// import { clickOutside } from '$lib/functions/click_outside';
	import { useInvert } from '$lib/functions/broker';
	const { invert, invertToFalse } = useInvert;

	const changeVisibleInformationMenu = () => {
		visibleInformationMenu.update(invert);
	};
	const closeVisibleInformationMenu = () => {
		visibleInformationMenu.update(invertToFalse);
	};
	export let informationMenu;
</script>

<div>
	<!-- <div on:outclick={closeVisibleInformationMenu} use:clickOutside> -->

	<button
		on:click={changeVisibleInformationMenu}
		aria-expanded="false"
		class="group inline-flex items-center rounded-md bg-white text-base text-indigo-900 hover:text-red-800 focus:text-red-700 focus:outline-none"
		type="button"
	>
		<span class="font-semibold">Информация</span>
		<!--
                                  Heroicon name: solid/chevron-down

                                  Item active: "text-gray-900", Item inactive: "text-slate-400"
                                -->
		<svg
			aria-hidden="true"
			class="ml-2 h-5 w-5 text-red-700"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				clip-rule="evenodd"
				d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
				fill-rule="evenodd"
			/>
		</svg>
	</button>

	<!--
                              'More' flyout menu, show/hide based on flyout menu state.

                              Entering: "transition ease-out duration-200"
                                From: "opacity-0 -translate-y-1"
                                To: "opacity-100 translate-y-0"
                              Leaving: "transition ease-in duration-150"
                                From: "opacity-100 translate-y-0"
                                To: "opacity-0 -translate-y-1"
                            -->
	{#if $visibleInformationMenu}
		<div class="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block">
			<div class="absolute inset-0 flex">
				<div class="w-1/2 bg-white" />
				<div class="w-1/2 bg-slate-50" />
			</div>
			<div class="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
				<nav
					class="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
				>
					<div>
						<!--                                                <h3 class="text-sm font-medium tracking-wide text-slate-500 uppercase">Company</h3>-->
						<ul class="mt-5 space-y-6">
							{#each informationMenu[0].left as { href, displayName }}
								<li class="flow-root">
									<a
										{href}
										on:click={closeVisibleInformationMenu}
										class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-slate-900 hover:bg-slate-50"
									>
										<svg
											class="h-6 w-6 flex-shrink-0 text-indigo-700"
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
												d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										<span class="ml-4">{displayName}</span>
									</a>
								</li>
							{/each}
						</ul>
					</div>
					<div>
						<ul class="mt-5 space-y-6">
							{#each informationMenu[0].right as { href, displayName }}
								<li class="flow-root">
									<a
										{href}
										on:click={changeVisibleInformationMenu}
										on:outclick={changeVisibleInformationMenu}
										class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-slate-900 hover:bg-slate-50"
									>
										<svg
											class="h-6 w-6 flex-shrink-0 text-indigo-700"
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
												d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										<span class="ml-4">{displayName}</span>
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</nav>
				<div class="bg-slate-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
					<div>
						<h3 class="text-sm font-medium uppercase tracking-wide text-slate-500">
							Последнее из блога
						</h3>
						<!--                                                <ul role="list" class="mt-6 space-y-6">-->
						<!--                                                    <li class="flow-root">-->
						<!--                                                        <a href="#" class="-m-3 p-3 flex rounded-lg hover:bg-slate-100">-->
						<!--                                                            <div class="hidden sm:block flex-shrink-0">-->
						<!--                                                                <img class="w-32 h-20 object-cover rounded-md" src="https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80" alt="">-->
						<!--                                                            </div>-->
						<!--                                                            <div class="w-0 flex-1 sm:ml-8">-->
						<!--                                                                <h4 class="text-base font-medium text-slate-900 truncate">Boost your conversion rate</h4>-->
						<!--                                                                <p class="mt-1 text-sm text-slate-500">Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.</p>-->
						<!--                                                            </div>-->
						<!--                                                        </a>-->
						<!--                                                    </li>-->

						<!--                                                    <li class="flow-root">-->
						<!--                                                        <a href="#" class="-m-3 p-3 flex rounded-lg hover:bg-slate-100">-->
						<!--                                                            <div class="hidden sm:block flex-shrink-0">-->
						<!--                                                                <img class="w-32 h-20 object-cover rounded-md" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80" alt="">-->
						<!--                                                            </div>-->
						<!--                                                            <div class="w-0 flex-1 sm:ml-8">-->
						<!--                                                                <h4 class="text-base font-medium text-slate-900 truncate">How to use search engine optimization to drive traffic to your site</h4>-->
						<!--                                                                <p class="mt-1 text-sm text-slate-500">Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.</p>-->
						<!--                                                            </div>-->
						<!--                                                        </a>-->
						<!--                                                    </li>-->
						<!--                                                </ul>-->
					</div>
					<div class="mt-6 text-sm font-medium">
						<!-- <a
													href="/blog"
													on:click={changeVisibleInformationMenu}
													class="text-red-700 hover:text-red-800"
												>
													Перейти в блог <span aria-hidden="true">&rarr;</span></a
												> -->
					</div>
				</div>
			</div>
		</div>
	{/if}

	<!-- Item active: "text-slate-900", Item inactive: "text-slate-500" -->
</div>
