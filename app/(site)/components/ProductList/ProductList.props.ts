import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Product } from '@/interfaces/products.interface';

export interface ProductListProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	products: Product[];
}
