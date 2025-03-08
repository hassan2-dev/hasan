import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import React from 'react'
import ProgressLine from './components/ProgressLine'

function App() {
  const [activeSection, setActiveSection] = useState('start')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <ProgressLine activeSection={activeSection} />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="md:pl-10 lg:pl-20 xl:pl-52 px-4 md:px-8 pt-20">
        <section id="start" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>

        <section id="work" className="min-h-screen pt-20">
          <Work />
        </section>

        <section id="about" className="min-h-screen pt-20">
          <About />
        </section>

        <section id="contact" className="min-h-screen pt-20 pb-10">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
