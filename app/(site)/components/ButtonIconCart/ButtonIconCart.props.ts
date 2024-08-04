import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { MouseEventHandler } from 'react';

export interface ButtonIconCartProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	onClick: MouseEventHandler<HTMLButtonElement>;
}
