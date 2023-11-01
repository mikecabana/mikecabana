import { FunctionComponent } from 'react';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { SiX, SiThreads } from '@icons-pack/react-simple-icons';

export const NavButton: FunctionComponent<{ href: string; type: 'twitter' | 'linkedin' | 'github' | 'threads', target?: string }> = ({
    href,
    type,
    target
}) => {
    return (
        <a href={href} className="" target={target || '_blank'}>
            <div className="p-3 flex items-center justify-center transition hover:bg-primary hover:bg-opacity-10 dark:hover:bg-accent dark:hover:bg-opacity-10 rounded-full">
                {type === 'twitter' && (
                    <SiX className="w-5 h-5 dark:text-accent-500" />
                )}
                {type === 'github' && (
                    <GithubIcon className="w-5 h-5 dark:text-accent-500" />
                )}
                {type === 'linkedin' && (
                    <LinkedinIcon className="w-5 h-5 dark:text-accent-500" />
                )}
                {type === 'threads' && (
                    <SiThreads className="w-5 h-5 dark:text-accent-500" />
                )}
            </div>
        </a>
    );
};