import { content } from '../content'
import { useI18n } from '../i18n/I18nProvider'
import { MagneticButton } from './MagneticButton'

export function Visit() {
  const { t } = useI18n()

  return (
    <section className="section visit" id="visit">
      <div className="wrap">
        <div className="visit-panel">
          <div>
            <p className="chapter">
              <span>05</span> {t.chapters.visit}
            </p>
            <h2>{t.visit.title}</h2>
            <p className="lead">{t.visit.note}</p>
          </div>
          <div>
            <MagneticButton
              as="a"
              href={`mailto:${content.contact.email}?subject=Visit%20request%20—%20eliachtida`}
              className="btn-primary"
            >
              {t.visit.book}
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}
