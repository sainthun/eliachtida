import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { content } from '../content'
import { useI18n } from '../i18n/I18nProvider'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FilmFrame } from '../components/FilmFrame'
import { GreekRibbon } from '../components/GreekRibbon'
import { CustomCursor } from '../components/CustomCursor'

const clipMedia = [
  content.media.craft01,
  content.media.craft02,
  content.media.craft03,
] as const

const clipPosters = [
  content.media.millOlives,
  content.media.millPieralisi,
  content.media.millPieralisi,
] as const

export function MillPage() {
  const { t } = useI18n()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <CustomCursor />
      <GreekRibbon />
      <Header />
      <main className="mill-page">
        <section className="section mill-hero">
          <div className="wrap">
            <p className="chapter">
              <span>{t.mill.chapter}</span> {t.nav.mill}
            </p>
            <h1 className="mill-title">{t.mill.title}</h1>
            <p className="lead mill-lead">{t.mill.lead}</p>
            <Link to="/" className="btn btn-ghost mill-back">
              {t.mill.back}
            </Link>
          </div>
        </section>

        <section className="section section-alt mill-stills">
          <div className="wrap mill-stills-grid">
            <FilmFrame aspect="wide">
              <img
                src={content.media.millOlives}
                alt=""
                loading="lazy"
              />
            </FilmFrame>
            <FilmFrame aspect="wide">
              <img
                src={content.media.millPieralisi}
                alt=""
                loading="lazy"
              />
            </FilmFrame>
          </div>
        </section>

        <section className="section mill-clips">
          <div className="wrap">
            <div className="mill-clips-list">
              {t.mill.clips.map((clip, i) => (
                <article key={clip.title} className="mill-clip">
                  <FilmFrame aspect="wide" sprocket>
                    <video
                      src={clipMedia[i]}
                      poster={clipPosters[i]}
                      controls
                      playsInline
                      preload="metadata"
                    />
                  </FilmFrame>
                  <div className="mill-clip__copy">
                    <h2>{clip.title}</h2>
                    <p>{clip.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mill-footer-cta">
              <Link to="/#craft" className="btn btn-primary">
                {t.mill.returnCraft}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
