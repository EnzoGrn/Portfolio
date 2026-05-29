import styles from './Toast.module.css'

export default function Toast({ children, visible, onClick }) {
  if (!visible) return null
  return (
    <div className={styles.toast} onClick={onClick}>
      {children}
    </div>
  )
}