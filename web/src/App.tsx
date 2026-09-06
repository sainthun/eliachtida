import { useCallback, useState } from 'react'
import { useLenis } from './hooks/useLenis'
import { usePrefersReducedMotion } from './hooks/useMedia'
import { Loader } from './components/Loader'
import { CustomCursor } from './components/CustomCursor'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Story } from './components/Story'
import { Oil } from './components/Oil'
import { Grove } from './components/Grove'
import { Craft } from './components/Craft'
import { Visit } from './components/Visit'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { AmbientToggle } from './components/AmbientToggle'

export default function App() {
  const [ready, setReady] = useState(false)
  const reduced = usePrefersReducedMotion()

  useLenis(ready && !reduced)

  const onLoaderDone = useCallback(() => setReady(true), [])

  return (
    <>
      {!ready && <Loader onDone={onLoaderDone} />}
      <CustomCursor />
      <Header />
      <main>
        <Hero ready={ready} />
        <Story />
        <Oil />
        <Grove />
        <Craft />
        <Visit />
        <Contact />
      </main>
      <Footer />
      <AmbientToggle />
    </>
  )
}
