import { Sun, Moon, Languages } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function ThemeLangToggle({ compact = false }) {
  const { lang, theme, toggleLang, toggleTheme } = useApp()

  const btnClass = compact
    ? 'w-9 h-9 rounded-xl flex items-center justify-center border border-theme text-muted hover:text-strong hover:border-violet-500/40 transition-all'
    : 'h-9 px-3 rounded-xl flex items-center justify-center gap-1.5 border border-theme text-muted hover:text-strong hover:border-violet-500/40 transition-all text-xs font-medium'

  const themeLabel = lang === 'ar'
    ? (theme === 'dark' ? 'فاتح' : 'داكن')
    : (theme === 'dark' ? 'Light' : 'Dark')

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggleLang}
        className={btnClass}
        aria-label={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
        title={lang === 'en' ? 'العربية' : 'English'}
      >
        <Languages size={15} />
        {!compact && <span>{lang === 'en' ? 'AR' : 'EN'}</span>}
      </button>
      <button
        type="button"
        onClick={toggleTheme}
        className={btnClass}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
        {!compact && <span>{themeLabel}</span>}
      </button>
    </div>
  )
}
