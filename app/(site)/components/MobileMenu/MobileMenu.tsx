'use client';
import styles from './MobileMenu.module.css';
import { MobileMenuProps } from './MobileMenu.props';
import React, { useState } from 'react';
import Link from 'next/link';
import ProfileIcon from '@/public/icon-profile.svg';
import FavoritesIcon from '@/public/icon-favorites.svg';
import ExitIcon from '@/public/icon-exit.svg';

export const MobileMenu = ({ ...props }: MobileMenuProps): JSX.Element => {
	const [favoritesCount, setFavoritesCount] = useState(3);

	return (
		<div className={styles.mobileMenu}>
			<nav className={styles.nav}>
				<Link href="/">Главная</Link>
				<Link href="/shop">Магазин</Link>
				<Link href="/about">О нас</Link>
			</nav>
			<nav className={styles.icons}>
				<Link href="/profile" className={`${styles.profile} ${styles.icon}`}>
					<ProfileIcon /> Мой аккаунт
				</Link>
				<Link
					href="/favorites"
					className={`${styles.favorites} ${styles.icon}`}
				>
					<FavoritesIcon /> Избранное
					{favoritesCount > 0 && (
						<span className={styles.favoritesCount}>{favoritesCount}</span>
					)}
				</Link>
				<Link href="/login" className={`${styles.exit} ${styles.icon}`}>
					<ExitIcon /> Выход
				</Link>
			</nav>
		</div>
	);
};
