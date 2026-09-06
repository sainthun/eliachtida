import { content } from '../content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="footer-wordmark" aria-hidden="true">
          {content.brand}
        </p>
        <div className="footer-row">
          <p>
            © {year} {content.brand} · {content.tagline}
          </p>
          <div className="footer-links">
            <a href="#story">Story</a>
            <a href="#oil">Oil</a>
            <a href="#grove">Grove</a>
            <a href={`mailto:${content.contact.email}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
