<script>
	/** @type {import('./$types').PageData} */
	import Actions from '$lib/components/actions/index.svelte';
	export let data;
</script>

<svelte:head>
	<title>Актуальные акции и предложения | Интернет-магазин «Орбита-Строй»</title>
	<meta name="description" content="Стройматериалы со скидкой в интернет-магазине «Орбита-Строй»" />
</svelte:head>

<Actions {...data.contentActions} />
