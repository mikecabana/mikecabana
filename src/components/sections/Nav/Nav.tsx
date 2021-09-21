import { FunctionComponent } from 'react';
import Link from 'next/link';
import { ThemeToggler } from '../../tools';
import { useUnderMaintanence } from '../../../lib/useUnderMaintenance';

import TwitterOutline from '../../svgs/twitter-outline.svg';
import LinkedinOutline from '../../svgs/linkedin-outline.svg';
import GithubOutline from '../../svgs/github-outline.svg';

const navLinks = [
    {
        route: '#',
        label: 'About Me',
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
        label: 'Get in Touch',
    },
];

const NavButton: FunctionComponent<{ href: string; type: 'twitter' | 'linkedin' | 'github' }> = ({ href, type }) => {
    return (
        <a href={href} className="">
            <div className="p-3 flex items-center justify-center transition hover:bg-primary hover:bg-opacity-10 dark:hover:bg-accent dark:hover:bg-opacity-10 rounded-full">
                {type === 'twitter' && (
                    <TwitterOutline className="w-5 h-5 dark:text-accent-500 fill-current inline-block" />
                )}
                {type === 'github' && (
                    <GithubOutline className="w-5 h-5 dark:text-accent-500 fill-current inline-block" />
                )}
                {type === 'linkedin' && (
                    <LinkedinOutline className="w-5 h-5 dark:text-accent-500 fill-current inline-block" />
                )}
            </div>
        </a>
    );
};

export const Nav: FunctionComponent = () => {
    const isUnderMaintenance = useUnderMaintanence();

    return (
        <header className="px-6 py-2 md:px-12 md:py-8">
            <nav className="w-full flex flex-row justify-between items-center">
                <div className="dark:text-accent-500 text-primary-500">
                    {/* logo */}
                    <h1 className="logo text-4xl py-4">M I K E</h1>
                </div>
                <div>
                    {/* nav list */}
                    <ul className="list-none flex justify-end items-center dark:text-accent-500 text-primary-500">
                        {!isUnderMaintenance &&
                            navLinks.map((nl, i) => (
                                <li
                                    key={i}
                                    className="mx-8 text-sm dark:text-accent-500 text-primary-500 hover:underline"
                                >
                                    <Link href={nl.route}>
                                        <a>{nl.label}</a>
                                    </Link>
                                </li>
                            ))}

                        <li className="ml-4">
                            <NavButton href="" type="github" />
                        </li>

                        <li className="ml-4">
                            <NavButton href="" type="twitter" />
                        </li>

                        <li className="ml-4">
                            <NavButton href="" type="linkedin" />
                        </li>

                        <li className="ml-4">
                            <ThemeToggler />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
