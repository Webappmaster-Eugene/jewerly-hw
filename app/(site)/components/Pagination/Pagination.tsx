'use client';

import { PaginationProps } from './Pagination.props';
import styles from './Pagination.module.css';

export const Pagination = ({
	totalProducts,
	currentPage,
	onPageChange,
	...props
}: PaginationProps): JSX.Element => {
	const productsPerPage = 3;
	const totalPages = Math.ceil(totalProducts / productsPerPage + 1);

	const handlePageChange = (page: number) => {
		onPageChange(page);
	};

	const handleFirst = () => {
		if (currentPage > 1) {
			handlePageChange(1);
		}
	};

	const handlePrevious = () => {
		if (currentPage > 1) {
			handlePageChange(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			handlePageChange(currentPage + 1);
		}
	};

	const handleLast = () => {
		if (currentPage < totalPages) {
			handlePageChange(totalPages);
		}
	};

	return (
		<div className={styles.pagination}>
			<button
				onClick={handleFirst}
				disabled={currentPage === 1}
				className={`${styles.pageButton} ${
					currentPage === 1 ? styles.disabled : ''
				}`}
			>
				&lt;&lt;
			</button>
			<button
				onClick={handlePrevious}
				disabled={currentPage === 1}
				className={`${styles.pageButton} ${
					currentPage === 1 ? styles.disabled : ''
				}`}
			>
				&lt;
			</button>
			{[...Array(totalPages)].map((_, index) => (
				<button
					key={index}
					onClick={() => handlePageChange(index + 1)}
					className={`${styles.pageButton} ${
						currentPage === index + 1 ? styles.active : ''
					}`}
				>
					{index + 1}
				</button>
			))}
			<button
				onClick={handleNext}
				disabled={currentPage === totalPages}
				className={`${styles.pageButton} ${
					currentPage === totalPages ? styles.disabled : ''
				}`}
			>
				&gt;
			</button>
			<button
				onClick={handleLast}
				disabled={currentPage === totalPages}
				className={`${styles.pageButton} ${
					currentPage === totalPages ? styles.disabled : ''
				}`}
			>
				&gt;&gt;
			</button>
		</div>
	);
};
