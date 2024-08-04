'use client';

import { ToggleDiscountProps } from './ToggleDiscount.props';
import styles from './ToggleDiscount.module.css';

export const ToggleDiscount = ({
	onChange,
	...props
}: ToggleDiscountProps): JSX.Element => {
	return (
		<label className={styles.switch}>
			<span className={styles.label}>Со скидкой</span>
			<input
				type="checkbox"
				className={styles.input}
				onChange={onChange}
				{...props}
			/>
			<span className={styles.slider}></span>
		</label>
	);
};
