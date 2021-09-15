import Image from 'next/image';
import { MainLayout } from '../components/layouts/MainLayout';

import styles from '../styles/Home.module.scss';

export default function Home() {
    return (
        <MainLayout>
            <div className="flex flex-col justify-between">
                <div className="shadow rounded bg-gray-50 dark:bg-gray-800 my-12 p-12 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="rounded-full p-2 bg-gray-200 dark:bg-gray-900 h-20 w-20">
                            <Image
                                className="rounded-full"
                                src="/profile-pic.png"
                                alt="profile picture"
                                width={150}
                                height={150}
                            />
                        </div>
                    </div>
                    <h2 className="text-2xl text-gray-900 dark:text-gray-300 mb-4">My website is getting an overhaul!</h2>
                    <p className="text-gray-600 dark:text-gray-400">Socials if you need to reach me</p>
                    <ul className="list-none">
                        <li className="my-2">
                            <a
                                className="text-twitter-blue hover:underline hover:text-gray-700"
                                href="https://twitter.com/mikecabana"
                            >
                                Twitter
                            </a>
                        </li>
                        <li className="my-2">
                            <a
                                className="text-linkedin-blue hover:underline hover:text-gray-700"
                                href="https://ca.linkedin.com/in/michael-cabana-b5903a66"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li className="my-2">
                            <a
                                className="text-red-500 hover:underline hover:text-gray-700"
                                href="mailto:mikeycabana@gmail.com"
                            >
                                Email
                            </a>
                        </li>
                    </ul>
                    <div className="text-center text-gray-400 text-sm">
                        mikecabana.com &copy; {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
