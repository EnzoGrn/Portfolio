import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function useLang() {
  const { i18n } = useTranslation()
  const [lang, setLang] = useState(i18n.language)

  const toggle = () => {
    const next = lang === 'fr' ? 'en' : 'fr'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
    setLang(next)
  }

  return { lang, toggle }
}