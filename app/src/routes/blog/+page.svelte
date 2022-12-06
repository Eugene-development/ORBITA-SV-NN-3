<script>
	/** @type {import('./$types').PageData} */
	import Blog from '$lib/components/blog/index.svelte';
	export let data;
	// console.log(data);
</script>

<svelte:head>
	<title>"Орбита-Строй" | Блог компании на тематику строительных и отделочных материалов</title>
	<meta name="description" content="Информационне посты от нашей компании по строительной теме" />
</svelte:head>

<Blog {...data.contentBlog.content} />
