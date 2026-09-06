export type Lang = 'en' | 'el' | 'hu' | 'de'

export type Translation = {
  tagline: string
  slogan: string
  signature: string
  heroLine: string
  heroSub: string
  inquire: string
  discoverStory: string
  theOil: string
  nav: {
    story: string
    oil: string
    grove: string
    craft: string
    visit: string
    contact: string
    mill: string
  }
  chapters: {
    story: string
    oil: string
    grove: string
    craft: string
    visit: string
    contact: string
  }
  story: { title: string; body: string }
  oil: {
    title: string
    body: string
    inquireOrder: string
    facts: { label: string; detail: string }[]
  }
  grove: { title: string; body: string; addressLine: string }
  craft: {
    title: string
    lead: string
    millCta: string
    millBtn: string
    phases: { title: string; eyebrow: string; text: string }[]
  }
  visit: { title: string; note: string; book: string }
  contact: {
    title: string
    lead: string
    email: string
    phone: string
    place: string
    coordinates: string
    name: string
    message: string
    namePh: string
    emailPh: string
    messagePh: string
    formNote: string
    send: string
  }
  mill: {
    chapter: string
    title: string
    lead: string
    back: string
    returnCraft: string
    clips: { title: string; text: string }[]
  }
  sound: string
  soundOn: string
}

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'el', label: 'GR' },
  { code: 'hu', label: 'HU' },
  { code: 'de', label: 'DE' },
]
