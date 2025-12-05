import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        service: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('https://formspree.io/f/xqkrkqkv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Contact Form Submission: ${formData.subject}`,
                    _replyto: formData.email
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    service: ''
                });
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const serviceOptions = [
        "Web Development",
        "Mobile App Development",
        "Cyber Security Services",
        "UI/UX Design",
        "Software Engineering",
        "Digital Transformation Consulting",
        "IT Consulting",
        "Project Management",
        "Other - Please specify in message"
    ];

    const socialLinks = [
        { icon: <FaFacebook />, url: 'https://www.facebook.com/profile.php?id=61577243083516', label: 'Facebook' },
        { icon: <FaTwitter />, url: 'https://x.com/Erastus_tech/', label: 'Twitter' },
        { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/erastus-odira-26162535a/', label: 'LinkedIn' },
        { icon: <FaInstagram />, url: 'https://www.instagram.com/barakacreatives_tech/', label: 'Instagram' },
        { icon: <FaTiktok />, url: 'https://www.tiktok.com/@barakacreatives_tech', label: 'TikTok' }
    ];

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <div className="inline-block relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg blur opacity-20"></div>
                        <h2 className="relative text-4xl font-bold">
                            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-transparent bg-clip-text">
                                Get In Touch
                            </span>
                        </h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mt-6 rounded-full"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        We'd love to hear from you. Get in touch for a free consultation on your technology needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Contact Information
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Reach out to us for innovative technology solutions, consultations,
                                or to discuss your next project. We're here to help transform your ideas into reality.
                            </p>
                        </div>


                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="text-blue-600 text-lg" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">Location</h4>
                                    <p className="text-gray-600">
                                        Nairobi, Kenya
                                    </p>
                                    <p className="text-gray-500 text-sm mt-1">Global Services Available</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                                    <FaPhone className="text-blue-600 text-lg" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">Call Us</h4>
                                    <a
                                        href="tel:+254723643765"
                                        className="text-gray-600 hover:text-blue-600 transition-colors block mb-1"
                                    >
                                        +254 723 643 765
                                    </a>
                                    <a
                                        href="https://wa.me/254723643765"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                                    >
                                        <span className="text-xl">💬</span>
                                        <span>Chat on WhatsApp</span>
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope className="text-blue-600 text-lg" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">Email Us</h4>
                                    <a
                                        href="mailto:creativesbaraka@gmail.com"
                                        className="text-gray-600 hover:text-blue-600 transition-colors block mb-1"
                                    >
                                        creativesbaraka@gmail.com
                                    </a>
                                    <p className="text-gray-500 text-sm">Typically responds within 24 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                                    <FaClock className="text-blue-600 text-lg" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">Business Hours</h4>
                                    <p className="text-gray-600">
                                        <span className="text-green-600 flex items-center gap-2 mb-1">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                            Available for Consultations
                                        </span>
                                        Monday - Friday: 8AM - 6PM<br />
                                        Weekend: By Appointment
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="pt-6">
                            <h4 className="font-bold text-gray-900 mb-4">Connect With Us</h4>
                            <div className="flex items-center gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 transition-all duration-300"
                                        title={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="bg-white border border-blue-200 rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Service Interest
                                </label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none"
                                >
                                    <option value="">Select a service</option>
                                    {serviceOptions.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                                    placeholder="What would you like to discuss?"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                                    placeholder="Tell us about your project or inquiry..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 py-4 px-6 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>📧</span>
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                                    <p className="text-green-700 text-center">
                                        ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                                    </p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                                    <p className="text-red-700 text-center">
                                        ❌ Something went wrong. Please try again or contact us directly via email/phone.
                                    </p>
                                </div>
                            )}

                            <p className="text-center text-gray-500 text-sm mt-4">
                                We typically respond within 24 hours during business days.
                            </p>
                        </form>
                    </div>
                </div>

                {/* Quick Contact CTA */}
                <div className="mt-16 pt-12 border-t border-blue-200">
                    <div className="text-center">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h4>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+254723643765"
                                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 py-3 px-8 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                            >
                                <FaPhone className="w-5 h-5" />
                                <span>Call Now: +254 723 643 765</span>
                            </a>
                            <a
                                href="https://wa.me/254723643765"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-700 py-3 px-8 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                            >
                                <span className="text-xl">💬</span>
                                <span>Chat on WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;