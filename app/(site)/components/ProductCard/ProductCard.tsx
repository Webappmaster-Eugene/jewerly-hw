'use client';
import { ProductCardProps } from './ProductCard.props';
import styles from './ProductCard.module.css';
import Image from 'next/image';
import EyeIcon from '@/public/icon-eye.svg';
import FavoriteActiveIcon from '@/public/icon-favorite-active.svg';
import Link from 'next/link';
import { ButtonIconCart } from '../ButtonIconCart/ButtonIconCart';
import { ButtonFavorite } from '../ButtonFavorite/ButtonFavorite';
import cn from 'classnames';
import React, { useState, MouseEvent } from 'react';

export const ProductCard = ({
	product,
	...props
}: ProductCardProps): JSX.Element => {
	const { price, discount } = product;
	const [isFavorite, setIsFavorite] = useState(false);

	const formattedPrice = (number: number) => {
		return number.toFixed(2).replace('.', ',');
	};
	const priceDiscounted = discount ? price - (price * discount) / 100 : price;

	const handleAddToCart = (e: MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();
		console.log(`${product.name} добавлено в корзину`);
	};

	const handleToggleFavorite = (e: MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();
		setIsFavorite((prevState) => !prevState);
		console.log(`${product.name} текущее состояние избранного: ${!isFavorite}`);
	};
	//href={`/product/${product.sku}`}
	return (
		<div >
			<div className={styles.card} {...props}>
				<div className={styles.wrapperActionMenu}>
					{product.discount && (
						<div className={styles.discount}>- {product.discount}%</div>
					)}
					{isFavorite && (
						<FavoriteActiveIcon className={styles.favoriteActiveIcon} />
					)}

					<Image
						src={product.images[0]}
						alt={product.name}
						className={styles.image}
						width={380}
						height={380}
						layout="responsive" // Настройка для адаптивного изображения
					/>
					<div className={styles.actionMenu}>
						<ButtonIconCart onClick={handleAddToCart} />
						<Link
							href={`/product/${product.sku}`}
							className={styles.linkProduct}
						>
							<EyeIcon />
						</Link>
						<ButtonFavorite
							onClick={handleToggleFavorite}
							isFavorite={isFavorite}
						/>
					</div>
				</div>

				<div className={styles.details}>
					<div className={styles.name}>{product.name}</div>

					<div className={styles.name}>{product.categoryId}</div>

					<div className={styles.price}>
						{discount ? (
							<>
								<span className={cn(styles.priceCommon, styles.priceOld)}>
									$ {formattedPrice(price)}
								</span>
								<span className={styles.priceCommon}>
									$ {formattedPrice(priceDiscounted)}
								</span>
							</>
						) : (
							<span className={styles.priceCommon}>
								$ {formattedPrice(price)}
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
