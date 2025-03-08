import { useEffect, useState } from 'react'
import React from 'react'

function ProgressLine({ activeSection }) {
    const sections = ['start', 'work', 'lab', 'about', 'contact']
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = (window.scrollY / totalHeight) * 100
            setScrollProgress(progress)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* Desktop Progress Line Only - No Mobile Version */}
            {sections.map((section, index) => (
                <div
                    key={section}
                    className={`hidden sm:block fixed sm:left-8 md:left-16 lg:left-24 w-[2px] transition-opacity duration-500 ${activeSection === section ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        top: section === 'start' ? '50vh' : '20vh',
                        height: section === 'start' ? '50vh' : '80vh'
                    }}
                >
                    {/* Background line */}
                    <div className="absolute inset-0 bg-purple-500/20" />

                    {/* Progress line */}
                    <div
                        className="absolute top-0 left-0 w-full bg-purple-500 transition-all duration-300"
                        style={{
                            height: `${activeSection === section
                                    ? Math.max(0, Math.min(100, (scrollProgress - (index * 100 / sections.length)) * (sections.length)))
                                    : 0
                                }%`
                        }}
                    />

                    {/* Section marker */}
                    <div className="absolute -left-[11px] top-0 flex items-center">
                        <div className="relative">
                            <div className={`
                                w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 
                                transition-all duration-300
                                ${activeSection === section
                                    ? 'border-purple-500 bg-purple-500'
                                    : 'border-purple-500/50 bg-transparent'
                                }
                            `} />

                            {/* Section label */}
                            <div className={`
                                absolute left-8 sm:left-10 whitespace-nowrap
                                transition-all duration-300
                                ${activeSection === section
                                    ? 'text-purple-500'
                                    : 'text-gray-400'
                                }
                            `}>
                                <span className="text-base sm:text-lg font-medium">
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </span>
                                <span className="ml-2 opacity-50">{"/>"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProgressLine 