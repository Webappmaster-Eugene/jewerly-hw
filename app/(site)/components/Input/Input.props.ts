import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

export enum InputType {
	Email = 'email',
	Text = 'text'
}

export enum IconType {
	Arrow = 'arrow',
	Loupe = 'loupe',
	Close = 'close',
	None = 'none'
}

export interface InputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	placeholder: string;
	type: InputType;
	register: UseFormRegister<any>;
	name: string;
}
