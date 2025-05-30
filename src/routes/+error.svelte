<!-- Script -->
<script lang="ts">
	import { page } from '$app/state';
	import TitleBanner from '../components/text/TitleBanner.svelte';
</script>

<!-- Layout -->
<title>{page.status}</title>

<div class="text-base text-lg">
	<div class="mx-5 my-5 md:mx-15 md:my-10 [&>*]:mb-4">
		<TitleBanner>{page.status} - {page.error?.message}</TitleBanner>

		{#if page.status === 404}
			<p>The requested resource was not found. Please check your URL and try again.</p>
			<p>If you believe this is a mistake, contact the webmaster.</p>
		{:else}
			<p>
				An unexpected error has occured. Please try again later, or if this error persists contact
				the webmaster.
			</p>
		{/if}
	</div>
</div>
