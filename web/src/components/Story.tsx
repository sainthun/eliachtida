import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { content } from '../content'
import { FilmFrame } from './FilmFrame'
import { usePrefersReducedMotion } from '../hooks/useMedia'

gsap.registerPlugin(ScrollTrigger)

export function Story() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (!rootRef.current || reduced) return

    const ctx = gsap.context(() => {
      gsap.from('.story-copy > *', {
        y: 48,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 75%',
        },
      })

      gsap.from('.story .film-frame__media img', {
        clipPath: 'inset(100% 0 0 0)',
        scale: 1.12,
        duration: 1.35,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.story .film-frame',
          start: 'top 80%',
        },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section className="section story" id="story" ref={rootRef}>
      <div className="wrap split">
        <div className="story-copy">
          <p className="chapter">
            <span>{content.story.chapter}</span> Story
          </p>
          <h2>{content.story.title}</h2>
          <p className="lead">{content.story.body}</p>
          <p className="story-note">{content.signature}</p>
          <p className="story-slogan">{content.slogan}</p>
        </div>

        <FilmFrame>
          <img
            src={content.media.family}
            alt="A child on the family farm tractor in Crete"
            loading="lazy"
          />
        </FilmFrame>
      </div>
    </section>
  )
}
