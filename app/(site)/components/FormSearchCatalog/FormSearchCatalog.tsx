'use client';
import styles from './FormSearchCatalog.module.css';
import { FormSearchCatalogProps } from './FormSearchCatalog.props';
import React from 'react';
import LoupeIcon from '@/public/icon-search-button.svg';
import { Input } from '../Input/Input';
import { InputType } from '../Input/Input.props';
import { useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormData } from '@/interfaces/formData.interface';

export const FormSearchCatalog = ({
	...props
}: FormSearchCatalogProps): JSX.Element => {
	const { register, handleSubmit } = useForm<FormData>();

	const router = useRouter();
	const searchParams = useSearchParams();

	const onSubmit = (data: FormData) => {
		const params = new URLSearchParams(searchParams);
		if (data.text) {
			params.set('name', data.text);
		} else {
			params.delete('name');
		}
		router.push(`/shop?${params.toString()}`);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
			<Input
				type={InputType.Text}
				placeholder="Поиск..."
				register={register}
				name="text"
			/>

			<button type="submit" className={styles.button}>
				<LoupeIcon />
			</button>
		</form>
	);
};
