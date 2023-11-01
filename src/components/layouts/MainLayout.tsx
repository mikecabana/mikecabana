import { FC, ReactNode } from 'react';
import { Nav } from '../sections/Nav';

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <Nav />
            <main className="container mx-auto max-w-6xl px-4 mt-[8%]">{children}</main>
        </>
    );
};
