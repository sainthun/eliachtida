import { content } from '../content'

/** Fixed vertical ribbon — Greek bottle lines scrolling top → bottom. */
export function GreekRibbon() {
  const parts = content.ribbonGreek
  const sequence = [...parts, ...parts, ...parts]

  return (
    <aside className="greek-ribbon" aria-hidden="true">
      <div className="greek-ribbon__track">
        {sequence.map((line, i) => (
          <span key={`${line}-${i}`} className="greek-ribbon__item">
            {line}
            <span className="greek-ribbon__dot" />
          </span>
        ))}
      </div>
    </aside>
  )
}
