import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import teamMembers from "../constants/index.jsx";

const TeamSection = () => {
    const [activeMember, setActiveMember] = useState(null);
    const navigate = useNavigate();


    const handleMemberClick = (member) => {
        setActiveMember(member);
        document.body.style.overflow = 'hidden';
    };

    const handleClose = () => {
        setActiveMember(null);
        document.body.style.overflow = 'auto';
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const handleVClick = () => {
        navigate("/dans");
    };

    return (
        <>
            <section id="team" className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block mb-6">
                            <h2 className="text-4xl font-bold text-gray-900">
                                Meet <span className="text-blue-600">Our Team</span>
                            </h2>
                        </div>

                        {/* Tech Divider */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="w-8 h-px bg-gray-300"></div>
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <div className="w-8 h-px bg-gray-300"></div>
                        </div>

                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Click on any team member to learn more about their expertise
                        </p>
                    </div>

                    <div className="relative">

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-3xl mx-auto">
                            {teamMembers.map((member) => (
                                <button
                                    key={member.id}
                                    onClick={() => handleMemberClick(member)}
                                    className={`flex flex-col items-center group transition-all duration-300 ${
                                        activeMember?.id === member.id
                                            ? 'scale-110 z-10'
                                            : 'hover:scale-105'
                                    }`}
                                >
                                    {/* GitHub-style Circle */}
                                    <div className={`relative mb-4 transition-all duration-300 ${
                                        activeMember?.id === member.id
                                            ? 'ring-4 ring-blue-500 ring-opacity-50'
                                            : 'group-hover:ring-2 group-hover:ring-blue-300'
                                    }`}>
                                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Online Status Indicator */}
                                        <div className="absolute bottom-4 right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                                        {/* Hover/Active Indicator */}
                                        <div className={`absolute -inset-2 rounded-full transition-all duration-300 ${
                                            activeMember?.id === member.id
                                                ? 'bg-blue-100'
                                                : 'group-hover:bg-blue-50'
                                        }`}></div>
                                    </div>

                                    {/* Name and Role */}
                                    <div className="text-center">
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">{member.name}</h3>
                                        <p className="text-blue-600 text-sm font-medium">{member.role}</p>
                                        {/* Skills Preview */}
                                        <div className="mt-3 flex flex-wrap gap-2 justify-center">
                                            {member.skills.slice(0, 2).map((skill, index) => (
                                                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                    {skill}
                                                </span>
                                            ))}
                                            {member.skills.length > 2 && (
                                                <span className="px-3 py-1 bg-gray-100 text-gray-400 text-xs rounded-full">
                                                    +{member.skills.length - 2}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>


                        <div className="mt-20 text-center">
                            <div className="relative inline-block">
                                <div className="mb-6">
                                    <Sparkles className="w-8 h-8 text-purple-500 mx-auto mb-2 animate-pulse" />
                                    <p className="text-gray-500 text-sm">Hey there am Dans😊</p>
                                </div>

                                <button
                                    onClick={handleVClick}
                                    className="group relative px-8 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 border-2 border-white/20"
                                >
                                    <div className="flex items-center justify-center space-x-3">
                                        <span className="text-2xl">✨</span>
                                        <span>Meet Dans</span>
                                        <span className="text-2xl">✨</span>
                                    </div>


                                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>

                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 -z-20"></div>

                                    {/* Floating elements */}
                                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce opacity-60"></div>
                                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.2s'}}></div>
                                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.4s'}}></div>
                                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.6s'}}></div>
                                </button>

                                {/* Arrow pointing down */}
                                <div className="mt-8 animate-bounce">
                                    <svg className="w-6 h-6 mx-auto text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                    <p className="text-sm text-purple-600 font-medium mt-2">Discover </p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-16 left-0 right-0 h-px bg-gray-200 hidden sm:block"></div>
                        <div className="absolute top-16 left-1/3 w-px h-20 bg-gray-200 hidden sm:block"></div>
                        <div className="absolute top-16 left-2/3 w-px h-20 bg-gray-200 hidden sm:block"></div>
                    </div>

                    {/* Team Stats*/}
                    <div className="mt-20 pt-12 border-t border-gray-200">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                                <div className="text-gray-600 text-sm">Team Members</div>
                                <div className="text-gray-400 text-xs mt-1">Diverse expertise</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                                <div className="text-gray-600 text-sm">Years Experience</div>
                                <div className="text-gray-400 text-xs mt-1">Combined knowledge</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
                                <div className="text-gray-600 text-sm">Projects</div>
                                <div className="text-gray-400 text-xs mt-1">Successfully delivered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                                <div className="text-gray-600 text-sm">Satisfaction</div>
                                <div className="text-gray-400 text-xs mt-1">Client guaranteed</div>
                            </div>
                        </div>
                    </div>

                    {/* Collaboration CTA */}
                    <div className="mt-16">
                        <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-xl p-8">
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborate With Us</h3>
                                    <p className="text-gray-600">
                                        Interested in working with our team? Let's discuss your project requirements.
                                    </p>
                                </div>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('contact');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap"
                                >
                                    Start Conversation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overlay Modal */}
            {activeMember && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                    onClick={handleBackdropClick}
                >
                    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl">
                        {/* Background with user image */}
                        <div className="absolute inset-0">
                            <img
                                src={activeMember.image}
                                alt={activeMember.name}
                                className="w-full h-full object-cover"
                            />
                            {/* Dark overlay for better text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
                        </div>

                        {/* Close button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-colors border border-white/20"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>

                        {/* Content */}
                        <div className="relative z-10 h-full overflow-y-auto">
                            <div className="min-h-[70vh] flex flex-col justify-end p-8">
                                {/* Profile Section */}
                                <div className="mb-8">
                                    <div className="flex items-end gap-6 mb-6">
                                        {/* Profile Image */}
                                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                            <img
                                                src={activeMember.image}
                                                alt={activeMember.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Name and Role */}
                                        <div className="pb-2">
                                            <h2 className="text-3xl font-bold text-white mb-1">{activeMember.name}</h2>
                                            <p className="text-blue-300 text-lg font-medium">{activeMember.role}</p>
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    {Object.keys(activeMember.social).length > 0 && (
                                        <div className="flex items-center gap-3 mb-6">
                                            {activeMember.social.github && (
                                                <a
                                                    href={activeMember.social.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-white hover:text-blue-300 transition-colors border border-white/20"
                                                    title="GitHub"
                                                >
                                                    <i className="fab fa-github w-5 h-5"></i>
                                                </a>
                                            )}
                                            {activeMember.social.twitter && (
                                                <a
                                                    href={activeMember.social.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-white hover:text-blue-300 transition-colors border border-white/20"
                                                    title="Twitter"
                                                >
                                                    <i className="fab fa-twitter w-5 h-5"></i>
                                                </a>
                                            )}
                                            {activeMember.social.dribbble && (
                                                <a
                                                    href={activeMember.social.dribbble}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-white hover:text-blue-300 transition-colors border border-white/20"
                                                    title="Dribbble"
                                                >
                                                    <i className="fab fa-dribbble w-5 h-5"></i>
                                                </a>
                                            )}
                                            {activeMember.social.behance && (
                                                <a
                                                    href={activeMember.social.behance}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-white hover:text-blue-300 transition-colors border border-white/20"
                                                    title="Behance"
                                                >
                                                    <i className="fab fa-behance w-5 h-5"></i>
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Details Card */}
                                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
                                    {/* About Section */}
                                    <div className="mb-6">
                                        <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                            About
                                        </h3>
                                        <p className="text-white/90">{activeMember.description}</p>
                                    </div>

                                    {/* Expertise Section */}
                                    <div>
                                        <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                            Expertise
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {activeMember.skills.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom gradient fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TeamSection;