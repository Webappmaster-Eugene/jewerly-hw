import styles from './page.module.css';
import { Metadata } from 'next';
import { ProductListLatest } from './components';
import { Gallery } from './components';

import React from 'react';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Home'
	};
}

export default async function Home() {
	return (
		<main className={styles.main}>
			<Gallery />

			<div className={styles.top}>
				<h1 className={styles.title}>Последние поступления</h1>
				<button className={styles.button}>Все</button>
			</div>
			<ProductListLatest />
		</main>
	);
}
