'use client';
import styles from './ButtonIconSearch.module.css';
import { ButtonIconSearchProps } from './ButtonIconSearch.props';
import React, { useState } from 'react';
import SearchIcon from '@/public/icon-search-button.svg';

export const ButtonIconSearch = ({
	onClick,
	...props
}: ButtonIconSearchProps): JSX.Element => {
	return <SearchIcon onClick={onClick} className={styles.iconSearch} />;
};
