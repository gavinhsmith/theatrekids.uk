<!-- Scripts -->
<script lang="ts">
	import { getMinecraftServerStatus } from '$lib/mcstatus';
	import PingIndicator from './mc/PingIndicator.svelte';
	import NoImageIcon from '~icons/pixelarticons/chart-multiple';

	const { ip, name } = $props();

	const serverStatusFetch = getMinecraftServerStatus(ip);
</script>

<!-- Layout -->
<div
	class="server-stats text-base-light flex w-full flex-row items-center px-4 py-1 font-mono text-xs md:px-12 md:py-3 md:text-sm"
>
	{#await serverStatusFetch}
		<div
			class="server-icon flex aspect-square h-16 flex-row items-center justify-center bg-zinc-300"
		>
			<h1 class="text-2xl text-black"><NoImageIcon /></h1>
		</div>
		<div class="m-2 flex w-full flex-row items-center">
			<h1 class="font-bold">Loading Server Status...</h1>
		</div>
	{:then status}
		<img class="server-icon aspect-square h-16" src={status.icon} alt="Server Icon" />
		<div class="mx-2 flex w-full flex-col">
			<div class="flex flex-row items-center justify-between">
				<h1 class="font-bold text-white">{name}</h1>
				<div class="flex flex-row items-center justify-end">
					<h1 class="mr-2">{status.players.online}/{status.players.max}</h1>
					<PingIndicator ping={status.ping} />
				</div>
			</div>
			<div class="flex w-full flex-col items-start">
				<h2>{@html status.motd.html.replaceAll('\n', '<br>')}</h2>
			</div>
		</div>
	{/await}
</div>

<!-- Style -->
<style>
	.server-stats {
		background-image: url('/assets/img/bg/dirt.webp');
		background-position: center;
		background-size: 100%;
	}
	.server-icon {
		image-rendering: -webkit-optimize-contrast;
	}
</style>
