<script>
	import '../app.css';
	import MobileMenu from '$lib/components/mobile-menu/index.svelte';
	import Search from '$lib/components/search/index.svelte';
	import Banner from '$lib/components/banner/index.svelte';
	import Header from '$lib/components/header/index.svelte';
	import Footer from '$lib/components/footer/index.svelte';
	export let data;
</script>

<MobileMenu />
<Search />

<Banner />
<Header {...data.contentCatalog} {...data.contentInformationMenu} />
<slot />
<Footer />
