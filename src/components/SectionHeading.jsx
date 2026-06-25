function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="mb-12 md:mb-16">
      <span className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3 block">
        {label}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeading
