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
