import { FC, ReactNode } from 'react';

export const BaseLayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className='relative bg-background-500 text-primary-950 dark:bg-primary-950 dark:text-background-500 flex flex-col min-h-screen'>
			{children}
		</div>
	);
};