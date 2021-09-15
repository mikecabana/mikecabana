import { FunctionComponent } from 'react';
import { Nav } from '../../sections/Nav';

export const MainLayout: FunctionComponent = ({ children }) => {
    return (
        <>
            <Nav />
            <main className="container mx-auto max-w-3xl px-4">{children}</main>
        </>
    );
};
