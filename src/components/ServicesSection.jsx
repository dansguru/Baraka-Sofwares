import { services } from "../constants/index.jsx";

const ServicesSection = () => {
    return (
        <section id="services" className="py-24 px-4 bg-white relative overflow-hidden">

            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px),
                                     linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>


            <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="text-center mb-16">
                    <div className="inline-block mb-6">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-600/5 rounded-lg"></div>
                            <h2 className="relative text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                                <span className="text-gray-900">Our</span>
                                <span className="text-blue-600"> Technology</span>
                                <span className="text-gray-900"> Services</span>
                            </h2>
                        </div>
                    </div>


                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-8 h-px bg-blue-200"></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <div className="w-8 h-px bg-blue-200"></div>
                    </div>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Professional technology solutions engineered for business growth and digital excellence.
                    </p>


                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        {["Enterprise Solutions", "Scalable Architecture", "Security-First", "Performance Optimized"].map((tag, index) => (
                            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white border border-blue-100 rounded-full">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                <span className="text-sm text-gray-700 font-medium">{tag}</span>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="relative group"
                        >

                            {service.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                                    <div className="bg-blue-600 text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-sm">
                                        <span className="flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                            Recommended
                                        </span>
                                    </div>
                                </div>
                            )}


                            <div className={`relative bg-white p-6 rounded-2xl border transition-all duration-300 group-hover:border-blue-300 ${
                                service.popular
                                    ? 'border-blue-300 shadow-lg'
                                    : 'border-gray-200 shadow-md'
                            }`}>


                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"></div>


                                <div className="mb-6">
                                    <div className="w-16 h-16 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                                        <div className="text-2xl text-blue-600">{service.icon}</div>

                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                    </div>
                                </div>


                                <div className="space-y-5">

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                            {service.title}
                                        </h3>


                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-blue-100 flex items-center justify-center">
                                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                                </div>
                                                <span className="text-sm text-gray-600 font-medium">{service.category}</span>
                                            </div>

                                            <div className="text-right">
                                                <div className="text-blue-600 font-bold text-lg">{service.duration}</div>
                                                {service.projectScope && (
                                                    <div className="text-xs text-gray-500">{service.projectScope}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>


                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {service.description}
                                    </p>


                                    <div className="pt-4 border-t border-gray-100">
                                        <div className="flex flex-wrap gap-2">
                                            {service.technologies.slice(0, 3).map((tech, index) => (
                                                <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                            {service.technologies.length > 3 && (
                                                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                                    +{service.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>


                                    <div className="space-y-3">
                                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            Key Features
                                        </div>
                                        <ul className="space-y-2">
                                            {service.features.slice(0, 3).map((feature, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                                                        <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm text-gray-600">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>


                                <div className="absolute top-3 left-3 w-2 h-2 border border-blue-300 rounded-full"></div>
                                <div className="absolute top-3 right-3 w-2 h-2 border border-blue-300 rounded-full"></div>
                                <div className="absolute bottom-3 left-3 w-2 h-2 border border-blue-300 rounded-full"></div>
                                <div className="absolute bottom-3 right-3 w-2 h-2 border border-blue-300 rounded-full"></div>


                                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="mt-20">
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center gap-3 mb-4">
                                <div className="w-10 h-px bg-gray-300"></div>
                                <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Why Partner With Us</div>
                                <div className="w-10 h-px bg-gray-300"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Engineering Excellence Meets Business Value
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                We deliver technology solutions that are not just technically sound, but also drive measurable business outcomes.
                            </p>
                        </div>


                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            {[
                                {
                                    metric: "100%",
                                    label: "Client Satisfaction",
                                    description: "Every project delivered with excellence"
                                },
                                {
                                    metric: "7+",
                                    label: "Projects Completed",
                                    description: "Across diverse industries"
                                },
                                {
                                    metric: "24/7",
                                    label: "Support Coverage",
                                    description: "Round-the-clock technical assistance"
                                }
                            ].map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">{item.metric}</div>
                                    <div className="text-sm font-semibold text-gray-900 mb-1">{item.label}</div>
                                    <div className="text-xs text-gray-500">{item.description}</div>
                                </div>
                            ))}
                        </div>


                        <div className="border-t border-gray-100 pt-12">
                            <h4 className="text-lg font-semibold text-gray-900 text-center mb-8">Our Development Process</h4>
                            <div className="grid md:grid-cols-4 gap-6">
                                {[
                                    { step: "01", title: "Discovery", desc: "Requirement analysis" },
                                    { step: "02", title: "Planning", desc: "Architecture design" },
                                    { step: "03", title: "Development", desc: "Agile implementation" },
                                    { step: "04", title: "Deployment", desc: "Launch & support" }
                                ].map((process, index) => (
                                    <div key={index} className="text-center group">
                                        <div className="relative">
                                            <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-3 group-hover:border-blue-300 transition-colors duration-300">
                                                <div className="text-sm font-bold text-blue-600">{process.step}</div>
                                            </div>
                                            {index < 3 && (
                                                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-gray-300 -translate-x-1/2"></div>
                                            )}
                                        </div>
                                        <div className="text-sm font-semibold text-gray-900 mb-1">{process.title}</div>
                                        <div className="text-xs text-gray-500">{process.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <div className="text-center">
                                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                    Technologies We Work With
                                </div>
                                <div className="flex flex-wrap items-center justify-center gap-6 opacity-70">
                                    <div className="text-gray-400 font-mono text-sm">React</div>
                                    <div className="text-gray-400 font-mono text-sm">Node.js</div>
                                    <div className="text-gray-400 font-mono text-sm">Python</div>
                                    <div className="text-gray-400 font-mono text-sm">AWS</div>
                                    <div className="text-gray-400 font-mono text-sm">Docker</div>
                                    <div className="text-gray-400 font-mono text-sm">MongoDB</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-16">
                    <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-2xl p-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    Ready to Build Something Great?
                                </h3>
                                <p className="text-gray-600 max-w-lg">
                                    Schedule a technical consultation with our experts to discuss your project requirements.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('contact');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Schedule Consultation
                                </button>
                                <a
                                    href="https://wa.me/254723643765"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300 text-center"
                                >
                                    Quick Inquiry
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;