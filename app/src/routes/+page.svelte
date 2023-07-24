<script>
	import MonthProduct from '$lib/components/monthProduct/index.svelte';
	// import Slider from '$lib/components/slider/index.svelte';
	import Actual from '$lib/components/actual/index.svelte';
	import Testimonials from '$lib/components/testimonials/index.svelte';
	import Message from '$lib/components/message/index.svelte';
	import Article from '$lib/components/article/index.svelte';

	// Import Swiper
	import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
	import { contentActions } from '$lib/data/actions';

	export let data;
</script>

<svelte:head>
	<title>Интернет-магазин строительных материалов в Нижнем Новгороде | «Орбита-Строй»</title>
	<meta
		name="description"
		content="«Орбита-Строй» — это интернет-магазин с широким ассортиментом стройматериалов с доставкой по Нижнему Новгороду и области. При заказе от 15 000 доставка бесплатная. Самовывоз со склада из г. Дзержинск"
	/>
</svelte:head>

<Swiper
	modules={[Pagination, Scrollbar, A11y, Autoplay]}
	autoplay={{ delay: 6000 }}
	spaceBetween={40}
	pagination={{ clickable: true }}
	scrollbar={{ draggable: true, hide: true }}
>
	{#each contentActions.actions as dataSlider}
		<SwiperSlide><MonthProduct {dataSlider} /></SwiperSlide>
	{/each}
</Swiper>

<!-- <MonthProduct /> -->
<Actual {...data.contentActions} />
<!-- <Slider /> -->
<Article />
<Message />
<Testimonials />
<!-- Brands -->
<div class="bg-gray-50 py-8">
	<div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 grayscale">
		<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
			<img
				class="h-10"
				src="data:image/png;base64,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"
				alt="Кнауф"
			/>
		</div>
		<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
			<img
				class="h-10"
				src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/brands/1.png"
				alt="Церезит"
			/>
		</div>
		<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
			<img
				class="h-10"
				src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/brands/2.png"
				alt="Макрофлекс"
			/>
		</div>
		<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
			<img
				class="h-10"
				src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/brands/3.png"
				alt="Таркет"
			/>
		</div>
		<div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
			<img
				class="h-10"
				src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/brands/4.png"
				alt="ЕК"
			/>
		</div>
		<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
			<img
				class="h-10"
				src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/brands/5.png"
				alt="Кварц"
			/>
		</div>
		<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
			<img
				class="h-10"
				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAABkCAMAAABO+wdZAAAAWlBMVEX///8yNZHVAB0Amj0zU6x0Z6SbSXk2RpxXr2WJw4pFWKrpe4nP587xqLKs1azdM0ocm1wvi5r87vDiUWPZFC/n8+ZXcbr2zc/53eH0u8NRjMcAZIEAeW+CgSkyhmpzAAAGWUlEQVR4nO2a2YLiKhCGUTInkAUTTVxa5/1f8xRb2KOxW9Pdw3/RRgSKjyoKyAxCv1LFZrNZewwvV1GWZfHrMUu0Acxi7WG8WJyymKEEX2+M1HwUdxRUsfoLyhd3VqT7ivSnKVCZitjCJtSSS3lW0DQoUD06xWVQ8khnGw0UteH3N5WWCcaU1bdTxkcet+FVvbMWk9ZXoEReTBVpSq+7hAO1YrGqe3s/pe+hNGW04nLIdSi9WkWKMlrvCch1KP0RpSjdovl4nYNcidLrsIhTFmFRWnesrkIZAXikpO/7xyHFcaAQ++djM/YsZXrqy6Bp0NKpUt561HcYYyCFj/uU9iIu1qIMu5wrKG/Axxm1wKmYu7Xv+jikb24lSuS39VuWE+DmClwE++qAFNM4ZWBtLcrSq+m3lJ9XhUSkJ4kPS3CEYVN9AWVCCyl9Z3ot5STcdJxSF7KjRBf3wYzF9hz/FOVrEWX1QGdxTM9GpSAVnoJiCpJSPFFHKENX+gML9BlfRjtLzW+o2+REhxUzqmmxpJyz8pitz/gy2pnR7HlFQQowIrEa5UENKVz7GOV6vpztt7yWJkblX6ICdtSQRG4qb6dc5su5mirLMMuJKlD1otTx+xDll0bsl63Lq51mFE+jPkTa7eQ3yD/f3JdzFbE8B0gitR6RdK8IWMqmJRr29Oocu4TSG5nzDVzZkYlP/iVoci+VS7KjD++Xj2xxz1IGnR2NXf+O6XzD8rRDGivryC94JHRsKKOUNSJo+Uk28SopTRmJ6eA6WCmFF4tHOou70vleqr1QLkuddSQyAkAhfQ6KbCWh4eWUiabLKINhmedreVW7hwxMlXUY4/5k9tWE56Uu0ttmc/TMLac8xpsuogzPZOYLxjdFKfnkesQNoyPFjpg64UXStXe/XMeXm6Ci6QdPKWe0sw7UGRklky8J45CpCyZ/V8BXlXhXUK3jS29AlV10VZuI9qJYj6RpKCGQcThrwzWqhdlFhuIroAx1fN6X0c5QeIB1wMuJUm6NrOGM1sWSEH0D69ROEnem0QOUn/BltLOwVuUM8yrza6P3jqZhTfimQG+d0yugOaur+NIv9EapMo9ekTxGIUjN1qEZRQaeXuodZ6w+Q/lZX/rxWgWUVGYeTkkaBMmVNSOvA09ECM4EcpfB/UdqsS+j/NKIPUbqeGMsb+J4jgQlQVQn1Q7YqEg8tl/tF7TJ++oKERsOwaEULyWZomz4SYcE77SMOjd3JzjfHbHHcCBevIk7F4QrIjYC3ynvQ6Y4308ZjiBCCYtuJJiJlUip3CaB1AXtqLUojSr/fV0VWyYvpUy/BZ+6EVtig+HeYR/oOiJQjUsJo6l/NIGEe6zAf1V19M+z30Yi24zEZFWDSiD7QBmXuKhoX/75gRKbIeA0Ys9gox+pUCrzbqcDdvsD9VeeBRqz/uDaHEk9JmDXHvFT4pjjaAMR5l+6OjvzrD3g5/QX7ln8IN5bV2baWIHbuYlHthrqCzy3A38+I3SAjx1Cu22N9ttti9rt9sT/tAjV8CQ1iDr7YTJdT+V7/nk6iAb8SZWca9GEC37b8R9Pu+2BGxr2kyVhWBRy7cFiDBNcKUA+envnYOKEB1uLWZIW5eEChs6iw1oOK0ZZ75GoMsh5kBBmEDVUOSjKmvczyKZ6sKKznR7+QXRStxIIpm4RZQ0HO41gccpbl3NI9yNWUgKOsBBSDnuPEhzQovPUvoUfDaWoZFMONbpYlBf9Ewdq0UJfnkZsOcv2J1fvnwZ0Mx5SrbQ5GGMO5QkdXMoaEM9mFGc5usmX50FFbB1G7GCGzztFF2VJSvQjW8YpD4i5Z7dpgXax047ty5bP9UnbCSjB5uBQDmLokzMPvO7BrMvLsHUjVsxI1JcwIXXElzyo45Q1Iv655kOBhifXibKtB273olbLGayFlJetS1nz1DNMK1NUM740ZZpycCjtdQlPMUr+FKccEY76LCU1NzyxgK/AzkmNf2fX4pn1PHiUMlhliynDiixiUXLpHLt3cuzhIh0ulkHEl0iEeJRyh1j4f13uU86r5fz3VMvh7PhoX60WNstXUN6tM7yT8oLI11N+N8GKwcvW5X8/UH/4QT19d/w96uI7xq/Tv+DLrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKxfqv8BNVx07CxAwjMAAAAASUVORK5CYII="
				alt="Сенеж"
			/>
		</div>
	</div>
</div>
