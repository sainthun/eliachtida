export const content = {
  brand: 'eliachtida',
  brandGreek: 'Ελιαχτίδα',
  tagline: 'Olive Ray',
  slogan: 'Generations of dedication in every drop',
  signature: 'The place is on the bottle.',
  /** Vertical ribbon — Greek lines from the bottle / family labels */
  ribbonGreek: [
    'Ελιαχτίδα',
    'ΕΞΑΙΡΕΤΙΚΟ ΠΑΡΘΕΝΟ ΕΛΑΙΟΛΑΔΟ',
    'Η οικογένειά μας στον τόπο της',
    'Πρώτη ψυχρή έκθλιψη',
  ],
  heroLine: 'One family. One grove. Crete.',
  heroSub:
    'Extra virgin olive oil from our family farm — cold extracted with care, and marked with the coordinates of home.',

  coords: {
    lat: 33.4117157,
    lng: 24.2287082,
    label: '33.4117157° N · 24.2287082° E',
  },

  contact: {
    email: 'info@oliveray.gr',
    phone: '+30 000 000 0000',
    addressLine: 'Family grove, Crete, Greece',
    visitNote:
      'Visits by appointment. Write to us and we will arrange a tasting among the trees.',
  },

  nav: [
    { id: 'story', label: 'Story' },
    { id: 'oil', label: 'Oil' },
    { id: 'grove', label: 'Grove' },
    { id: 'craft', label: 'Craft' },
    { id: 'visit', label: 'Visit' },
    { id: 'contact', label: 'Contact' },
  ],

  story: {
    chapter: '01',
    title: 'A family rooted in the land',
    body: 'We are a family farm on Crete. Each harvest is gathered by hand, pressed with patience, and bottled under our own name — eliachtida, a ray of olive light.',
  },

  oil: {
    chapter: '02',
    title: 'Pure. Cold. Unhurried.',
    body: 'Extra virgin olive oil of the superior category — obtained directly from olives and solely by mechanical means.',
    facts: [
      { label: 'First cold extraction', detail: 'Below 27°C' },
      { label: 'Free acidity', detail: 'Max < 0.3 g' },
      { label: 'Formats', detail: '1 L glass · 1 / 3 / 5 L tin' },
      { label: 'Origin', detail: 'Family estate · Crete' },
    ],
  },

  grove: {
    chapter: '03',
    title: 'The place on the bottle',
    body: 'Every bottle carries the coordinates of our grove — so you know exactly where this oil begins. Not somewhere in Crete. Here.',
  },

  craft: {
    chapter: '04',
    title: 'From fruit to gold',
    lead: 'Six quiet chapters — from ancient trees to bread torn at the table. Nothing hurried. Nothing anonymous.',
    phases: [
      {
        title: 'The Grove',
        eyebrow: 'Origin',
        text: 'Gnarled trunks. Cretan light. Olives ripening where sea air meets hillside stone — the first chapter of every bottle.',
        position: '0% 0%',
      },
      {
        title: 'The Hand Harvest',
        eyebrow: 'Gather',
        text: 'Wooden rakes. Green nets. Fruit taken by hand at the right green — chosen for aroma, never for speed.',
        position: '50% 0%',
      },
      {
        title: 'The Wash',
        eyebrow: 'Prepare',
        text: 'Clear water over purple and green fruit. A bright rinse before the press — purity begins before the gold appears.',
        position: '100% 0%',
      },
      {
        title: 'The Extraction',
        eyebrow: 'Press',
        text: 'Cold, patient, luminous. A thick pour of liquid gold leaving the mill — the moment fruit becomes oil.',
        position: '0% 100%',
      },
      {
        title: 'The Bottle',
        eyebrow: 'Guard',
        text: 'Dark glass. Soft hands. Each bottle held to the light, then set aside to protect what the sun grew.',
        position: '50% 100%',
      },
      {
        title: 'The Table',
        eyebrow: 'Share',
        text: 'Crust torn. Oil pooled. Bread dipped under open sky — the reason the grove works at all.',
        position: '100% 100%',
      },
    ],
  },

  visit: {
    chapter: '05',
    title: 'Come to the grove',
  },

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
