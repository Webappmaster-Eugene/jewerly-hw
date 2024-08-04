'use client';

import { PriceRangeProps } from './PriceRange.props';
import styles from './PriceRange.module.css';
import { useState, useEffect, ChangeEvent } from 'react';
import { getFilter } from '@/api/filter';
import { useRouter, useSearchParams } from 'next/navigation';

export const PriceRange = ({
	step,
	priceGap,
	...props
}: PriceRangeProps): JSX.Element => {
	const [minValue, setMinValue] = useState(0);
	const [maxValue, setMaxValue] = useState(0);
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(0);

	const router = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		async function fetchFilterData() {
			try {
				const data = await getFilter();
				const minPriceParam = searchParams.get('minPrice');
				const maxPriceParam = searchParams.get('maxPrice');
				setMin(data.minPrice);
				setMax(data.maxPrice);
				setMinValue(minPriceParam ? Number(minPriceParam) : data.minPrice);
				setMaxValue(maxPriceParam ? Number(maxPriceParam) : data.maxPrice);
			} catch (error) {
				console.error(error);
			}
		}

		fetchFilterData();
	}, [searchParams]);

	const handleMinRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Math.min(Number(e.target.value), maxValue - priceGap);
		setMinValue(value);
		const params = new URLSearchParams(searchParams.toString());
		params.set('minPrice', value.toString());
		router.push(`/shop?${params.toString()}`);
	};

	const handleMaxRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Math.max(Number(e.target.value), minValue + priceGap);
		setMaxValue(value);
		const params = new URLSearchParams(searchParams.toString());
		params.set('maxPrice', value.toString());
		router.push(`/shop?${params.toString()}`);
	};

	return (
		<div className={styles.priceRange}>
			<div className={styles.slider}>
				<div
					className={styles.progress}
					style={{
						left: `${((minValue - min) / (max - min)) * 100}%`,
						right: `${100 - ((maxValue - min) / (max - min)) * 100}%`
					}}
				/>
			</div>
			<div className={styles.rangeInput}>
				<input
					type="range"
					min={min}
					max={max}
					value={minValue}
					step={step}
					onChange={handleMinRangeChange}
					className={styles.rangeMin}
				/>
				<input
					type="range"
					min={min}
					max={max}
					value={maxValue}
					step={step}
					onChange={handleMaxRangeChange}
					className={styles.rangeMax}
				/>
			</div>
			<div className={styles.priceDisplay}>
				Цена: ${minValue} – ${maxValue}
			</div>
		</div>
	);
};
