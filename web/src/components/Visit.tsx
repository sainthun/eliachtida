import { content } from '../content'
import { MagneticButton } from './MagneticButton'

export function Visit() {
  return (
    <section className="section visit" id="visit">
      <div className="wrap">
        <div className="visit-panel">
          <div>
            <p className="chapter">
              <span>{content.visit.chapter}</span> Visit
            </p>
            <h2>{content.visit.title}</h2>
            <p className="lead">{content.contact.visitNote}</p>
          </div>
          <div>
            <MagneticButton
              as="a"
              href={`mailto:${content.contact.email}?subject=Visit%20request%20—%20eliachtida`}
              className="btn-primary"
            >
              Book your experience
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}
