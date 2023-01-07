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
	<title>База стройматериалов "Орбита-Строй" || База строительно-отделочных материалов предлагает купить стройматериалы в Нижнем Новгороде через сайт. Есть доставка стройматериалов.</title>
	<meta
		name="description"
		content="Если вы ищете стройматериалы в Нижнем новгороде на сайте, то наша база строительно отделочных материалов в Нижнем Новгороде предложит вам широкий ассортимент и доставку стройматериалов. Это достаточно большая база стройматериалов, расположенная в удобном месте. Здесь удобно купить стройматериалы в Нижнем Новгороде с широким ассортиментом товаров и низкими ценами. Обращайте внимание на наши акции на сайте и специальные предложения."
	/>
</svelte:head>

<MonthProduct />
<Actual {...data.contentActions} />
<!-- <Slider /> -->
<Testimonials />
<Message />
<Article />
