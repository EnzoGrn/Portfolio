import { useEffect, useRef, useState } from 'react'
import Toast from '../Toast'
import styles from './sea-of-thieves.module.css'

const DELAY = 30000

export default function SeaOfThievesEgg() {
  const [active, setActive] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    const reset = () => {
      clearTimeout(timer.current)
      setActive(false)
      timer.current = setTimeout(() => setActive(true), DELAY)
    }
    const events = ['mousemove', 'keydown', 'scroll', 'click', 'touchstart']
    events.forEach(e => window.addEventListener(e, reset, { passive: true }))
    reset()
    return () => {
      events.forEach(e => window.removeEventListener(e, reset))
      clearTimeout(timer.current)
    }
  }, [])

  return (
    <Toast visible={active} onClick={() => setActive(false)}>
      <div className={styles.content}>
        <span className={styles.ship}>⛵</span>
        <div>
          <p>A pirate&apos;s life for me…</p>
          <p className={styles.hint}>click to return to shore</p>
        </div>
      </div>
    </Toast>
  )
}