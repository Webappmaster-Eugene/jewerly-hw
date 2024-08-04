'use client';
import styles from './Input.module.css';
import { InputProps } from './Input.props';
import React from 'react';

export const Input = ({
	placeholder,
	type,
	register,
	name,
	...props
}: InputProps): JSX.Element => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			{...register(name, { required: true })}
			className={styles.input}
			{...props}
		/>
	);
};
