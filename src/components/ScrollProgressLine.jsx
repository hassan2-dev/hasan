import { useEffect, useState } from 'react'
import React from 'react'
function ScrollProgressLine() {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            // Calculate how far user has scrolled through the page
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = (window.scrollY / totalHeight) * 100
            setScrollProgress(progress)
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll)

        // Clean up
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-purple-500/20 z-50">
            <div
                className="h-full bg-purple-500 transition-all duration-150"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    )
}

export default ScrollProgressLine 