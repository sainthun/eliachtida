import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { content } from '../content'
import { useI18n } from '../i18n/I18nProvider'
import { MagneticButton } from './MagneticButton'
import { usePrefersReducedMotion } from '../hooks/useMedia'

type Props = {
  ready: boolean
}

export function Hero({ ready }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()
  const { t } = useI18n()

  useEffect(() => {
    if (!ready || !rootRef.current || reduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-brand .reveal-line > span, .hero-line, .hero-sub, .hero-actions, .hero-coords',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.05,
        },
      )
      gsap.fromTo(
        '.hero-media video',
        { scale: 1.12 },
        { scale: 1, duration: 2.2, ease: 'power2.out' },
      )
    }, rootRef)

    return () => ctx.revert()
  }, [ready, reduced])

  return (
    <section className="hero" id="top" ref={rootRef}>
      <div className="hero-media" aria-hidden="true">
        <video
          src={content.media.craft02}
          autoPlay
          muted
          loop
          playsInline
          poster={content.media.millOlives}
        />
        <div className="hero-shade" />
        <div className="hero-grain" />
        <div className="hero-vignette" />
      </div>

      <div className="hero-content">
        <h1 className="hero-brand">
          <span className="reveal-line">
            <span>{content.brand}</span>
          </span>
          <em>{t.tagline}</em>
        </h1>
        <p className="hero-line">{t.heroLine}</p>
        <p className="hero-sub">{t.heroSub}</p>
        <div className="hero-actions">
          <MagneticButton as="a" href="#story" className="btn-primary">
            {t.discoverStory}
          </MagneticButton>
          <MagneticButton as="a" href="#oil" className="btn-ghost">
            {t.theOil}
          </MagneticButton>
        </div>
      </div>

      <p className="hero-coords">{content.coords.label}</p>
    </section>
  )
}
