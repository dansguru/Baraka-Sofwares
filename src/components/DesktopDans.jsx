
import { ArrowLeft, Github, Mail, MessageCircle, Code, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const DesktopDans = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="fixed top-0 left-0 right-0 z-10 bg-white border-b">
                <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Back</span>
                    </Link>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        DANS PORTFOLIO
                    </h1>
                    <div className="w-20"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="pt-20">
                <div className="max-w-6xl mx-auto px-8">

                    {/* Hero Section */}
                    <div className="grid grid-cols-2 gap-12 items-center mb-16">
                        {/* Cover Image */}
                        <div className="flex justify-center">
                            <img
                                src="/assets/Cover.png"
                                alt="Dan's Cover"
                                className="w-full max-w-md h-auto object-contain rounded-xl shadow-lg"
                            />
                        </div>

                        {/* Profile Info */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 mb-2">DANS</h1>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xl font-semibold text-purple-700">dansguru</p>
                                        <div className="flex items-center gap-2 text-gray-600 mt-1">
                                            <MapPin className="w-4 h-4" />
                                            <span>he/him · Kenya</span>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <Code className="w-6 h-6 text-blue-600" />
                                            <p className="text-lg font-medium text-gray-800">App Developer | Kotlin Enthusiast</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Sparkles className="w-6 h-6 text-yellow-500" />
                                            <p className="text-gray-700">Passionate about innovative & user-friendly apps</p>
                                        </div>
                                        <p className="text-gray-800 font-medium text-lg">Goal: Building fully professional chat apps</p>
                                    </div>
                                </div>
                            </div>

                            {/* Connect Buttons */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold text-gray-800">Connect with me:</h3>
                                <div className="flex gap-4">
                                    <a href="https://github.com/dansguru"
                                       className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-lg border border-gray-200 transition-all duration-300 group hover:shadow-md">
                                        <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Github className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-gray-800">Technical Portfolio</p>
                                            <p className="text-xs text-gray-600">View projects & contributions</p>
                                        </div>
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    </a>
                                    <a href="mailto:dansnyagechi@gmail.com" className="flex-1 flex items-center justify-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group">
                                        <Mail className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                                        <span className="font-medium text-blue-700">Email</span>
                                    </a>
                                    <a href="https://wa.me/+254745342479" className="flex-1 flex items-center justify-center gap-2 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group">
                                        <MessageCircle className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
                                        <span className="font-medium text-green-700">WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-20 py-12">

                        {/* Creative Process */}
                        <div className="grid grid-cols-2 gap-12 items-center">
                            <div className="transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="/assets/creative-process.png"
                                    alt="Creative Process"
                                    className="w-full max-w-xs h-auto object-contain rounded-xl shadow-xl"
                                />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">Technical Craftsmanship</h3>
                                <div className="space-y-3 text-gray-700">
                                    <p>Specializing in full-stack development with expertise in:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            <span><strong>React & TypeScript</strong> for modern web applications</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                            <span><strong>Kotlin Android</strong> for native mobile experiences</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span><strong>Node.js & MongoDB</strong> for scalable backends</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                            <span><strong>GIS & Mapping</strong> for spatial data solutions</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Design Vision */}
                        <div className="grid grid-cols-2 gap-12 items-center">
                            <div className="order-2">
                                <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <img
                                        src="/assets/design-vision.png"
                                        alt="Design Vision"
                                        className="w-full max-w-xs h-auto object-contain rounded-xl shadow-xl"
                                    />
                                </div>
                            </div>
                            <div className="order-1 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">Design Excellence</h3>
                                <div className="space-y-3 text-gray-700">
                                    <p>Bringing creative vision to digital products through:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                            <span><strong>Canva Professional</strong> designs for branding and marketing</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                            <span><strong>UI/UX Design</strong> with Figma and user-centered principles</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                            <span><strong>Visual Storytelling</strong> that enhances user engagement</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                            <span><strong>Responsive Design</strong> across all devices and platforms</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Future Focus */}
                        <div className="grid grid-cols-2 gap-12 items-center">
                            <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="/assets/future-focus.png"
                                    alt="Future Focus"
                                    className="w-full max-w-xs h-auto object-contain rounded-xl shadow-xl"
                                />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">Future Vision</h3>
                                <div className="space-y-3 text-gray-700">
                                    <p>Building the next generation of digital solutions:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                            <span><strong>Professional Chat Applications</strong> with real-time features</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                            <span><strong>Cross-Platform Solutions</strong> for wider accessibility</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                            <span><strong>Innovative Mobile Apps</strong> solving real-world problems</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                                            <span><strong>Global Impact</strong> from Kenya to the world</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Call to Action */}
                                <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border">
                                    <p className="font-medium text-gray-800">
                                        Ready to build something amazing? Let's connect and create the future together.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="py-8 border-t text-center">
                        <p className="text-gray-500">© {new Date().getFullYear()} DANSGURU · Full-Stack Developer </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DesktopDans;