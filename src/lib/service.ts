interface ServiceInformation {
	name: string;
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
				desc: "TK's Offical Minecraft Server",
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
				desc: "TK's Minecraft Server for b1.7.3",
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
