import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Added imports
import logo from "../../public/assets/logo.png";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const navigate = useNavigate(); // Added
    const location = useLocation(); // Added

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const closeMobileMenu = () => {
        setMobileDrawerOpen(false);
    };

    // Function to scroll to section
    const scrollToSection = (sectionId) => {
        // If we're on the home page, scroll to section
        if (location.pathname === '/') {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
        closeMobileMenu();
    };


    const navigateToProjects = () => {
        if (location.pathname === '/projects') {

            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {

            navigate('/projects');
        }
        closeMobileMenu();
    };

    const navigateToHome = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-white/95 border-b border-blue-100 shadow-sm">
            <div className="container px-4 mx-auto relative">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <button
                            onClick={navigateToHome}
                            className="flex items-center cursor-pointer group"
                        >
                            <div className="relative">
                                <div className="absolute -inset-1 bg-blue-400/20 rounded-full blur-sm group-hover:bg-blue-400/30 transition-all"></div>
                                <img className="h-10 w-10 mr-3 relative z-10" src={logo} alt="Baraka Creatives Logo" />
                            </div>
                            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
                                <span className="text-gray-900">BARAKA</span>
                                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-transparent bg-clip-text">
                                    {" "}CREATIVES TECH
                                </span>
                            </h1>
                        </button>
                    </div>


                    <div className="hidden lg:flex items-center space-x-4">

                        <div className="mr-4 flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-blue-700 font-mono text-xs font-medium">ONLINE</span>
                        </div>


                        <button
                            onClick={() => scrollToSection('about')}
                            className="group relative px-4 py-2.5 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                            <span className="relative z-10">ABOUT</span>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                        </button>

                        <button
                            onClick={() => scrollToSection('team')}
                            className="group relative px-4 py-2.5 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                            <span className="relative z-10">TEAM</span>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                        </button>

                        <button
                            onClick={() => scrollToSection('services')}
                            className="group relative px-4 py-2.5 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                            <span className="relative z-10">SERVICES</span>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                        </button>

                        <button
                            onClick={navigateToProjects}
                            className="group relative px-4 py-2.5 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                            <span className="relative z-10">PROJECTS</span>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                        </button>

                        <div className="h-6 w-px bg-gray-300"></div>

                        {/* Contact Button */}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="group relative px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="relative z-10 flex items-center">
                                CONTACT
                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                            {/* Animated border */}
                            <div className="absolute inset-0 border border-blue-500/30 rounded-lg group-hover:border-blue-400/50 transition-colors"></div>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={toggleNavbar}
                            className="p-2 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
                        >
                            {mobileDrawerOpen ? (
                                <X className="w-6 h-6 text-blue-600" />
                            ) : (
                                <Menu className="w-6 h-6 text-blue-600" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileDrawerOpen && (
                    <div className="fixed inset-0 z-40 lg:hidden">
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                            onClick={closeMobileMenu}
                        />

                        {/* Mobile Menu Panel */}
                        <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl border-l border-blue-100 animate-slideIn">
                            <div className="p-6">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-8 pb-4 border-b border-blue-100">
                                    <div className="flex items-center">
                                        <img className="h-8 w-8 mr-3" src={logo} alt="Baraka Creatives Logo" />
                                        <span className="font-bold text-gray-900">BARAKA</span>
                                        <span className="font-bold text-blue-600 ml-1">CREATIVES</span>
                                    </div>
                                    <button
                                        onClick={closeMobileMenu}
                                        className="p-2 rounded-lg hover:bg-blue-50 transition-colors"
                                    >
                                        <X className="w-5 h-5 text-blue-600" />
                                    </button>
                                </div>

                                {/* Status */}
                                <div className="mb-6 flex items-center justify-center">
                                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-blue-700 font-mono text-sm font-medium">SYSTEM: OPERATIONAL</span>
                                    </div>
                                </div>

                                {/* Menu Items */}
                                <div className="space-y-2">
                                    <button
                                        onClick={() => scrollToSection('about')}
                                        className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors font-medium group"
                                    >
                                        <div className="flex items-center">
                                            <div className="w-1 h-6 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <span>ABOUT US</span>
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => scrollToSection('team')}
                                        className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors font-medium group"
                                    >
                                        <div className="flex items-center">
                                            <div className="w-1 h-6 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <span>OUR TEAM</span>
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => scrollToSection('services')}
                                        className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors font-medium group"
                                    >
                                        <div className="flex items-center">
                                            <div className="w-1 h-6 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <span>SERVICES</span>
                                        </div>
                                    </button>

                                    <button
                                        onClick={navigateToProjects}
                                        className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors font-medium group"
                                    >
                                        <div className="flex items-center">
                                            <div className="w-1 h-6 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <span>PROJECTS</span>
                                        </div>
                                    </button>

                                    <div className="my-4 border-t border-blue-100"></div>

                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-left group"
                                    >
                                        <div className="flex items-center">
                                            <span>CONTACT US</span>
                                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>

                                {/* Contact Info */}
                                <div className="mt-8 pt-6 border-t border-blue-100">
                                    <div className="text-center">
                                        <div className="text-blue-700 font-mono text-xs uppercase tracking-widest mb-2">
                                            CONTACT TERMINAL
                                        </div>
                                        <div className="text-gray-900 text-lg font-bold font-mono">
                                            +254 723 643 765
                                        </div>
                                        <div className="text-gray-500 text-sm mt-1">
                                            creativesbaraka@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }
                .animate-slideIn {
                    animation: slideIn 0.3s ease-out;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;