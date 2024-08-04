import axios, { AxiosError } from 'axios';
import { API } from '@/app/api';
import { Root } from '@/interfaces/products.interface';

export async function getProducts(
	limit: number,
	offset: number,
	discounted?: boolean
): Promise<Root> {
	try {
		const response = await axios.get(API.products, {
			params: {
				limit,
				offset,
				discounted: discounted ? true : undefined
			}
		});
		return response.data;
	} catch (error: unknown) {
		if (error instanceof AxiosError) {
			throw new Error(`Error geting products: ${error.message}`);
		} else {
			throw new Error(`Unknown error geting products: ${error}`);
		}
	}
}
