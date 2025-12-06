import { useState, useEffect } from 'react';
import { ArrowLeft, Github, Mail, MessageCircle, Code, MapPin, ChevronRight, Globe, Cpu, Database, Layout, Smartphone, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import RepoCard from "./RepoCard.jsx";


const DesktopDans = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userStats, setUserStats] = useState(null);

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {

                const userResponse = await fetch('https://api.github.com/users/dansguru');
                const userData = await userResponse.json();


                const reposResponse = await fetch('https://api.github.com/users/dansguru/repos?sort=updated&per_page=6');
                const reposData = await reposResponse.json();

                setUserStats({
                    publicRepos: userData.public_repos,
                    followers: userData.followers,
                    following: userData.following,
                    createdAt: userData.created_at
                });

                setRepos(reposData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    return (
        <div className="min-h-screen bg-white">

            <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
                <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 p-2 rounded-lg transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Return to Home</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg"></div>
                        <h1 className="text-2xl font-bold text-gray-900">
                           DANS GURU
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-600">Full-Stack Developer</span>
                    </div>
                </div>
            </div>


            <div className="pt-20">
                <div className="max-w-7xl mx-auto px-8">

                    <div className="grid grid-cols-2 gap-16 items-center mb-20">

                        <div className="relative">
                            <div className="relative w-full max-w-lg">
                                <img
                                    src="/assets/Cover.png"
                                    alt="Professional Headshot"
                                    className="w-full h-auto rounded-2xl shadow-xl object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-2xl shadow-xl">
                                    <div className="text-center">
                                        <p className="text-3xl font-bold">5+</p>
                                        <p className="text-sm opacity-90">Years Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="space-y-8">
                            <div>
                                <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-4">
                                    <span className="text-sm font-medium text-gray-700">Developer</span>
                                </div>
                                <h1 className="text-5xl font-bold text-gray-900 mb-3">DANS GURU</h1>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Globe className="w-5 h-5" />
                                        <span className="font-medium">Full-Stack Developer | Kotlin Specialist</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <MapPin className="w-5 h-5" />
                                        <span>Nairobi, Kenya · Remote & On-site</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Users className="w-5 h-5" />
                                        <span>Available for Contract & Full-time Positions</span>
                                    </div>
                                </div>
                            </div>

                          
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                                    <Cpu className="w-5 h-5 text-blue-600" />
                                    <span className="font-medium text-gray-800">Backend Development</span>
                                </div>
                                <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
                                    <Smartphone className="w-5 h-5 text-purple-600" />
                                    <span className="font-medium text-gray-800">Mobile Apps</span>
                                </div>
                                <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                                    <Database className="w-5 h-5 text-green-600" />
                                    <span className="font-medium text-gray-800">Database Design</span>
                                </div>
                                <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
                                    <Layout className="w-5 h-5 text-orange-600" />
                                    <span className="font-medium text-gray-800">UI/UX Design</span>
                                </div>
                            </div>


                            {userStats && (
                                <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 rounded-xl">
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-gray-900">{userStats.publicRepos}</p>
                                        <p className="text-sm text-gray-600">Public Repos</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-gray-900">{userStats.followers}</p>
                                        <p className="text-sm text-gray-600">Followers</p>
                                    </div>

                                </div>
                            )}


                            <div className="flex gap-4 pt-4">
                                <a
                                    href="https://github.com/dansguru"
                                    className="flex-1 flex items-center justify-center gap-3 p-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors group"
                                >
                                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span className="font-semibold">View GitHub Profile</span>
                                </a>
                                <a
                                    href="mailto:dansnyagechi@gmail.com"
                                    className="flex-1 flex items-center justify-center gap-3 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
                                >
                                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span className="font-semibold">Contact via Email</span>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="mb-20">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">GitHub Projects</h2>
                                <p className="text-gray-600">A showcase of my latest work and contributions</p>
                            </div>
                            <a
                                href="https://github.com/dansguru"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                            >
                                View All Projects
                                <ChevronRight className="w-4 h-4" />
                            </a>
                        </div>

                        {loading ? (
                            <div className="grid grid-cols-3 gap-6">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="bg-gray-100 animate-pulse rounded-xl p-5 h-40"></div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-3 gap-6">
                                {repos.map((repo) => (
                                    <RepoCard key={repo.id} repo={repo} />
                                ))}
                            </div>
                        )}
                    </div>


                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Expertise</h2>

                        <div className="grid grid-cols-4 gap-6">

                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <Code className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-900">Frontend</h3>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        React & TypeScript
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        Next.js & Vite
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        Tailwind CSS
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        Material-UI
                                    </li>
                                </ul>
                            </div>


                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <Smartphone className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-900">Mobile</h3>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        Kotlin (Android)
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        Jetpack Compose
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        React Native
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        Firebase Integration
                                    </li>
                                </ul>
                            </div>




                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <Database className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-900">Tools & DevOps</h3>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        Git & GitHub Actions
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>

                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        Figma & Adobe Suite
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Creative Collaboration</h2>

                        <div className="grid grid-cols-3 gap-8 items-start">

                            <div className="relative mt-12">
                                <img
                                    src="/assets/creative-process.png"
                                    alt="Technical Craft"
                                    className="w-full h-auto rounded-xl"
                                />
                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                                    <div className="bg-white px-6 py-3 rounded-lg shadow-lg">
                                        <p className="text-xl font-bold text-gray-900">LET'S</p>
                                        <p className="text-sm text-gray-600 mt-1">Build Together</p>
                                    </div>
                                </div>
                            </div>


                            <div className="relative">
                                <img
                                    src="/assets/design-vision.png"
                                    alt="Visual Design"
                                    className="w-full h-auto rounded-xl"
                                />
                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                                    <div className="bg-white px-6 py-3 rounded-lg shadow-lg">
                                        <p className="text-xl font-bold text-gray-900">JOIN</p>
                                        <p className="text-sm text-gray-600 mt-1">For Innovation</p>
                                    </div>
                                </div>
                            </div>


                            <div className="relative mb-12">
                                <img
                                    src="/assets/future-focus.png"
                                    alt="Future Innovation"
                                    className="w-full h-auto rounded-xl"
                                />
                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                                    <div className="bg-white px-6 py-3 rounded-lg shadow-lg">
                                        <p className="text-xl font-bold text-gray-900">AND MAKE IT</p>
                                        <p className="text-sm font-semibold text-gray-800">Best For You</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-8 border-t">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-gray-900 font-bold text-lg">DANS GURU</p>
                                <p className="text-gray-500">Full-Stack & Mobile Developer</p>
                            </div>
                            <div className="flex items-center gap-6">
                                <a href="https://github.com/dansguru" className="text-gray-400 hover:text-gray-700">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="mailto:dansnyagechi@gmail.com" className="text-gray-400 hover:text-gray-700">
                                    <Mail className="w-5 h-5" />
                                </a>
                                <a href="https://wa.me/+254745342479" className="text-gray-400 hover:text-gray-700">
                                    <MessageCircle className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t text-center">
                            <p className="text-gray-500">© {new Date().getFullYear()} All rights reserved. Built with React & Tailwind CSS</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DesktopDans;