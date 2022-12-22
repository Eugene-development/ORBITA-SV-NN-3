<script>
	import MonthProduct from '$lib/components/monthProduct/index.svelte';
	// import Slider from '$lib/components/slider/index.svelte';
	import Actual from '$lib/components/actual/index.svelte';
	import Testimonials from '$lib/components/testimonials/index.svelte';
	import Message from '$lib/components/message/index.svelte';
	import Article from '$lib/components/article/index.svelte';
	export let data;
</script>

<!-- {#each data.data.test888.rubric as {value}}
    {value}
{/each} -->

<svelte:head>
	<title>База стройматериалов "Орбита-Строй" || Наша база строительно отделочных материалов предлагает купить строительные материалы с доставкой по Нижнем Новгороду</title>
	<meta
		name="description"
		content="База строительно отделочных материалов 'Орбита-строй' расположена в Нижнем Новгороде и Дзержинске. Это достаточно большая база стройматериалов, расположенная в удобном месте. Здесь удобно купить стройматериалы в Нижнем Новгороде или в Дзержинске с широким ассортиментом товаров и низкими ценами. Обращайте внимание на наши акции и специальные предложения."
	/>
</svelte:head>

<MonthProduct />
<Actual {...data.contentActions} />
<!-- <Slider /> -->
<Testimonials />
<Message />
<Article />
