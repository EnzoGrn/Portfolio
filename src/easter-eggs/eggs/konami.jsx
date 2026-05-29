import { useEffect, useRef, useState } from 'react'
import styles from './konami.module.css'

const SEQUENCE = [
  'ArrowUp','ArrowUp','ArrowDown','ArrowDown',
  'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight',
  'b','a',
]

export default function KonamiEgg() {
  const [active, setActive] = useState(false)
  const buffer = useRef([])

  useEffect(() => {
    const onKey = (e) => {
      buffer.current = [...buffer.current, e.key].slice(-SEQUENCE.length)
      if (buffer.current.join(',') === SEQUENCE.join(',')) {
        setActive(true)
        buffer.current = []
        setTimeout(() => setActive(false), 4000)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!active) return null

  return (
    <div className={styles.overlay} onClick={() => setActive(false)}>
      <div className={styles.box}>
        <span className={styles.sword}>🗡️</span>
        <p className={styles.main}>It&apos;s dangerous to go alone!</p>
        <p className={styles.sub}>Take this.</p>
      </div>
    </div>
  )
}