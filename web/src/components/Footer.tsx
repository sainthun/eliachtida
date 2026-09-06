import { Link } from 'react-router-dom'
import { content } from '../content'
import { useI18n } from '../i18n/I18nProvider'

export function Footer() {
  const year = new Date().getFullYear()
  const { t } = useI18n()

  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="footer-wordmark" aria-hidden="true">
          {content.brand}
        </p>
        <div className="footer-row">
          <p>
            © {year} {content.brand} · {t.tagline}
          </p>
          <div className="footer-links">
            <Link to="/#story">{t.nav.story}</Link>
            <Link to="/#oil">{t.nav.oil}</Link>
            <Link to="/#grove">{t.nav.grove}</Link>
            <Link to="/mill">{t.nav.mill}</Link>
            <a href={`mailto:${content.contact.email}`}>{t.contact.email}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
