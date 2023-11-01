import { FC } from 'react';

import { ExternalLinkIcon } from 'lucide-react';
import { Card } from '../ui/Card';

interface ProjectCardProps {
    label: string;
    description: string;
    tags?: string[];
    badges?: string[];
    disclaimer?: string;
    extLink?: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({ label, description, tags, badges, disclaimer, extLink }) => {
    return (
        <Card>
            <div className="relative p-8">
                {extLink && (
                    <a
                        href={extLink}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute top-0 right-0 m-4 transition bg-accent bg-opacity-10 hover:bg-opacity-20 rounded-lg p-1"
                    >
                        <ExternalLinkIcon className="w-5 h-5 text-accent-500" />
                    </a>
                )}
                <h3 className="text-xl mb-4 flex items-center">
                    {label}{' '}
                    {badges &&
                        badges.map((b, i) => (
                            <span
                                key={i}
                                className="text-accent-500 bg-accent bg-opacity-10 rounded-md p-1 ml-2 text-xs"
                            >
                                {b}
                            </span>
                        ))}
                </h3>

                <p className="mb-4">{description}</p>

                {tags && (
                    <div className="flex flex-row items-center flex-wrap">
                        {tags.map((t, i) => (
                            <span
                                key={i}
                                className="text-accent-500 bg-accent bg-opacity-10 rounded-md px-2 py-1 mr-2 mb-2 text-sm"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                )}

                {disclaimer && <p className="text-xs text-gray-400 mt-4">{disclaimer}</p>}
            </div>
        </Card>
    );
};
