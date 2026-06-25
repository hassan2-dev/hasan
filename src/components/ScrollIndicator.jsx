export default function ScrollIndicator({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Scroll down"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group"
    >
      <div className="scroll-mouse">
        <div className="scroll-mouse-wheel" />
      </div>
      <span className="text-[10px] uppercase tracking-[0.25em] text-white/25 group-hover:text-violet-400/70 transition-colors font-mono-brand">
        Scroll
      </span>
    </button>
  )
}
