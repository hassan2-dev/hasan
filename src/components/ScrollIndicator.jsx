export default function ScrollIndicator({ onClick, label = 'Scroll' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-30 hover:opacity-60 transition-opacity"
    >
      <div className="w-px h-10 bg-gradient-to-b from-violet-400 to-transparent" />
    </button>
  )
}
