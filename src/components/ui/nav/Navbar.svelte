<!-- Script -->
<script lang="ts">
	import Logo from '../brand/Logo.svelte';

	import DropdownClosedIcon from '~icons/pixelarticons/align-justify';
	import DropdownOpenIcon from '~icons/pixelarticons/arrow-bar-up';

	let navbarOpen = $state(false);
</script>

<!-- Layout -->
<nav class="flex w-full flex-col bg-accent px-4 py-2 text-base-light md:flex-row">
	<div class="flex flex-row items-center justify-between md:justify-start">
		<div class="xl:hidden">
			<Logo />
		</div>
		<button
			onclick={() => (navbarOpen = !navbarOpen)}
			class="touch-manipulation font-serif text-3xl md:hidden {navbarOpen ? "text-white" : "text-base-light"}"
		>
			{#if navbarOpen}
				<DropdownOpenIcon />
			{:else}
				<DropdownClosedIcon />
			{/if}
		</button>
	</div>
	<div
		class="flex flex-col items-end overflow-y-hidden md:flex-row md:items-center md:justify-end {navbarOpen
			? 'h-fit'
			: 'h-0'} font-serif text-2xl md:h-full md:w-full"
	>
		<a class="hover:text-white transition-colors ml-5 mb-2 md:mb-0" href="/about">About</a>
		<a class="hover:text-white transition-colors ml-5 mb-2 md:mb-0" href="/blog">News + Updates</a>
		<a class="hover:text-white transition-colors ml-5 mb-2 md:mb-0" href="/games">Game Services</a>
	</div>
</nav>
