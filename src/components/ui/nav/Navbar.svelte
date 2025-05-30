<!-- Script -->
<script lang="ts">
	import Logo from '../brand/Logo.svelte';

	import DropdownClosedIcon from '~icons/pixelarticons/align-justify';
	import DropdownOpenIcon from '~icons/pixelarticons/arrow-bar-up';

	let navbarOpen = $state(false);
</script>

<!-- Layout -->
<nav class="bg-accent text-base-light flex w-full flex-col px-4 py-2 md:flex-row">
	<div class="flex flex-row items-center justify-between md:justify-start">
		<div class="lg:hidden">
			<Logo />
		</div>
		<button
			onclick={() => (navbarOpen = !navbarOpen)}
			class="touch-manipulation font-serif text-3xl md:hidden {navbarOpen
				? 'text-white'
				: 'text-base-light'}"
		>
			{#if navbarOpen}
				<DropdownOpenIcon />
			{:else}
				<DropdownClosedIcon />
			{/if}
		</button>
	</div>
	<div
		class="flex flex-col items-end gap-2 overflow-y-hidden font-serif text-2xl md:w-full {navbarOpen
			? 'h-fit'
			: 'h-0'} md:h-full md:flex-row md:items-center md:justify-end md:gap-5"
	>
		<a class="transition-colors hover:text-white" href="/media">Media</a>
		<a class="transition-colors hover:text-white" href="/blog">News & Updates</a>
		<a class="transition-colors hover:text-white" href="/games">Game Services</a>
	</div>
</nav>
