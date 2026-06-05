import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [waving, setWaving] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setWaving(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <header className={styles.hero} id="hero">
      <div className={styles.inner}>
        <h1 className={styles.hello}>
          Hello!{' '}
          <span
            className={`${styles.wave} ${waving ? styles.animated : ''}`}
            onClick={() => {
              setWaving(false)
              setTimeout(() => setWaving(true), 50)
            }}
          >
            👋
          </span>
        </h1>

        <h2 className={styles.tagline}>
          I'm <span className={styles.name}>Enzo GARNIER</span>,
          a developer passionate about creating video games,
          software, and web experiences.
        </h2>

        <h3 className={styles.contact}>
          <span>Get in touch </span>
          <span className={styles.pointer}>👉</span>
          <a
            href="mailto:contact@enzogarnier.fr"
            className="highlight-link"
          >
            contact@enzogarnier.fr
          </a>
        </h3>
      </div>
    </header>
  )
}
