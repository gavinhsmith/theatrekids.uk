<!-- Script -->
<script lang="ts">
	import { quote } from "$lib/quote";
	import "../../../styles/bg.css";

	import Logo from '../brand/Logo.svelte';
</script>

<!-- Layout -->
<nav
	class="sidebar text-base-light hidden w-96 flex-col items-center justify-start px-4 py-2 lg:flex [&>*]:mb-3"
>
	<a href="/" class="font-serif text-2xl">
		<Logo />
	</a>
	<div class="flex w-max flex-col items-center font-serif text-sm">
		<p>"{quote.text}"</p>
		<p>- {quote.author}</p>
	</div>
	<hr class="border-base-light w-2/3 border-1 border-dashed" />
	<div class="flex h-full w-max flex-col items-center justify-between"></div>
	<hr class="border-base-light w-2/3 border-1 border-dashed" />
	<div class="flex w-max flex-row justify-center">
		<p class="w-full font-serif">[c] TheatreKids 2025</p>
	</div>
</nav>
