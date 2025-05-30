import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { fetchServiceInfo } from '$lib/service';

export const load: PageLoad = ({ params }) => {
    return fetchServiceInfo(params.id);
};
