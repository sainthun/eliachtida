import { Link } from 'react-router-dom'
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
            <Link to="/#story">Story</Link>
            <Link to="/#oil">Oil</Link>
            <Link to="/#grove">Grove</Link>
            <Link to="/mill">Mill</Link>
            <a href={`mailto:${content.contact.email}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
