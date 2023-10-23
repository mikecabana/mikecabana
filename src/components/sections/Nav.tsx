import { FC } from 'react';
import Link from 'next/link';
import { ThemeToggler } from '../tools/ThemeToggler';
import { useUnderMaintenance } from '../../lib/useUnderMaintenance';
import { MobileMenu } from '../ui/MobileMenu';
import { scrollTo } from '~/lib/scrollTo';

const navLinks = [
    {
        id: 'services',
        label: 'My Services',
    },
    {
        id: 'projects',
        label: 'Projects',
    },
    {
        id: 'experience',
        label: 'Experience',
    },
];

export const Nav: FC = () => {
    const isUnderMaintenance = useUnderMaintenance();

    return (
        <header>
            <nav className="w-full h-full px-4 py-2 md:px-12 md:py-4 flex flex-row justify-between items-center bg-background-500 dark:bg-primary-950 bg-opacity-50 dark:bg-opacity-50">
                <div className="dark:text-accent-500 text-primary-950">
                    {/* logo */}
                    <h1 className="logo text-base lg:text-xl xl:text-4xl py-4">M I K E</h1>
                </div>
                <div className="hidden lg:block">
                    {/* nav list */}
                    <ul className="list-none flex justify-end items-center dark:text-accent-500 text-primary-950">
                        {!isUnderMaintenance && (
                            <>
                                <li className="mx-2 px-4 py-1 text-sm dark:text-accent-500 text-primary-950 hover:underline bg-accent-500 bg-opacity-20 rounded-full">
                                    <a
                                        href="https://drive.google.com/file/d/1fp7uVynT4iqXctk7BkOTZZq7fghqMT6X/view?usp=sharing"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Download my CV!
                                    </a>
                                </li>
                                {navLinks.map((nl, i) => (
                                    <li
                                        key={i}
                                        className="mx-4 text-sm dark:text-accent-500 text-primary-950 cursor-pointer hover:underline"
                                        onClick={() => scrollTo(nl.id)}
                                    >
                                        {nl.label}
                                    </li>
                                ))}
                            </>
                        )}
                        <li className="ml-4">
                            <ThemeToggler />
                        </li>
                    </ul>
                </div>
                <div className="block lg:hidden">
                    <MobileMenu />
                </div>
            </nav>
        </header>
    );
};
