<script>
	import MonthProduct from '$lib/components/monthProduct/index.svelte';
	// import Slider from '$lib/components/slider/index.svelte';
	import Actual from '$lib/components/actual/index.svelte';
	import Testimonials from '$lib/components/testimonials/index.svelte';
	import Message from '$lib/components/message/index.svelte';
	import Article from '$lib/components/article/index.svelte';
	export let data;
</script>

<svelte:head>
	<title>Интернет-магазин строительных материалов в Нижнем Новгороде | «Орбита-Строй»</title>
	<meta
		name="description"
		content="«Орбита-Строй» — это интернет-магазин с широким ассортиментом стройматериалов с доставкой по Нижнему Новгороду и области. При заказе от 15 000 доставка бесплатная. Самовывоз из г. Дзержинск"
	/>
</svelte:head>

<MonthProduct />
<Actual {...data.contentActions} />
<!-- <Slider /> -->
<Testimonials />
<Message />
<Article />
