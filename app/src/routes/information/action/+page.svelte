<script>
	/** @type {import('./$types').PageData} */
	import Actions from '$lib/components/actions/index.svelte';
	export let data;
</script>

<svelte:head>
	<title>"Орбита-строй" | Стройматериалы по акции</title>
	<meta name="description" content="Акции на стройматериалы от компании 'Орбита строй'" />
</svelte:head>

<Actions {...data.contentActions} />
