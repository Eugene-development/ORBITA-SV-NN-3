<script>
	import { slideOne, slideTwo, slideThree, slideFour } from '$lib/store/stores.js';
	import { useInvert } from '$lib/functions/invert';
	const { invertToTrue, invertToFalse } = useInvert;

	let visibleSlideOne;
	let visibleSlideTwo;
	let visibleSlideTree;
	let visibleSlideFour;
	slideOne.subscribe((value) => (visibleSlideOne = value));
	slideTwo.subscribe((value) => (visibleSlideTwo = value));
	slideThree.subscribe((value) => (visibleSlideTree = value));
	slideFour.subscribe((value) => (visibleSlideFour = value));

	const changeVisibleSlideOne = () => {
		slideOne.update(invertToTrue);
		slideTwo.update(invertToFalse);
		slideThree.update(invertToFalse);
		slideFour.update(invertToFalse);
	};
	const changeVisibleSlideTwo = () => {
		slideOne.update(invertToFalse);
		slideTwo.update(invertToTrue);
		slideThree.update(invertToFalse);
		slideFour.update(invertToFalse);
	};
	const changeVisibleSlideThree = () => {
		slideOne.update(invertToFalse);
		slideTwo.update(invertToFalse);
		slideThree.update(invertToTrue);
		slideFour.update(invertToFalse);
	};
	const changeVisibleSlideFour = () => {
		slideOne.update(invertToFalse);
		slideTwo.update(invertToFalse);
		slideThree.update(invertToFalse);
		slideFour.update(invertToTrue);
	};
</script>

<div class="bg-white">
	<section aria-labelledby="features-heading" class="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
		<div class="mx-auto max-w-7xl px-4 lg:max-w-none lg:px-0">
			<div class="max-w-3xl">
				<h2
					id="features-heading"
					class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
				>
					Специальные предложения
				</h2>
				<p class="mt-4 text-gray-500">
					The Organize modular system offers endless options for arranging your favorite and most
					used items. Keep everything at reach and in its place, while dressing up your workspace.
				</p>
			</div>

			<div class="mt-4">
				<div class="-mx-4 flex overflow-x-auto sm:mx-0">
					<div class="flex-auto border-b border-gray-200 px-4 sm:px-0">
						<div class="-mb-px flex space-x-10" aria-orientation="horizontal" role="tablist">
							<button
								on:click={changeVisibleSlideOne}
								id="features-tab-1"
								class="{visibleSlideOne
									? 'border-indigo-500 text-indigo-600'
									: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
									whitespace-nowrap border-b-2 py-6 text-sm font-medium"
								aria-controls="features-panel-1"
								role="tab"
								type="button">Design</button
							>

							<button
								on:click={changeVisibleSlideTwo}
								id="features-tab-2"
								class="{visibleSlideTwo
									? 'border-indigo-500 text-indigo-600'
									: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
									whitespace-nowrap border-b-2 py-6 text-sm font-medium"
								aria-controls="features-panel-2"
								role="tab"
								type="button">Material</button
							>

							<button
								on:click={changeVisibleSlideThree}
								id="features-tab-3"
								class="{visibleSlideTree
									? 'border-indigo-500 text-indigo-600'
									: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
									whitespace-nowrap border-b-2 py-6 text-sm font-medium"
								aria-controls="features-panel-3"
								role="tab"
								type="button">Considerations</button
							>

							<button
								on:click={changeVisibleSlideFour}
								id="features-tab-4"
								class="{visibleSlideFour
									? 'border-indigo-500 text-indigo-600'
									: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
									whitespace-nowrap border-b-2 py-6 text-sm font-medium"
								aria-controls="features-panel-4"
								role="tab"
								type="button">Included</button
							>
						</div>
					</div>
				</div>

				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				{#if $slideOne}
					<div
						id="features-panel-1"
						class="space-y-16 pt-10 lg:pt-16"
						aria-labelledby="features-tab-1"
						role="tabpanel"
						tabindex="0"
					>
						<div class="flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
							<div class="mt-6 lg:col-span-5 lg:mt-0">
								<h3 class="text-lg font-medium text-gray-900">Adaptive and modular</h3>
								<p class="mt-2 text-sm text-gray-500">
									The Organize base set allows you to configure and evolve your setup as your items
									and habits change. The included trays and optional add-ons are easily rearranged
									to achieve that perfect setup.
								</p>
							</div>
							<div class="lg:col-span-7">
								<div
									class="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 sm:aspect-w-5 sm:aspect-h-2"
								>
									<img
										src="https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg"
										alt="Maple organizer base with slots, supporting white polycarbonate trays of various sizes."
										class="object-cover object-center"
									/>
								</div>
							</div>
						</div>
					</div>
				{:else if $slideTwo}
					222
				{:else if $slideThree}
					333
				{:else if $slideFour}
					444
				{/if}
			</div>
		</div>
	</section>
</div>
