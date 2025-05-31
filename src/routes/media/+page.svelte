<script lang="ts">
	import TitleBanner from '../../components/text/TitleBanner.svelte';
</script>

<title>TheatreKids - Media</title>

<div class="text-base text-lg">
	<div class="mx-5 my-5 md:mx-15 md:my-10 [&>*]:mb-4">
		<TitleBanner>Media</TitleBanner>

		<div class="w-full aspect-video relative">
			<iframe
				title="RollinWheels Twitch Stream"
				src="https://player.twitch.tv/?channel=rollinwheels&autoplay=false&parent=iframe.ly&parent=cdn.iframe.ly&parent=iframely.net&parent=theatrekids.uk&parent=iframely.com&parent=if-cdn.com"
				style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;"
                class="w-full h-full border-0 absolute"
				allowfullscreen
				scrolling="no"
				allow="encrypted-media *;"
			></iframe>
		</div>
	</div>
</div>
