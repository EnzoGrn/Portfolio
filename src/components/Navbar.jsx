import styles from './Navbar.module.css'
import { useRef } from 'react'

export default function Navbar({ dark, toggle }) {

  const clickCount = useRef(0)
  const clickTimer = useRef(null)

  const handleLogoClick = (e) => {
    e.preventDefault()
    clickCount.current += 1
    clearTimeout(clickTimer.current)
    clickTimer.current = setTimeout(() => {
      clickCount.current = 0
    }, 600)
    if (clickCount.current >= 3) {
      window.dispatchEvent(new CustomEvent('zelda:logo-triple-click'))
      clickCount.current = 0
    }
  }

  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.logo} onClick={handleLogoClick}>
        {'<Enzo GARNIER />'}
      </a>

      <div className={styles.right}>
        <ul className={styles.links}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
          className={styles.toggle}
          onClick={toggle}
          aria-label="Toggle dark mode"
          title={dark ? 'Passer en mode clair' : 'Passer en mode sombre'}
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}
