import { TypeAnimation } from 'react-type-animation'
import AnimatedBackground from './AnimatedBackground'
import { personal, achievements } from '../data/portfolio'

function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground variant="hero" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Full Stack Developer · Backend Specialist (NestJS)
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight animate-fade-in">
          {personal.name}
        </h1>

        <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 h-10 md:h-12 animate-fade-in animation-delay-200">
          <TypeAnimation
            sequence={personal.titles.flatMap((title) => [title, 2500])}
            wrapper="span"
            speed={40}
            className="text-violet-400 font-medium"
            repeat={Infinity}
          />
        </div>

        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-in animation-delay-400">
          CTO at Larthaa Lab · Founder of Alworya · Technical Director at Alfaw Go
          <br className="hidden sm:block" />
          Enterprise platforms, mobile apps, admin dashboards & production APIs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600 mb-14">
          <a
            href={personal.cvUrl}
            download
            className="group px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 border border-violet-500/50 text-violet-300 hover:bg-violet-500/10 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
          >
            Contact Me
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto animate-fade-in animation-delay-600">
          {achievements.map((item) => (
            <div
              key={item.label}
              className="px-3 py-4 rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-sm"
            >
              <div className="text-xl md:text-2xl font-bold text-violet-400">{item.value}</div>
              <div className="text-gray-500 text-[10px] md:text-xs mt-1 leading-tight">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-violet-500/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-violet-400 rounded-full animate-scroll-down" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
