import { LessonItem } from '../types';

export const EDUCATIONAL_LESSONS: LessonItem[] = [
  {
    id: 'present-simple',
    slug: 'present-simple',
    title: 'Present Simple: Uses, Rules, and Examples',
    category: 'Grammar',
    level: 'A1',
    readTime: '6 min read',
    summary: 'The Present Simple is the foundation of English grammar. Learn when to use it for habits, routines, permanent facts, and schedules, along with spelling rules for the third person singular.',
    formula: 'Positive: Subject + Base Verb (+s/es) | Negative: Subject + do/does not + Base Verb | Question: Do/Does + Subject + Base Verb?',
    keyTakeaway: 'Use Present Simple for recurring habits, permanent facts, and regular schedules—not for actions happening at this very moment.',
    rules: [
      {
        heading: '1. Habits, Daily Routines & Regular Activities',
        explanation: 'We use the Present Simple to talk about activities that happen regularly, habitually, or periodically.',
        examples: [
          'Elena drinks a glass of warm water with lemon every morning.',
          'The research team meets every Monday morning at 9:00 AM.',
          'They travel to the countryside on long weekends.'
        ]
      },
      {
        heading: '2. Scientific Facts, General Truths & Universal Laws',
        explanation: 'State truths that do not change based on time or personal opinion.',
        examples: [
          'The Earth revolves around the sun once every 365 days.',
          'Water freezes at 0 degrees Celsius and boils at 100 degrees Celsius.',
          'Plants absorb carbon dioxide and release oxygen during photosynthesis.'
        ]
      },
      {
        heading: '3. Third-Person Singular Spelling Rules (He, She, It)',
        explanation: 'In affirmative sentences with third-person singular subjects (he, she, it, or singular nouns), add -s, -es, or -ies to the base verb.',
        examples: [
          'Most verbs add -s: work -> works, speak -> speaks, read -> reads.',
          'Verbs ending in -ch, -sh, -s, -x, -z, -o add -es: teach -> teaches, wash -> washes, go -> goes.',
          'Verbs ending in consonant + y change y to -ies: study -> studies, fly -> flies (contrast with vowel + y: play -> plays).'
        ]
      },
      {
        heading: '4. Fixed Schedules, Timetables & Programs',
        explanation: 'Even when referring to future events, fixed public transportation or official event timetables take the Present Simple.',
        examples: [
          'The morning express train to Chicago departs at 07:15 AM tomorrow.',
          'Our fall semester commences on September 15th.',
          'The keynote speaker begins her address at two o’clock this afternoon.'
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: 'She work at a biomedical laboratory.',
        right: 'She works at a biomedical laboratory.',
        reason: "Third-person singular subjects ('she', 'he', 'it') require the -s suffix in affirmative present simple statements."
      },
      {
        wrong: 'Do she understand the instructions?',
        right: 'Does she understand the instructions?',
        reason: "Use the auxiliary verb 'does' for third-person singular questions."
      },
      {
        wrong: 'He doesn’t likes spicy food.',
        right: 'He doesn’t like spicy food.',
        reason: "After 'does' or 'doesn't', the main verb must always be in its bare base form without an -s ending."
      }
    ],
    practiceQuestions: [
      {
        id: 'ps-q1',
        question: 'Which sentence correctly follows third-person singular subject-verb agreement?',
        options: [
          'My brother teach mathematics at the local secondary school.',
          'My brother teaches mathematics at the local secondary school.',
          'My brother is teach mathematics at the local secondary school.',
          'My brother teachs mathematics at the local secondary school.'
        ],
        correctAnswer: 1,
        explanation: "Verbs ending in '-ch' add '-es' in the third person singular: 'teach' becomes 'teaches'."
      },
      {
        id: 'ps-q2',
        question: "Choose the correct negative sentence:",
        options: [
          "He doesn't knows how to operate the machinery.",
          "He not knows how to operate the machinery.",
          "He doesn't know how to operate the machinery.",
          "He don't know how to operate the machinery."
        ],
        correctAnswer: 2,
        explanation: "In negative sentences with 'he', use 'doesn't' followed by the base verb 'know' without -s."
      }
    ],
    relatedLessons: [
      { title: 'Definite & Indefinite Articles: A, An, The', href: '/grammar/articles-a-an-the', category: 'Grammar' },
      { title: 'Present Continuous Tense', href: '/tenses/present-continuous', category: 'Tenses' },
      { title: 'Say vs Tell: What is the Difference?', href: '/common-mistakes/say-vs-tell', category: 'Common Mistakes' }
    ],
    relatedQuizSlug: 'present-simple'
  },
  {
    id: 'articles-a-an-the',
    slug: 'articles-a-an-the',
    title: 'Definite and Indefinite Articles: A, An, and The',
    category: 'Grammar',
    level: 'A2',
    readTime: '7 min read',
    summary: 'Master the rules of English articles. Learn when to use the indefinite articles "a" and "an", when to use the definite article "the", and when to omit articles entirely (zero article).',
    formula: 'A/An + Singular Countable Noun (Non-specific) | The + Any Noun (Specific / Unique) | Zero Article (General Plurals & Uncountables)',
    keyTakeaway: 'The choice between "a" and "an" is determined by sound, not spelling. "The" is used when both the speaker and listener know which specific item is meant.',
    rules: [
      {
        heading: '1. Indefinite Articles: A vs An (Sound Matters!)',
        explanation: 'Use "a" before consonant sounds and "an" before vowel sounds. Note the sound, not just the initial written letter.',
        examples: [
          'A university (starts with the consonant "y" sound: /juː/)',
          'An hour (starts with a silent "h", producing the vowel sound /aʊər/)',
          'A European nation, an honest assessment, a historic monument'
        ]
      },
      {
        heading: '2. When to Use the Definite Article "The"',
        explanation: 'Use "the" when a noun is specific, unique, has been previously introduced, or is identified by a defining clause.',
        examples: [
          'I bought a laptop yesterday. The laptop has an extraordinary battery life.',
          'Look at the moon reflecting over the calm ocean tonight.',
          'The scientist who discovered the compound delivered a lecture.'
        ]
      },
      {
        heading: '3. Zero Article (No Article Required)',
        explanation: 'Do not use articles with plural countable nouns or uncountable nouns when speaking about them in general.',
        examples: [
          'Languages evolve continuously across generations. (General plurals)',
          'Honesty is the most admired human virtue. (Abstract uncountable noun)',
          'Breakfast is served between 7 and 10 AM. (Standard meals in general)'
        ]
      },
      {
        heading: '4. Geographical Names and Articles',
        explanation: 'Use "the" with mountain ranges, island chains, oceans, seas, rivers, and plural countries. Omit articles for single mountains, single islands, and most singular country names.',
        examples: [
          'With "the": The Alps, The United Kingdom, The Pacific Ocean, The Nile River.',
          'Without "the": Mount Everest, Japan, Madagascar, Lake Superior.'
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: 'She is studying at an university in Manchester.',
        right: 'She is studying at a university in Manchester.',
        reason: "'University' begins with the consonant sound /j/ (like 'you'), so it requires 'a', not 'an'."
      },
      {
        wrong: 'I love the music and the nature.',
        right: 'I love music and nature.',
        reason: "When speaking about concepts or categories in general, do not use 'the'."
      },
      {
        wrong: 'He has an unique perspective on international commerce.',
        right: 'He has a unique perspective on international commerce.',
        reason: "'Unique' begins with a consonant sound (/juː/), requiring 'a'."
      }
    ],
    practiceQuestions: [
      {
        id: 'art-q1',
        question: "Select the sentence with correct article usage:",
        options: [
          "It takes an hour and a half to reach the terminal.",
          "It takes a hour and an half to reach the terminal.",
          "It takes an hour and an half to reach the terminal.",
          "It takes a hour and a half to reach the terminal."
        ],
        correctAnswer: 0,
        explanation: "'Hour' begins with a silent 'h' (vowel sound), requiring 'an'. 'Half' begins with a pronounced /h/ consonant sound, requiring 'a'."
      }
    ],
    relatedLessons: [
      { title: 'Present Simple: Uses, Rules, and Examples', href: '/grammar/present-simple', category: 'Grammar' },
      { title: 'Much vs Many: Countable vs Uncountable', href: '/common-mistakes/much-vs-many', category: 'Common Mistakes' },
      { title: 'Mastering Articles Quiz', href: '/quizzes/articles-a-an-the', category: 'Quizzes' }
    ],
    relatedQuizSlug: 'articles-a-an-the'
  },
  {
    id: 'prepositions-in-on-at',
    slug: 'prepositions-in-on-at',
    title: 'Prepositions of Time and Place: In, On, and At',
    category: 'Grammar',
    level: 'A2',
    readTime: '6 min read',
    summary: 'A visual, intuitive mental model to master "in", "on", and "at" for both time and spatial locations, from general expanses down to precise pinpoint moments.',
    formula: 'Time: In (General/Long) -> On (Days/Dates) -> At (Specific Times) | Place: In (Enclosed/Areas) -> On (Surfaces/Lines) -> At (Specific Points)',
    keyTakeaway: 'Think of an inverted pyramid: "In" is the widest category (centuries, cities), "On" is narrower (days, streets), and "At" is the sharpest point (hours, addresses).',
    rules: [
      {
        heading: '1. Prepositions of Time: The Hierarchy of Specificity',
        explanation: 'IN for centuries, decades, years, seasons, months, and parts of the day. ON for specific days and calendar dates. AT for exact clock times, holidays, and specific moments.',
        examples: [
          'IN: in 2026, in July, in winter, in the 21st century, in the morning.',
          'ON: on Tuesday, on July 4th, on New Year’s Day, on my birthday, on weekday mornings.',
          'AT: at 7:30 PM, at noon, at midnight, at the moment, at sunset.'
        ]
      },
      {
        heading: '2. Prepositions of Place: Volume vs Surface vs Point',
        explanation: 'IN for enclosed 3D spaces, countries, and cities. ON for 2D surfaces, streets, and public transit. AT for specific geographical points, venues, or addresses.',
        examples: [
          'IN: in the room, in Japan, in Paris, in a taxi, in the garden.',
          'ON: on the table, on the second floor, on Baker Street, on the bus, on the wall.',
          'AT: at 42 Oxford Street, at the bus stop, at the entrance, at the airport.'
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: 'We will meet in Monday afternoon.',
        right: 'We will meet on Monday afternoon.',
        reason: "Days of the week always take 'on', even when a part of the day follows."
      },
      {
        wrong: 'She lives at High Street.',
        right: 'She lives on High Street. (OR: at 24 High Street with an exact number)',
        reason: "Streets without a building number take 'on'. Add 'at' only when an exact address number is included."
      }
    ],
    relatedLessons: [
      { title: 'Among vs Between: When to Distinguish', href: '/common-mistakes/among-vs-between', category: 'Common Mistakes' },
      { title: 'Prepositions Quiz', href: '/quizzes/prepositions', category: 'Quizzes' }
    ],
    relatedQuizSlug: 'prepositions'
  },
  {
    id: 'present-perfect-guide',
    slug: 'present-perfect',
    title: 'Present Perfect: Form, Uses, and Time Expressions',
    category: 'Tenses',
    level: 'B1',
    readTime: '8 min read',
    summary: 'Understand the essential bridge between the past and present. Learn how to use have/has + past participle for life experiences, recent news, and unfinished duration with since and for.',
    formula: 'Positive: Subject + have/has + Past Participle | Negative: Subject + have/has + not + V3 | Question: Have/Has + Subject + V3?',
    keyTakeaway: 'Present Perfect connects the past to now. Never use Present Perfect with a finished past time word like "yesterday" or "in 2015".',
    rules: [
      {
        heading: '1. Life Experiences (Without Specifying When)',
        explanation: 'Use Present Perfect when the experience occurred at an unspecified time in your life. Use words like "ever" in questions and "never" in negatives.',
        examples: [
          'Have you ever delivered a presentation to a global audience?',
          'She has traveled to over thirty countries during her diplomatic career.',
          'I have never tasted traditional Japanese matcha tea.'
        ]
      },
      {
        heading: '2. Unfinished Time and Duration: For vs Since',
        explanation: 'Use "since" for the specific starting point in time (since 2012, since 9 AM). Use "for" for the duration of time (for five years, for two hours).',
        examples: [
          'Dr. Vance has worked at this research hospital since 2016.',
          'We have lived in this coastal town for almost fifteen years.',
          'They have been business partners since they graduated from business school.'
        ]
      },
      {
        heading: '3. Recent Actions with Present Results: Just, Already, Yet',
        explanation: 'Use "just" for very recent actions, "already" for actions finished earlier than expected, and "yet" in negatives and questions.',
        examples: [
          'The courier has just delivered the confidential documents.',
          'I have already verified the quarterly budget spreadsheets.',
          'Have you received the feedback from the editorial review board yet?'
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: 'I have visited Rome last summer with my family.',
        right: 'I visited Rome last summer with my family.',
        reason: "'Last summer' is a completed, definite past time period. You must use Past Simple."
      },
      {
        wrong: 'She has lived here since four years.',
        right: 'She has lived here for four years. (OR: ...since 2022)',
        reason: "Use 'for' with a duration of time (four years) and 'since' with a starting point (2022)."
      }
    ],
    relatedLessons: [
      { title: 'Present Simple: Uses, Rules, and Examples', href: '/grammar/present-simple', category: 'Grammar' },
      { title: 'Master the 12 English Tenses', href: '/tenses', category: 'Tenses' },
      { title: 'English Tenses Quiz', href: '/quizzes/english-tenses', category: 'Quizzes' }
    ],
    relatedQuizSlug: 'english-tenses'
  }
];
