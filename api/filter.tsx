import axios, { AxiosError } from 'axios';
import { API } from '@/app/api';

export async function getFilter() {
	try {
		const response = await axios.get(API.filter);
		return response.data;
	} catch (error: unknown) {
		if (error instanceof AxiosError) {
			throw new Error(`Error geting filter: ${error.message}`);
		} else {
			throw new Error(`Unknown error geting products: ${error}`);
		}
	}
}
