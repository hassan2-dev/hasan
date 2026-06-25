import { technologies } from '../data/portfolio'

function Technologies() {
  const items = [...technologies, ...technologies]

  return (
    <div className="overflow-hidden py-4">
      <div className="text-center mb-8">
        <span className="text-violet-400 text-sm font-mono tracking-widest uppercase">
          Technologies
        </span>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex animate-marquee">
          {items.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex items-center gap-3 mx-6 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-violet-500" />
              <span className="text-gray-300 font-medium whitespace-nowrap">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Technologies
