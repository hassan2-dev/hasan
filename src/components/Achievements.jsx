import SectionHeading from './SectionHeading'
import { achievements } from '../data/portfolio'

function Achievements() {
  return (
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        label="Impact"
        title="Production at Scale"
        subtitle="Real numbers from enterprise platforms, business systems, APIs, and dashboards shipped to production."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {achievements.map((item) => (
          <div
            key={item.label}
            className="text-center p-6 md:p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-violet-500/5 to-transparent hover:border-violet-500/20 transition-all duration-300"
          >
            <div className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {item.value}
            </div>
            <div className="text-gray-400 text-sm md:text-base leading-tight">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements
