<script>
	import MonthProduct from '$lib/components/monthProduct/index.svelte';
	import Slider from '$lib/components/slider/index.svelte';
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
	<title>База стройматериалов "Орбита-Строй" || Наш интернет магазин стройматериалов предлагает купить строительные материалы с доставкой по Нижнем Новгороду</title>
	<meta
		name="description"
		content="Интернет-магазин строительных и отделочных материалов 'Орбита-строй' || База стройматериалов с широким ассортиментом товаров и низкими ценами на стройматериалы. Обращайте внимание на наши акции."
	/>
</svelte:head>

<MonthProduct />
<Actual {...data.contentActions} />
<!-- <Slider /> -->
<Testimonials />
<Message />
<Article />
