import Image from 'next/image';

import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<>
			<div className='container mx-auto max-w-2xl px-4'>
				<div className='flex justify-between items-center'>
					<h1 className='logo text-2xl py-4'>M I K E</h1>
					<span className='rounded-3xl p-4 py-2 bg-gray-100 text-gray-500'>comming soon</span>
				</div>
				<div className="flex flex-col justify-between">
					<div className='shadow rounded bg-gray-50 my-12 p-12 text-center'>
						<div className='flex justify-center mb-4'>
							<div className='rounded-full p-2 bg-gray-200 h-20 w-20'>
								<Image
									className='rounded-full'
									src='/profile-pic.png'
									alt='profile picture'
									width={150}
									height={150}
								/>
							</div>
						</div>
						<h2 className='text-2xl text-gray-900 mb-4'>My website is getting an overhaul!</h2>
						<p className='text-gray-600'>Socials if you need to reach me</p>
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
					</div>
          <div className="text-center text-gray-400 text-sm">
            mikecabana.com &copy; {new Date().getFullYear()}
          </div>
				</div>
			</div>
		</>
	);
}
