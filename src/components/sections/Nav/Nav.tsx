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
        <header className="p-6 md:px-12 md:py-8">
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

                        {isUnderMaintenance && (
                            <li className="mx-4">
                                <span className="rounded-3xl px-2 py-1 text-sm md:px-4 md:py-2 md:text-base bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 font-semibold">comming soon</span>
                            </li>
                        )}

                        <li className="mx-4">
                            <ThemeToggler />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
