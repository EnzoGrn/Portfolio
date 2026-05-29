import { featuredProjects, otherProjects } from '../data/projects'
import FadeIn from './FadeIn'
import styles from './Projects.module.css'

function TechTag({ tech }) {
  return <span className={styles.tag}>{tech}</span>
}

export default function Projects() {
  return (
    <>
      {/* Featured Projects */}
      <section className="section" id="projects">
        <div className="section-title">Projects</div>
        <div className="section-content">
          <div className={styles.featured}>
            {featuredProjects.map((project, i) => (
              <FadeIn key={project.name} delay={i * 100}>
                <div className={styles.project}>
                  {project.image && (
                    <div className={styles.imgWrap}>
                      <a href={project.url} target="_blank" rel="noreferrer">
                        <img src={project.image} alt={project.name} />
                      </a>
                    </div>
                  )}
                  {!project.image && (
                    <div className={styles.placeholder}>
                      <span className={styles.placeholderText}>
                        {project.name[0]}
                      </span>
                    </div>
                  )}
                  <div className={styles.caption}>
                    <div className={styles.projectName}>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="underline-link"
                      >
                        {project.name}
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.ghLink}
                          aria-label="GitHub"
                        >
                          ↗
                        </a>
                      )}
                    </div>
                    <p>{project.description}</p>
                    <div className={styles.tags}>
                      {project.tech.map(t => <TechTag key={t} tech={t} />)}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="section">
        <div className="section-title">Other</div>
        <div className="section-content">
          <div className={styles.others}>
            {otherProjects.map((project, i) => (
              <FadeIn key={project.name} delay={i * 70}>
                <div className={styles.other}>
                  <div className={styles.otherHeader}>
                    <span className={styles.otherName}>{project.name}</span>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.ghLink}
                      >
                        ↗
                      </a>
                    )}
                  </div>
                  <p className={styles.otherDesc}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tech.map(t => <TechTag key={t} tech={t} />)}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
