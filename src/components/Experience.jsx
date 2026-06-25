import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolio'

function Experience() {
  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeading
        label="Experience"
        title="Career Timeline"
        subtitle="From internship to CTO — a journey of building, leading, and shipping."
      />

      <div className="relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-violet-500/50 to-transparent" />

        <div className="space-y-8">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-12 md:pl-20 group">
              <div className="absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full bg-violet-500 ring-4 ring-black group-hover:ring-violet-500/20 transition-all" />

              <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-violet-500/5 hover:border-violet-500/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {item.role}
                    <span className="text-violet-400"> — {item.company}</span>
                  </h3>
                  <span className="text-sm text-gray-500 font-mono shrink-0">{item.period}</span>
                </div>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
