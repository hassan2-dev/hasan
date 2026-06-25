import { useEffect, useState } from 'react'
import {
  Mail, ExternalLink, Download, Menu, X,
  Smartphone, BarChart3, Database, Cloud, MapPin, Globe,
  ChevronRight, Quote, Clock, Building2, Rocket, TrendingUp,
  Zap, Code2, Cpu,
} from 'lucide-react'
import ParticleCanvas from './components/ParticleCanvas'
import AnimatedRole from './components/AnimatedRole'
import CustomCursor from './components/CustomCursor'
import ScrollIndicator from './components/ScrollIndicator'
import {
  personal,
  NAV_LINKS,
  HERO_STATS,
  ABOUT_HIGHLIGHTS,
  TIMELINE,
  PLATFORMS,
  ADD_PROJECTS,
  CAPABILITIES,
  TECH_STACK,
  ACHIEVEMENTS_DISPLAY,
  TECH_MARQUEE,
  TESTIMONIALS_DISPLAY,
} from './lib/mapPortfolio'

const HIGHLIGHT_ICONS = {
  experience: Clock,
  cto: Building2,
  founder: Rocket,
  director: TrendingUp,
  energy: Zap,
  fullstack: Code2,
  ai: Cpu,
  devops: Cloud,
}

const CAPABILITY_ICONS = {
  mobile: Smartphone,
  dashboard: BarChart3,
  api: Database,
  infra: Cloud,
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [form, setForm] = useState({ name: '', projectType: 'تطوير موقع إلكتروني', details: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `*رسالة جديدة من الموقع الشخصي*\n\n*الاسم:* ${form.name}\n*نوع المشروع:* ${form.projectType}\n\n*تفاصيل المشروع:*\n${form.details}`
    const whatsappUrl = `${personal.whatsapp}?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const PROJECT_TYPES = [
    'تطوير موقع إلكتروني',
    'تطبيق موبايل',
    'نظام إداري / ERP',
    'لوحة تحكم ولوحة إدارية',
    'استشارة تقنية',
    'قيادة تقنية / CTO',
    'أخرى',
  ]

  const navStyle = scrolled
    ? {
        background: 'rgba(5,5,10,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }
    : {}

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ background: '#05050a' }}>
      <CustomCursor />
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={navStyle}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
            {personal.name}
          </span>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l.toLowerCase())}
                className="text-sm text-white/45 hover:text-white transition-colors"
              >
                {l}
              </button>
            ))}
            <a
              href={personal.cvUrl}
              download
              className="text-sm px-4 py-2 rounded-xl font-medium bg-violet-500 hover:bg-violet-600 text-white transition-all violet-btn-glow"
            >
              CV
            </a>
          </div>

          <button
            className="md:hidden text-white/60"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div
            className="md:hidden px-6 py-5 flex flex-col gap-4 border-t border-white/5"
            style={{ background: 'rgba(13,13,24,0.95)', backdropFilter: 'blur(20px)' }}
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l.toLowerCase())}
                className="text-left text-sm py-1 text-white/55"
              >
                {l}
              </button>
            ))}
            <a href={personal.cvUrl} download className="text-sm py-2.5 rounded-xl font-medium bg-violet-500 text-white text-center">
              Download CV
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% -5%, rgba(139,92,246,0.14) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 85% 85%, rgba(217,70,239,0.07) 0%, transparent 60%)',
          }}
        />
        <ParticleCanvas />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-12">
          <div className="inline-flex items-center gap-2.5 text-xs rounded-full px-4 py-1.5 mb-10 tracking-wider uppercase text-violet-300 bg-violet-500/10 border border-violet-500/20 font-mono-brand">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Full Stack Developer · Backend Specialist (NestJS)
          </div>

          <h1
            className="font-black leading-none tracking-tight mb-5"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '-0.03em' }}
          >
            {personal.name}
          </h1>

          <div
            className="flex items-center justify-center mb-3 font-light text-white/50"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', height: '2.6rem' }}
          >
            <AnimatedRole />
          </div>

          <p className="flex items-center justify-center gap-2 text-sm text-white/30 mb-12">
            <MapPin size={13} />
            CTO at Larthaa Lab · Founder of Alworya &amp; Jarah · Technical Director at Alfaw Go
          </p>

          <div className="flex items-center justify-center gap-4 mb-16 flex-wrap">
            <a
              href={personal.cvUrl}
              download
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-violet-500 hover:bg-violet-600 text-white transition-all violet-btn-glow"
            >
              <Download size={15} />
              Download CV
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm glass-card text-white/80"
            >
              Contact Me
              <ChevronRight size={15} />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="glass-card rounded-2xl p-5">
                <div
                  className="font-black mb-1 text-3xl"
                  style={{
                    background: 'linear-gradient(135deg, #fff 30%, #c4b5fd)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-white/38">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <ScrollIndicator onClick={() => scrollTo('about')} />
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] mb-5 font-medium text-violet-500 font-mono-brand">
                About
              </p>
              <h2 className="font-bold leading-tight mb-6 text-4xl md:text-5xl tracking-tight">
                Technology Leader
                <br />
                <span className="text-white/25">&amp; Platform Builder</span>
              </h2>
              <p className="text-lg leading-relaxed text-white/50">
                With 5+ years in software engineering, I&apos;ve evolved from full-stack development to
                technology leadership — building enterprise platforms, mobile apps, admin dashboards, and
                production APIs across Iraq and the MENA region.
              </p>
            </div>
            <div className="flex flex-col gap-5 justify-center text-white/40 leading-relaxed">
              <p>
                I specialize in multi-vendor commerce, e-commerce, event management, AI systems, and
                delivery platforms — not just websites, but complete production systems.
              </p>
              <p>
                Based in {personal.location}, I deliver custom solutions with a focus on scalability,
                security, and measurable business impact.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ABOUT_HIGHLIGHTS.map((item) => {
              const Icon = HIGHLIGHT_ICONS[item.icon] || Code2
              return (
                <div key={item.label} className="glass-card rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-violet-500/10">
                    <Icon size={17} className="text-violet-300" />
                  </div>
                  <h3 className="font-semibold text-sm leading-snug">{item.label}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] mb-5 font-medium text-violet-500 font-mono-brand">
            Career
          </p>
          <h2 className="font-bold mb-16 text-4xl md:text-5xl tracking-tight">Experience</h2>

          <div className="relative">
            <div
              className="absolute top-0 bottom-0 w-px left-0"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(139,92,246,0.5), rgba(139,92,246,0.08) 80%, transparent)',
              }}
            />
            <div className="flex flex-col">
              {TIMELINE.map((item, i) => (
                <div key={i} className="relative flex gap-8 pl-8 pb-10">
                  <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full -translate-x-[4px] timeline-dot bg-violet-500 border-2 border-[#05050a]" />
                  <div className="flex-1 glass-card rounded-2xl p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-semibold text-base mb-0.5">{item.role}</h3>
                        <p className="text-sm text-violet-300">
                          {item.company}
                          <span className="text-white/30"> · {item.location}</span>
                        </p>
                      </div>
                      <span className="text-xs font-mono-brand text-white/28 shrink-0">{item.period}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-white/42">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] mb-5 font-medium text-violet-500 font-mono-brand">
            Work
          </p>
          <h2 className="font-bold mb-4 text-4xl md:text-5xl tracking-tight">Featured Platforms</h2>
          <p className="text-lg mb-16 max-w-xl text-white/38">
            {PLATFORMS.length} production platforms — enterprise commerce, delivery, AI, and business systems.
          </p>

          <div className="flex flex-col gap-8">
            {PLATFORMS.map((p) => (
              <div key={p.num} className="glass-card rounded-3xl p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-violet-500/20 text-violet-200 border border-violet-500/30 font-mono-brand">
                      {p.num}
                    </span>
                    {p.featured && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs rounded-lg px-3 py-1.5 bg-violet-500/15 text-violet-200 hover:bg-violet-500/25 border border-violet-500/25 transition-all"
                    >
                      <Globe size={11} />
                      View Live
                      <ExternalLink size={10} />
                    </a>
                  )}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-1">
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-violet-300 transition-colors">
                      {p.name}
                    </a>
                  ) : (
                    p.name
                  )}
                </h3>
                <p className="text-sm text-violet-300/80 mb-1">{p.full}</p>
                {p.role && <p className="text-xs text-white/35 font-mono-brand mb-4">{p.role}</p>}
                <p className="text-sm leading-relaxed text-white/50 mb-6">{p.description}</p>

                <p className="text-xs uppercase tracking-widest mb-3 text-white/22 font-mono-brand">
                  Key Contributions
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                  {p.contributions.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-xs text-white/42">
                      <span className="w-1 h-1 rounded-full mt-1.5 shrink-0 bg-violet-500" />
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-200 border border-violet-500/18"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/4 text-white/32 border border-white/8 font-mono-brand"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] mb-5 font-medium text-violet-500 font-mono-brand">
            More Work
          </p>
          <h2 className="font-bold mb-16 text-4xl md:text-5xl tracking-tight">Additional Projects</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADD_PROJECTS.map((p) => (
              <div key={p.name} className="glass-card rounded-2xl p-6 flex flex-col">
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-sm mb-1 hover:text-violet-300 flex items-center justify-between gap-2"
                  >
                    {p.name}
                    <ExternalLink size={14} className="text-white/20 shrink-0" />
                  </a>
                ) : (
                  <h3 className="font-semibold text-sm mb-1">{p.name}</h3>
                )}
                <p className="text-xs text-violet-300/70 mb-2">{p.category}</p>
                <p className="text-xs leading-relaxed text-white/38 mb-5 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-violet-500/8 text-violet-300 border border-violet-500/15 font-mono-brand"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="systems" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] mb-5 font-medium text-violet-500 font-mono-brand">
            Capabilities
          </p>
          <h2 className="font-bold mb-16 text-4xl md:text-5xl tracking-tight">Systems &amp; Capabilities</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAPABILITIES.map((c) => {
              const Icon = CAPABILITY_ICONS[c.icon] || Database
              return (
                <div key={c.title} className="glass-card rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10">
                    <Icon size={20} className="text-violet-200" />
                  </div>
                  <h3 className="font-semibold mb-4 text-sm">{c.title}</h3>
                  <ul className="flex flex-col gap-2.5">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-white/38">
                        <ChevronRight size={10} className="text-violet-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] mb-5 font-medium text-violet-500 font-mono-brand">
            Tools
          </p>
          <h2 className="font-bold mb-16 text-4xl md:text-5xl tracking-tight">Tech Stack</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TECH_STACK.map((s) => (
              <div key={s.category} className="glass-card rounded-2xl p-6">
                <p className="text-xs uppercase tracking-widest mb-5 font-medium text-violet-500 font-mono-brand">
                  {s.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-xl bg-white/3 text-white/55 border border-white/8 font-mono-brand hover:text-white hover:border-violet-500/35 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(139,92,246,0.07), transparent)' }}
        />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] mb-5 font-medium text-violet-500 font-mono-brand text-center">
            Impact
          </p>
          <h2 className="font-bold mb-16 text-4xl md:text-5xl tracking-tight text-center">By the Numbers</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACHIEVEMENTS_DISPLAY.map((a) => (
              <div key={a.label} className="glass-card rounded-3xl p-8 text-center">
                <div
                  className="font-black mb-2 text-5xl"
                  style={{
                    background: 'linear-gradient(135deg, #fff 0%, #c4b5fd 50%, #8B5CF6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {a.value}
                </div>
                <div className="font-medium mb-1 text-sm">{a.label}</div>
                <div className="text-sm text-white/28">{a.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-14 overflow-hidden border-y border-white/5">
        <div className="flex overflow-hidden">
          <div className="marquee-inner flex gap-12 whitespace-nowrap">
            {[...TECH_MARQUEE, ...TECH_MARQUEE].map((t, i) => (
              <span key={`${t}-${i}`} className="text-sm text-white/22 font-mono-brand hover:text-violet-300 transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] mb-5 font-medium text-violet-500 font-mono-brand">
            Social Proof
          </p>
          <h2 className="font-bold mb-16 text-4xl md:text-5xl tracking-tight">What Clients Say</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS_DISPLAY.map((t) => (
              <div key={t.name + t.role} className="glass-card rounded-2xl p-8 flex flex-col">
                <Quote size={22} className="mb-6 text-violet-500/45" />
                <p className="text-sm leading-relaxed flex-1 mb-8 italic text-white/55">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold bg-gradient-to-br from-violet-700 to-violet-800">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-white/35">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-8 lg:p-14">
            <p className="text-xs uppercase tracking-[0.3em] mb-5 font-medium text-violet-500 font-mono-brand">
              Get in Touch
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-bold mb-4 text-3xl md:text-4xl tracking-tight leading-tight">
                  Let&apos;s build something
                  <br />
                  <span className="text-white/25">significant.</span>
                </h2>
                <p className="leading-relaxed mb-8 text-white/40">
                  Open to CTO roles, consulting, and technical leadership opportunities. Based in Basra — available globally.
                </p>

                <div className="flex flex-col gap-4 mb-8">
                  <a href={`mailto:${personal.email}`} className="flex items-center gap-3 text-sm text-white/45 hover:text-white transition-colors">
                    <Mail size={15} className="text-violet-500 shrink-0" />
                    {personal.email}
                  </a>
                  <a
                    href={personal.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-white/45 hover:text-white transition-colors"
                  >
                    <svg className="w-[15px] h-[15px] text-violet-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp · {personal.phone}
                  </a>
                  <div className="flex items-center gap-3 text-sm text-white/45">
                    <MapPin size={15} className="text-violet-500 shrink-0" />
                    {personal.location}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-white/38 hover:text-white transition-colors"
                    title="GitHub"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-white/38 hover:text-white transition-colors"
                    title="LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                    </svg>
                  </a>
                  <a
                    href={personal.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-white/38 hover:text-white transition-colors"
                    title="WhatsApp"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div dir="rtl">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center gap-5 py-12">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[#25D366]/15 text-[#25D366] text-2xl">
                      ✓
                    </div>
                    <h3 className="text-xl font-bold">تم الإرسال</h3>
                    <p className="text-sm text-white/38">سيتم فتح واتساب لإرسال رسالتك إلى {personal.phone}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold mb-2 text-white/80">
                        الاسم
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="اسمك أو اسم شركتك"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        className="w-full text-sm rounded-xl px-4 py-3 outline-none bg-white/4 border border-white/8 text-white placeholder:text-white/25 focus:border-violet-500/45"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-type" className="block text-sm font-semibold mb-2 text-white/80">
                        نوع المشروع
                      </label>
                      <select
                        id="contact-type"
                        value={form.projectType}
                        onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                        required
                        className="w-full text-sm rounded-xl px-4 py-3 outline-none bg-white/4 border border-white/8 text-white focus:border-violet-500/45 appearance-none cursor-pointer"
                      >
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-[#0d0d14] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-details" className="block text-sm font-semibold mb-2 text-white/80">
                        تفاصيل المشروع
                      </label>
                      <textarea
                        id="contact-details"
                        placeholder="صف فكرتك، الميزات المطلوبة، والجدول الزمني إن وُجد..."
                        value={form.details}
                        onChange={(e) => setForm({ ...form, details: e.target.value })}
                        required
                        rows={5}
                        className="w-full text-sm rounded-xl px-4 py-3 outline-none resize-none bg-white/4 border border-white/8 text-white placeholder:text-white/25 focus:border-violet-500/45"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-semibold text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      أرسل عبر واتساب
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-white/20 font-mono-brand">
            © {new Date().getFullYear()} {personal.name}
          </span>
          <span className="text-xs text-white/15 font-mono-brand">
            {personal.location} · Building for the world
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
