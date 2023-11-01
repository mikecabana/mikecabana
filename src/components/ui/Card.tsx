import { ReactNode, HTMLAttributes, FC } from 'react';
import { cn } from '~/lib/cn';

type CardProps = { children?: ReactNode; hasBackground?: boolean } & HTMLAttributes<HTMLDivElement>;
export const Card: FC<CardProps> = ({ children, hasBackground = false, className }) => {
    return (
        <div
            className={cn(`border border-primary-300 dark:border-accent-700 rounded-3xl overflow-hidden bg-background-500 dark:bg-primary-950`, className, {
                'bg-gradient-to-bl from-accent-300 to-accent-600 bg-opacity-25': hasBackground,
            })}
        >
            {children}
        </div>
    );
};
