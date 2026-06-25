import SectionHeading from './SectionHeading'
import { systemCapabilities } from '../data/portfolio'

const icons = {
  mobile: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  ),
  dashboard: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  ),
  api: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  ),
  infra: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
  ),
}

function Systems() {
  return (
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        label="Systems & Capabilities"
        title="Beyond Websites"
        subtitle="Mobile apps, admin dashboards, backend APIs, and deployment infrastructure — the full stack of production engineering."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {systemCapabilities.map((capability) => (
          <div
            key={capability.title}
            className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-violet-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center">
                <svg className={`w-5 h-5 ${capability.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {icons[capability.icon]}
                </svg>
              </div>
              <h3 className={`text-xl font-semibold ${capability.color}`}>{capability.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {capability.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-gray-300 border border-white/5 hover:border-violet-500/20 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Systems
