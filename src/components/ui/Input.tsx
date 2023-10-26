import { FC, InputHTMLAttributes } from 'react';
import { cn } from '~/lib/cn';
import { v4 as uuid4 } from 'uuid';

type InputProps = { label?: string } & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({ label, required, className, ...props }) => {
	const name = props.name ?? uuid4();
	return (
		<div className='relative mb-4 last:mb-0 pt-2'>
			{label && (
				<label
					className='absolute top-0 left-2 text-xs px-2 text-primary-800 dark:text-background-700 bg-background-400 dark:bg-primary-950'
					htmlFor={name}>
					{label}
					{required && <span>*</span>}
				</label>
			)}
			<input
				required={required}
				name={name}
				className={cn(
					'px-4 py-4 w-full border border-accent-500 bg-background-400 dark:bg-primary-950 rounded-xl focus:ring-1 focus:ring-accent-500 focus:border-accent-500',
					className
				)}
				{...props}
			/>
		</div>
	);
};
