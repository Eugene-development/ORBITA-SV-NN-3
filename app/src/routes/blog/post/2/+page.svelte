<script>
	/** @type {import('./$types').PageData} */
	import Post from '$lib/components/post/index.svelte';
	export let data;
</script>

<svelte:head>
	<title>"Орбита-Строй" | Пост компании на тематику строительных и отделочных материалов</title>
	<meta
		name="description"
		content="Информационный пост от нашей компании по строительной тематике"
	/>
</svelte:head>

<Post {...data.contentPost.post} />
