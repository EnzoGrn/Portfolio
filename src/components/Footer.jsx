import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.imageWrapper}>
        <img src="/img/footer.png" alt="Logo" className={styles.floatingImage} />
      </div>
      <p className={styles.credit}>
        Reimaginated and developed by <strong>Enzo GARNIER</strong>
      </p>
      <p className={styles.inspired}>
        Inspired by the portfolio of{' '}
        <a href="https://brittanychiang.com" target="_blank" rel="noreferrer">
          Brittany Chiang
        </a>
      </p>
    </footer>
  )
}
