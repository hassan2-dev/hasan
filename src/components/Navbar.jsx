import React, { useState } from 'react'

function Navbar({ activeSection, setActiveSection }) {
    const navItems = ['Start', 'Work', 'About', 'Contact']
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleNavClick = (section) => {
        setActiveSection(section)
        setIsMenuOpen(false)
    }

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/85 backdrop-blur-md border-b border-purple-900/30 shadow-lg">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    <div className="relative group">
                        <h1 className="text-4xl font-sans font-black tracking-tight">
                            <span className="relative z-10 font-mono">
                                <span className="text-purple-400">&lt;</span>
                                <span className="text-white">H</span>
                                <span className="text-purple-400">a</span>
                                <span className="text-pink-500">s</span>
                                <span className="text-purple-400">s</span>
                                <span className="text-indigo-400">a</span>
                                <span className="text-white">n</span>
                                <span className="text-purple-400">/&gt;</span>
                            </span>
                        </h1>
                        <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center">
                        {navItems.map((item, index) => (
                            <React.Fragment key={item}>
                                <li>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className={`relative px-2 py-1 text-lg font-mono transition-all duration-300 hover:text-purple-400
                                            ${activeSection === item.toLowerCase()
                                                ? 'text-purple-400 font-semibold'
                                                : 'text-white/90 hover:scale-105'
                                            }`}
                                        onClick={() => handleNavClick(item.toLowerCase())}
                                    >
                                        {activeSection === item.toLowerCase() && (
                                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                                        )}
                                        {item}
                                    </a>
                                </li>
                                {index < navItems.length - 1 && (
                                    <span className="text-purple-600/70 mx-4 font-light">→</span>
                                )}
                            </React.Fragment>
                        ))}
                    </ul>

                    {/* Mobile Hamburger Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="flex items-center p-2 rounded-md text-white focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-purple-900/30">
                    <div className="px-4 py-3 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`block px-3 py-2 rounded-md text-base font-mono transition-all duration-300
                                    ${activeSection === item.toLowerCase()
                                        ? 'text-purple-400 font-semibold bg-purple-900/20'
                                        : 'text-white/90 hover:text-purple-400 hover:bg-purple-900/10'
                                    }`}
                                onClick={() => handleNavClick(item.toLowerCase())}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar 