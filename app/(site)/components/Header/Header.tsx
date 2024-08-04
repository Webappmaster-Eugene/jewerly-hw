'use client';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import React, { useState } from 'react';
import Link from 'next/link';
import { ButtonIconSearch } from '../ButtonIconSearch/ButtonIconSearch';
import { FormSearchSite } from '../FormSearchSite/FormSearchSite';
import { MobileMenu } from '../MobileMenu/MobileMenu';

import CartIcon from '@/public/icon-cart.svg';
import FavoritesIcon from '@/public/icon-favorites.svg';
import ProfileIcon from '@/public/icon-profile.svg';
import MobileMenuOpenIcon from '@/public/icon-mobile-menu-open.svg';
import MobileMenuCloseIcon from '@/public/icon-mobile-menu-close.svg';

import { motion } from 'framer-motion';

export const Header = ({
	logoClassName,
	...props
}: HeaderProps): JSX.Element => {
	const [cartCount, setCartCount] = useState(3);
	const [isSearchVisible, setIsSearchVisible] = useState(false);
	const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

	const handleSearchButtonClick = () => {
		setIsSearchVisible((prevState) => !prevState);
	};

	const handleIconMobileMenuClick = () => {
		setIsMobileMenuVisible((prevState) => !prevState);
	};

	return (
		<header className={styles.header}>
			<Link href="/" className={`${styles.logo} ${logoClassName}`}>
				<span className={styles.slogo}>S</span>HOPPE
			</Link>
			<nav className={styles.nav}>
				<Link href="/shop">Магазин</Link>
				<Link href="/about">О нас</Link>
			</nav>
			{!isSearchVisible && (
				<div className={styles.searchButton}>
					<ButtonIconSearch onClick={handleSearchButtonClick} />
				</div>
			)}
			{isSearchVisible && (
				<motion.div
					className={styles.search}
					initial={{ opacity: 0.5, width: 0 }}
					animate={{ opacity: 1, width: 288 }}
					transition={{ duration: 0.3 }}
				>
					<FormSearchSite />
				</motion.div>
			)}
			<nav className={styles.icons}>
				<Link href="/cart" className={styles.cart}>
					<CartIcon />
					{cartCount > 0 && (
						<span className={`${styles.cartCount} ${logoClassName}`}>
							{cartCount}
						</span>
					)}
				</Link>
				<Link href="/favorites" className={styles.favorites}>
					<FavoritesIcon />
				</Link>
				<Link href="/login" className={styles.login}>
					<ProfileIcon />
				</Link>

				{isMobileMenuVisible ? (
					<MobileMenuCloseIcon
						className={styles.mobileMenuClose}
						onClick={handleIconMobileMenuClick}
					/>
				) : (
					<MobileMenuOpenIcon
						className={styles.mobileMenuOpen}
						onClick={handleIconMobileMenuClick}
					/>
				)}
			</nav>
			<div className={styles.searchMobile}>
				<FormSearchSite />
			</div>
			{isMobileMenuVisible && (
				<div className={styles.mobileMenu}>
					<MobileMenu />
				</div>
			)}
		</header>
	);
};
