import { useState } from 'react'
import { personal } from '../data/portfolio'

function Navbar({ activeSection, setActiveSection }) {
  const navItems = [
    { id: 'start', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Platforms' },
    { id: 'systems', label: 'Systems' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (section) => {
    setActiveSection(section)
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#start"
            onClick={() => handleNavClick('start')}
            className="text-lg md:text-xl font-bold text-white"
          >
            <span className="text-violet-400">H</span>
            {personal.name.split(' ')[1]}
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'text-violet-400 bg-violet-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="ml-2">
              <a
                href={personal.cvUrl}
                download
                className="px-4 py-2 text-sm font-medium text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition-colors"
              >
                CV
              </a>
            </li>
          </ul>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'text-violet-400 bg-violet-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={personal.cvUrl}
              download
              className="block px-4 py-3 text-sm font-medium text-violet-400"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
