import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  /** portrait 4/5 (default) or wide 16/11 */
  aspect?: 'portrait' | 'wide'
  /** Side sprocket holes — use for video frames */
  sprocket?: boolean
  className?: string
}

export function FilmFrame({
  children,
  aspect = 'portrait',
  sprocket = false,
  className = '',
}: Props) {
  const classes = [
    'film-frame',
    'mask-reveal',
    aspect === 'wide' ? 'film-frame--wide' : '',
    sprocket ? 'film-frame--sprocket' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      <div className="film-frame__matte">
        <div className="film-frame__media">{children}</div>
        <div className="film-frame__grain" aria-hidden="true" />
        <div className="film-frame__vignette" aria-hidden="true" />
      </div>
    </div>
  )
}
