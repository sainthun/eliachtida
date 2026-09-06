import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { content } from '../content'
import { useI18n } from '../i18n/I18nProvider'
import { MagneticButton } from './MagneticButton'
import { LangSwitch } from './LangSwitch'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { t } = useI18n()
  const home = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  const nav = [
    { id: 'story', label: t.nav.story },
    { id: 'oil', label: t.nav.oil },
    { id: 'grove', label: t.nav.grove },
    { id: 'craft', label: t.nav.craft },
    { id: 'visit', label: t.nav.visit },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <header className={`site-header ${scrolled || !home ? 'is-scrolled' : ''}`}>
      <div className="wrap">
        <Link to="/" className="logo" onClick={close}>
          {content.brand}
          <small>{t.tagline}</small>
        </Link>

        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.id}
              to={home ? `#${item.id}` : `/#${item.id}`}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/mill" onClick={close}>
            {t.nav.mill}
          </Link>
          <div className="nav-lang">
            <LangSwitch />
          </div>
        </nav>

        <div className="header-cta">
          <LangSwitch />
          <MagneticButton
            as="a"
            href={`mailto:${content.contact.email}`}
            className="btn-primary"
          >
            {t.inquire}
          </MagneticButton>
        </div>

        <button
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
    </header>
  )
}
