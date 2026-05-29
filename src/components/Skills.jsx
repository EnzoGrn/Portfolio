import { skills } from '../data/skills'
import FadeIn from './FadeIn'
import styles from './Skills.module.css'

const categories = [
  { label: 'Languages', key: 'languages' },
  { label: 'Frameworks', key: 'frameworks' },
  { label: 'Tools', key: 'tools' },
  { label: 'Design', key: 'design' },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-title">Skills</div>
      <div className="section-content">
        <div className={styles.grid}>
          {categories.map(({ label, key }, i) => (
            <FadeIn key={key} delay={i * 80}>
              <div className={styles.category}>
                <h4 className={styles.label}>{label}</h4>
                <ul className={styles.list}>
                  {skills[key].map(item => (
                    <li key={item} className={styles.item}>
                      <span className={styles.dot} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
