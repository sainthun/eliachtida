import { content } from '../content'

/** Fixed vertical ribbon — static Greek lines from the bottle. */
export function GreekRibbon() {
  return (
    <aside className="greek-ribbon" aria-hidden="true">
      <div className="greek-ribbon__track">
        {content.ribbonGreek.map((line) => (
          <span key={line} className="greek-ribbon__item">
            {line}
            <span className="greek-ribbon__dot" />
          </span>
        ))}
      </div>
    </aside>
  )
}
