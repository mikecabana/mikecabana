import Image from 'next/image';

import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<div className='container mx-auto'>
			<div className='comming-soon'>
        <h1 className="mb-4">MIKECABANA.COM</h1>
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
				<h1 className='text-2xl text-gray-900 mb-4'>My website is getting an overhaul!</h1>
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
						<a className='text-red-500 hover:underline hover:text-gray-700' href='mailto:mikeycabana@gmail.com'>
							Email
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
