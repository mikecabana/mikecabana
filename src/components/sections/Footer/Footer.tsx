import { FunctionComponent } from 'react';
import { NavButton } from '../../ui/NavButton';

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

const socialLinks: { href: string; type: 'twitter' | 'github' | 'linkedin' }[] = [
    {
        href: 'https://github.com/mikecabana',
        type: 'github',
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

export const Footer: FunctionComponent = () => {
    return (
        <footer className="py-10 mt-24 text-sm text-center dark:text-accent-500 text-primary-950">
            <div className="mb-8">
                {navLinks.map((n, i) => (
                    <a key={i} href={n.route} className="mx-2 hover:underline dark:text-white">
                        {n.label}
                    </a>
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
