import { FC, ReactNode } from 'react';
import { Card } from '../ui/Card';

import { Bot, Layout, LineChart, SearchCheck, Settings, Text } from 'lucide-react';

type ServiceProps = {
	name?: string;
	description?: string;
	icon?: ReactNode;
};

const services: ServiceProps[] = [
	{
		name: 'Websites',
		icon: <Layout />,
		description: 'Build your online presence with a custom website tailored for your business needs.',
	},
	{
		name: 'SEO',
		icon: <SearchCheck />,
		description: 'Enhance your sites SEO scoring using industry techniques and standards.',
	},
	{
		name: 'Google analytics',
		icon: <LineChart />,
		description: 'Collect analytics, user interaction stats, demographics and retainment with Google analytics integration.',
	},
	{
		name: 'Automation',
		icon: <Settings />,
		description: 'Save time by automating and scheduling recurring tasks to simplify your entire workflow.',
	},
	{
		name: 'AI chatbot',
		icon: <Bot />,
		description: 'Provide accurate, cost-effective and scalable interactions through a personalized chatbot trained on your data and enhanced with AI.',
	},
	{
		name: 'Data manipulation',
		icon: <Text />,
		description: 'Working with you to build a system to efficiently clean and sanitize your data.',
	},
];

const Service: FC<ServiceProps> = ({ name, description, icon }) => {
	return (
		<Card
			className={`border-0 p-4 bg-gradient-to-bl from-background-500 to-background-600 dark:from-primary-950 dark:to-primary-900`}>
			<div className='mb-4 w-10 h-10 rounded-xl bg-accent-400 bg-opacity-30 flex items-center justify-center'>{icon}</div>
			<div className='text-lg font-bold'>{name}</div>
			<div className=''>{description}</div>
		</Card>
	);
};

export const Services: FC = () => {
	const [a, b, c, d, e, f] = services;
	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
			<div className='col-span-1 md:col-span-2'>
				<Service {...a} />
			</div>
			<div className='col-span-1 md:col-span-1'>
				<Service {...b} />
			</div>
			<div className='col-span-1 md:col-span-1'>
				<Service {...c} />
			</div>
			<div className='col-span-1 md:col-span-2'>
				<Service {...d} />
			</div>
			<div className='col-span-1 md:col-span-2'>
				<Service {...e} />
			</div>
			<div className='col-span-1 md:col-span-1'>
				<Service {...f} />
			</div>
		</div>
	);
};
