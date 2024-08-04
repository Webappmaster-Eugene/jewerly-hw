'use client';
import styles from './FormSearchSite.module.css';
import { FormSearchSiteProps } from './FormSearchSite.props';
import React, { useState } from 'react';
import SearchIcon from '@/public/icon-search-input.svg';

export const FormSearchSite = ({
	...props
}: FormSearchSiteProps): JSX.Element => {
	return (
		<form className={styles.search}>
			<SearchIcon />
			<input type="text" placeholder="Поиск" className={styles.input} />
		</form>
	);
};
