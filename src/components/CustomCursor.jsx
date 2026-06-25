import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [ring, setRing] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (!finePointer) return

    document.body.classList.add('custom-cursor-active')

    let raf
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) {
        setVisible(true)
        setRing({ x: e.clientX, y: e.clientY })
      }
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        setRing((prev) => ({
          x: prev.x + (e.clientX - prev.x) * 0.18,
          y: prev.y + (e.clientY - prev.y) * 0.18,
        }))
      })
    }

    const onOver = (e) => {
      const target = e.target
      if (target instanceof Element && target.closest('a, button, [role="button"], input, textarea, select, label')) {
        setHovering(true)
      }
    }

    const onOut = (e) => {
      const target = e.target
      if (target instanceof Element && target.closest('a, button, [role="button"], input, textarea, select, label')) {
        setHovering(false)
      }
    }

    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseout', onOut, { passive: true })
    document.addEventListener('mouseleave', onLeave)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [visible])

  if (!visible && pos.x < 0) return null

  return (
    <>
      <div
        className="custom-cursor-ring"
        style={{
          transform: `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%) scale(${hovering ? 1.55 : 1})`,
          opacity: visible ? (hovering ? 0.85 : 0.45) : 0,
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) scale(${hovering ? 0.4 : 1})`,
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  )
}
