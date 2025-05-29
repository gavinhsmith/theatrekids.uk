<!-- Script -->
<script lang="ts">
	import Logo from '../brand/Logo.svelte';
</script>

<!-- Layout -->
<nav class="sidebar hidden xl:flex flex-col justify-start py-2 px-0 xl:px-2 text-base-light [&>*]:mb-3">
	<div class="flex flex-row justify-center">
		<a href="/" class="font-serif text-2xl">
			<Logo />
		</a>
	</div>
	<hr class="border-0.5 border-base-light w-48 mx-3">
</nav>

<!-- Style -->
<style>
	.sidebar {
		background-image: url('/assets/img/bg/sidebar.png');
		background-position: center;
	}
</style>
