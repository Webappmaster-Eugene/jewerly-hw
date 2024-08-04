import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ClientComponentProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	totalProducts: number;
}
