import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { MouseEventHandler } from 'react';

export interface ButtonFavoriteProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	onClick: MouseEventHandler<HTMLButtonElement>;
	isFavorite: boolean;
}
