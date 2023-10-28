import Image from 'next/image';
import { NextPage } from 'next';
import { MainLayout } from '../components/layouts/MainLayout';
import { ExperienceCard } from '../components/sections/ExperienceCard';
import { Projects } from '../components/sections/Projects';
import { useUnderMaintenance } from '../lib/useUnderMaintenance';
import { Footer } from '../components/sections/Footer';
import { Card } from '~/components/ui/Card';
import { NavButton } from '~/components/ui/NavButton';
import { ChevronsRightIcon } from 'lucide-react';
import { Button } from '~/components/ui/Button';
import { ContactForm } from '~/components/ui/ContactForm';
import { useState } from 'react';

const Home: NextPage = () => {
	const isUnderMaintenance = useUnderMaintenance();

	const [cFIsOpen, setCFIsOpen] = useState(false);

	const handleGetInTouch = () => {
		setCFIsOpen(true);
	};

	return (
		<MainLayout>
			{!isUnderMaintenance && (
				<>
					<ContactForm
						isOpen={cFIsOpen}
						onClose={() => {
							setCFIsOpen(false);
						}}
					/>
					{/* hero */}

					<section className='grid gap-8 grid-cols-1 md:grid-cols-12 mb-14'>
						<Card className='col-span-12 md:col-span-7 p-8 bg-gradient-to-bl from-background-500 to-background-600 dark:from-primary-950 dark:to-primary-900'>
							<h2 className='font-semibold text-lg dark:font-normal dark:text-accent-500 text-primary-950'>
								{"Hi, I'm Mike and"}
							</h2>
							<h1 className='hero-big-text font-extrabold opacity-80'>
								{"I'm a"} <span className='text-accent-600 dark:text-accent-500'>{'web'}</span>
								<br className='hidden md:block' /> {'tinkerer.'}
							</h1>
							<p className='max-w-xl text-base md:text-xl mb-8'>
								{" I'm an Angular and C# developer by day. By"}{' '}
								<span className='text-accent-600 dark:text-accent-500'>night</span>
								{', I love to tinker with some of the latest and cutting edge software, web and AI tech. '}
							</p>
							<p className='max-w-xl text-base md:text-xl mb-12'>
								{
									"Proudly a full time dev but always open to work with others on their interesting challenges. Don't hesitate to get in touch if you'd like to work together."
								}
							</p>
							<Button onClick={() => handleGetInTouch()} className='w-full'>
								<div className='mr-2'>Get in touch</div> <div className='animate-wave text-xl'>👋</div>
							</Button>
						</Card>
						<div className='col-span-12 md:col-span-5 grid grid-rows-6 gap-8'>
							<div className='relative row-span-5 h-full'>
								<div className='absolute z-20 bg-background-500 dark:bg-primary-950 w-[60px] h-[20px] rounded-full top-4 left-1/2 -translate-x-1/2 shadow-inner'></div>
								<div className='relative h-full w-full min-h-[400px]'>
									<Image
										src='/me-l-5.png'
										fill={true}
										objectFit='cover'
										objectPosition='top'
										alt=''
										className='z-10'
									/>
									<Card hasBackground={true} className='absolute h-full w-full top-0'></Card>
								</div>
							</div>
							<Card>
								<div className=' flex justify-center items-center gap-8 h-full min-h-[80px]'>
									<NavButton href='https://github.com/mikecabana' type='github' />

									<NavButton href='https://www.threads.net/@mikecabana' type='threads' />

									<NavButton href='https://twitter.com/mikecabana' type='twitter' />

									<NavButton href='https://ca.linkedin.com/in/michael-cabana-b5903a66' type='linkedin' />
								</div>
							</Card>
						</div>
					</section>

					{/* services */}

					<section className='my-16 py-16' id='services'>
						<h2 className='font-semibold dark:font-normal dark:text-accent-500 text-primary-950 section-title pb-12'>
							{'How we can work together'}
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
							<Card className='relative p-8'>
								<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-background-500 to-background-600 dark:from-primary-950 dark:to-primary-900'></div>
								<h3 className='relative big-text font-black dark:font-normal mb-6 z-10'>
									Website Development
								</h3>

								<ul className='relative z-10'>
									{['Design and Development', 'SEO Optimization', 'Deployment', 'Google Analytics'].map(
										(s, i) => (
											<li className='flex items-center mb-2 last:mb-0' key={i}>
												<ChevronsRightIcon className='text-accent-500 w-4 h-4 mr-4' /> {s}
											</li>
										)
									)}
								</ul>
							</Card>
							<Card className='relative p-8'>
								<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background-500 to-background-600 dark:from-primary-950 dark:to-primary-900'></div>
								<h3 className='relative z-10 big-text font-black dark:font-normal mb-6'>AI & Automation</h3>

								<ul className='relative z-10'>
									{[
										'AI Chatbots',
										'Content Generation Systems',
										'AI Enhanced Automation',
										'Data parsing and formatting',
										'Analysis of core business and pain points',
									].map((s, i) => (
										<li className='flex items-center mb-2 last:mb-0' key={i}>
											<ChevronsRightIcon className='text-accent-500 w-4 h-4 mr-4' /> {s}
										</li>
									))}
								</ul>
							</Card>
						</div>
						<div className='flex items-center justify-center mt-16'>
							<Button href='https://cal.com/d/tVePtj7mNorXk9tVgr5FQQ/10-min-meet-and-greet'>
								{'Schedule a call'}
							</Button>
						</div>
					</section>

					{/* projects */}

					<section className='py-12' id='projects'>
						<h2 className='font-semibold dark:font-normal dark:text-accent-500 text-primary-950 section-title pb-12'>
							{'Projects'}
						</h2>
						<Projects />
						<div className='pt-24 text-center'>
							<a
								className='text-primary-950 dark:text-accent-500 hover:underline'
								href='https://github.com/mikecabana'
								target='_blank'
								rel='noreferrer'>
								Check out my github →
							</a>
						</div>
					</section>

					{/* experience */}

					<section className='py-12' id='experience'>
						<h2 className='font-semibold dark:font-normal dark:text-accent-500 text-primary-950 section-title pb-12'>
							{'Experience'}
						</h2>
						<ExperienceCard
							employer='CAE Healthcare'
							title='Fullstack Developer - SimPort Team'
							start='2023'
							end='Present'
							tags={['Angular', 'Typescript', 'Unit Testing', 'LESS', 'Dotnet', 'Azure', 'Figma']}
							responsibilities={[
								'Implemented user interfaces based on requirements and design specs.',
								'Fixed frontend and backend related bugs.',
								'Contributed to a microservice oriented architecture codebase.',
							]}
						/>
						<ExperienceCard
							employer='Presagis'
							title='Fullstack Developer - V5D Digital Twin Team'
							start='2022'
							end='2023'
							tags={['Angular', 'Typescript', 'SCSS', 'Python', 'Azure', 'B2C']}
							responsibilities={[
								'Restructured the frontend to introduce a state management layer.',
								'Helped to configure and teach others OAuth Authentication.',
								'Participated daily in Agile style ceremonies (I know 😝).',
								'Took part in investigations for integrating third party services like Stripe and reported to leadership.',
							]}
						/>
						<ExperienceCard
							employer='IEG America'
							title='Software Developer - Customer Admin Portal Team Lead'
							start='2017'
							end='2022'
							tags={[
								'Angular',
								'Typescript',
								'SCSS',
								'Bootstrap',
								'Dotnet',
								'Entity Framework',
								'MSSQL',
								'Azure',
								'Figma',
							]}
							responsibilities={[
								'Designed and developed functional and thoughtful UI and UX.',
								'Leading and mentoring team members to maintain vision for the project.',
								'Communicating with stakeholders daily.',
								'Contributed scalable and maintainable code following software oriented architecture.',
							]}
						/>
					</section>

					{/* get in touch */}

					<section className='py-12' id='get-in-touch'>
						<h2 className='font-semibold dark:font-normal dark:text-accent-500 text-primary-950 section-title pb-12'>
							{"Let's chat"}
						</h2>
						<h3 className='font-extrabold opacity-70 text-center get-in-touch-big-text'>{'Get in Touch'}</h3>
						<p className='max-w-md mx-auto text-center mb-12'>
							{
								"If you're interested in working together, have any questions or just want to say hi, my inbox is always open!"
							}
						</p>
						<div className='flex justify-center'>
							<Button onClick={() => handleGetInTouch()}>Say hello!</Button>
						</div>
					</section>
					<Footer />
				</>
			)}
			{isUnderMaintenance && (
				<>
					<div className='text-center'>
						<span className='shadow rounded-3xl px-2 py-1 text-sm md:px-4 md:py-2 md:text-base bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-300 font-semibold'>
							coming soon
						</span>
					</div>
					<div className='shadow rounded bg-white dark:bg-gray-800 my-8 p-12 text-center'>
						<div className='flex justify-center mb-4'>
							<div className='shadow rounded-full p-2 bg-background dark:bg-gray-900 h-20 w-20'>
								<Image
									className='rounded-full'
									src='/profile-pic.png'
									alt='profile picture'
									width={150}
									height={150}
								/>
							</div>
						</div>
						<h2 className='text-2xl mb-4'>My website is getting an overhaul!</h2>
						<p className='text-gray-600 dark:text-gray-400'>Socials if you need to reach me</p>
						<ul className='list-none'>
							<li className='my-2'>
								<a
									className='text-twitter-blue hover:underline hover:text-gray-700'
									href='https://twitter.com/mikecabana'>
									Twitter
								</a>
							</li>
							<li className='my-2'>
								<a
									className='text-linkedin-blue hover:underline hover:text-gray-700'
									href='https://ca.linkedin.com/in/michael-cabana-b5903a66'>
									LinkedIn
								</a>
							</li>
							<li className='my-2'>
								<a
									className='text-red-500 hover:underline hover:text-gray-700'
									href='mailto:mikeycabana@gmail.com'>
									Email
								</a>
							</li>
						</ul>
						<div className='text-center text-gray-400 text-sm'>
							mikecabana.com &copy; {new Date().getFullYear()}
						</div>
					</div>
				</>
			)}
		</MainLayout>
	);
};

export default Home;
