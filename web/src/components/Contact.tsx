import type { FormEvent } from 'react'
import { content } from '../content'
import { useI18n } from '../i18n/I18nProvider'
import { MagneticButton } from './MagneticButton'

export function Contact() {
  const { t } = useI18n()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const message = String(data.get('message') || '')
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:${content.contact.email}?subject=${encodeURIComponent('Message from eliachtida website')}&body=${body}`
  }

  return (
    <section className="section section-alt contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="chapter">
            <span>06</span> {t.chapters.contact}
          </p>
          <h2>{t.contact.title}</h2>
          <p className="lead">{t.contact.lead}</p>

          <ul className="contact-list">
            <li>
              <small>{t.contact.email}</small>
              <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
            </li>
            <li>
              <small>{t.contact.phone}</small>
              <span>{content.contact.phone}</span>
            </li>
            <li>
              <small>{t.contact.place}</small>
              <span>{t.grove.addressLine}</span>
            </li>
            <li>
              <small>{t.contact.coordinates}</small>
              <span>{content.coords.label}</span>
            </li>
          </ul>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <label>
            {t.contact.name}
            <input name="name" type="text" placeholder={t.contact.namePh} required />
          </label>
          <label>
            {t.contact.email}
            <input name="email" type="email" placeholder={t.contact.emailPh} required />
          </label>
          <label>
            {t.contact.message}
            <textarea name="message" placeholder={t.contact.messagePh} required />
          </label>
          <p className="form-note">{t.contact.formNote}</p>
          <MagneticButton type="submit" className="btn-primary">
            {t.contact.send}
          </MagneticButton>
        </form>
      </div>
    </section>
  )
}
