import styles from './Navbar.module.css'
import { useRef, useState, useEffect } from 'react'

export default function Navbar({ dark, toggle }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const clickCount = useRef(0)
  const clickTimer = useRef(null)

  const handleLogoClick = (e) => {
    e.preventDefault()
    clickCount.current += 1
    clearTimeout(clickTimer.current)
    clickTimer.current = setTimeout(() => { clickCount.current = 0 }, 600)
    if (clickCount.current >= 3) {
      window.dispatchEvent(new CustomEvent('zelda:logo-triple-click'))
      clickCount.current = 0
    }
  }

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const navLinks = [
    { href: '#about',      label: 'About' },
    { href: '#skills',     label: 'Skills' },
    { href: '#projects',   label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact',    label: 'Contact' },
  ]

  return (
    <>
      <nav className={styles.nav}>
        <a href="#hero" className={styles.logo} onClick={handleLogoClick}>
          {'<Enzo GARNIER />'}
        </a>

        <div className={styles.right}>
          {/* Desktop links */}
          <ul className={styles.links}>
            {navLinks.map(({ href, label }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>

          <button
            className={styles.toggle}
            onClick={toggle}
            aria-label="Toggle dark mode"
            title={dark ? 'Passer en mode clair' : 'Passer en mode sombre'}
          >
            {dark ? '☀️' : '🌙'}
          </button>

          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.drawerLinks}>
          {navLinks.map(({ href, label }, i) => (
            <li key={href} style={{ '--i': i }}>
              <a href={href} onClick={closeMenu}>{label}</a>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />
      )}
    </>
  )
}