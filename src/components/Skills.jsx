import SectionHeading from './SectionHeading'
import { skillCategories } from '../data/portfolio'

function Skills() {
  return (
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        label="Technologies"
        title="Tech Stack"
        subtitle="The tools and frameworks behind production platforms, mobile apps, and enterprise systems."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-violet-500/20 transition-all duration-300"
          >
            <h3 className={`text-lg font-semibold mb-4 ${category.color}`}>{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-gray-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500/60" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
