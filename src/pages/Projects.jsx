
import ProjectTerminal from '../components/ProjectTerminal.jsx';
import { ExternalLink, Globe, Shield, Code, Calendar, ChevronRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Invex Ltd",
            description: "Professional architectural design and project management services.",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&crop=center",
            liveUrl: "https://invexltd.com/",
            tags: ["Architecture", "Design"],
            year: "2024",
            icon: <Globe className="w-5 h-5" />
        },
        {
            id: 2,
            title: "Abilasafety",
            description: "Occupational health and safety consultancy services in Tanzania.",
            image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop&crop=center",
            liveUrl: "https://abilasafety.co.tz/",
            tags: ["Health & Safety", "Consultancy"],
            year: "2024",
            icon: <Shield className="w-5 h-5" />
        },
        {
            id: 3,
            title: "Ukulima Tech",
            description: "Agricultural waste recycling for sustainable farming solutions.",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop&crop=center",
            liveUrl: "https://ukulimatech.co.ke/",
            tags: ["AgriTech", "Sustainability"],
            year: "2024",
            icon: <Code className="w-5 h-5" />
        },
        {
            id: 4,
            title: "Ambuensi",
            description: "Emergency ambulance dispatch system for healthcare services.",
            image: "https://images.unsplash.com/photo-1516549655669-df6654e435f5?w=600&h=400&fit=crop&crop=center",
            liveUrl: "https://ambulensi.org/",
            tags: ["Healthcare", "Technology"],
            year: "2024",
            icon: <Calendar className="w-5 h-5" />
        }
    ];

    const stats = [
        { value: "7+", label: "Projects Completed" },
        { value: "100%", label: "Client Satisfaction" },
        { value: "6+", label: "Years Experience" },
        { value: "4", label: "Team Members" }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header with Image Background */}
            <div className="relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                        filter: 'brightness(0.3)'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-cyan-800/70" />

                <div className="relative container mx-auto px-4 py-16 md:py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                            <span className="text-white/90 text-sm font-medium">Our Work</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Portfolio</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Showcasing innovative projects we've built for clients across various industries.
                            Each project represents our commitment to quality and excellence.
                        </p>

                        {/* Stats for mobile*/}
                        <div className="grid grid-cols-2 gap-4 mt-8 md:hidden">
                            {stats.slice(0, 2).map((stat, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                                    <div className="text-xl font-bold text-white">{stat.value}</div>
                                    <div className="text-xs text-white/80 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="container mx-auto px-4 py-8 md:py-12">
                {/* Stats Banner - Desktop only */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
                            <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                            <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Left Content ) */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Projects</h2>
                            <div className="text-sm text-gray-500 hidden md:block">
                                Showing {projects.length} projects
                            </div>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map(project => (
                                <div key={project.id} className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                                    <div className="relative h-48 md:h-56 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            {project.year}
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                            <div className="flex items-center space-x-2">
                                                <div className="text-white">
                                                    {project.icon}
                                                </div>
                                                <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group/link"
                                            >
                                                Visit Live Site
                                                <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                                            </a>
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-blue-600 md:hidden"
                                                aria-label="Open project"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-0">Have a Project in Mind?</h3>
                                    <p className="text-gray-600 text-sm md:text-base">
                                        Let's build something amazing together. Contact us to discuss your next project.
                                    </p>
                                </div>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap"
                                >
                                    Start Your Project
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Terminal (1/3 width on desktop) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-6 space-y-6">
                            {/* Terminal Info Card */}
                            <div className="bg-white rounded-xl p-5 border border-gray-300 shadow-lg">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                                        <Code className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">Project Builder Demo</h3>
                                        <p className="text-xs text-gray-500">Interactive simulation</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-4">
                                    Try our interactive project builder to simulate creating your next project.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center text-sm">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-700 mr-2">Try:</span>
                                        <code className="px-3 py-1 bg-gray-100 rounded text-blue-600 font-mono text-xs truncate">help</code>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-700 mr-2">Build:</span>
                                        <code className="px-3 py-1 bg-gray-100 rounded text-blue-600 font-mono text-xs truncate">build webapp</code>
                                    </div>
                                </div>
                            </div>

                            {/* Terminal Container */}
                            <div className="h-[400px] lg:h-[500px]">
                                <ProjectTerminal />
                            </div>

                            {/* Quick Info - Mobile optimized */}
                            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-5 text-white">
                                <h4 className="font-bold mb-4 text-lg">Why Choose Us?</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-white rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                                        <span className="text-sm">Professional & Experienced Team</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-white rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                                        <span className="text-sm">Modern Tech Stack</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-white rounded-full mr-3 mt=1.5 flex-shrink-0"></div>
                                        <span className="text-sm">Timely Delivery</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-white rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                                        <span className="text-sm">24/7 Support</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Mobile CTA */}
                            <div className="lg:hidden bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-3">Ready to Start?</h4>
                                <p className="text-sm text-gray-600 mb-4">
                                    Contact us today for a free consultation about your project.
                                </p>
                                <a
                                    href="tel:+254723643765"
                                    className="inline-flex items-center justify-center w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    Call Now: +254 723 643 765
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info for Mobile */}
                <div className="mt-8 lg:hidden">
                    <div className="grid grid-cols-2 gap-4">
                        {stats.slice(2).map((stat, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-center">
                                <div className="text-xl font-bold text-blue-600">{stat.value}</div>
                                <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-t border-gray-200 py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Let's Build Something <span className="text-blue-600">Together</span>
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Have an idea? Let's turn it into reality with our expert team and proven process.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                            >
                                Start Your Project
                            </a>
                            <a
                                href="mailto:creativesbaraka@gmail.com"
                                className="px-6 py-3 bg-white text-blue-600 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors font-semibold"
                            >
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Optimization Styles */}
            <style jsx>{`
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                @media (max-width: 768px) {
                    .container {
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }
                    
                    .sticky {
                        position: static;
                    }
                }
            `}</style>
        </div>
    );
};

export default Projects;