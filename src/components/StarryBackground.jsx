import { useEffect, useRef } from 'react'
import styles from './StarryBackground.module.css'

const STAR_COUNT = 120

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

export default function StarryBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.innerHTML = ''

    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElement('span')
      star.className = styles.star

      const size = randomBetween(1, 3.5)
      star.style.width = `${size}px`
      star.style.height = `${size}px`

      star.style.left = `${randomBetween(0, 100)}%`
      star.style.top  = `${randomBetween(0, 100)}%`

      const duration = randomBetween(6, 18)
      const delay    = randomBetween(-18, 0)
      star.style.animationDuration = `${duration}s`
      star.style.animationDelay   = `${delay}s`

      star.style.opacity = randomBetween(0.2, 0.9)

      container.appendChild(star)
    }
  }, [])

  return <div ref={containerRef} className={styles.background} aria-hidden="true" />
}