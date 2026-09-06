import type { Lang, Translation } from './types'
import { en } from './locales/en'
import { el } from './locales/el'
import { hu } from './locales/hu'
import { de } from './locales/de'

export const dictionaries: Record<Lang, Translation> = { en, el, hu, de }

export { LANGS } from './types'
export type { Lang, Translation } from './types'
