'use client';
import { SelectCategoryProps } from './SelectCategory.props';
import styles from './SelectCategory.module.css';
import { getFilter } from '@/api/filter';
import { Category } from '@/interfaces/filter.interface';
import { useEffect, useState, ChangeEvent } from 'react';

export const SelectCategory = ({
	onCategoryChange,
	selectedCategory,
	...props
}: SelectCategoryProps): JSX.Element => {
	const [categories, setCategories] = useState<Category[]>([]);

	const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const selectedCategoryId = event.target.value;
		onCategoryChange(selectedCategoryId);
	};

	useEffect(() => {
		async function fetchCategories() {
			try {
				const data = await getFilter();
				setCategories(data.categories);
			} catch (error) {
				console.error(error);
			}
		}
		fetchCategories();
	}, []);

	return (
		<select
			onChange={handleCategoryChange}
			className={styles.select}
			value={selectedCategory}
			{...props}
		>
			<option value="">Категория</option>
			{categories.map((category) => (
				<option key={category.id} value={category.id}>
					{category.name}
				</option>
			))}
		</select>
	);
};
