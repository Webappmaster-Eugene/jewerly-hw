'use client';
import styles from './ButtonIconCart.module.css';
import { ButtonIconCartProps } from './ButtonIconCart.props';
import CartIcon from '@/public/icon-cart.svg';

export const ButtonIconCart = ({
	onClick,
	...props
}: ButtonIconCartProps): JSX.Element => {
	return <CartIcon onClick={onClick} className={styles.iconSearch} />;
};
