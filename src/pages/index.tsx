import Image from 'next/image';
import { MainLayout } from '../components/layouts/MainLayout';
import { Projects } from '../components/sections/Projects';
import { useUnderMaintanence } from '../lib/useUnderMaintenance';

import styles from '../styles/Home.module.scss';

export default function Home() {
    const isUnderMaintenance = useUnderMaintanence();

    return (
        <MainLayout>
            {!isUnderMaintenance && (
                <>
                    <section className="py-24 relative">
                        {/* hero */}
                        <h2 className="font-semibold dark:font-normal dark:text-accent-500 text-primary-500 section-title">
                            {'Hi, my name is Michael and'}{' '}
                        </h2>
                        <h1 className="hero-big-text font-extrabold opacity-80">
                            {"I'm a"} <span className="text-accent-500">{'web'}</span> {'tinkerer.'}
                        </h1>
                        <p className="max-w-lg">
                            I’m a software developer with a focus on creating great web experinces with a goal to
                            empower those needing to (re)claim their online pressence.
                        </p>
                        <div className="absolute right-0 top-1/3">
                            <Image src="/upside-tri.png" width={300} height={300} alt="" />
                        </div>
                    </section>
                    <section className="">{/* about me */}</section>
                    <section>
                        {/* projects */}
                        <Projects />
                    </section>
                    <section>{/* experience */}</section>
                    <section>{/* get in touch */}</section>
                    <footer className="py-10 text-sm text-center dark:text-accent-500 text-primary-500">
                        <span>mikecabana.com © {new Date().getFullYear()}</span>
                    </footer>
                </>
            )}
            {isUnderMaintenance && (
                <>
                    <div className="text-center">
                        <span className="shadow rounded-3xl px-2 py-1 text-sm md:px-4 md:py-2 md:text-base bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-300 font-semibold">
                            comming soon
                        </span>
                    </div>
                    <div className="shadow rounded bg-white dark:bg-gray-800 my-8 p-12 text-center">
                        <div className="flex justify-center mb-4">
                            <div className="shadow rounded-full p-2 bg-background dark:bg-gray-900 h-20 w-20">
                                <Image
                                    className="rounded-full"
                                    src="/profile-pic.png"
                                    alt="profile picture"
                                    width={150}
                                    height={150}
                                />
                            </div>
                        </div>
                        <h2 className="text-2xl mb-4">My website is getting an overhaul!</h2>
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
                </>
            )}
        </MainLayout>
    );
}
