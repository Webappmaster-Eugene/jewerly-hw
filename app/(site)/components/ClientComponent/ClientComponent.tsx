'use client';
import { useState, useEffect } from 'react';

import { ClientComponentProps } from './ClientComponent.props';
import { ProductList } from '../ProductList/ProductList';
import { Pagination } from '../Pagination/Pagination';
import { ToggleDiscount } from '../ToggleDiscount/ToggleDiscount';

import styles from './ClientComponent.module.css';
import { getProducts } from '@/api/products';
import { Product } from '@/interfaces/products.interface';
import {fetchProducts} from "@/app/(site)/shop/action";

export const ClientComponent = ({
	totalProducts,
	...props
}: ClientComponentProps): JSX.Element => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [withDiscount, setWithDiscount] = useState<boolean>(false);
	const [products, setProducts] = useState<Product[]>([]);
	const [totalProductsCount, setTotalProductsCount] = useState<number>(totalProducts);
	const productsPerPage = 3;

	async function fetchProductsAll(productsPerPage: number, currentPage: number, withDiscount?: boolean ) {
		const products = await fetchProducts(productsPerPage, currentPage, withDiscount );
		setProducts((prevValue) => {
			const productsAll = products?.products;
				setTotalProductsCount((prevValue) => products?.totalProducts ? products?.totalProducts : prevValue);
			return productsAll ? [...productsAll] : [...prevValue]
		}
		);
	}

	useEffect(() => {
		fetchProductsAll(productsPerPage, currentPage, withDiscount);
	}, [currentPage, withDiscount]);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const handleToggleDiscount = (event: React.ChangeEvent<HTMLInputElement>) => {
		setWithDiscount((prevValue) => !prevValue);
		setCurrentPage(1);
	};

	console.log(products);

	return (
		<div className={styles.wrapper}>
			<ToggleDiscount onChange={handleToggleDiscount} />
			<ProductList products={products} />
			<Pagination
				totalProducts={totalProductsCount}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};
