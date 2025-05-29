<!-- Script -->
<script lang="ts">
	import { page } from '$app/state';
</script>

<!-- Layout -->
<title>{page.status}</title>

<div class="p-5 md:p-10">
	<h1 class="text-accent font-serif text-4xl">{page.status} - {page.error?.message}</h1>

	{#if page.status === 404}
		<p>The requested resource was not found. Please check your URL and try again.</p>
		<p>If you believe this is a mistake, contact the webmaster.</p>
	{:else}
        <p>An unexpected error has occured. Please try again later, or if this error persists contact the webmaster.</p>
    {/if}
</div>
