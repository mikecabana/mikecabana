import { FC } from 'react';
import { ChevronsRightIcon } from 'lucide-react';

interface ExperienceProps {
    employer: string;
    title: string;
    start: string;
    end: string;
    tags: string[];
    responsibilities: string[];
}

export const ExperienceCard: FC<ExperienceProps> = ({ employer, title, start, end, tags, responsibilities }) => {
    return (
        <div className="max-w-2xl mx-auto mb-28 last:mb-0">
            <h4 className="text-lg font-semibold dark:font-normal dark:text-accent-500 text-primary-950 experience-title pb-6">
                {employer}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <div className="text-xl mb-2">{title}</div>
                    <div className="text-xs opacity-50 mb-8">
                        {start}
                        {' - '}
                        {end}
                    </div>
                    <div className="flex flex-row flex-wrap">
                        {tags.map((t, i) => (
                            <span
                                key={i}
                                className="text-accent-500 bg-accent bg-opacity-10 rounded-md px-2 py-1 mr-2 mt-2 text-sm"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <ul>
                        {responsibilities.map((r, i) => (
                            <li key={i} className="text-sm mb-4">
                                <div className="flex items-start">
                                    <div className="mr-2 pt-1">
                                        <ChevronsRightIcon className="text-accent-500 w-4 h-4" />
                                    </div>
                                    <div className="flex-grow">{r}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
