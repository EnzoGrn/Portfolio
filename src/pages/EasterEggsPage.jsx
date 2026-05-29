import styles from './EasterEggsPage.module.css'

const hints = [
  {
    id: '01',
    universe: 'Hyrule',
    hint: 'The classic cheat of the ancients. Eight directions, two letters.',
  },
  {
    id: '02',
    universe: 'Hyrule',
    hint: 'The crest of power is hidden in plain sight. Tap the gate thrice.',
  },
  {
    id: '03',
    universe: 'Night City',
    hint: 'Night City always wins. But they\'re still here, at the bottom of the world.',
  },
  {
    id: '04',
    universe: 'Street Fighter',
    hint: 'Down, forward, forward — then strike. A ball of fire awaits.',
  },
  {
    id: '05',
    universe: 'The Sea',
    hint: 'Stop moving. Let the wind carry you. A ship will come.',
  },
]

export default function EasterEggsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.label}>// easter_eggs.log</p>
        <h1 className={styles.title}>Secrets</h1>
        <p className={styles.intro}>
          Several secrets are hidden in this portfolio.
          These are the only clues you&apos;ll get.
        </p>

        <div className={styles.list}>
          {hints.map(({ id, universe, hint }) => (
            <div key={id} className={styles.item}>
              <span className={styles.id}>{id}</span>
              <div className={styles.content}>
                <span className={styles.universe}>{universe}</span>
                <p className={styles.hint}>{hint}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="/" className={styles.back}>← Back</a>
      </div>
    </main>
  )
}