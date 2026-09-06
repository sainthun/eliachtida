import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { dictionaries, type Lang, type Translation } from './index'

const STORAGE_KEY = 'eliachtida-lang'

type I18nContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translation
}

const I18nContext = createContext<I18nContextValue | null>(null)

function detectLang(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY) as Lang | null
  if (saved && saved in dictionaries) return saved
  const nav = navigator.language.slice(0, 2).toLowerCase()
  if (nav === 'hu' || nav === 'el' || nav === 'de') return nav
  return 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    setLangState(detectLang())
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
  }, [])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: dictionaries[lang],
    }),
    [lang, setLang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
