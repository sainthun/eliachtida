import { LANGS, type Lang } from '../i18n'
import { useI18n } from '../i18n/I18nProvider'

export function LangSwitch() {
  const { lang, setLang } = useI18n()

  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {LANGS.map((item) => (
        <button
          key={item.code}
          type="button"
          className={`lang-switch__btn ${lang === item.code ? 'is-active' : ''}`}
          onClick={() => setLang(item.code as Lang)}
          aria-pressed={lang === item.code}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
