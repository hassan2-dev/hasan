import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'

function AnimatedRole() {
  const { data } = useApp()
  const roles = data.ROLES
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setIdx(0)
    setVisible(true)
  }, [roles])

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx((i) => (i + 1) % roles.length)
        setVisible(true)
      }, 380)
    }, 2800)
    return () => clearInterval(t)
  }, [roles.length])

  return (
    <span
      className="inline-block bg-gradient-to-r from-violet-400 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent transition-all duration-300 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(10px)',
      }}
    >
      {roles[idx]}
    </span>
  )
}

export default AnimatedRole
