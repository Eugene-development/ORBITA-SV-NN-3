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
	<title>"Орбита-строй" | База строительных материалов в Дзержинске</title>
	<meta
		name="description"
		content="База строительных и отделочных материалов в Дзержинске с услугой доставки. Наш строительный интернет магазин предложит вам широчайший ассортимент и низкие цены на стройматериалы. Есть стройбаза со складом в черте города."
	/>
</svelte:head>

<MonthProduct />
<Actual {...data.contentActions} />
<!-- <Slider /> -->
<Testimonials />
<Message />
<Article />
