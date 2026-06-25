import SectionHeading from './SectionHeading'
import { testimonials } from '../data/portfolio'

function Testimonials() {
  return (
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        label="Testimonials"
        title="What People Say"
        subtitle="Feedback from partners and collaborators on real production projects."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <blockquote
            key={index}
            className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-violet-500/20 transition-all duration-300 flex flex-col"
          >
            <svg className="w-8 h-8 text-violet-500/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-gray-300 leading-relaxed mb-6 flex-1">&ldquo;{item.quote}&rdquo;</p>
            <footer>
              <cite className="not-italic">
                <span className="text-white font-medium block">{item.author}</span>
                <span className="text-violet-400 text-sm">{item.role}</span>
              </cite>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
