<!-- Script -->
<script lang="ts">
	import '../styles/theme.css';

	import Navbar from '../components/ui/nav/Navbar.svelte';
	import Sidebar from '../components/ui/nav/Sidebar.svelte';
	
	let { children } = $props();
</script>

<!-- Layout -->
<div class="body w-screen h-screen flex flex-col items-center">
	<div class="tv-box mt-12 md:mb-12 w-full md:w-5/6 xl:w-2/3 h-full flex flex-row">
		<Sidebar />
		<div class="flex flex-col w-full">
			<Navbar />
			<div>{@render children()}</div>
		</div>
	</div>
</div> 

<!-- Styles -->
<style>
	.body {
		background-image: url("/assets/img/bg/bricks.png");
		background-position: center;
	}

	.tv-box {
		background-image: url("/assets/img/bg/paper.png");
		background-position: center;
	}
</style>