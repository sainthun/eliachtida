import {
  useRef,
  type MouseEvent,
  type ReactNode,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type RefObject,
} from 'react'
import { useMediaQuery } from '../hooks/useMedia'

type Common = {
  children: ReactNode
  className?: string
}

type AsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button'
    href?: never
  }

type AsLink = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a'
    href: string
  }

type Props = AsButton | AsLink

export function MagneticButton(props: Props) {
  const fine = useMediaQuery('(pointer: fine)')
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null)

  const onMove = (e: MouseEvent) => {
    if (!fine || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`
  }

  const onLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0, 0)'
  }

  const className = `btn magnetic ${props.className ?? ''}`.trim()

  if (props.as === 'a') {
    const { children, as: _as, className: _c, ...rest } = props
    return (
      <a
        {...rest}
        ref={ref as RefObject<HTMLAnchorElement>}
        className={className}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {children}
      </a>
    )
  }

  const { children, as: _as, className: _c, ...rest } = props
  return (
    <button
      {...rest}
      ref={ref as RefObject<HTMLButtonElement>}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </button>
  )
}
