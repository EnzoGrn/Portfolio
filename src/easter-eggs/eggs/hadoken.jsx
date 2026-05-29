import { useEffect, useRef, useState } from 'react'
import { playHadoken } from '../audio'
import styles from './hadoken.module.css'

const SEQUENCE = ['ArrowDown', 'ArrowRight', 'ArrowRight', 'a']

export default function HadokenEgg() {
  const [burst, setBurst] = useState(false)
  const buffer = useRef([])

  useEffect(() => {
    const onKey = (e) => {
      buffer.current = [...buffer.current, e.key].slice(-SEQUENCE.length)
      if (buffer.current.join(',') === SEQUENCE.join(',')) {
        playHadoken()
        setBurst(true)
        buffer.current = []
        setTimeout(() => setBurst(false), 800)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!burst) return null

  return (
    <div className={styles.burst}>
      <div className={styles.ring} />
      <div className={styles.ring2} />
      <span className={styles.emoji}>🔥</span>
    </div>
  )
}