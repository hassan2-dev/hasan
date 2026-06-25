function ProjectLinks({ platform }) {
  const links =
    platform.links ||
    (platform.url ? [{ label: 'View Live Site', url: platform.url }] : [])

  if (links.length === 0) {
    return (
      <p className="text-gray-600 text-sm font-mono mb-6">
        Mobile app — link coming soon
      </p>
    )
  }

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6">
      {links.map((link) => (
        <a
          key={`${link.label}-${link.url}`}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 border border-violet-500/50 rounded-xl text-white text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/20"
        >
          {link.label}
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      ))}
      {platform.url && (
        <span className="inline-flex items-center text-gray-500 text-xs font-mono px-2 py-2.5 break-all">
          {platform.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
        </span>
      )}
    </div>
  )
}

function PlatformCard({ platform, index, showContributions = true }) {
  const titleContent = platform.url ? (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-violet-300 transition-colors underline decoration-violet-500/30 underline-offset-4"
    >
      {platform.title}
    </a>
  ) : (
    platform.title
  )

  return (
    <article className="group relative rounded-2xl border border-white/5 overflow-hidden transition-all duration-500 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/5">
      <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-50`} />

      <div className="relative p-6 md:p-10">
        <div className="flex items-center gap-3 mb-3">
          {platform.featured && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
              ⭐ Featured
            </span>
          )}
          <span className="text-gray-500 text-sm font-mono">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="text-2xl md:text-4xl font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">
          {titleContent}
        </h3>
        <p className="text-violet-400 text-lg md:text-xl mb-1">{platform.subtitle}</p>
        {platform.role && (
          <p className="text-gray-500 text-sm font-mono mb-3">{platform.role}</p>
        )}

        <ProjectLinks platform={platform} />

        <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">{platform.description}</p>

        {showContributions && platform.contributions && (
          <div className="mb-6">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-3 font-mono">
              Key Contributions
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {platform.contributions.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                  <span className="text-violet-400 mt-0.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {platform.features && (
          <div className="mb-6">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-3 font-mono">
              Features
            </p>
            <div className="flex flex-wrap gap-2">
              {platform.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 text-xs rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/10"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {platform.technologies && (
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-3 font-mono">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {platform.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

export default PlatformCard
