import { ReactNode, HTMLAttributes, FC } from 'react';
import { cn } from '~/lib/cn';

type CardProps = { children?: ReactNode; hasBackground?: boolean } & HTMLAttributes<HTMLDivElement>;
export const Card: FC<CardProps> = ({ children, hasBackground = false, className }) => {
    return (
        <div
            className={cn(`border border-accent-500 rounded-3xl overflow-hidden`, className, {
                'bg-gradient-to-bl from-accent-300 to-accent-600 bg-opacity-25': hasBackground,
            })}
        >
            {children}
        </div>
    );
};
