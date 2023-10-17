import { FunctionComponent } from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';

export const NavButton: FunctionComponent<{ href: string; type: 'twitter' | 'linkedin' | 'github', target?: string }> = ({
    href,
    type,
    target
}) => {
    return (
        <a href={href} className="" target={target || '_blank'}>
            <div className="p-3 flex items-center justify-center transition hover:bg-primary hover:bg-opacity-10 dark:hover:bg-accent dark:hover:bg-opacity-10 rounded-full">
                {type === 'twitter' && (
                    <TwitterIcon className="w-5 h-5 dark:text-accent-500" />
                )}
                {type === 'github' && (
                    <GithubIcon className="w-5 h-5 dark:text-accent-500" />
                )}
                {type === 'linkedin' && (
                    <LinkedinIcon className="w-5 h-5 dark:text-accent-500" />
                )}
            </div>
        </a>
    );
};
