const HeroSection = () => {
    return (
        <section id="home" className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 overflow-hidden bg-white">
            {/* Illustration Background */}
            <div className="absolute inset-0">
                {/* Main Illustration Background */}
                <div className="absolute inset-0 opacity-15">
                    <img
                        src="/assets/illustrations/hero-bg.jpg"
                        alt="Technology Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/40"></div>


                <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-50/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-50/30 to-transparent"></div>


                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                </div>


                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-70"></div>
                <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-60" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-blue-300 rounded-full animate-pulse opacity-50" style={{animationDelay: '0.6s'}}></div>
            </div>

            <div className="relative z-10 w-full flex flex-col items-center justify-center">
                <div className="relative bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl shadow-blue-200/50 border border-blue-100 w-full max-w-5xl">

                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"></div>

                    <div className="absolute -top-3 -left-3 w-5 h-5">
                        <div className="w-full h-full bg-blue-500 rounded-full animate-pulse shadow-[0_0_12px_3px_rgba(59,130,246,0.3)]"></div>
                    </div>
                    <div className="absolute -top-3 -right-3 w-5 h-5">
                        <div className="w-full h-full bg-blue-500 rounded-full animate-pulse shadow-[0_0_12px_3px_rgba(59,130,246,0.3)]" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <div className="absolute -bottom-3 -left-3 w-5 h-5">
                        <div className="w-full h-full bg-blue-400 rounded-full animate-pulse shadow-[0_0_12px_3px_rgba(96,165,250,0.3)]" style={{animationDelay: '0.4s'}}></div>
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-5 h-5">
                        <div className="w-full h-full bg-blue-400 rounded-full animate-pulse shadow-[0_0_12px_3px_rgba(96,165,250,0.3)]" style={{animationDelay: '0.6s'}}></div>
                    </div>

                    {/* Main content */}
                    <div className="relative z-10">
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide font-bold">
                            <span className="text-gray-900">INNOVATIVE TECHNOLOGY SOLUTIONS FOR</span>
                            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-transparent bg-clip-text block sm:inline">
                                {" "}YOUR BUSINESS
                            </span>
                        </h1>
                        <div className="mt-2 text-center">
                            <span className="text-blue-600 font-mono text-sm sm:text-lg tracking-widest font-semibold">
                                // BARAKA CREATIVES TECH
                            </span>
                        </div>

                        <p className="mt-8 text-lg text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Transforming ideas into powerful digital experiences with cutting-edge technology and creative expertise.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                            <button
                                onClick={() => {
                                    const element = document.getElementById('contact');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="group relative px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="relative z-10 flex items-center">
                                    GET STARTED
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>

                            <button
                                onClick={() => {
                                    const element = document.getElementById('services');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="group relative px-8 py-3 rounded-lg bg-white border border-blue-200 text-blue-700 font-semibold hover:bg-blue-50 transition-all duration-300"
                            >
                                <span className="relative z-10 flex items-center">
                                    OUR SERVICES
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <div className="mt-12 relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/10 via-transparent to-blue-400/10 blur-lg"></div>

                            <div className="relative bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-blue-200 shadow-lg">
                                <div className="absolute inset-0 border border-blue-100 rounded-2xl"></div>
                                <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

                                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="text-center md:text-left">
                                        <div className="text-blue-700 font-mono text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                            COMPANY STATS
                                        </div>
                                        <div className="text-gray-900 text-lg font-semibold">
                                            7+ PROJECTS COMPLETED
                                        </div>
                                        <div className="text-gray-500 font-mono text-sm">
                                            100% CLIENT SATISFACTION
                                        </div>
                                    </div>

                                    <div className="hidden md:block h-12 w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent"></div>

                                    <div className="text-center">
                                        <div className="relative inline-block">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-20"></div>
                                            <div className="relative bg-white px-6 py-3 rounded-lg border border-blue-200 shadow-md">
                                                <div className="text-blue-700 font-mono text-xs uppercase tracking-widest mb-1">
                                                    CONTACT TERMINAL
                                                </div>
                                                <div className="text-gray-900 text-xl font-bold tracking-tight font-mono">
                                                    +254 723 643 765
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden md:block h-12 w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent"></div>

                                    <div className="text-center md:text-right">
                                        <div className="text-blue-700 font-mono text-xs uppercase tracking-widest mb-2">
                                            OPERATIONS CENTER
                                        </div>
                                        <div className="text-gray-900 text-lg font-semibold">
                                            NAIROBI, KENYA
                                        </div>
                                        <div className="text-gray-500 text-sm">
                                            <span className="inline-flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                                Global Services Available
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-[scan_3s_linear_infinite] opacity-60"></div>
                            </div>

                            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-blue-400/50 rounded-tl-lg"></div>
                            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-blue-400/50 rounded-tr-lg"></div>
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-blue-400/50 rounded-bl-lg"></div>
                            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-blue-400/50 rounded-br-lg"></div>
                        </div>

                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div className="p-4 rounded-xl bg-gradient-to-b from-white/95 to-blue-50/95 backdrop-blur-sm border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="text-blue-700 text-sm font-mono font-semibold">WEB DEVELOPMENT</div>
                                <div className="text-gray-500 text-xs mt-1">Cutting-edge Solutions</div>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-b from-white/95 to-blue-50/95 backdrop-blur-sm border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="text-blue-700 text-sm font-mono font-semibold">CYBER SECURITY</div>
                                <div className="text-gray-500 text-xs mt-1">System Protection</div>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-b from-white/95 to-blue-50/95 backdrop-blur-sm border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="text-blue-700 text-sm font-mono font-semibold">SOFTWARE ENGINEERING</div>
                                <div className="text-gray-500 text-xs mt-1">Custom Solutions</div>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-b from-white/95 to-blue-50/95 backdrop-blur-sm border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="text-blue-700 text-sm font-mono font-semibold">DIGITAL TRANSFORMATION</div>
                                <div className="text-gray-500 text-xs mt-1">Business Growth</div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-center space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=61577243083516" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                                <i className="fab fa-facebook-f w-4 h-4"></i>
                            </a>
                            <a href="https://x.com/Erastus_tech/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                                <i className="fab fa-twitter w-4 h-4"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/erastus-odira-26162535a/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                                <i className="fab fa-linkedin-in w-4 h-4"></i>
                            </a>
                            <a href="https://www.instagram.com/barakacreatives_tech/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                                <i className="fab fa-instagram w-4 h-4"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 animate-bounce">
                    <div className="text-gray-500 text-sm flex flex-col items-center font-mono">
                        <span className="text-blue-600 font-semibold">SCROLL TO EXPLORE</span>
                        <svg className="w-6 h-6 mt-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>

            <div id="hero-section"></div>

            <style jsx>{`
                @keyframes scan {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </section>
    );
};

export default HeroSection;