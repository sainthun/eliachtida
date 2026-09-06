import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { content } from '../content'
import { usePrefersReducedMotion } from '../hooks/useMedia'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  onDone: () => void
}

export function Loader({ onDone }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const letters = root.querySelectorAll<HTMLElement>('.loader-brand span')
    const bar = root.querySelector<HTMLElement>('.loader-bar i')

    if (reduced) {
      onDone()
      return
    }

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(root, {
          yPercent: -100,
          duration: 0.9,
          ease: 'power4.inOut',
          onComplete: onDone,
        })
      },
    })

    tl.to(letters, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.04,
      ease: 'power3.out',
    })
      .to(bar, { width: '100%', duration: 1.1, ease: 'power2.inOut' }, 0.2)
      .to(letters, { opacity: 0.35, duration: 0.35 }, '+=0.15')

    return () => {
      tl.kill()
    }
  }, [onDone, reduced])

  return (
    <div className="loader" ref={rootRef} aria-hidden="true">
      <div className="loader-brand">
        {content.brand.split('').map((ch, i) => (
          <span key={`${ch}-${i}`}>{ch}</span>
        ))}
      </div>
      <div className="loader-bar">
        <i />
      </div>
    </div>
  )
}
