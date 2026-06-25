import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getTranslations } from '../i18n/content'
import { buildPortfolioData } from '../lib/mapPortfolio'

const AppContext = createContext(null)

const STORAGE_LANG = 'portfolio-lang'
const STORAGE_THEME = 'portfolio-theme'

export function AppProvider({ children }) {
  const [lang, setLangState] = useState(() => localStorage.getItem(STORAGE_LANG) || 'en')
  const [theme, setThemeState] = useState(() => localStorage.getItem(STORAGE_THEME) || 'dark')

  const setLang = (next) => {
    setLangState(next)
    localStorage.setItem(STORAGE_LANG, next)
  }

  const setTheme = (next) => {
    setThemeState(next)
    localStorage.setItem(STORAGE_THEME, next)
  }

  const toggleLang = () => setLang(lang === 'en' ? 'ar' : 'en')
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const t = useMemo(() => getTranslations(lang), [lang])
  const data = useMemo(() => buildPortfolioData(lang), [lang])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#05050a' : '#f8f7fc',
    )
  }, [lang, theme])

  return (
    <AppContext.Provider value={{ lang, theme, setLang, setTheme, toggleLang, toggleTheme, t, data }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
