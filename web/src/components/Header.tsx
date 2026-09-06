import { useEffect, useState } from 'react'
import { content } from '../content'
import { MagneticButton } from './MagneticButton'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap">
        <a href="#top" className="logo" onClick={close}>
          {content.brand}
          <small>{content.tagline}</small>
        </a>

        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          {content.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={close}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-cta">
          <MagneticButton
            as="a"
            href={`mailto:${content.contact.email}`}
            className="btn-primary"
          >
            Inquire
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
