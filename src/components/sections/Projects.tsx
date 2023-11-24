import { FC } from 'react';
import { ProjectCard } from './ProjectCard';

type ProjectItem = {
    label: string;
    description: string;
    extLink?: string;
    tags?: string[];
    badges?: string[];
    disclaimer?: string;
};

const projects: ProjectItem[] = [
    {
        label: 'Relinkr.io',
        description:
            'A lightweight tool for shortening urls that are just too long. Complete with click tracking and analytics.',
        extLink: 'https://relinkr.io',
        tags: ['T3Stack', 'NextJs', 'TailwindCSS', 'TRPc', 'NextAuth'],
    },
    {
        label: 'Pooch MD Chatbot',
        description:
            "An AI enhanced chatbot that can answer any questions about your puppy. It's like your virtual veterinary assistant.",
        extLink: 'https://github.com/mikecabana/pooch-md',
        tags: ['OpenAI', 'Langchain', 'Typescript', 'NodeJs'],
    },
    {
        label: 'Spotify Now Playing Overlay',
        description:
            "A lightweight overlay widget using the Spotify API to display your currently playing track. Can be used to display what song you're listening to while streaming on Twitch 🎮 or embedded directly on your website.",
        tags: ['Spotify API', 'NextJs (app router)', 'Typescript', 'Tailwind', 'NextAuth'],
        extLink: 'https://github.com/mikecabana/spotify-now-playing-overlay',
    },
    {
        label: 'RPM',
        badges: ['WIP'],
        description:
            'RPM is a platform to help owners manage their rental properties. Owners are empowered to keep track of their tenants, leases and properties while tenants manage rent online and maintain communication with their concierge or building manager.',
        tags: ['NextJs', 'Typescript', 'TailwindCSS', 'Prisma', 'NextAuth'],
        disclaimer:
            'This is a small passion project and is still a work in progress. If you have any questions feel free to get in touch.',
    },
    {
        label: 'IEG America Website',
        extLink: 'https://ieg-america.com',
        description:
            'The main website for IEG America built from the ground up with modern design and a restructured content layout. My first foray into NextJs as a framework and headless wordpress.',
        tags: ['NextJs', 'Typescript', 'SCSS'],
    },
    {
        label: 'VS Concept Audio Visuel',
        description:
            'Andrew and Nic from VSCAV aim to provide full home automation services to the masses. They want to help break the barrier of entry and clear up any reservatioins about smart tech in the home.',
        // extLink: 'https://vscav.com',
        tags: ['Gatsby', 'Bootstrap', 'JQuery'],
    },
];

interface ProjectsProps {}

const SpotifyNowPlaying: FC = () => {
    return (
        <div className="overflow-hidden rounded-xl h-[115px] flex items-stretch justify-center mt-8">
            <iframe
                className="flex-grow"
                src={`https://spotify-now-playing-overlay.vercel.app/spotify?id=${encodeURIComponent(
                    'mikeycabana@gmail.com'
                )}&size=sm`}
            ></iframe>
        </div>
    );
};

export const Projects: FC<ProjectsProps> = ({}) => {
    const colA: ProjectItem[] = [];
    const colB: ProjectItem[] = [];

    projects.forEach((p, i) => {
        if (i % 2 === 0) {
            colA.push(p);
        } else {
            colB.push(p);
        }
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="grid grid-cols-1 gap-8">
                {colA.map((p, i) => (
                    <ProjectCard
                        key={i}
                        label={p.label}
                        description={p.description}
                        extLink={p.extLink}
                        tags={p.tags}
                        badges={p.badges}
                        disclaimer={p.disclaimer}
                    >
                        {p.label === 'Spotify Now Playing Overlay' && <SpotifyNowPlaying />}
                    </ProjectCard>
                ))}
            </div>
            <div className="grid grid-cols-1 gap-8 items-start md:pt-12">
                {colB.map((p, i) => (
                    <ProjectCard
                        key={i}
                        label={p.label}
                        description={p.description}
                        extLink={p.extLink}
                        tags={p.tags}
                        badges={p.badges}
                        disclaimer={p.disclaimer}
                    >
                        {p.label === 'Spotify Now Playing Overlay' ?? <SpotifyNowPlaying />}
                    </ProjectCard>
                ))}
            </div>
        </div>
    );
};
