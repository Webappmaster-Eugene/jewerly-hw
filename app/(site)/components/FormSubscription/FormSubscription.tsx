'use client';
import styles from './FormSubscription.module.css';
import { FormSubscriptionProps } from './FormSubscription.props';
import React from 'react';
import ArrowIcon from '@/public/icon-arrow.svg';
import CheckmarkIcon from '@/public/icon-checkmark.svg';
import { Input } from '../Input/Input';
import { InputType } from '../Input/Input.props';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FormData } from '@/interfaces/formData.interface';

export const FormSubscription = ({
	...props
}: FormSubscriptionProps): JSX.Element => {
	const { register, handleSubmit, reset } = useForm<FormData>();

	const onSubmit = (data: FormData) => {
		toast.custom(
			<div className={styles.toast}>
				<CheckmarkIcon />
				<div>Ваш email подписан на новости и уведомления</div>
			</div>
		);

		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
			<Input
				type={InputType.Email}
				placeholder="Ваш email для акций и предложений"
				register={register}
				name="email"
			/>
			<button type="submit" className={styles.button}>
				<ArrowIcon />
			</button>
		</form>
	);
};
