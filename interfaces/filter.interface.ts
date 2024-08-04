export interface Root {
	categories: Category[];
	maxPrice: number;
	minPrice: number;
}

export interface Category {
	id: number;
	name: string;
}