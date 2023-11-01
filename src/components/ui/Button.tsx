import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { cn } from '~/lib/cn';

type ButtonProps = { children: ReactNode; href?: string } & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, href, className, ...props }) => {
	return href ? (
		<a href={href} target='_blank'>
			<div className={cn(
				'px-8 py-4 font-semibold flex items-baseline border border-accent-500 text-accent-600 dark:text-accent-500 rounded-xl transition hover:bg-accent hover:bg-opacity-10 active:bg-opacity-20 focus:ring-1 focus:ring-accent-500 focus:border-accent-500',
				className,
				{}
			)}>{children}</div>
		</a>
	) : (
		<button
			{...props}
			className={cn(
				'px-8 py-4 font-semibold flex items-baseline border border-accent-500 text-accent-600 dark:text-accent-500 rounded-xl transition hover:bg-accent hover:bg-opacity-10 active:bg-opacity-20 focus:ring-1 focus:ring-accent-500 focus:border-accent-500',
				className,
				{}
			)}>
			{children}
		</button>
	);
};
