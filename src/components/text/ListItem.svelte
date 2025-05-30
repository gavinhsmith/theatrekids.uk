<script lang="ts">
	const { children, index } = $props();
</script>

<div class="flex flex-row items-start gap-1">
	<p class="mx-3">{index}.</p>
	<p class="w-full">{@render children()}</p>
</div>
