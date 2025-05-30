interface ServiceInformation {
	name: string;
	desc_short: string;
	desc: string;
	op: string;
	icon?: 'cube';
	id: string;
	special?: any;
}

export const fetchServiceInfo = (id: string): Promise<ServiceInformation> => {
	return new Promise((resolve, reject) => {
		if (id === 'tkm') {
			resolve({
				name: 'TKM',
				desc_short: "TK's Offical Minecraft Server",
				desc: "<p>Hey everybody just an FYI I'm after you. Like I've turned evil and shit and I'm after you now.</p>",
				op: "Wheels",
				icon: 'cube',
				id,
				special: {
					java: {
						ip: "smp.theatrekids.uk"
					},
					bedrock: {
						ip: "smp.theatrekids.uk"
					},
					bluemap: "http://smp.theatrekids.uk:8132"
				}
			});
		} else if (id === 'tkmb') {
			resolve({
				name: 'TKMB',
				desc_short: "TK's Minecraft Server for b1.7.3",
				desc: "<p>This server is not real.</p>",
				op: "Wheels",
				icon: 'cube',
				id,
				special: {
					java: {
						ip: "beta.smp.theatrekids.uk"
					}
				}
			});
		} else {
			reject(`Could not load service ${id}.`);
		}
	});
};
