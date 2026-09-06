import type { FormEvent } from 'react'
import { content } from '../content'
import { MagneticButton } from './MagneticButton'

export function Contact() {
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
            <span>06</span> Contact
          </p>
          <h2>Get in touch</h2>
          <p className="lead">
            Orders, wholesale, or a quiet visit to the grove — we read every note.
          </p>

          <ul className="contact-list">
            <li>
              <small>Email</small>
              <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
            </li>
            <li>
              <small>Phone</small>
              <span>{content.contact.phone}</span>
            </li>
            <li>
              <small>Place</small>
              <span>{content.contact.addressLine}</span>
            </li>
            <li>
              <small>Coordinates</small>
              <span>{content.coords.label}</span>
            </li>
          </ul>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="EMAIL@address.com" required />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="How can we help?" required />
          </label>
          <p className="form-note">Opens your email app — no data is stored on this site.</p>
          <MagneticButton type="submit" className="btn-primary">
            Send message
          </MagneticButton>
        </form>
      </div>
    </section>
  )
}
