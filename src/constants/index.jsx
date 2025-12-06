
// constants/index.jsx
export const services = [
    {
        id: 1,
        title: "Web Development",
        description: "Custom web applications and websites built with modern technologies for optimal performance and user experience.",
        category: "Development",
        duration: "2-8 Weeks",
        projectScope: "From MVP to Enterprise",
        popular: true,
        icon: "🌐",
        technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
        features: [
            "Responsive Design",
            "SEO Optimization",
            "Performance Optimization",
            "Security Implementation",
            "Maintenance Support"
        ]
    },
    {
        id: 2,
        title: "Mobile App Development",
        description: "Cross-platform mobile applications for iOS and Android with native-like performance.",
        category: "Development",
        duration: "4-12 Weeks",
        projectScope: "iOS & Android",
        popular: false,
        icon: "📱",
        technologies: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
        features: [
            "Cross-platform Compatibility",
            "Offline Functionality",
            "Push Notifications",
            "App Store Deployment",
            "Regular Updates"
        ]
    },
    {
        id: 3,
        title: "Cyber Security Services",
        description: "Comprehensive security solutions including vulnerability assessments and security architecture.",
        category: "Security",
        duration: "1-4 Weeks",
        projectScope: "Assessment & Implementation",
        popular: true,
        icon: "🔒",
        technologies: ["Penetration Testing", "Vulnerability Assessment", "Security Audits", "Firewall Config"],
        features: [
            "Security Assessment",
            "Vulnerability Testing",
            "Security Architecture",
            "Compliance Checks",
            "Ongoing Monitoring"
        ]
    },
    {
        id: 4,
        title: "UI/UX Design",
        description: "Beautiful, intuitive user interfaces and engaging user experiences with a focus on conversion.",
        category: "Design",
        duration: "2-6 Weeks",
        projectScope: "Wireframes to Prototype",
        popular: false,
        icon: "🎨",
        technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Testing"],
        features: [
            "User Research",
            "Wireframing",
            "Interactive Prototypes",
            "Usability Testing",
            "Design Systems"
        ]
    },
    {
        id: 5,
        title: "Software Engineering",
        description: "Custom software solutions tailored to your business needs, built with scalable architectures.",
        category: "Engineering",
        duration: "4-16 Weeks",
        projectScope: "Custom Solutions",
        popular: false,
        icon: "⚙️",
        technologies: ["Python", "Java", "C#", "AWS", "Docker", "Kubernetes"],
        features: [
            "Custom Software Development",
            "API Development",
            "Database Design",
            "Cloud Integration",
            "Scalability Planning"
        ]
    },
    {
        id: 6,
        title: "Digital Transformation",
        description: "End-to-end digital transformation consulting to modernize your business processes and systems.",
        category: "Consulting",
        duration: "Ongoing",
        projectScope: "Strategic Partnership",
        popular: true,
        icon: "🚀",
        technologies: ["Digital Strategy", "Process Automation", "Cloud Migration", "Data Analytics"],
        features: [
            "Digital Strategy",
            "Process Optimization",
            "Technology Migration",
            "Training & Support",
            "Performance Analytics"
        ]
    }
];
const teamMembers = [
    {
        id: 1,
        name: "Erastus Odira",
        role: "Manager & Cyber Security Specialist",
        image: "/assets/Erastus photo.jpg",
        description: "Expert in system protection, vulnerability assessment, and security architecture with a passion for keeping digital assets secure.",
        skills: ["Cybersecurity", "Network Security", "Vulnerability Assessment", "Risk Management"],
        social: {
            github: "https://github.com/Baraka-hub47/",
            twitter: "https://x.com/Erastus_tech/"
        }
    },
    {
        id: 3,
        name: "Bob Nyaande",
        role: "Front-End Developer",
        image: "/assets/Bob photo.jpg",
        description: "Creates intuitive user interfaces and engaging user experiences with a focus on performance and accessibility.",
        skills: ["React", "Next.js", "TypeScript", "UI/UX", "Responsive Design"],
        social: {
            github: "https://github.com/Bobb-35",
            twitter: "https://x.com/Bobb_tech/"
        }
    },
    {
        id: 4,
        name: "Monari Gichana",
        role: "UI/UX Designer & Testing Specialist",
        image: "/assets/Abb photo.jpg",
        description: "Designs clean, user-friendly interfaces and ensures the website delivers a smooth, intuitive experience through comprehensive testing and optimization.",
        skills: ["UI/UX Design", "Figma", "Prototyping", "User Testing", "Quality Assurance"],
        social: {
            dribbble: "#",
            behance: "#"
        }
    }
];
export default teamMembers