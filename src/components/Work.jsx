import React from 'react'

function Work() {
    // Your actual project data with the real links and highlighting full-stack aspects
    const projects = [
        {
            title: "Almas.com.iq",
            description: "Full-stack enterprise solution with React frontend, NestJS backend, Flutter mobile app, and comprehensive admin dashboard.",
            image: "https://almas.com.iq/logo.svg",
            technologies: ["React", "NestJS", "Flutter", "MongoDB", "JWT", "RESTful API"],
            link: null,
            demo: "https://almas.com.iq/",
            type: "web & mobile",
            featured: true,
            priority: 1 // Special priority for this project
        },
        {
            title: "Hoster.iq",
            description: "Complete hosting platform with React frontend and Node.js/Express backend. Includes domain registration and hosting management.",
            image: "https://www.hoster.iq/logos/BlueLogo.png",
            technologies: ["React", "Node.js", "Express", "PostgreSQL", "Payment APIs"],
            link: null,
            demo: "https://www.hoster.iq/",
            type: "web",
            featured: false,
            priority: 2
        },
        {
            title: "Sardar.iq",
            description: "Static website with modern design and optimized performance. Built with responsive layouts and animation effects.",
            image: "http://sardar.iq/logo.png",
            technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
            link: null,
            demo: "http://sardar.iq/",
            type: "web",
            featured: false,
            priority: 4
        },
        {
            title: "Fahd Aljanub Gold Shop",
            description: "Static website for a gold shop with product showcasing, contact information, and business details.",
            image: "https://fahdaljanub.com.iq/11-removebg-preview.png",
            technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
            link: null,
            demo: "https://fahdaljanub.com.iq/",
            type: "web",
            featured: true,
            priority: 7
        },
        {
            title: "Hoster Mobile App",
            description: "Full-featured mobile application for the Hoster.iq platform. Connects to backend API for domain management.",
            image: "https://www.hoster.iq/logos/WhiteLogo.png",
            technologies: ["Flutter", "REST API", "Mobile UI/UX", "State Management"],
            link: null,
            demo: null,
            type: "mobile",
            featured: false,
            priority: 3
        },
        {
            title: "Restaurant Menu QR App",
            description: "Full-stack solution with React Native frontend and Node.js backend. Includes QR code generation and order processing.",
            image: "https://www.millenniumhotels.com/mhb-media/static-files/assets/img/red-millennium-logo.svg?rev=c26cfb1b232d4782be926dadf91e1ad8&hash=9CF12534E66812D63C21386251723725",
            technologies: ["React Native", "Node.js", "Express", "MongoDB", "QR Code API"],
            link: null,
            demo: null,
            type: "mobile",
            featured: true,
            priority: 5
        },
        {
            title: "The PowerZone",
            description: "Full-stack enterprise solution with React frontend, NestJS backend, and comprehensive admin dashboard.",
            image: "http://powerzonesolarenergy.com/logo1-removebg-preview.png",
            technologies: ["React", "NestJS", "MongoDB", "JWT", "RESTful API"],
            link: null,
            demo: "http://powerzonesolarenergy.com/",
            type: "web & mobile",
            featured: true,
            priority: 6
        }
    ];

    return (
        <div className="container mx-auto px-4 py-24">
            <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">My Work</h2>
            <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-center">A showcase of my professional projects and development work, featuring web applications, mobile apps, and full-stack solutions.</p>

            {/* CV Section */}
            <div className="mb-20 p-8 max-w-4xl mx-auto bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl border border-blue-500/20 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">My Curriculum Vitae</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    Download my CV to see a comprehensive overview of my professional experience, technical skills, and educational background.
                </p>
                <div className="flex justify-center mt-6">
                    <a
                        href="/Hassan adnan.pdf"
                        download
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download CV
                    </a>
                </div>
            </div>

            {/* Private Projects Indicator */}
            <div className="mb-20 p-8 max-w-4xl mx-auto bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl border border-purple-500/20 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Private Client Projects</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    I've developed numerous confidential enterprise-level solutions including <span className="text-white font-semibold">The PowerZone</span> and other systems that remain under NDA. These comprehensive projects showcase advanced proficiency in:
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {['Full-Stack Development', 'Enterprise Solutions', 'NestJS/Express Backend', 'React Frontend', 'E-commerce Platforms', 'RESTful APIs', 'GraphQL', 'Database Design', 'Authentication Systems', 'Payment Gateways', 'Booking Systems'].map(skill => (
                        <span key={skill} className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm transition-all hover:bg-purple-500/20">
                            {skill}
                        </span>
                    ))}
                </div>
                <p className="text-gray-400 italic border-l-2 border-purple-500/50 pl-4">
                    While I can't publicly showcase these projects due to client confidentiality, I'm happy to discuss my experience and expertise in these areas during interviews.
                </p>
            </div>

            <h3 className="text-2xl font-bold mb-12 text-center">Featured Projects</h3>

            {/* Project grid without scrolling */}
            <div className="relative mb-20">
                <div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        // Determine if project is featured for special styling
                        const isFeatured = project.featured;
                        const isAlmas = project.title === "Almas.com.iq";

                        return (
                            <div
                                key={index}
                                className="group rounded-2xl overflow-hidden transition-all duration-500 hover:z-10 hover:scale-105"
                                style={{
                                    transform: `rotate(${Math.random() * 2 - 1}deg)`,
                                    boxShadow: isAlmas
                                        ? '0 10px 40px rgba(139, 92, 246, 0.3)'
                                        : (isFeatured ? '0 10px 30px rgba(59, 130, 246, 0.2)' : '0 10px 20px rgba(30, 41, 59, 0.2)')
                                }}
                            >
                                {/* Card Background with gradient */}
                                <div className={`absolute inset-0 ${isAlmas
                                        ? 'bg-gradient-to-br from-purple-800/90 via-indigo-900/90 to-zinc-900/95'
                                        : isFeatured
                                            ? 'bg-gradient-to-br from-blue-800/80 via-indigo-900/80 to-zinc-900/90'
                                            : 'bg-gradient-to-br from-zinc-800/80 via-zinc-850/80 to-zinc-900/90'
                                    } backdrop-blur-md border ${isAlmas ? 'border-purple-500/40' : (isFeatured ? 'border-blue-500/30' : 'border-zinc-700/50')
                                    } group-hover:border-purple-500/30 transition-all duration-300`}>
                                </div>

                                {/* Project container with aspect ratio */}
                                <div className="relative pt-[100%]">
                                    {/* Background type indicator */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                                        <span className={`font-bold uppercase tracking-widest text-gray-500 ${isAlmas ? 'text-5xl' : (isFeatured ? 'text-4xl' : 'text-3xl')
                                            }`}>
                                            {project.type}
                                        </span>
                                    </div>

                                    {/* Project logo/image */}
                                    <div className="absolute inset-0 flex items-center justify-center p-6">
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className={`max-w-full object-contain transition-all duration-500 
                                                    group-hover:opacity-20 ${isAlmas ? 'max-h-[160px]' : (isFeatured ? 'max-h-[140px]' : 'max-h-[120px]')
                                                    }`}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <span className="text-zinc-600">Project Image</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Project info overlay - visible on hover */}
                                    <div className="absolute inset-0 flex flex-col p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-auto">
                                        <h3 className={`font-bold mb-2 ${isAlmas ? 'text-xl' : (isFeatured ? 'text-lg' : 'text-base')
                                            } text-white`}>{project.title}</h3>
                                        <p className={`text-gray-300 mb-4 leading-relaxed ${isAlmas ? 'text-base' : (isFeatured ? 'text-sm' : 'text-xs')
                                            }`}>
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {project.technologies.slice(0, isAlmas ? 8 : (isFeatured ? 6 : 4)).map(tech => (
                                                <span key={tech} className={`px-2.5 py-1 bg-purple-500/20 text-purple-300 rounded-full ${isAlmas ? 'text-sm' : (isFeatured ? 'text-xs' : 'text-[10px]')
                                                    } hover:bg-purple-500/30 transition-colors`}>
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > (isAlmas ? 8 : (isFeatured ? 6 : 4)) && (
                                                <span className={`px-2.5 py-1 bg-purple-500/20 text-purple-300 rounded-full ${isAlmas ? 'text-sm' : (isFeatured ? 'text-xs' : 'text-[10px]')
                                                    } hover:bg-purple-500/30 transition-colors`}>
                                                    +{project.technologies.length - (isAlmas ? 8 : (isFeatured ? 6 : 4))} more
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex gap-3 mt-auto">
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`text-purple-300 hover:text-purple-200 transition-colors flex items-center gap-1.5 ${isAlmas ? 'text-sm' : (isFeatured ? 'text-xs' : 'text-[10px]')
                                                        }`}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className={
                                                        isAlmas ? "h-5 w-5" : (isFeatured ? "h-4 w-4" : "h-3.5 w-3.5")
                                                    } fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                    GitHub
                                                </a>
                                            )}
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`text-blue-300 hover:text-blue-200 transition-colors flex items-center gap-1.5 ${isAlmas ? 'text-sm' : (isFeatured ? 'text-xs' : 'text-[10px]')
                                                        }`}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className={
                                                        isAlmas ? "h-5 w-5" : (isFeatured ? "h-4 w-4" : "h-3.5 w-3.5")
                                                    } fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                    View Live
                                                </a>
                                            )}
                                        </div>

                                        {/* Project badges */}
                                        {isFeatured && (
                                            <div className={`absolute top-4 right-4 bg-purple-500/20 rounded-full px-2.5 py-1 ${isAlmas ? 'text-xs' : 'text-[10px]'
                                                } text-purple-300 flex items-center gap-1`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className={isAlmas ? "h-4 w-4" : "h-3 w-3"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                </svg>
                                                {isAlmas ? 'Featured Project' : 'Featured'}
                                            </div>
                                        )}

                                        {/* Special badge for Almas */}
                                        {isAlmas && (
                                            <div className="absolute top-4 left-4 bg-blue-500/20 rounded-full px-2.5 py-1 text-xs text-blue-300 flex items-center gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                </svg>
                                                Flagship Project
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Contact CTA - Centered */}
            <div className="text-center max-w-lg mx-auto">
                <p className="text-gray-400 mb-4">Interested in working together?</p>
                <a href="#contact" className="inline-block px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
                    Get in Touch
                </a>
            </div>
        </div>
    )
}

export default Work 