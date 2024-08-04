import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface ToggleDiscountProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
