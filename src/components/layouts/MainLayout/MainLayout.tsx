import { FC, ReactNode } from 'react';
import { Nav } from '../../sections/Nav';
import { TotemPole } from '../../ui/TotemPole';
import { NavButton } from '../../ui/NavButton';

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <Nav />
            <main className="container mx-auto max-w-6xl px-4">{children}</main>
            {/* <div className="fixed bottom-0 right-12">
                <TotemPole>
                    <NavButton href="https://github.com.com/mikecabana" type="github" />

                    <NavButton href="https://twitter.com.com/mikecabana" type="twitter" />

                    <NavButton href="https://ca.linkedin.com/in/michael-cabana-b5903a66" type="linkedin" />
                </TotemPole>
            </div> */}
        </>
    );
};
