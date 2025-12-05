const AboutSection = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <div className="inline-block mb-6">
                        <div className="relative">
                            <h2 className="text-4xl font-bold text-gray-900">
                                About <span className="text-blue-600">Baraka Creatives Tech</span>
                            </h2>
                        </div>
                    </div>

                    {/* Tech Divider */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-8 h-px bg-gray-300"></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <div className="w-8 h-px bg-gray-300"></div>
                    </div>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Engineering innovative technology solutions for modern businesses
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Main Content */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Who We Are
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Baraka Creatives Tech is a specialized technology firm focused on
                                custom software development, cybersecurity solutions, and digital
                                transformation services. We combine technical expertise with strategic
                                thinking to deliver solutions that drive measurable business outcomes.
                            </p>
                        </div>

                        <div className="border-l-4 border-blue-600 pl-6 py-2 bg-blue-50/30">
                            <p className="text-gray-700 font-medium">
                                "Transforming complex challenges into elegant technical solutions through
                                innovation and expertise."
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-600 leading-relaxed">
                                Our approach combines deep technical knowledge with a focus on business
                                objectives, ensuring that every solution we deliver not only works
                                technically but also drives value for your organization. We believe in
                                building lasting partnerships based on trust, transparency, and results.
                            </p>
                        </div>
                    </div>


                    <div className="space-y-8">
                        {/* Mission */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                                    <div className="text-sm text-gray-500 mt-1">Driving business success through technology</div>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                To empower organizations with innovative technology solutions that solve
                                complex business challenges, enhance operational efficiency, and create
                                sustainable competitive advantages in the digital economy.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                                    <div className="text-sm text-gray-500 mt-1">Leading digital transformation</div>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                To be the most trusted technology partner for businesses seeking
                                digital transformation, recognized for our technical excellence,
                                innovative solutions, and commitment to client success.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="mt-16">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-6 h-px bg-gray-300"></div>
                            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Principles</div>
                            <div className="w-6 h-px bg-gray-300"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Core Values That Drive Excellence
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Innovation */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-gray-900">Innovation</h4>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Constantly exploring new technologies and methodologies to deliver
                                cutting-edge solutions that stay ahead of market trends.
                            </p>
                        </div>

                        {/* Excellence */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-gray-900">Excellence</h4>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Committed to delivering superior quality in every project, with meticulous
                                attention to detail and rigorous quality assurance processes.
                            </p>
                        </div>


                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-gray-900">Collaboration</h4>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Building strong partnerships based on transparent communication,
                                mutual respect, and shared success with our clients and team members.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="mt-20 pt-12 border-t border-gray-200">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
                            <div className="text-gray-600 text-sm">Projects Delivered</div>
                            <div className="text-gray-400 text-xs mt-1">Across industries</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                            <div className="text-gray-600 text-sm">Client Satisfaction</div>
                            <div className="text-gray-400 text-xs mt-1">Guaranteed quality</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                            <div className="text-gray-600 text-sm">Years Experience</div>
                            <div className="text-gray-400 text-xs mt-1">Combined expertise</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                            <div className="text-gray-600 text-sm">Expert Team</div>
                            <div className="text-gray-400 text-xs mt-1">Specialized skills</div>
                        </div>
                    </div>


                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <div className="text-center">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Approach</h4>
                            <div className="max-w-3xl mx-auto text-gray-600">
                                We follow an agile, results-driven methodology that emphasizes
                                continuous communication, iterative development, and measurable
                                outcomes. Every project begins with thorough discovery and ends
                                with comprehensive support.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;