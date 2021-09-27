import Image from 'next/image';
import { MainLayout } from '../components/layouts/MainLayout';
import { ExperienceCard } from '../components/sections/ExperienceCard';
import { Projects } from '../components/sections/Projects';
import { useUnderMaintenance } from '../lib/useUnderMaintenance';
import { Footer } from '../components/sections/Footer';
import { SectionWrapper } from '../components/tools/SectionWrapper';

export default function Home() {
    const isUnderMaintenance = useUnderMaintenance();

    return (
        <MainLayout>
            {!isUnderMaintenance && (
                <>
                    <section className="relative h-screen flex flex-col justify-center">
                        {/* hero */}
                        <h2 className="font-semibold dark:font-normal dark:text-accent-500 text-primary-500 section-title">
                            {'Hi, my name is Michael and'}{' '}
                        </h2>
                        <h1 className="hero-big-text font-extrabold opacity-80">
                            {"I'm a"} <span className="text-accent-500">{'web'}</span> {'tinkerer.'}
                        </h1>
                        <p className="max-w-xl text-base md:text-xl mb-8">
                            {"I'm"} a software developer with a focus on creating great web experiences and a goal to
                            empower those needing to <span className="text-accent-500">{'('}</span>re
                            <span className="text-accent-500">{')'}</span>claim their online presence.
                        </p>
                        <p className="max-w-xl text-base md:text-xl mb-12">
                            Currently I’m working full time developing tools and experiences for a great company in the
                            lounge and travel space. {"Don't"} hesitate to get in touch!
                        </p>
                        <div className="">
                            <a
                                className="px-8 py-4 border border-accent-500 text-accent-500 rounded-lg transition hover:bg-accent hover:bg-opacity-20"
                                href="#get-in-touch"
                            >
                                Get in touch 👋
                            </a>
                        </div>
                        <div className="absolute right-0 top-1/3">
                            <Image src="/upside-tri.png" width={400} height={400} alt="" />
                        </div>
                    </section>
                    <SectionWrapper>
                        <section className="pb-32" id="about-me">
                            {/* about me */}
                            <h2 className="font-semibold dark:font-normal dark:text-accent-500 text-primary-500 section-title pb-12">
                                {'A little about me'}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                                <div>
                                    <p className="pb-8">
                                        My name is Michael Cabana, a Montreal based software developer. I’ve been a
                                        developer professionally for just over 4 years.
                                    </p>
                                    <p className="pb-8">
                                        I first got into web dev while in college where I was actually pursuing a career
                                        path towards a Doctor of Optometry. I took an intro to web development class as
                                        an elective and right away I knew this was the place for me!
                                    </p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="rounded-lg p-4 md:p-12 border-dashed border-2 border-primary-500 dark:border-accent-500">
                                        <div className="relative h-64 w-64 mx-auto">
                                            <Image
                                                src="/profile-pic.png"
                                                alt="portrait of Michael"
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-lg transform scale-x-[-1]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </SectionWrapper>
                    <SectionWrapper>
                        <section className="pb-24" id="projects">
                            {/* projects */}
                            <h2 className="font-semibold dark:font-normal dark:text-accent-500 text-primary-500 section-title pb-12">
                                {'Projects'}
                            </h2>
                            <Projects />
                            <div className="pt-24 text-center">
                                <a
                                    className="text-primary-500 dark:text-accent-500 hover:underline"
                                    href="https://github.com/mikecabana"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Check out my github →
                                </a>
                            </div>
                        </section>
                    </SectionWrapper>
                    <SectionWrapper>
                        <section className="pb-24" id="experience">
                            {/* experience */}
                            <h2 className="font-semibold dark:font-normal dark:text-accent-500 text-primary-500 section-title pb-12">
                                {'Experience'}
                            </h2>
                            <ExperienceCard
                                employer="IEG America"
                                title="Software Developer - Portal Team Lead"
                                start="2017"
                                end="Present"
                                tags={[
                                    'Angular',
                                    'Typescript',
                                    'SCSS',
                                    'Bootstrap',
                                    'Dotnet',
                                    'Entity Framework',
                                    'MSSQL',
                                ]}
                                responsibilities={[
                                    'Responsible for designing and developing functional and thoughtful UI and UX.',
                                    'Leading and mentoring team members in order to maintain the vision for the project.',
                                    'Communicating with project manager, related teams, and stakeholders on a daily basis.',
                                    'Writing scalable and maintainable code based on software oriented architecture paradigms.',
                                ]}
                            />
                        </section>
                    </SectionWrapper>
                    <SectionWrapper>
                        <section className="pb-20" id="get-in-touch">
                            {/* get in touch */}
                            <h2 className="font-semibold dark:font-normal dark:text-accent-500 text-primary-500 section-title pb-12">
                                {"Let's chat"}
                            </h2>
                            <h3 className="font-extrabold opacity-70 text-center get-in-touch-big-text">
                                {'Get in Touch'}
                            </h3>
                            <p className="max-w-md mx-auto text-center mb-12">
                                {
                                    "If you're interested in working together, have any questions or just want to say hi, my inbox is always open!"
                                }
                            </p>
                            <div className=" text-center">
                                <a
                                    className="px-8 py-4 border border-accent-500 text-accent-500 rounded-lg transition hover:bg-accent hover:bg-opacity-20"
                                    href="mailto:mikeycabana@gmail.com"
                                >
                                    Say hello!
                                </a>
                            </div>
                        </section>
                    </SectionWrapper>
                    <Footer />
                </>
            )}
            {isUnderMaintenance && (
                <>
                    <div className="text-center">
                        <span className="shadow rounded-3xl px-2 py-1 text-sm md:px-4 md:py-2 md:text-base bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-300 font-semibold">
                            coming soon
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
