import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

export interface SelectCategoryProps
	extends DetailedHTMLProps<
		SelectHTMLAttributes<HTMLSelectElement>,
		HTMLSelectElement
	> {
	onCategoryChange: (categoryId: string) => void;
	selectedCategory?: string;
}
