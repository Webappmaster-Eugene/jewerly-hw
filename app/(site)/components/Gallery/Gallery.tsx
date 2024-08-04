'use client';
import { GalleryProps } from './Gallery.props';
import styles from './Gallery.module.css';
import { Product } from '@/interfaces/products.interface';
import { getProducts } from '@/api/products';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Gallery = ({ ...props }: GalleryProps): JSX.Element => {
	const [products, setProducts] = useState<Product[]>([]);
	const [currentProduct, setCurrentProduct] = useState(0);

	const galleryIcons = ['/icon-galery-1.svg', '/icon-galery-2.svg'];

	const selectProduct = (index: number) => {
		setCurrentProduct(index);
	};

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
		<div className={styles.gallery} {...props}>
			{products.length > 0 && (
				<>
					<Image
						src={galleryIcons[currentProduct % galleryIcons.length]}
						alt={''}
						className={styles.image}
						width={1248}
						height={646}
						layout="responsive"
					/>
					<div className={styles.info}>
						<div className={styles.productName}>
							{products[currentProduct].name}
						</div>
						<div className={styles.productPrice}>
							$ {products[currentProduct].price.toFixed(2).replace('.', ',')}
						</div>
						<Link
							href={`/product/${products[currentProduct].sku}`}
							className={styles.linkProduct}
						>
							Смотреть
						</Link>
					</div>
				</>
			)}
			<div className={styles.controls}>
				{products.map((_, index) => (
					<span
						key={index}
						className={`${styles.controlDot} ${
							index === currentProduct ? styles.active : ''
						}`}
						onClick={() => selectProduct(index)}
					></span>
				))}
			</div>
		</div>
	);
};
