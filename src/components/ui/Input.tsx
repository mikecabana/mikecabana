import { FC, InputHTMLAttributes } from 'react';
import { cn } from '~/lib/cn';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input:FC<InputProps> = ({ className, ...props}) => {
    return <input className={cn('px-4 py-2 w-full border border-accent-500 bg-black bg-opacity-10 rounded-xl focus:ring-1 focus:ring-accent-500 focus:border-accent-500 ', className)} {...props} />
}