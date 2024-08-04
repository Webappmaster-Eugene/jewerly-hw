import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PaginationProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	totalProducts: number;
	currentPage: number;
	onPageChange: (page: number) => void;
}
