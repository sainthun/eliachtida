import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { content } from '../content'
import { usePrefersReducedMotion } from '../hooks/useMedia'

gsap.registerPlugin(ScrollTrigger)

export function Craft() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (!rootRef.current || reduced) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.craft-media .mask-reveal').forEach((el) => {
        gsap.from(el.querySelector('img, video'), {
          clipPath: 'inset(12% 12% 12% 12%)',
          scale: 1.1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        })
      })
    }, rootRef)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section className="section craft" id="craft" ref={rootRef}>
      <div className="wrap craft-sticky-wrap">
        <div className="craft-sticky">
          <p className="chapter">
            <span>{content.craft.chapter}</span> Craft
          </p>
          <h2>{content.craft.title}</h2>
          <p className="lead">
            Tradition meets precise extraction — olives in, gold out, nothing hurried.
          </p>

          <ol className="craft-steps">
            {content.craft.steps.map((step, i) => (
              <li key={step.title}>
                <strong>
                  0{i + 1} — {step.title}
                </strong>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="craft-media">
          <div className="mask-reveal frame">
            <img
              src={content.media.millOlives}
              alt="Fresh green olives on the mill conveyor"
              loading="lazy"
            />
          </div>
          <div className="mask-reveal frame">
            <video
              src={content.media.craft01}
              autoPlay
              muted
              loop
              playsInline
              poster={content.media.millPieralisi}
            />
          </div>
          <div className="mask-reveal frame">
            <img
              src={content.media.millPieralisi}
              alt="Pieralisi olive oil extraction line"
              loading="lazy"
            />
          </div>
          <div className="mask-reveal frame">
            <video
              src={content.media.craft03}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  )
}
