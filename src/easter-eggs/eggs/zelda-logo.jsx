import { useEffect, useState } from 'react'
import { playZeldaJingle } from '../audio'
import Toast from '../Toast'
import styles from './zelda-logo.module.css'

export default function ZeldaLogoEgg() {
  const [toast, setToast] = useState(false)

  useEffect(() => {

    const onTriple = () => {
      playZeldaJingle()
      setToast(true)
      setTimeout(() => setToast(false), 3500)
    }
    window.addEventListener('zelda:logo-triple-click', onTriple)
    return () => window.removeEventListener('zelda:logo-triple-click', onTriple)
  }, [])

  return (
    <Toast visible={toast} onClick={() => setToast(false)}>
      <span className={styles.content}>
        <span>△</span>
        <span>Secret discovered!</span>
      </span>
    </Toast>
  )
}