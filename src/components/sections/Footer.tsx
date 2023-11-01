import { FC } from 'react';
import { NavButton } from '../ui/NavButton';
import { scrollTo } from '~/lib/scrollTo';

const navLinks = [
    {
        route: 'services',
        label: 'My Services',
    },
    {
        route: 'projects',
        label: 'Projects',
    },
    {
        route: 'experience',
        label: 'Experience',
    },
    {
        route: 'get-in-touch',
        label: 'Get in Touch',
    },
];

const socialLinks: { href: string; type: 'twitter' | 'github' | 'linkedin' | 'threads' }[] = [
    {
        href: 'https://github.com/mikecabana',
        type: 'github',
    },
    {
        href: 'https://www.threads.net/@mikecabana',
        type: 'threads',
    },
    {
        href: 'https://twitter.com/mikecabana',
        type: 'twitter',
    },
    {
        href: 'https://ca.linkedin.com/in/michael-cabana-b5903a66',
        type: 'linkedin',
    },
];

export const Footer: FC = () => {
    return (
        <footer className="py-10 mt-24 text-sm text-center dark:text-accent-500 text-primary-950">
            <div className="mb-8 flex gap-4 items-center justify-center">
                {navLinks.map((n, i) => (
                    <div
                        onClick={() => scrollTo(n.route)}
                        key={i}
                        className="cursor-pointer mx-2 hover:underline dark:text-white"
                    >
                        {n.label}
                    </div>
                ))}
            </div>

            <div className="mb-8 flex justify-center items-center">
                {socialLinks.map((s, i) => (
                    <NavButton key={i} href={s.href} type={s.type} />
                ))}
            </div>

            <div className="text-xs mb-4">Designed and Developed by Michael Cabana</div>

            <div className="text-xs">mikecabana.com © {new Date().getFullYear()}</div>
        </footer>
    );
};
