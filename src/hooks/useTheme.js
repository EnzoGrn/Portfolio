import { useState, useEffect } from 'react'

export function useTheme() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') !== 'light'
  })

  useEffect(() => {
    document.body.classList.toggle('night', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const toggle = () => setDark(d => !d)

  return { dark, toggle }
}
