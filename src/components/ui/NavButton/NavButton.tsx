import { FunctionComponent } from 'react';
import TwitterOutline from '../../svgs/twitter-outline.svg';
import LinkedinOutline from '../../svgs/linkedin-outline.svg';
import GithubOutline from '../../svgs/github-outline.svg';

export const NavButton: FunctionComponent<{ href: string; type: 'twitter' | 'linkedin' | 'github' }> = ({
    href,
    type,
}) => {
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
