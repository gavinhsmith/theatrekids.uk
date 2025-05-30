<!-- Script -->
<script lang="ts">
	import '../styles/theme.css';
	import '../styles/bg.css';

	import Navbar from '../components/ui/nav/Navbar.svelte';
	import Sidebar from '../components/ui/nav/Sidebar.svelte';
	import Newsreel from '../components/ui/nav/Newsreel.svelte';
	
	let { children } = $props();
</script>

<!-- Layout -->
<div class="body w-screen h-screen flex flex-col items-center overflow-y-scroll">
	<div class="tv-box mt-12 md:mb-12 w-full md:w-5/6 xl:w-2/3 h-full flex flex-row">
		<Sidebar />
		<div class="flex flex-col w-full">
			<Navbar />
			<Newsreel />
			<div class="overflow-y-scroll">{@render children()}</div>
		</div>
	</div>
</div>
