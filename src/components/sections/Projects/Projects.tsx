import { FunctionComponent } from 'react';
import { ProjectCard } from '../ProjectCard';

const projects = [
    {
        label: 'VS Concept Audio Visuel',
        description:
            'Andrew and Nic from VSCAV aim to provide full home automation services to the masses. They want to help break the barrier of entry and clear up any reservatioins about smart tech in the home.',
        extLink: 'https://vscav.com',
        tags: ['Gatsby', 'Bootstrap', 'Jquery'],
    },
    {
        label: 'Lessee',
        badges: ['WIP'],
        description:
            'Lessee is web app built to help property owners manage their rental properties. Owners will be able to keep track of their properties, tenants and leases while tenants will also be able to use the app to pay rent online and maintain a channel of communication with their concierge or building manager.',
        tags: ['Next.js', 'Typescript', 'TailwindCSS', 'Prisma'],
        disclaimer:
            'This is a passion project and is still a work in progress. If you have any questions feel free to get in touch.',
    },
    {
        label: 'Spotify Now Playing Widget',
        description:
            'A tiny little widget that uses the Spotify API to display your currently playing track. I’m using it to display what song I’m listening to while streaming on Twitch 🎮.',
        tags: ['Spotify', 'Next.js', 'Typescript', 'SCSS'],
    },
    {
        label: 'IEG America Website',
        extLink: 'https://ieg-america.com',
        description: 'Some description about the new IEG America portal and website',
        tags: ['Next.js', 'Typescript', 'SCSS'],
    },
    {
        label: 'IEG America Portal',
        description: 'Some description about the new IEG America portal and website',
        tags: ['Angular', 'Typescript', 'SCSS', 'Material UI'],
    },
];

interface ProjectsProps {}

export const Projects: FunctionComponent<ProjectsProps> = ({}) => {
    // todo
    // split the array in 2 (floor) one for each column

    return (
        <div className="grid grid-cols-2 gap-12">
            {projects.map((p, i) => (
                <div key={i} className="">
                    <ProjectCard
                        label={p.label}
                        description={p.description}
                        extLink={p.extLink}
                        tags={p.tags}
                        badges={p.badges}
                        disclaimer={p.disclaimer}
                    />
                </div>
            ))}
        </div>
    );
};
