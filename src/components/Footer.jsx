import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope, FaHome, FaUsers, FaCode, FaProjectDiagram, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const quickLinks = [
        { id: 'home', label: 'Home', icon: <FaHome className="w-4 h-4" /> },
        { id: 'about', label: 'About', icon: <FaUsers className="w-4 h-4" /> },
        { id: 'team', label: 'Team', icon: <FaUsers className="w-4 h-4" /> },
        { id: 'services', label: 'Services', icon: <FaCode className="w-4 h-4" /> },
        { id: 'projects', label: 'Projects', icon: <FaProjectDiagram className="w-4 h-4" /> },
        { id: 'contact', label: 'Contact', icon: <FaEnvelope className="w-4 h-4" /> }
    ];

    const services = [
        { name: 'Web Development' },
        { name: 'Cyber Security' },
        { name: 'Mobile Development' },
        { name: 'UI/UX Design' },
        { name: 'Software Engineering' },
        { name: 'Digital Transformation' }
    ];

    const socialLinks = [
        { icon: <FaFacebook className="w-5 h-5" />, url: 'https://www.facebook.com/profile.php?id=61577243083516', label: 'Facebook' },
        { icon: <FaTwitter className="w-5 h-5" />, url: 'https://x.com/Erastus_tech/', label: 'Twitter' },
        { icon: <FaLinkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/erastus-odira-26162535a/', label: 'LinkedIn' },
        { icon: <FaInstagram className="w-5 h-5" />, url: 'https://www.instagram.com/barakacreatives_tech/', label: 'Instagram' },
        { icon: <FaTiktok className="w-5 h-5" />, url: 'https://www.tiktok.com/@barakacreatives_tech', label: 'TikTok' }
    ];

    return (
        <footer className="mt-20 border-t py-12 border-blue-800/20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="inline-block">
                            <h2 className="text-2xl font-bold">
                                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-transparent bg-clip-text">
                                    BARAKA CREATIVES
                                </span>
                                <span className="text-gray-900"> TECH</span>
                            </h2>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Delivering innovative technology solutions to help businesses
                            thrive in the digital age with cutting-edge expertise.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-blue-600 transition-colors"
                                    title={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-900 font-bold text-lg mb-4">Quick Navigation</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors text-sm group w-full text-left"
                                    >
                                        <span className="group-hover:scale-110 transition-transform">
                                            {link.icon}
                                        </span>
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-gray-900 font-bold text-lg mb-4">Our Services</h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <FaCode className="text-blue-500 w-3 h-3" />
                                    <span className="text-gray-600 text-sm">{service.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-gray-900 font-bold text-lg mb-4">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-600 text-sm">
                                        Nairobi, Kenya
                                    </p>
                                    <p className="text-gray-500 text-xs">Global Services Available</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhone className="text-blue-600" />
                                <a
                                    href="tel:+254723643765"
                                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                                >
                                    +254 723 643 765
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-blue-600" />
                                <a
                                    href="mailto:creativesbaraka@gmail.com"
                                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                                >
                                    creativesbaraka@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                            <h3 className="text-gray-900 font-bold text-lg">Stay Updated</h3>
                            <p className="text-gray-600 text-sm mt-1">Subscribe to our newsletter for tech insights</p>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow md:flex-grow-0"
                            />
                            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-blue-200">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-center md:text-left">
                            <p className="text-gray-600 text-sm">
                                &copy; {currentYear} Baraka Creatives Tech. All rights reserved.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                100% Client Satisfaction
                            </span>
                            <span className="hidden md:inline">•</span>
                            <span>7+ Projects Completed</span>
                            <span className="hidden md:inline">•</span>
                            <span>6+ Years Experience</span>
                        </div>

                        <div className="text-center md:text-right">
                            <p className="text-gray-500 text-xs">
                                Crafted with <span className="text-blue-600">💻</span> by <span className="text-blue-600 font-semibold">Baraka Creatives Tech</span>
                            </p>
                        </div>
                    </div>
                </div>


                <div className="mt-8 md:hidden">
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-blue-600 to-blue-700 py-3 px-6 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                        <FaEnvelope className="w-5 h-5" />
                        <span>Get Free Consultation</span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;