// components/NotFoundScreen.jsx
import { Link } from 'react-router-dom';

const NotFoundScreen = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-900 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full text-center">
                <div className="space-y-8">
                    {/* 404 Number */}
                    <div className="text-9xl font-bold text-orange-500">
                        404
                    </div>

                    {/* Message */}
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold text-white">
                            Page Not Found
                        </h1>
                        <p className="text-neutral-400 text-lg">
                            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        </p>
                        <p className="text-neutral-500 text-sm">
                            Don&apos;t worry, let&apos;s get you back on track.
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="space-y-4 pt-8">
                        <Link
                            to="/"
                            className="block w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-800 hover:from-orange-600 hover:to-orange-900 text-white font-medium rounded-md transition-all duration-200"
                        >
                            Go Home
                        </Link>

                        <Link
                            to="/"
                            className="block w-full py-3 px-4 border border-neutral-600 text-neutral-300 hover:text-white hover:border-neutral-400 font-medium rounded-md transition-all duration-200"
                        >
                            Back to Home
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div className="pt-8 border-t border-neutral-800">
                        <p className="text-neutral-500 text-sm mb-4">
                            Explore More:
                        </p>
                        <div className="flex justify-center space-x-6">
                            <Link
                                to="/about"
                                className="text-orange-400 hover:text-orange-300 text-sm transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                to="/projects"
                                className="text-orange-400 hover:text-orange-300 text-sm transition-colors"
                            >
                                Projects
                            </Link>
                            <Link
                                to="/contact"
                                className="text-orange-400 hover:text-orange-300 text-sm transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundScreen;