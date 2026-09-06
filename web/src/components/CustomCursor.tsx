import { useEffect, useRef } from 'react'
import { useMediaQuery } from '../hooks/useMedia'

export function CustomCursor() {
  const fine = useMediaQuery('(pointer: fine)')
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!fine) return

    document.body.classList.add('has-custom-cursor')
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx}px, ${my}px)`
    }

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null
      if (t?.closest('a, button, .magnetic, .oil-stage')) {
        ring.classList.add('is-hover')
      }
    }

    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null
      if (t?.closest('a, button, .magnetic, .oil-stage')) {
        ring.classList.remove('is-hover')
      }
    }

    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    raf = requestAnimationFrame(loop)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [fine])

  if (!fine) return null

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
