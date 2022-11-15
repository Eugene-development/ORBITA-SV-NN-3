<script>
	export let SEO;
</script>

<svelte:head>
	<title>{SEO.title}</title>
	<meta name="description" content={SEO.description} />
</svelte:head>
