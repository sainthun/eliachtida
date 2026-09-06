import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { content } from '../content'
import { useI18n } from '../i18n/I18nProvider'
import { usePrefersReducedMotion } from '../hooks/useMedia'

gsap.registerPlugin(ScrollTrigger)

export function Craft() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()
  const { t } = useI18n()

  useEffect(() => {
    if (!rootRef.current || reduced) return

    const ctx = gsap.context(() => {
      gsap.from('.craft-intro > *', {
        y: 36,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      })

      gsap.utils.toArray<HTMLElement>('.craft-phase').forEach((el, i) => {
        gsap.from(el, {
          y: 48,
          opacity: 0,
          duration: 0.95,
          delay: (i % 3) * 0.06,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })
      })
    }, rootRef)

    return () => ctx.revert()
  }, [reduced, t])

  return (
    <section className="section craft" id="craft" ref={rootRef}>
      <div className="wrap">
        <div className="craft-intro">
          <p className="chapter">
            <span>04</span> {t.chapters.craft}
          </p>
          <h2>{t.craft.title}</h2>
          <p className="lead craft-lead">{t.craft.lead}</p>
        </div>

        <div className="craft-phases">
          {t.craft.phases.map((phase, i) => (
            <article key={phase.title} className="craft-phase">
              <div
                className="craft-phase__visual"
                style={{
                  backgroundImage: `url(${content.media.processPhases})`,
                  backgroundPosition: content.phasePositions[i],
                }}
                role="img"
                aria-label={phase.title}
              />
              <div className="craft-phase__copy">
                <p className="craft-phase__eyebrow">
                  <span>0{i + 1}</span> {phase.eyebrow}
                </p>
                <h3>{phase.title}</h3>
                <p>{phase.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="craft-mill-cta">
          <p>{t.craft.millCta}</p>
          <Link to="/mill" className="btn btn-ghost craft-mill-btn">
            {t.craft.millBtn}
          </Link>
        </div>
      </div>
    </section>
  )
}
