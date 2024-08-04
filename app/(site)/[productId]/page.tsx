import styles from './page.module.css';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Product'
	};
}

export default function Product() {
	return <main className={styles.main}>страница товара</main>;
}
