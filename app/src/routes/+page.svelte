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
		content="«Орбита-Строй» — это интернет-магазин с широким ассортиментом стройматериалов с доставкой по Нижнему Новгороду и области. При заказе от 15 000 доставка бесплатная. Самовывоз из г. Дзержинск"
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
<div class="bg-gray-50 py-12">
	<div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 grayscale">
		<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
			<img
				class="h-22"
				src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/brands/1.png"
				alt="Tuple"
			/>
		</div>
		<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
			<img
				class="h-22"
				src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/brands/2.png"
				alt="Mirage"
			/>
		</div>
		<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
			<img
				class="h-22"
				src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/brands/3.png"
				alt="StaticKit"
			/>
		</div>
		<div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
			<img
				class="h-22"
				src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/brands/4.png"
				alt="Transistor"
			/>
		</div>
		<div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
			<img
				class="h-22 "
				src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/brands/5.png"
				alt="Workcation"
			/>
		</div>
	</div>
</div>
