import { content } from '../content'

/** Overlay ribbon — one centered vertical Greek line from the bottle. */
export function GreekRibbon() {
  const line = content.ribbonGreek.join('   ·   ')

  return (
    <aside className="greek-ribbon" aria-hidden="true">
      <div className="greek-ribbon__track">
        <p className="greek-ribbon__text">{line}</p>
      </div>
    </aside>
  )
}
