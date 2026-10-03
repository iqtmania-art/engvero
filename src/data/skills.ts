import { SkillCategory } from '../types';

export const FOUR_SKILLS: SkillCategory[] = [
  {
    id: 'speaking',
    slug: 'speaking',
    title: 'Speaking',
    iconName: 'Mic',
    subtitle: 'Build spontaneous spoken fluency, natural rhythm, and clear conversational confidence.',
    description: 'Speaking requires coordinating pronunciation, vocabulary retrieval, and sentence syntax in real time. ENGVERO guides you through structured speaking models, dialogue frameworks, and shadowing exercises designed to break hesitation and build instinct.',
    methodology: 'Active Speech Production & Shadowing: Repeat native audio models at natural speed to internalize intonation, word stress, and natural connected speech.',
    coreTechniques: [
      {
        title: 'Dialogue Frameworks & Conversational Fillers',
        description: 'Learn natural conversational connectors (e.g., "To be completely honest...", "From my perspective...", "What caught my attention was...") to buy thinking time gracefully without pausing.'
      },
      {
        title: 'Sentence Stress & Rhythm Practice',
        description: 'English is a stress-timed language. Master content word emphasis (nouns, verbs, adjectives) versus unstressed function words to sound natural.'
      },
      {
        title: 'Self-Introduction & Professional Elevator Pitch',
        description: 'Develop a crisp, 60-second introduction covering your origin, profession, passions, and current focal points with natural transitions.'
      }
    ],
    practiceExercises: [
      {
        title: 'Introducing Yourself Confidently',
        instructions: 'Read aloud the three-part model introducing your background, current projects, and future aspirations. Practice recording your voice.',
        level: 'A2'
      },
      {
        title: 'Agreeing and Disagreeing Politely',
        instructions: 'Practice softening disagreements with phrases like "I see where you are coming from, but have we considered...?"',
        level: 'B1'
      },
      {
        title: 'Expressing Opinions in Meetings',
        instructions: 'Deliver a concise 2-minute summary of a project decision using structured signposts.',
        level: 'B2'
      }
    ],
    recommendedLessons: [
      { title: 'Say vs Tell: What is the Difference?', href: '/common-mistakes/say-vs-tell' },
      { title: 'Speak vs Talk: When to Use Each Verb', href: '/common-mistakes/speak-vs-talk' },
      { title: 'English Pronunciation Guide', href: '/pronunciation' }
    ]
  },
  {
    id: 'listening',
    slug: 'listening',
    title: 'Listening',
    iconName: 'Headphones',
    subtitle: 'Train your ear to decode connected speech, varied accents, and natural conversational cadence.',
    description: 'Many English learners struggle with listening not because their vocabulary is weak, but because native speech features linking, elision, weak forms, and reduced vowels (schwa). We train you to decode what you actually hear.',
    methodology: 'Acoustic Decoding & Intensive Audio Dictation: Moving from individual sounds to connected speech chunks to overcome the "blur" of fast native speakers.',
    coreTechniques: [
      {
        title: 'Decoding Connected Speech & Linking',
        description: 'Understand how consonant-to-vowel linking transforms phrases like "pick it up" into /pɪ.kɪ.tʌp/ and "going to" into "gonna".'
      },
      {
        title: 'Recognizing Weak Forms and the Schwa /ə/',
        description: 'Notice how auxiliary verbs and prepositions (was, have, at, to, for) reduce to neutral schwa sounds in unaccented positions.'
      },
      {
        title: 'Listening for Key Signpost Words',
        description: 'Identify audio cues that signal shifts in argument ("however", "conversely"), causes ("due to"), and conclusions ("ultimately").'
      }
    ],
    practiceExercises: [
      {
        title: 'Beginner Daily Conversations & Inquiries',
        instructions: 'Listen to customer service exchanges, directions, and shopping transactions, noting key times and numbers.',
        level: 'A2'
      },
      {
        title: 'Intermediate Podcast & Narrative Comprehension',
        instructions: 'Listen to a short 3-minute story and summarize the primary conflict and resolution in your own words.',
        level: 'B1'
      },
      {
        title: 'Lecture & Analytical Discussion Note-Taking',
        instructions: 'Extract key supporting data and thesis points from academic lectures.',
        level: 'B2'
      }
    ],
    recommendedLessons: [
      { title: 'Look vs See vs Watch: Understanding Perception Verbs', href: '/common-mistakes/look-vs-see' },
      { title: 'Prepositions of Time and Place: In, On, At', href: '/grammar/prepositions-in-on-at' }
    ]
  },
  {
    id: 'reading',
    slug: 'reading',
    title: 'Reading',
    iconName: 'BookOpen',
    subtitle: 'Advance from word-by-word translation to rapid analytical comprehension and rich vocabulary inference.',
    description: 'Reading is the single most efficient way to acquire high-frequency collocations, idiomatic expressions, and complex syntactic patterns naturally. ENGVERO provides graded texts, analytical breakdowns, and active reading strategies.',
    methodology: 'Dual-Track Extensive & Intensive Reading: Reading enjoyable texts smoothly for broad comprehension, combined with targeted structural dissection of complex sentences.',
    coreTechniques: [
      {
        title: 'Skimming & Scanning Strategies',
        description: 'Skim paragraphs for the overarching central idea (topic sentences) and scan specifically for names, dates, quantities, and keywords.'
      },
      {
        title: 'Inferring Unfamiliar Vocabulary from Context',
        description: 'Use syntactic clues, contrast indicators ("whereas", "unlike"), and prefix/suffix morphology to deduce word meanings without pausing for a dictionary.'
      },
      {
        title: 'Analyzing Cohesive Devices and Pronoun Referents',
        description: 'Track back references ("this phenomenon", "the former", "which resulted in") across complex sentences to never lose the thread of meaning.'
      }
    ],
    practiceExercises: [
      {
        title: 'Beginner Short Stories & Practical Guides',
        instructions: 'Read short 200-word daily vignettes and answer factual comprehension check questions.',
        level: 'A2'
      },
      {
        title: 'News Articles & Science Briefings',
        instructions: 'Read an editorial opinion piece and identify the author’s primary claim versus supporting empirical evidence.',
        level: 'B1'
      },
      {
        title: 'Scholarly Articles & Analytical Essays',
        instructions: 'Critique an analytical essay on technological trends and identify the nuance in rhetorical counter-arguments.',
        level: 'C1'
      }
    ],
    recommendedLessons: [
      { title: 'Definite and Indefinite Articles: A, An, and The', href: '/grammar/articles-a-an-the' },
      { title: 'Much vs Many: Countable vs Uncountable', href: '/common-mistakes/much-vs-many' },
      { title: 'Build Your English Vocabulary', href: '/vocabulary' }
    ]
  },
  {
    id: 'writing',
    slug: 'writing',
    title: 'Writing',
    iconName: 'PenTool',
    subtitle: 'Express ideas with grammatical precision, elegant paragraph flow, and appropriate stylistic register.',
    description: 'Good writing is clear thinking made visible. Whether drafting a concise professional email, an academic argument, or an engaging personal story, ENGVERO equips you with templates, transition signals, and punctuation mastery.',
    methodology: 'Sentence Combining & Structural Modeling: Moving from simple clause construction to compound-complex sentences with varied clause openers and pristine coherence.',
    coreTechniques: [
      {
        title: 'The Architecture of an Effective Paragraph',
        description: 'Master the classic formula: clear Topic Sentence + 2-3 Supporting Sentences with empirical evidence + Concluding Synthesizing Sentence.'
      },
      {
        title: 'Varying Sentence Structure & Openers',
        description: 'Avoid repetitive Subject-Verb-Object patterns by beginning sentences with adverbial phrases, participial clauses, or conditional propositions.'
      },
      {
        title: 'Mastering Professional Register & Tone',
        description: 'Calibrate formal versus neutral register: knowing when to replace informal phrasal verbs with formal single-word equivalents (e.g. "look into" -> "investigate").'
      }
    ],
    practiceExercises: [
      {
        title: 'Composing a Professional Follow-Up Email',
        instructions: 'Write a polite 4-sentence email inquiring about the status of a proposal with professional sign-offs.',
        level: 'A2'
      },
      {
        title: 'Cause-and-Effect Explanatory Paragraph',
        instructions: 'Write a 120-word paragraph explaining how remote work influences urban design, using transitional phrases like "consequently" and "as a result".',
        level: 'B1'
      },
      {
        title: 'Argumentative & Comparative Essay Drafting',
        instructions: 'Draft a balanced 300-word analysis weighing the pros and cons of renewable energy investments.',
        level: 'B2'
      }
    ],
    recommendedLessons: [
      { title: 'Present Simple: Uses, Rules, and Examples', href: '/grammar/present-simple' },
      { title: 'House vs Home: Physical Building vs Emotional Place', href: '/common-mistakes/house-vs-home' },
      { title: '12 English Tenses Overview', href: '/tenses' }
    ]
  }
];
