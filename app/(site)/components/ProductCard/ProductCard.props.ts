import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Product } from '@/interfaces/products.interface';

export interface ProductCardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: Product;
}
