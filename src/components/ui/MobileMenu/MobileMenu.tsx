import { Fragment, FunctionComponent, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import MenuAlt from '../../svgs/menu-alt.svg';
import Close from '../../svgs/close.svg';
import { NavButton } from '../../ui/NavButton';
import { ThemeToggler } from '../../tools';

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

export const MobileMenu: FunctionComponent = () => {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<>
			<button
				type='button'
				onClick={openModal}
				className='px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-accent-500 hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
				<MenuAlt className='h-6 w-6 dark:text-accent-500 text-primary-500 fill-current' />
			</button>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as='div' className='fixed inset-0 z-50 overflow-y-auto' onClose={closeModal}>
					<div className='min-h-screen p-4'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'>
							<Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-50' />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						{/* <span className='inline-block h-screen align-middle' aria-hidden='true'>
							&#8203;
						</span> */}
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'>
							{/* actual dialog content */}
							<div className='inline-block w-full p-6 overflow-hidden align-middle transition-all transform dark:bg-primary-500 border border-dashed dark:border-accent-500 bg-white shadow-xl'>
								<Dialog.Title
									as='div'
									className='text-2xl font-medium leading-6 flex justify-between items-center dark:text-accent-500'>
									<h1 className='mobile-logo'>M I K E</h1>
									<button
										type='button'
										onClick={() => setIsOpen(false)}
										className='transition px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-accent-500 hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
										<Close className='h-6 w-6 dark:text-accent-500 text-primary-500 fill-current' />
									</button>
								</Dialog.Title>

								<ul>
									{navLinks.map((l, i) => (
										<a key={i} href={l.route} onClick={() => setIsOpen(false)}>
											<li className='transition hover:bg-accent-500 hover:bg-opacity-20 my-2 p-2 rounded'>
												<small>{l.label}</small>
											</li>
										</a>
									))}
								</ul>

								<div className='flex items-center justify-between max-w-[200px] mx-auto my-8'>
									<NavButton href='https://github.com.com/mikecabana' type='github' />
									<NavButton href='https://twitter.com.com/mikecabana' type='twitter' />
									<NavButton href='https://ca.linkedin.com/in/michael-cabana-b5903a66' type='linkedin' />
								</div>

								<div className='flex items-center justify-center'>
									<ThemeToggler />
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};