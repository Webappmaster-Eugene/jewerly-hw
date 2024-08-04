import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PriceRangeProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	step: number;
	priceGap: number;
}
