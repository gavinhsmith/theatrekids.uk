<!-- Script -->
<script lang="ts">
	import MinecraftServerInfo from '../../../../components/embed/MinecraftServerInfo.svelte';

	import Header from '../../../../components/text/Header.svelte';
	import ListItem from '../../../../components/text/ListItem.svelte';
	import TitleBanner from '../../../../components/text/TitleBanner.svelte';

	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<!-- Layout -->
<div class="text-base text-lg">
	<div class="mx-5 mt-5 md:mx-15 md:mt-10 [&>*]:mb-4">
		<TitleBanner>Game Services</TitleBanner>

		<Header>{data.name}</Header>

		<div>{@html data.desc}</div>

		<MinecraftServerInfo
			name={data.name}
			ip="{data.special.java.ip}{data.special.java.port ? `:${data.special.java.port}` : ''}"
		/>
	</div>

	{#if data.special.bluemap}
		<div class="mx-5 mt-5 md:mx-15 md:mt-10 [&>*]:mb-4">
			<Header>Live Map</Header>
		</div>
		<div class="flex w-full flex-col items-center">
			<iframe
				title="BlueMap"
				src="{data.special.bluemap}/#world:443:35:630:287:0:0:0:0:perspective"
				frameborder="0"
				class="aspect-square w-full md:aspect-video"
			></iframe>
			<p class="font-serif">
				Powered by <a
					class="hover:text-blue-650 text-blue-800 underline"
					target="_blank"
					href="https://bluemap.bluecolored.de/">BlueMap</a
				>
				-
				<a
					class="hover:text-blue-650 text-blue-800 underline"
					target="_blank"
					href={data.special.bluemap}>Full Map</a
				>
			</p>
		</div>
	{/if}

	<div class="mx-5 mt-5 md:mx-15 md:mt-10 [&>*]:mb-4">
		<Header>How To Join</Header>

		<p>Get whitelisted... :P</p>

		<div class="flex w-full flex-col items-center p-2">
			{#if data.special.java}
				<h2 class="font-serif text-2xl">Java</h2>
				<div class="w-full md:w-1/2">
					<div class="flex w-full flex-col">
						<div class="flex flex-row justify-between">
							<span class="font-serif text-xl">IP</span>
							<span class="font-sans">{data.special.java.ip}</span>
						</div>
						<div class="flex flex-row justify-between">
							<span class="font-serif text-xl">Port</span>
							{#if data.special.java.port}
								<span class="font-sans">{data.special.java.port}</span>
							{:else}
								<span class="font-sans">Default (25565)</span>
							{/if}
						</div>
					</div>
				</div>
			{/if}

			{#if data.special.bedrock}
				<h2 class="font-serif text-2xl">Bedrock</h2>
				<div class="w-full md:w-1/2">
					<div class="flex w-full flex-col">
						<div class="flex flex-row justify-between">
							<span class="font-serif text-xl">IP</span>
							<span class="font-sans">{data.special.bedrock.ip}</span>
						</div>
						<div class="flex flex-row justify-between">
							<span class="font-serif text-xl">Port</span>
							{#if data.special.bedrock.port}
								<span class="font-sans">{data.special.bedrock.port}</span>
							{:else}
								<span class="font-sans">Default (19132)</span>
							{/if}
						</div>
					</div>
				</div>
				{#if data.special.java}
					<p class="font-serif text-sm">Bedrock Players - See "Using GeyserMC"</p>
					<p class="font-serif text-sm">Console Players - See "Using BedrockConnect"</p>
				{/if}
			{/if}
		</div>

		{#if data.special.bedrock}
			<Header>Bedrock - Using GeyserMC</Header>

			<p>
				{data.name}'s server software is built for the <span class="font-bold">Java Edition</span>
				of the game, which is only supported on Windows/Mac/Linux devices. To ensure everybody gets a
				chance to play, we utilize a piece of software called
				<a
					class="hover:text-blue-650 text-blue-800 underline"
					href="https://geysermc.org/"
					target="_blank">GeyserMC</a
				>
				to allow <span class="font-bold">Bedrock Edition</span> (i.e. Xbox, Playstation, Nintendo Switch,
				Pocket, and Windows 10/11 Editon) to connect and play on this server.
			</p>

			<p>
				As Java and Bedrock are two different platforms that are not at <span class="font-bold"
					>Feature-Parity</span
				> (not exactly the same), Bedrock players should expect some issues on occasion. Please contact
				the server operator if something is greatly diminishing your ability to play.
			</p>

			<p>
				If you are playing on either <span class="font-bold">Pocket Edition</span> or
				<span class="font-bold">Windows 10/11 Edition</span> (This is seperate than Java Edition on Windows.
				Yes it is confusing), you can just add a new server in your server list with the above information
				and you're ready to go!
			</p>

			<Header>Bedrock - Using BedrockConnect</Header>

			<p>
				If you are playing on a different device, such as a <span class="font-bold">Console</span>,
				you need to take a different approch to connect to the server using a service called
				<a
					class="hover:text-blue-650 text-blue-800 underline"
					href="https://github.com/Pugmatt/BedrockConnect"
					target="_blank">BedrockConnect</a
				>:
			</p>

			<div class="flex flex-col gap-2">
				<ListItem index={1}
					>In the Minecraft main menu, click "Play" and then go to the "Friends" tab, and click "Add
					Friend" or "Find Cross-Platform Friends" or "Search for players". (Whichever is available
					on your game version.)</ListItem
				>
				<ListItem index={2}
					>Search for the gamer tag <span class="font-bold">BCMain</span> (Or
					<span class="font-bold">BCMain1</span>, if BCMain is full or experiencing issues), and add
					this user as friend</ListItem
				>
				<ListItem index={3}
					>Return to the Minecraft Main Menu, and wait about 20 seconds. Then click "Play" and
					return to the "Friends" tab.</ListItem
				>
				<ListItem index={4}
					>Wait a moment, and you should soon see a joinable instance show up, "Join to Open Server
					List". Or, you should see <span class="font-bold">BCMain</span> under the "Online" section
					with a joinable instance. (If the join option doesn't appear, you may need to wait another
					minute for the bot to process the friend request)</ListItem
				>
				<ListItem index={5}>Join instance to connect to BedrockConnect server list.</ListItem>
			</div>

			<p>
				This should open you into a mock server list, which you can use to connect to the server.
			</p>

			<p>
				<span class="font-bold">Note</span> - This account is a bot, and it regularly clears it's friend
				list to ensure multiple people can use it's services. You may have to repeat these steps to get
				into the server at times. Don't worry, the bot still saves your servers.
			</p>
		{/if}
	</div>
</div>
