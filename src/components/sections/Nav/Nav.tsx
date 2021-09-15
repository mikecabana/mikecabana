import { FunctionComponent } from 'react';
import Link from 'next/link';
import { ThemeToggler } from '../../tools';
import { useUnderMaintanence } from '../../../lib/useUnderMaintenance';

const navLinks = [
    {
        route: '#',
        label: 'About',
    },
    {
        route: '#',
        label: 'Projects',
    },
    {
        route: '#',
        label: 'Experience',
    },
    {
        route: '#',
        label: 'Work with me',
    },
];

export const Nav: FunctionComponent = () => {
    const isUnderMaintenance = useUnderMaintanence();

    return (
        <header className="px-6 py-2 md:px-12 md:py-8">
            <nav className="w-full flex flex-row justify-between items-center">
                <div>
                    {/* logo */}
                    <h1 className="logo text-2xl py-4">M I K E</h1>
                </div>
                <div>
                    {/* nav list */}
                    <ul className="list-none flex justify-end items-center">
                        {!isUnderMaintenance &&
                            navLinks.map((nl, i) => (
                                <li key={i} className="mx-4">
                                    <Link href={nl.route}>
                                        <a>{nl.label}</a>
                                    </Link>
                                </li>
                            ))}

                        <li className="ml-4">
                            <ThemeToggler />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
