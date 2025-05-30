<!-- Script -->
<script lang="ts">
	import Header from '../components/text/Header.svelte';
	import TitleBanner from '../components/text/TitleBanner.svelte';
	import Newsreel from '../components/ui/nav/Newsreel.svelte';
</script>

<!-- Layout -->
<title>TheatreKids</title>

<div class="text-base text-lg">
	<Newsreel />
	<div class="mx-5 my-5 md:mx-15 md:my-10 [&>*]:mb-4">
		<TitleBanner>TheatreKids</TitleBanner>
		<p>This shit looked like ass but now it doesn't! Also it's much more usable on mobile! #winning</p>
		<Header>Recent Headlines</Header>
	</div>
</div>

<!-- Inline Styles -->
<style></style>
