<script>
	/** @type {import('./$types').PageData} */
	import Blog from '$lib/components/blog/index.svelte';
	export let data;
	// console.log(data);
</script>

<svelte:head>
	<title>Блог | Интернет-магазин «Орбита-Строй»</title>
	<meta
		name="description"
		content="Интересные статьи о стройматериалах и их выборе от компании «Орбита-Строй»"
	/>
</svelte:head>

<Blog {...data.contentBlog.content} />
