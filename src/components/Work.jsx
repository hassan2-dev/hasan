import SectionHeading from './SectionHeading'
import PlatformCard from './PlatformCard'
import MoreProjects from './MoreProjects'
import { enterprisePlatforms, additionalProjects } from '../data/portfolio'

function Work() {
  return (
    <div className="max-w-7xl mx-auto space-y-24">
      <div>
        <SectionHeading
          label="Enterprise Platforms"
          title="10 Production Systems"
          subtitle="Curated showcase of enterprise-grade platforms — commerce, delivery, AI, and business management systems built for real users."
        />

        <div className="space-y-8">
          {enterprisePlatforms.map((platform, index) => (
            <PlatformCard key={platform.id} platform={platform} index={index} />
          ))}
        </div>
      </div>

      <MoreProjects
        projects={additionalProjects}
        title="Additional Projects & Systems"
        subtitle="Business systems, government platforms, utilities, and specialized solutions — part of 20+ production projects delivered."
      />
    </div>
  )
}

export default Work
