
import { VocabularyWord } from '../types';

export interface VocabularyCategoryInfo {
  slug: string;
  name: string;
  description: string;
  wordCount: string;
  keyThemes: string[];
}

export const VOCABULARY_CATEGORIES: VocabularyCategoryInfo[] = [
  {
    slug: 'everyday-english',
    name: 'Everyday English',
    description:
      'Practical high-frequency vocabulary for daily interactions, routines, food, family, and social life.',
    wordCount: '150+ core words',
    keyThemes: [
      'Daily Routines',
      'Home & Neighborhood',
      'Socializing',
      'Shopping & Dining'
    ]
  },
  {
    slug: 'business-english',
    name: 'Business English',
    description:
      'Professional terminology for meetings, formal email correspondence, negotiations, and project management.',
    wordCount: '200+ terms',
    keyThemes: [
      'Meetings & Presentations',
      'Negotiation',
      'Financial Terms',
      'Workplace Culture'
    ]
  },
  {
    slug: 'academic-english',
    name: 'Academic English',
    description:
      'Formal language for university lectures, research papers, analytical essays, and scholarly debate.',
    wordCount: '180+ terms',
    keyThemes: [
      'Evidence & Proof',
      'Analysis & Synthesis',
      'Methodology',
      'Scholarly Debate'
    ]
  },
  {
    slug: 'travel-english',
    name: 'Travel English',
    description:
      'Essential phrases and words for airports, hotels, directions, medical emergencies, and city navigation.',
    wordCount: '120+ terms',
    keyThemes: [
      'Transit & Airports',
      'Accommodations',
      'Directions',
      'Emergency Phrases'
    ]
  },
  {
    slug: 'advanced-vocabulary',
    name: 'Advanced Vocabulary',
    description:
      'Nuanced adjectives, precise verbs, and elevated prose for C1-C2 expressive fluency.',
    wordCount: '160+ terms',
    keyThemes: [
      'Descriptive Nuance',
      'Philosophical Verbs',
      'Diplomatic Phrasing',
      'Literary Register'
    ]
  },
  {
    slug: 'synonyms-antonyms',
    name: 'Synonyms & Antonyms',
    description:
      'Alternative word choices to eliminate repetition and express precise shades of meaning.',
    wordCount: '300+ pairs',
    keyThemes: [
      'Praise & Criticism',
      'Size & Degree',
      'Emotion & Demeanor',
      'Change & Movement'
    ]
  },
  {
    slug: 'phrasal-verbs',
    name: 'Phrasal Verbs',
    description:
      'Essential multi-word verb combinations with prepositions that native speakers use continuously.',
    wordCount: '220+ phrasal verbs',
    keyThemes: [
      'Turn / Look / Put / Get',
      'Separable vs Inseparable',
      'Business Collocations',
      'Idiomatic Meanings'
    ]
  },
  {
    slug: 'idioms',
    name: 'Idioms & Expressions',
    description:
      'Figurative expressions and cultural idioms that bring color, wit, and natural flow to your speech.',
    wordCount: '140+ idioms',
    keyThemes: [
      'Success & Failure',
      'Time & Urgency',
      'Interpersonal Harmony',
      'Risk & Decision'
    ]
  }
];

export const VOCABULARY_WORDS: VocabularyWord[] = [
  {
    slug: 'reliable',
    word: 'Reliable',
    phonetic: '/rɪˈlaɪ.ə.bəl/',
    pos: 'adjective',
    level: 'B1',
    definition:
      'Consistently good in quality, performance, or judgment; deserving trust and confidence.',
    examples: [
      'Gareth is the most reliable software engineer on our infrastructure team.',
      'Public transportation in Zurich is remarkably punctual and reliable.',
      'Before publishing the investigative report, verify facts with at least two reliable sources.'
    ],
    synonyms: [
      'dependable',
      'trustworthy',
      'consistent',
      'steadfast',
      'unfailing'
    ],
    antonyms: [
      'unreliable',
      'erratic',
      'fickle',
      'unpredictable',
      'undependable'
    ],
    collocations: [
      'reliable source',
      'reliable method',
      'highly reliable',
      'prove reliable',
      'reliable witness'
    ],
    usageNote:
      'Often paired with adverbs like "extremely", "highly", or "completely". When modifying equipment, it emphasizes lack of breakdowns.',
    category: 'Everyday English'
  },
  {
    slug: 'beautiful',
    word: 'Beautiful',
    phonetic: '/ˈbjuː.tɪ.fəl/',
    pos: 'adjective',
    level: 'A1',
    definition:
      'Pleasing the senses or mind aesthetically; possessing qualities of harmony, grace, or profound excellence.',
    examples: [
      'The morning sunlight cast a beautiful golden glow across the valley.',
      'Her architectural design was a beautiful balance of minimalist glass and warm timber.',
      'They celebrated their anniversary with a beautiful sunset dinner overlooking the harbor.'
    ],
    synonyms: [
      'gorgeous',
      'stunning',
      'attractive',
      'lovely',
      'breathtaking',
      'exquisite'
    ],
    antonyms: [
      'ugly',
      'unsightly',
      'grotesque',
      'unattractive',
      'drab'
    ],
    collocations: [
      'beautiful scenery',
      'beautiful voice',
      'beautifully crafted',
      'truly beautiful',
      'beautiful morning'
    ],
    usageNote:
      'While frequently used for visual appearance, "beautiful" can also describe ideas, craftsmanship, or acts of generosity.',
    category: 'Everyday English'
  },
  {
    slug: 'collaborate',
    word: 'Collaborate',
    phonetic: '/kəˈlæb.ə.reɪt/',
    pos: 'verb',
    level: 'B2',
    definition:
      'To work together with another person, team, or organization to achieve a shared goal.',
    examples: [
      'I collaborate with my colleagues to solve difficult problems.',
      'Our team collaborated on a new website design.',
      'Students often collaborate with classmates on group projects.',
      'The two companies collaborated to develop a new product.',
      'Researchers from several universities collaborated on the study.',
      'We collaborate closely with the marketing team on new campaigns.'
    ],
    synonyms: [
      'cooperate',
      'partner',
      'team up',
      'coordinate',
      'join forces'
    ],
    antonyms: [
      'compete',
      'disagree',
      'clash',
      'oppose',
      'work alone'
    ],
    collocations: [
      'collaborate with someone',
      'collaborate on a project',
      'collaborate closely',
      'successfully collaborate',
      'collaborate to achieve a goal'
    ],
    usageNote:
      'Use "collaborate with" when naming the person, team, or organization you work with. Use "collaborate on" when naming the project or task. Example: "I collaborate with my colleagues on research projects."',
    category: 'Business English'
  },
  {
    slug: 'resilient',
    word: 'Resilient',
    phonetic: '/rɪˈzɪl.jənt/',
    pos: 'adjective',
    level: 'B2',
    definition:
      'Able to recoil, withstand, or recover quickly from difficult conditions, shocks, or emotional setbacks.',
    examples: [
      'The coastal city proved resilient in the aftermath of the severe winter storm.',
      'Resilient entrepreneurs view early setbacks as opportunities for strategic refinement.',
      'Certain native desert plants are remarkably resilient to prolonged droughts.'
    ],
    synonyms: [
      'tough',
      'durable',
      'adaptable',
      'buoyant',
      'tenacious',
      'hardy'
    ],
    antonyms: [
      'fragile',
      'vulnerable',
      'delicate',
      'inflexible',
      'susceptible'
    ],
    collocations: [
      'resilient economy',
      'resilient personality',
      'highly resilient',
      'remain resilient',
      'resilient infrastructure'
    ],
    usageNote:
      'Derived from Latin "resilire" (to spring back). Can describe materials (physics), ecosystems (biology), or people (psychology).',
    category: 'Advanced Vocabulary'
  },
  {
    slug: 'commute',
    word: 'Commute',
    phonetic: '/kəˈmjuːt/',
    pos: 'verb / noun',
    level: 'B1',
    definition:
      'To travel regularly over some distance between one’s home and place of work or study; (noun) the journey itself.',
    examples: [
      'She commutes forty-five minutes each morning by suburban commuter rail.',
      'His daily commute became much more enjoyable once he started listening to educational podcasts.',
      'Many professionals prefer hybrid roles to reduce their weekly commute.'
    ],
    synonyms: [
      'travel to work',
      'journey',
      'shuttle',
      'transit'
    ],
    antonyms: [
      'telecommute',
      'work remotely',
      'stay put'
    ],
    collocations: [
      'daily commute',
      'morning commute',
      'commute by train',
      'long commute',
      'commuter train'
    ],
    usageNote:
      'As a verb: "commute from [place] to [place]". As a noun: "have a long/easy commute".',
    category: 'Everyday English'
  },
  {
    slug: 'negotiate',
    word: 'Negotiate',
    phonetic: '/nəˈɡoʊ.ʃi.eɪt/',
    pos: 'verb',
    level: 'B2',
    definition:
      'To try to reach an agreement or compromise by discussion with others.',
    examples: [
      'The company is currently negotiating a multi-year supplier agreement.',
      'Diplomats worked through the night to negotiate a peaceful resolution.',
      'She successfully negotiated a higher starting salary and extra annual leave.'
    ],
    synonyms: [
      'bargain',
      'confer',
      'arbitrate',
      'mediate',
      'hammer out'
    ],
    antonyms: [
      'dictate',
      'refuse',
      'demand',
      'reject'
    ],
    collocations: [
      'negotiate a deal',
      'negotiate terms',
      'successfully negotiate',
      'negotiate in good faith'
    ],
    usageNote:
      'Often followed by a direct object ("negotiate terms") or "with [someone]" and "for [something]".',
    category: 'Business English'
  },
  {
    slug: 'hypothesis',
    word: 'Hypothesis',
    phonetic: '/haɪˈpɒθ.ə.sɪs/',
    pos: 'noun',
    level: 'B2',
    definition:
      'A proposed explanation made on the basis of limited evidence as a starting point for further investigation.',
    examples: [
      'The research team designed a double-blind trial to test their primary hypothesis.',
      'Our preliminary findings appear to support the hypothesis that sleep improves memory retention.',
      'If experimental data contradicts the hypothesis, the model must be revised.'
    ],
    synonyms: [
      'theory',
      'proposition',
      'supposition',
      'premise',
      'conjecture'
    ],
    antonyms: [
      'fact',
      'proof',
      'certainty',
      'empirical truth'
    ],
    collocations: [
      'test a hypothesis',
      'formulate a hypothesis',
      'support the hypothesis',
      'working hypothesis'
    ],
    usageNote:
      'Plural form is "hypotheses" (/haɪˈpɒθ.ə.siːz/). Commonly used in academic, scientific, and empirical texts.',
    category: 'Academic English'
  },
  {
    slug: 'itinerary',
    word: 'Itinerary',
    phonetic: '/aɪˈtɪn.ər.ər.i/',
    pos: 'noun',
    level: 'B1',
    definition:
      'A planned route or journey; a detailed schedule of places to visit and times.',
    examples: [
      'The travel agent emailed our finalized flight and hotel itinerary.',
      'We kept our vacation itinerary flexible so we could explore scenic coastal villages at leisure.',
      'Their two-week Asian itinerary includes Tokyo, Seoul, and Singapore.'
    ],
    synonyms: [
      'schedule',
      'route',
      'travel plan',
      'timetable',
      'agenda'
    ],
    antonyms: [
      'spontaneity',
      'improvisation'
    ],
    collocations: [
      'travel itinerary',
      'detailed itinerary',
      'plan an itinerary',
      'flexible itinerary'
    ],
    usageNote:
      'Commonly paired with travel verbs like "plan", "follow", "adjust", and "confirm".',
    category: 'Travel English'
  },
  {
    slug: 'subtle',
    word: 'Subtle',
    phonetic: '/ˈsʌt.əl/',
    pos: 'adjective',
    level: 'C1',
    definition:
      'So delicate or precise as to be difficult to analyze, describe, or notice; not obvious.',
    examples: [
      'There is a subtle difference in nuance between "speak" and "talk".',
      'The chef used a subtle combination of fresh rosemary and citrus zest.',
      'Her face betrayed a subtle expression of surprise that only close friends caught.'
    ],
    synonyms: [
      'understated',
      'delicate',
      'nuanced',
      'fine',
      'elusive'
    ],
    antonyms: [
      'obvious',
      'blatant',
      'overt',
      'harsh',
      'crude'
    ],
    collocations: [
      'subtle difference',
      'subtle nuance',
      'subtle hint',
      'subtle shift'
    ],
    usageNote:
      'Note the silent "b": pronounced /ˈsʌt.əl/. Widely used in art, literature, diplomacy, and analytical criticism.',
    category: 'Advanced Vocabulary'
  },
  {
    slug: 'abundant',
    word: 'Abundant',
    phonetic: '/əˈbʌn.dənt/',
    pos: 'adjective',
    level: 'B2',
    definition:
      'Existing or available in large quantities; plentiful.',
    examples: [
      'The valley is blessed with abundant sunshine and fertile soil for vineyards.',
      'Scientists uncovered abundant historical evidence of ancient trading settlements.',
      'Renewable energy provides an abundant alternative to fossil fuels.'
    ],
    synonyms: [
      'plentiful',
      'copious',
      'ample',
      'bountiful',
      'rich'
    ],
    antonyms: [
      'scarce',
      'sparse',
      'meager',
      'insufficient',
      'lacking'
    ],
    collocations: [
      'abundant evidence',
      'abundant rainfall',
      'abundant wildlife',
      'prove abundant'
    ],
    usageNote:
      'Derived from Latin "abundare" (to overflow). Often pairs with nouns representing natural resources or empirical evidence.',
    category: 'Synonyms & Antonyms'
  },
  {
    slug: 'break-down',
    word: 'Break down',
    phonetic: '/breɪk daʊn/',
    pos: 'phrasal verb',
    level: 'B1',
    definition:
      'To stop working (mechanical/system); to divide into smaller analytical parts; to lose emotional control.',
    examples: [
      'Our car broke down on the expressway during the evening rush hour.',
      'Let us break down the complex budget into four quarterly categories.',
      'Communication between the two negotiating parties completely broke down.'
    ],
    synonyms: [
      'malfunction',
      'dissect',
      'analyze',
      'collapse',
      'fail'
    ],
    antonyms: [
      'operate smoothly',
      'unify',
      'synthesize',
      'assemble'
    ],
    collocations: [
      'break down into [parts]',
      'machine breaks down',
      'talks break down',
      'break down in tears'
    ],
    usageNote:
      'Notice the spelling distinction: the phrasal verb is two words ("break down"), while the noun is one word ("a breakdown").',
    category: 'Phrasal Verbs'
  },
  {
    slug: 'bite-the-bullet',
    word: 'Bite the bullet',
    phonetic: '/baɪt ðə ˈbʊl.ɪt/',
    pos: 'idiom',
    level: 'B2',
    definition:
      'To force yourself to do something difficult, unpleasant, or painful that you have been hesitating over.',
    examples: [
      'I have been avoiding dental surgery for months, but tomorrow I am finally going to bite the bullet.',
      'The board bit the bullet and announced the inevitable restructuring plan.',
      'Sometimes you just have to bite the bullet and apologize first.'
    ],
    synonyms: [
      'face the music',
      'grin and bear it',
      'take the plunge',
      'confront the difficulty'
    ],
    antonyms: [
      'procrastinate',
      'evade',
      'hesitate',
      'shy away'
    ],
    collocations: [
      'finally bite the bullet',
      'decide to bite the bullet',
      'have to bite the bullet'
    ],
    usageNote:
      'Historically originated from soldiers biting a lead bullet to endure surgery before the invention of modern anesthesia.',
    category: 'Idioms'
  }
];
