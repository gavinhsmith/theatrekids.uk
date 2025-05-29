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
    }
    motd: {
        raw: string;
        clean: string;
        html: string;
    }
    icon: string;
    mods: string[];
    software: any;
    plugins: string[];
}

export function getMinecraftServerStatus(ip: string): Promise<ServerStatus> {
    return fetch(`https://api.mcstatus.io/v2/status/java/${ip}?query=true`).then(res => res.json());
}