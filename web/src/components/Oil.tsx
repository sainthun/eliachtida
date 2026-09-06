import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { content } from '../content'
import { useI18n } from '../i18n/I18nProvider'
import { MagneticButton } from './MagneticButton'
import { FilmFrame } from './FilmFrame'
import { useMediaQuery, usePrefersReducedMotion } from '../hooks/useMedia'

gsap.registerPlugin(ScrollTrigger)

export function Oil() {
  const rootRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const bottleRef = useRef<HTMLImageElement>(null)
  const fine = useMediaQuery('(pointer: fine)')
  const reduced = usePrefersReducedMotion()
  const { t } = useI18n()

  useEffect(() => {
    if (!rootRef.current || reduced) return

    const ctx = gsap.context(() => {
      gsap.from('.oil-copy > *', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 70%' },
      })

      gsap.from('.oil-stage img', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.oil-stage', start: 'top 75%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [reduced])

  useEffect(() => {
    const stage = stageRef.current
    const bottle = bottleRef.current
    if (!stage || !bottle || !fine) return

    const onMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      stage.style.setProperty('--mx', `${x * 100}%`)
      stage.style.setProperty('--my', `${y * 100}%`)
      const rx = (0.5 - y) * 10
      const ry = (x - 0.5) * 12
      bottle.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`
    }

    const onLeave = () => {
      bottle.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
    }

    stage.addEventListener('mousemove', onMove)
    stage.addEventListener('mouseleave', onLeave)
    return () => {
      stage.removeEventListener('mousemove', onMove)
      stage.removeEventListener('mouseleave', onLeave)
    }
  }, [fine])

  return (
    <section className="section section-alt oil" id="oil" ref={rootRef}>
      <div className="wrap oil-layout">
        <div className="oil-stage" ref={stageRef}>
          <div className="oil-light" aria-hidden="true" />
          <img
            ref={bottleRef}
            src={content.media.bottle}
            alt="eliachtida extra virgin olive oil 1 litre bottle"
          />
        </div>

        <div className="oil-copy">
          <p className="chapter">
            <span>02</span> {t.chapters.oil}
          </p>
          <h2>{t.oil.title}</h2>
          <p className="lead">{t.oil.body}</p>

          <ul className="facts">
            {t.oil.facts.map((f) => (
              <li key={f.label}>
                <strong>{f.label}</strong>
                <span>{f.detail}</span>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '2rem' }}>
            <MagneticButton
              as="a"
              href={`mailto:${content.contact.email}?subject=Order%20inquiry%20—%20eliachtida`}
              className="btn-primary"
            >
              {t.oil.inquireOrder}
            </MagneticButton>
          </div>

          <div className="tins">
            <FilmFrame aspect="wide">
              <img
                src={content.media.tins}
                alt="eliachtida bottle and tin formats"
                loading="lazy"
              />
            </FilmFrame>
          </div>
        </div>
      </div>
    </section>
  )
}
