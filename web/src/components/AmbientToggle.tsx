import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'

/** Soft ambient drone via Web Audio — muted by default. */
export function AmbientToggle() {
  const [on, setOn] = useState(false)
  const { t } = useI18n()
  const ctxRef = useRef<AudioContext | null>(null)
  const nodesRef = useRef<{ osc: OscillatorNode; gain: GainNode }[]>([])

  useEffect(() => {
    return () => {
      nodesRef.current.forEach(({ osc, gain }) => {
        try {
          osc.stop()
          osc.disconnect()
          gain.disconnect()
        } catch {
          /* ignore */
        }
      })
      nodesRef.current = []
      void ctxRef.current?.close()
    }
  }, [])

  const toggle = async () => {
    if (!on) {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      const ctx = ctxRef.current ?? new Ctx()
      ctxRef.current = ctx
      if (ctx.state === 'suspended') await ctx.resume()

      if (nodesRef.current.length === 0) {
        const freqs = [110, 164.81, 220]
        freqs.forEach((f, i) => {
          const osc = ctx.createOscillator()
          const gain = ctx.createGain()
          osc.type = 'sine'
          osc.frequency.value = f
          gain.gain.value = 0.012 - i * 0.002
          osc.connect(gain)
          gain.connect(ctx.destination)
          osc.start()
          nodesRef.current.push({ osc, gain })
        })
      } else {
        nodesRef.current.forEach(({ gain }, i) => {
          gain.gain.setTargetAtTime(0.012 - i * 0.002, ctx.currentTime, 0.4)
        })
      }
      setOn(true)
    } else {
      const ctx = ctxRef.current
      if (ctx) {
        nodesRef.current.forEach(({ gain }) => {
          gain.gain.setTargetAtTime(0, ctx.currentTime, 0.3)
        })
      }
      setOn(false)
    }
  }

  return (
    <button
      type="button"
      className={`ambient-toggle ${on ? 'is-on' : ''}`}
      onClick={() => void toggle()}
      aria-pressed={on}
      aria-label={on ? 'Mute ambient sound' : 'Play ambient sound'}
      title={on ? 'Sound on' : 'Sound off'}
    >
      {on ? t.soundOn : t.sound}
    </button>
  )
}
