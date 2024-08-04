'use client';
import styles from './ButtonFavorite.module.css';
import { ButtonFavoriteProps } from './ButtonFavorite.props';
import FavoritesIcon from '@/public/icon-favorites.svg';
import cn from 'classnames';

export const ButtonFavorite = ({
	onClick,
	isFavorite,
	className,
	...props
}: ButtonFavoriteProps): JSX.Element => {
	return (
		<FavoritesIcon
			onClick={onClick}
			className={cn(styles.iconSearch, className, {
				[styles.iconSearchActive]: isFavorite
			})}
		/>
	);
};
