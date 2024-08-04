'use client';
import { ProductFilterProps } from './ProductFilter.props';
import styles from './ProductFilter.module.css';

import { SelectCategory } from '../SelectCategory/SelectCategory';
import { PriceRange } from '../PriceRange/PriceRange';
// import { ToggleDiscount } from '../ToggleDiscount/ToggleDiscount';
import { FormSearchCatalog } from '../FormSearchCatalog/FormSearchCatalog';
import { useSearchParams, useRouter } from 'next/navigation';

export const ProductFilter = ({
	...props
}: ProductFilterProps): JSX.Element => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const categoryId = searchParams.get('categoryId');

	const handleCategoryChange = (selectedCategory: string) => {
		const params = new URLSearchParams(searchParams.toString());
		if (selectedCategory) {
			params.set('categoryId', selectedCategory);
		} else {
			params.delete('categoryId');
		}
		router.push(`/shop?${params.toString()}`);
	};

	return (
		<div className={styles.filter}>
			<FormSearchCatalog />
			<SelectCategory
				onCategoryChange={handleCategoryChange}
				selectedCategory={categoryId || ''}
			/>
			<PriceRange step={1} priceGap={0} />
			{/* <ToggleDiscount /> */}
		</div>
	);
};
