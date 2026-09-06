import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { content } from '../content'
import { useI18n } from '../i18n/I18nProvider'
import { usePrefersReducedMotion } from '../hooks/useMedia'

gsap.registerPlugin(ScrollTrigger)

export function Grove() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()
  const { t } = useI18n()

  const { lat, lng } = content.coords
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.08}%2C${lat - 0.05}%2C${lng + 0.08}%2C${lat + 0.05}&layer=mapnik&marker=${lat}%2C${lng}`

  useEffect(() => {
    if (!rootRef.current || reduced) return

    const ctx = gsap.context(() => {
      gsap.from('.coords-display .lat span, .coords-display .lng span', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.coords-display', start: 'top 80%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section className="section grove" id="grove" ref={rootRef}>
      <div className="wrap grove-grid">
        <div>
          <p className="chapter">
            <span>03</span> {t.chapters.grove}
          </p>
          <h2>{t.grove.title}</h2>
          <p className="lead">{t.grove.body}</p>
          <p className="story-note" style={{ marginTop: '1.5rem' }}>
            {t.signature}
          </p>

          <div className="coords-display" aria-label="Grove coordinates">
            <div className="lat">
              <span>{lat.toFixed(7)}° N</span>
            </div>
            <div className="lng">
              <span>{lng.toFixed(7)}° E</span>
            </div>
          </div>

          <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
            {t.grove.addressLine}
          </p>
        </div>

        <div className="map-frame">
          <iframe
            title="Map of the eliachtida family grove"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-pin" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
