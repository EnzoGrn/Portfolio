import { experience } from '../data/experience'
import FadeIn from './FadeIn'
import styles from './Experience.module.css'

const MONTHS = {
  JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
  JUNE: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11,
}

function parseStartDate(time) {
  const segments = time.split('-').map(s => s.trim())
  const start = segments[0].split(/\s+/).filter(Boolean)
  const month = MONTHS[start[0]?.toUpperCase()] ?? 0
  const year = parseInt(start[1]) || 0
  return new Date(year, month)
}

function parseEndDate(time) {
  if (time.toLowerCase().includes('present')) return new Date(9999, 0)
  const segments = time.split('-').map(s => s.trim())
  const end = segments[segments.length - 1].split(/\s+/).filter(Boolean)
  const month = MONTHS[end[0]?.toUpperCase()] ?? 0
  const year = parseInt(end[1]) || 0
  return new Date(year, month)
}

export default function Experience() {
  const sortedExperience = [...experience].sort((a, b) => {
    const endDiff = parseEndDate(b.time) - parseEndDate(a.time)
    if (endDiff !== 0) return endDiff
    return parseStartDate(b.time) - parseStartDate(a.time)
  })

  return (
    <section className="section" id="experience">
      <div className="section-title">Experience</div>
      <div className="section-content">
        <div className={styles.timeline}>
          {sortedExperience.map((job, i) => (
            <FadeIn key={job.company + i} delay={i * 100}>
              <div className={styles.item}>
                <div className={styles.marker}>
                  <div className={styles.dot} />
                  {i < sortedExperience.length - 1 && <div className={styles.line} />}
                </div>
                <div className={styles.body}>
                  <div className={styles.header}>
                    <span className={styles.position}>{job.position}</span>
                    <span className={styles.time}>{job.time}</span>
                  </div>
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.company}`}
                  >
                    {job.company}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}