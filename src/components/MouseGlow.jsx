import { useEffect, useRef } from 'react'
import styles from './MouseGlow.module.css'

export default function MouseGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      if (!glowRef.current) return
      glowRef.current.style.left = `${e.clientX}px`
      glowRef.current.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return <div ref={glowRef} className={styles.glow} />
}