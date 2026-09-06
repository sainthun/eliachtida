/** Shared brand constants — copy lives in i18n locales. */
export const content = {
  brand: 'eliachtida',
  brandGreek: 'Ελιαχτίδα',
  ribbonGreek: [
    'Ελιαχτίδα',
    'ΕΞΑΙΡΕΤΙΚΟ ΠΑΡΘΕΝΟ ΕΛΑΙΟΛΑΔΟ',
    'Η οικογένειά μας στον τόπο της',
    'Πρώτη ψυχρή έκθλιψη',
  ],
  coords: {
    lat: 33.4117157,
    lng: 24.2287082,
    label: '33.4117157° N · 24.2287082° E',
  },
  contact: {
    email: 'info@oliveray.gr',
    phone: '+30 000 000 0000',
  },
  phasePositions: ['0% 0%', '50% 0%', '100% 0%', '0% 100%', '50% 100%', '100% 100%'] as const,
  media: {
    bottle: '/media/bottle-1l.png',
    bottleLabel: '/media/bottle-label.png',
    tins: '/media/tins-lineup.png',
    family: '/media/family-watercolor.png',
    processPhases: '/media/process-phases.png',
    millOlives: '/media/mill-olives.jpg',
    millPieralisi: '/media/mill-pieralisi.jpg',
    craft01: '/media/craft-01.mp4',
    craft02: '/media/craft-02.mp4',
    craft03: '/media/craft-03.mp4',
  },
} as const

export type Content = typeof content
