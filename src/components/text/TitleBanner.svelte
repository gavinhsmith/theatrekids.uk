<!-- Script -->
<script lang="ts">
    const {children} = $props();
</script>

<!-- Layout -->
<div class="flex w-full flex-row items-center justify-between">
	<hr class="border-accent mr-4 grow border-2 border-dashed" />
	<h1 class="text-accent font-serif text-4xl text-center">{@render children()}</h1>
	<hr class="border-accent ml-4 grow border-2 border-dashed" />
</div>
