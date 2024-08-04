'use client';
import React, { useEffect, useState } from 'react';
import { getProducts } from '@/api/products';
import { Product } from '@/interfaces/products.interface';
import { ProductListLatestProps } from './ProductListLatest.props';
import { ProductCard } from '../ProductCard/ProductCard';
import styles from './ProductListLatest.module.css';

export const ProductListLatest = ({
	...props
}: ProductListLatestProps): JSX.Element => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		async function fetchProducts() {
			try {
				const data = await getProducts(6, 0);
				setProducts(data.products.slice(0, 6));
			} catch (error) {
				console.error(error);
			}
		}
		fetchProducts();
	}, []);

	return (
		<div className={styles.productListLatest}>
			{products.map((product) => (
				<ProductCard key={product.sku} product={product} />
			))}
		</div>
	);
};
