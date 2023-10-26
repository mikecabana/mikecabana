import { Fragment, FC, useState, useEffect, FormEvent } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { Input } from './Input';
import { Button } from './Button';
import { Textarea } from './Textarea';

type ContactFormProps = {
	isOpen: boolean;
	onClose: () => void;
};

export const ContactForm: FC<ContactFormProps> = ({ isOpen, onClose }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const [robot, setRobot] = useState('');
	const [success, setSuccess] = useState(false);

	const closeModal = () => {
		onClose();
	};

	const handleSend = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log({ name, email, phone, message, robot });

		try {
			await fetch('/api/contact', {
				method: 'POST',
				body: JSON.stringify({ name, email, phone, message, robot }),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			setSuccess(true);
		} catch (e) {}
	};

	useEffect(() => {
		setIsModalOpen(isOpen);
	}, [isOpen]);

	return (
		<>
			<Transition appear show={isModalOpen} as={Fragment}>
				<Dialog as='div' className='fixed inset-0 z-50 overflow-y-auto' onClose={closeModal}>
					<div className='min-h-screen p-4 flex items-start justify-center'>
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
							<div className='inline-block w-full max-w-[750px] p-6 overflow-hidden align-middle transition-all transform dark:bg-primary-950 border border-dashed rounded-2xl dark:border-accent-500 bg-white shadow-xl'>
								<Dialog.Title
									as='div'
									className='text-2xl font-medium leading-6 flex justify-between items-center dark:text-accent-500'>
									<div className=''>Contact</div>
									<button
										type='button'
										onClick={() => closeModal()}
										className='transition px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-accent-500 hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
										<X className='h-6 w-6 dark:text-accent-500 text-primary-950 fill-current' />
									</button>
								</Dialog.Title>

								<form onSubmit={(e) => handleSend(e)}>
									<div className='grid grid-cols-2 gap-8'>
										<div>
											<Input
												type='text'
												name='name'
												label='Name'
												required
												value={name}
												onInput={(e) => setName((e.target as any).value)}
											/>
											<Input
												type='email'
												name='email'
												label='Email'
												required
												value={email}
												onInput={(e) => setEmail((e.target as any).value)}
											/>
											<Input
												type='tel'
												name='phone'
												label='Phone'
												value={phone}
												onInput={(e) => setPhone((e.target as any).value)}
											/>
											<div className='hidden'>
												<Input
													type='text'
													name='robot'
													value={robot}
													onInput={(e) => setRobot((e.target as any).value)}
												/>
											</div>
										</div>
										<div className='flex flex-col items-stretch justify-stretch'>
											<Textarea
												name='message'
												label='Message'
												required
												className='h-full resize-none'
												value={message}
												onInput={(e) => setMessage((e.target as any).value)}
											/>
										</div>
									</div>
									<div className='mt-4'>
										<Button type='submit' className='w-full flex justify-center'>
											Send
										</Button>
									</div>
								</form>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};
