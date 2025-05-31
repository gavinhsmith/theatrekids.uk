<!-- Script -->
<script lang="ts">
	import Header from '../../components/text/Header.svelte';
	import TitleBanner from '../../components/text/TitleBanner.svelte';
	import ServiceLink from '../../components/ui/services/ServiceLink.svelte';
</script>

<!-- Layout -->
<title>TheatreKids - Games Services</title>

<div class="text-base text-lg">
	<div class="mx-5 my-5 md:mx-15 md:my-10 [&>*]:mb-4">
		<TitleBanner>Game Services</TitleBanner>

        <p>Here you can find information on any of the video game servers/services run by TK.</p>

        <Header>Minecraft</Header>

        <div class="w-full flex flex-col md:flex-row justify-stretch gap-2">
            <ServiceLink id="tkm" type="mc" />
            <ServiceLink id="tkmb" type="mc" />
        </div>
	</div>
</div>
