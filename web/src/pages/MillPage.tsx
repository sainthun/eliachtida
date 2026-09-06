import { Link } from 'react-router-dom'
import { content } from '../content'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FilmFrame } from '../components/FilmFrame'
import { GreekRibbon } from '../components/GreekRibbon'
import { CustomCursor } from '../components/CustomCursor'
import { useEffect } from 'react'

const clips = [
  {
    src: content.media.craft01,
    poster: content.media.millOlives,
    title: 'Fruit on the line',
    text: 'Fresh olives climbing toward the press — the loud, honest middle of the harvest day.',
  },
  {
    src: content.media.craft02,
    poster: content.media.millPieralisi,
    title: 'Inside the mill',
    text: 'Steel, patience, and the quiet work between grove and bottle.',
  },
  {
    src: content.media.craft03,
    poster: content.media.millPieralisi,
    title: 'Press in motion',
    text: 'Where fruit turns gold — filmed as it happens on the estate.',
  },
] as const

export function MillPage() {
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
              <span>Archive</span> The mill
            </p>
            <h1 className="mill-title">Behind the press</h1>
            <p className="lead mill-lead">
              The watercolor story on the home page is the poetry. These clips are the
              workshop — real lines, real fruit, real extraction on the family estate.
            </p>
            <Link to="/" className="btn btn-ghost mill-back">
              ← Back to eliachtida
            </Link>
          </div>
        </section>

        <section className="section section-alt mill-stills">
          <div className="wrap mill-stills-grid">
            <FilmFrame aspect="wide">
              <img
                src={content.media.millOlives}
                alt="Green olives on the mill conveyor"
                loading="lazy"
              />
            </FilmFrame>
            <FilmFrame aspect="wide">
              <img
                src={content.media.millPieralisi}
                alt="Pieralisi extraction line in the family mill"
                loading="lazy"
              />
            </FilmFrame>
          </div>
        </section>

        <section className="section mill-clips">
          <div className="wrap">
            <div className="mill-clips-list">
              {clips.map((clip) => (
                <article key={clip.src} className="mill-clip">
                  <FilmFrame aspect="wide" sprocket>
                    <video
                      src={clip.src}
                      poster={clip.poster}
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
                Return to From fruit to gold
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
