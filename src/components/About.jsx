import React from 'react'
import SectionHeading from './SectionHeading'
import { aboutHighlights } from '../data/portfolio'

const icons = {
  experience: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  ),
  cto: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  ),
  founder: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  ),
  director: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  ),
  energy: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  ),
  fullstack: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  ),
  ai: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  ),
  devops: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
  ),
}

function About() {
  return (
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        label="About Me"
        title="Technology Leader & Builder"
        subtitle="I don't just write code — I architect products, lead teams, and ship production platforms that scale."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            With over 5 years of experience in software engineering, I've evolved from
            full-stack development to technology leadership — currently serving as{' '}
            <span className="text-violet-400 font-medium">CTO at Larthaa Lab</span>,{' '}
            <span className="text-violet-400 font-medium">Founder of Alworya & Jarah</span>, and{' '}
            <span className="text-violet-400 font-medium">Technical Director at Alfaw Go</span>.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I specialize in building enterprise-grade platforms — multi-vendor commerce,
            e-commerce stores, event management, AI systems, and delivery platforms. Beyond websites, I deliver
            mobile apps, admin dashboards, REST APIs, and deployment infrastructure.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Based in Basra, Iraq — delivering custom solutions for local and international markets
            with a focus on scalability, security, and business impact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {aboutHighlights.map((item, index) => (
            <div
              key={item.label}
              className="group p-5 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-violet-500/5 hover:border-violet-500/20 transition-all duration-300"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-3 group-hover:bg-violet-500/20 transition-colors">
                <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {icons[item.icon]}
                </svg>
              </div>
              <p className="text-white text-sm font-medium leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
