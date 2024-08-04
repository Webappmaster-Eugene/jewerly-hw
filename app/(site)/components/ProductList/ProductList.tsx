'use client';
import { useEffect, useState } from 'react';

import { getProducts } from '@/api/products';
import { Product } from '@/interfaces/products.interface';
import { ProductListProps } from './ProductList.props';
import { ProductCard } from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';

export const ProductList = ({
	products,
	...props
}: ProductListProps): JSX.Element => {
	// const [products, setProducts] = useState<Product[]>([]);
	// const [totalProducts, setTotalProducts] = useState(0);

	// useEffect(() => {
	// 	async function fetchProducts() {
	// 		try {
	// 			const { products, totalProducts } = await getProducts(
	// 				3,
	// 				(currentPage - 1) * 3
	// 			);
	// 			setProducts(products);
	// 			setTotalProducts(totalProducts);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	}
	// 	fetchProducts();
	// }, [currentPage]);

	return (
		<div className={styles.productList}>
			{products.map((value, key) => (
				<ProductCard key={key} product={value} />
			))}
		</div>
	);
};
