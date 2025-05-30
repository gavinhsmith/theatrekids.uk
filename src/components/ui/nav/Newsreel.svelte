<!-- Script -->
<script lang="ts">
	import '../../../styles/bg.css';

    import { quote } from '$lib/quote';
</script>

<!-- Layout -->
<div class="sidebar flex flex-row justify-center py-3 w-full text-base-light font-serif text-sm lg:hidden">
    <p>"{quote.text}" - {quote.author}</p>
</div>
