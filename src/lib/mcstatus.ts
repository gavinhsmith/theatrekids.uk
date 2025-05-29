import { onMount } from 'svelte';

export interface ServerStatus {
	online: boolean;
	host: string;
	port: number;
	ip_address: string;
	eula_blocked: boolean;
	retrieved_at: number;
	expires_at: number;
	srv_record: any;
	version: {
		name_raw: string;
		name_clean: string;
		name_html: string;
		protocol: number;
	};
	players: {
		online: number;
		max: number;
		list: {
			uuid: string;
			name_raw: string;
			name_clean: string;
			name_html: string;
		}[];
	};
	motd: {
		raw: string;
		clean: string;
		html: string;
	};
	icon: string;
	mods: string[];
	software: any;
	plugins: string[];
	ping: number;
}

export function getMinecraftServerStatus(ip: string): Promise<ServerStatus> {
	return new Promise((resolve, reject) => {
		const startTime = new Date().getTime();

		onMount(() => {
			fetch(`https://api.mcstatus.io/v2/status/java/${ip}?query=true`)
				.then((res) => res.json())
				.then((status: ServerStatus) => {
					resolve({ ...status, ping: Math.round(new Date().getTime() - startTime) });
				})
				.catch(reject);
		});
	});
}
