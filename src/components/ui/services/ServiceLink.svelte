<script lang="ts">
	import { fetchServiceInfo } from '$lib/service';
	import CubeIcon from '~icons/cil/3d';
	import FailedIcon from '~icons/pixelarticons/contact-delete';

	const { id, type } = $props();

	const serviceInfoPromise = fetchServiceInfo(id);
</script>

<div class="w-full">
	{#await serviceInfoPromise}
		<div
			class="bg-accent hover:bg-accent-second flex w-full flex-row items-center gap-4 p-4 text-white transition-colors"
		>
			<div class="text-5xl">
				<FailedIcon />
			</div>
			<div class="flex flex-col items-start justify-center">
				<h1 class="font-serif text-3xl">{id}</h1>
				<p class="text-lg">Loading service information...</p>
			</div>
		</div>
	{:then info}
		<a
			href="/games/{type}/{id}"
			class="bg-accent hover:bg-accent-second flex w-full flex-row items-center gap-4 p-4 text-white transition-colors"
		>
			<div class="text-5xl">
				{#if info.icon === 'cube'}
					<CubeIcon />
				{:else}
					<FailedIcon />
				{/if}
			</div>
			<div class="flex flex-col items-start justify-center">
				<h1 class="font-serif text-3xl">{info.name}</h1>
				<p class="text-lg">{info.desc_short}</p>
			</div>
		</a>
	{/await}
</div>
