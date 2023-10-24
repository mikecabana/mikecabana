import { FC } from 'react';
import { ProjectCard } from './ProjectCard';

type ProjectItem = {
    label: string;
    description: string;
    extLink?: string;
    tags?: string[];
    badges?: string[];
    disclaimer?: string;
}

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
		tags: ['OpenAI', 'Langchain', 'Typescript', "NodeJs"],
	},
	{
		label: 'Spotify Now Playing Widget',
		description:
			"A tiny widget that uses the Spotify API to display your currently playing track. I'm using it to display what song I'm listening to while streaming on Twitch 🎮.",
		tags: ['Spotify', 'NextJs', 'Typescript', 'SCSS', 'NextAuth'],
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

export const Projects: FC<ProjectsProps> = ({}) => {

	const colA: ProjectItem[] = [];
	const colB: ProjectItem[] = [];

    projects.forEach((p, i) => {
        if (i % 2 === 0) {
            colA.push(p);
        } else {
            colB.push(p);
        }
    })

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
			<div className='grid grid-cols-1 gap-8'>
				{colA.map((p, i) => (
					<ProjectCard
						key={i}
						label={p.label}
						description={p.description}
						extLink={p.extLink}
						tags={p.tags}
						badges={p.badges}
						disclaimer={p.disclaimer}
					/>
				))}
			</div>
			<div className='grid grid-cols-1 gap-8 items-start md:pt-12'>
				{colB.map((p, i) => (
					<ProjectCard
						key={i}
						label={p.label}
						description={p.description}
						extLink={p.extLink}
						tags={p.tags}
						badges={p.badges}
						disclaimer={p.disclaimer}
					/>
				))}
			</div>
		</div>
	);
};
