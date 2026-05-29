import FadeIn from './FadeIn'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-title">Contact</div>
      <FadeIn>
        <div className="section-content">
          <p>
            I am currently available for freelance opportunities or permanent positions. If you have a project in mind or would simply like to discuss possibilities, please feel free to contact me!
          </p>
          <a
            href="mailto:enzogarnier.pro@gmail.com"
            className={`${styles.btn} highlight-link`}
          >
            Say Hello! 👋
          </a>

          <div className={styles.social}>
            <a href="https://github.com/EnzoGrn" target="_blank" rel="noreferrer" className={styles.link}>
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/enzo-garnier" target="_blank" rel="noreferrer" className={styles.link}>
              LinkedIn ↗
            </a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer" className={styles.link}>
              CV ↗
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
