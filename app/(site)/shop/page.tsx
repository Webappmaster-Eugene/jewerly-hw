import styles from './page.module.css';
import { Metadata } from 'next';
import { ClientComponent } from '../components';
import { ProductFilter } from '../components';
import { getProducts } from '@/api/products';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Shop'
	};
}

export default async function Shop() {
	const data = await getProducts(3, 0);
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Каталог товаров</h1>
			<div className={styles.wrapperFilter}>
				<div>
					<ProductFilter />
				</div>
				<div className={styles.wrapperCatalog}>
					<ClientComponent totalProducts={data.totalProducts} />
				</div>
			</div>
		</main>
	);
}
