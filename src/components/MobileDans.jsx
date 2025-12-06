
import { ArrowLeft, Menu, X, Github, Mail, MessageCircle, Code} from 'lucide-react';
import { Link } from 'react-router-dom';
import {useState} from "react";

const MobileDans = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="fixed top-0 left-0 right-0 z-20 bg-white border-b">
                <div className="flex justify-between items-center p-4">
                    <Link to="/" className="flex items-center gap-2">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Back</span>
                    </Link>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
                        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Cover Image */}
            <div className="pt-16">
                <div className="h-[60vh] w-full flex items-center justify-center px-4">
                    <img
                        src="/assets/Cover.png"
                        alt="Dan's Cover"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* Profile Section */}
            <div className="px-6 py-8 border-b">
                <h1 className="text-3xl font-bold text-purple-700 mb-2">DANS</h1>
                <div className="space-y-3">
                    <div>
                        <p className="text-lg font-semibold text-gray-800">dansguru</p>
                        <p className="text-gray-600">he/him · Kenya</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Code className="w-5 h-5 text-blue-600" />
                            <p className="text-gray-800 font-medium">App Developer | Kotlin Enthusiast</p>
                        </div>
                        <p className="text-gray-700">Passionate about innovative & user-friendly apps</p>
                        <p className="text-gray-700 font-medium">Goal: Building fully professional chat apps</p>
                    </div>
                </div>

                {/* Connect Section */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect with me:</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <a href="https://github.com/dansguru" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <Github className="w-6 h-6 text-gray-800 mb-2" />
                            <span className="text-sm font-medium text-gray-800">GitHub</span>
                        </a>
                        <a href="mailto:dansnyagechi@gmail.com" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <Mail className="w-6 h-6 text-blue-600 mb-2" />
                            <span className="text-sm font-medium text-blue-600">Email</span>
                        </a>
                        <a href="https://wa.me/+254745342479" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <MessageCircle className="w-6 h-6 text-green-600 mb-2" />
                            <span className="text-sm font-medium text-green-600">WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>


            <div className="px-6 py-8 space-y-12">

                {/* Creative Process */}
                <div className="space-y-4">
                    <div className="flex justify-center">
                        <img
                            src="/assets/creative-process.png"
                            alt="Creative Process"
                            className="w-64 h-auto object-contain rounded-lg"
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <h3 className="text-xl font-semibold text-gray-800">Technical Craft</h3>
                        </div>
                        <p className="text-gray-600">Transforming complex requirements into elegant code solutions with React, Kotlin, and modern web technologies.</p>
                    </div>
                </div>

                {/* Design Vision */}
                <div className="space-y-4">
                    <div className="flex justify-center">
                        <img
                            src="/assets/design-vision.png"
                            alt="Design Vision"
                            className="w-64 h-auto object-contain rounded-lg transform -rotate-1"
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                            <h3 className="text-xl font-semibold text-gray-800">Visual Design</h3>
                        </div>
                        <p className="text-gray-600">Creating intuitive user interfaces and compelling visual experiences with Canva, Figma, and thoughtful UX principles.</p>
                    </div>
                </div>

                {/* Future Focus */}
                <div className="space-y-4">
                    <div className="flex justify-center">
                        <img
                            src="/assets/future-focus.png"
                            alt="Future Focus"
                            className="w-64 h-auto object-contain rounded-lg transform rotate-1"
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <h3 className="text-xl font-semibold text-gray-800">Future Innovation</h3>
                        </div>
                        <p className="text-gray-600">Building scalable solutions and professional chat applications that bridge technology with human needs.</p>
                    </div>
                </div>

                {/* Footer */}
                <div className="pt-8 text-center">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} DANSGURU</p>
                </div>
            </div>
        </div>
    );
};

export default MobileDans;