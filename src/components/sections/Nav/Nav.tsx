import { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import { ThemeToggler } from '../../tools';
import { useUnderMaintenance } from '../../../lib/useUnderMaintenance';
import { NavButton } from '../../ui/NavButton';
import { MobileMenu } from '../../ui/MobileMenu';

const navLinks = [
	{
		route: '#about-me',
		label: 'About Me',
	},
	{
		route: '#projects',
		label: 'Projects',
	},
	{
		route: '#experience',
		label: 'Experience',
	},
	{
		route: '#get-in-touch',
		label: 'Get in Touch',
	},
];

export const Nav: FunctionComponent = () => {
	const isUnderMaintenance = useUnderMaintenance();

	const [scrollIsNotTop, setScrollIsNotTop] = useState(false);
	const [isScrollingDown, setIsScrollingDown] = useState(false);

	let lastScrollLocation = 0;

	const handleScroll = (e) => {
		// determine if we're at the top of the page
		if (window.scrollY > 100) {
			setScrollIsNotTop(true);
		} else {
			setScrollIsNotTop(false);
		}

		// determine if we are scrolling up or down
		if (window.scrollY > lastScrollLocation) {
			setIsScrollingDown(true);
		} else {
			setIsScrollingDown(false);
		}
		lastScrollLocation = window.scrollY;
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0  backdrop-filter backdrop-blur-lg z-40 transition ${
				scrollIsNotTop ? 'shadow-lg' : ''
			} ${isScrollingDown ? 'transition duration-500 -translate-y-full' : ''}`}>
			<nav className='w-full h-full px-4 py-2 md:px-12 md:py-4 flex flex-row justify-between items-center bg-background-500 dark:bg-primary-500 bg-opacity-50 dark:bg-opacity-50'>
				<div className='dark:text-accent-500 text-primary-500'>
					{/* logo */}
					<h1 className='logo text-base lg:text-xl xl:text-4xl py-4'>M I K E</h1>
				</div>
				<div className='hidden lg:block'>
					{/* nav list */}
					<ul className='list-none flex justify-end items-center dark:text-accent-500 text-primary-500'>
						{!isUnderMaintenance && (
							<>
                                <li className="mx-2 px-2 py-1 text-sm dark:text-accent-500 text-primary-500 hover:underline bg-accent-500 bg-opacity-20 rounded-full">
                                    <a href="/resume.pdf" target="_blank">
                                        Download my Resume!
                                    </a>
                                </li>
								{navLinks.map((nl, i) => (
									<li
										key={i}
										className='mx-4 text-sm dark:text-accent-500 text-primary-500 hover:underline'>
										<Link href={nl.route}>
											<a>{nl.label}</a>
										</Link>
									</li>
								))}

								<li className='mx-2'>
									<NavButton href='https://github.com/mikecabana' type='github' />
								</li>

								<li className='mx-2'>
									<NavButton href='https://twitter.com/mikecabana' type='twitter' />
								</li>

								<li className='mx-2'>
									<NavButton href='https://ca.linkedin.com/in/michael-cabana-b5903a66' type='linkedin' />
								</li>
							</>
						)}
						<li className='ml-4'>
							<ThemeToggler />
						</li>
					</ul>
				</div>
				<div className='block lg:hidden'>
					<MobileMenu />
				</div>
			</nav>
		</header>
	);
};
