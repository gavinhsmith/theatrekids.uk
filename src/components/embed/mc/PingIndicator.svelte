<!-- Script -->
<script lang="ts">
    import ServerPingGoodIcon from '~icons/pixelarticons/cellular-signal-3';
    import ServerPingMidIcon from '~icons/pixelarticons/cellular-signal-2';
    import ServerPingBadIcon from '~icons/pixelarticons/cellular-signal-1';
    import ServerPingEvilIcon from '~icons/pixelarticons/cellular-signal-0';

    const {ping} = $props();
</script>

<!-- Layout -->
{#if ping <= 50}
    <p class="flex flex-row items-center text-green-400"><ServerPingGoodIcon /><span class="ml-1">{ping}ms</span></p>
{:else if ping <= 100}
    <p class="flex flex-row items-center text-yellow-300"><ServerPingMidIcon /><span class="ml-1">{ping}ms</span></p>
{:else if ping <= 350}
    <p class="flex flex-row items-center text-orange-600"><ServerPingBadIcon /><span class="ml-1">{ping}ms</span></p>
{:else}
    <p class="flex flex-row items-center text-red-500"><ServerPingEvilIcon /><span class="ml-1">{ping}ms</span></p>
{/if}