import { content } from '../content'

/** Floating beige ribbon — static Greek bottle lines, centered. */
export function GreekRibbon() {
  return (
    <aside className="greek-ribbon" aria-hidden="true">
      <div className="greek-ribbon__track">
        {content.ribbonGreek.map((line, i) => (
          <span key={line} className="greek-ribbon__item">
            {i > 0 && <span className="greek-ribbon__dot" />}
            {line}
          </span>
        ))}
      </div>
    </aside>
  )
}
