import SectionHeading from './SectionHeading'

function MoreProjects({ projects, title, subtitle }) {
  return (
    <div>
      <SectionHeading label="More Work" title={title} subtitle={subtitle} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-violet-500/5 hover:border-violet-500/20 transition-all duration-300 flex flex-col"
          >
            {project.category && (
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mb-2">
                {project.category}
              </span>
            )}

            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-white mb-1 group-hover:text-violet-300 transition-colors underline decoration-violet-500/20 underline-offset-2"
              >
                {project.title}
              </a>
            ) : (
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-violet-300 transition-colors">
                {project.title}
              </h3>
            )}

            <p className="text-violet-400/80 text-sm mb-4">{project.subtitle}</p>

            <div className="flex flex-wrap gap-2 mb-4 flex-1">
              {project.features.map((feature) => (
                <span
                  key={feature}
                  className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/5"
                >
                  {feature}
                </span>
              ))}
            </div>

            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 mt-auto text-sm font-medium text-violet-300 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/20 rounded-lg transition-all"
              >
                View Live
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <span className="text-xs text-gray-600 font-mono mt-auto text-center py-2">
                Internal / Private System
              </span>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}

export default MoreProjects
