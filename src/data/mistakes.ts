import { CommonMistakeItem } from '../types';

export const COMMON_MISTAKES: CommonMistakeItem[] = [
  {
    id: 'say-vs-tell',
    slug: 'say-vs-tell',
    pair: ['Say', 'Tell'],
    title: 'Say vs Tell: What is the Difference?',
    summary: 'The main difference is whether you name the person being spoken to. You tell someone something, but you say something (to someone).',
    difference: "'Tell' must be followed directly by a personal object (me, her, us, the team) without 'to'. 'Say' focuses on the words spoken and cannot take a direct personal object without the preposition 'to'.",
    firstWordRules: {
      word: 'Say',
      meaning: 'To utter words; focus on the words, quotation, or statement itself.',
      examples: [
        'He said that he was delighted to meet our team.',
        'What did she say when you offered her the promotion?',
        "She said to me, 'Please review this draft carefully.'"
      ]
    },
    secondWordRules: {
      word: 'Tell',
      meaning: 'To give information or instructions to a specific person (requires a personal object).',
      examples: [
        'He told me that he was running ten minutes late.',
        'Did anyone tell the department head about the schedule change?',
        'She told her daughter an inspiring bedtime story.'
      ]
    },
    wrongExample: 'She said me that the office was closed.',
    rightExample: 'She told me that the office was closed. (OR: She said that the office was closed.)',
    quickCheck: {
      id: 'qc-say-tell',
      question: "Which sentence is grammatically correct?",
      options: [
        "Marcus said me to bring my laptop.",
        "Marcus told me to bring my laptop.",
        "Marcus told to me that he was ready.",
        "Marcus said us the exciting news."
      ],
      correctAnswer: 1,
      explanation: "'Tell' is followed directly by the personal object ('me') without 'to'. You tell someone to do something."
    },
    relatedLessonHref: '/grammar/present-simple',
    relatedLessonTitle: 'Present Simple Tense & Reporting Verbs'
  },
  {
    id: 'speak-vs-talk',
    slug: 'speak-vs-talk',
    pair: ['Speak', 'Talk'],
    title: 'Speak vs Talk: When to Use Each Verb',
    summary: "'Speak' is more formal and used for languages and one-directional communication. 'Talk' is informal and emphasizes two-way conversational exchange.",
    difference: "Use 'speak' for fluency in languages (e.g., 'She speaks French') and formal speeches or phone calls. Use 'talk' when chatting, having a discussion, or spending casual time with others.",
    firstWordRules: {
      word: 'Speak',
      meaning: 'Formal address, verbal ability, knowledge of languages, or official declarations.',
      examples: [
        'Dr. Chen will speak at the international medical convention tomorrow.',
        'How many foreign languages do you speak fluently?',
        'May I please speak with Mr. Harrison regarding the contract?'
      ]
    },
    secondWordRules: {
      word: 'Talk',
      meaning: 'Informal two-way conversations, discussions, dialogues, or casual chats.',
      examples: [
        'We sat at the coffee shop and talked for over two hours.',
        'I need to talk to my manager about my upcoming annual leave.',
        'Stop talking while the professor is explaining the theorem.'
      ]
    },
    wrongExample: 'Do you talk Spanish and German fluently?',
    rightExample: 'Do you speak Spanish and German fluently?',
    quickCheck: {
      id: 'qc-speak-talk',
      question: "Choose the natural choice: 'Professor Vance will ________ about renewable energy at tomorrow's plenary symposium.'",
      options: ['talk', 'speak', 'tell', 'say'],
      correctAnswer: 1,
      explanation: "'Speak' is preferred in formal educational or conference presentations."
    },
    relatedLessonHref: '/vocabulary/everyday-english',
    relatedLessonTitle: 'Everyday English Communication Vocabulary'
  },
  {
    id: 'look-vs-see',
    slug: 'look-vs-see',
    pair: ['Look', 'See'],
    title: 'Look vs See vs Watch: Understanding Perception Verbs',
    summary: "'See' happens naturally without effort when light enters your eyes. 'Look' requires conscious direction and intention.",
    difference: "'See' is involuntary perception. 'Look' (often followed by 'at') is intentional direction of your sight. ('Watch' means observing something moving for an extended period).",
    firstWordRules: {
      word: 'Look (at)',
      meaning: 'To direct your eyes intentionally in a particular direction.',
      examples: [
        'Look at the magnificent view from this mountain ridge!',
        'I looked carefully at the invoice to verify the figures.',
        'Why are you looking at that old photograph so intently?'
      ]
    },
    secondWordRules: {
      word: 'See',
      meaning: 'To perceive with your eyes naturally, often without making an intentional effort.',
      examples: [
        'Did you see the shooting star last night?',
        'I suddenly saw a deer standing near the forest path.',
        'I cannot see anything in this heavy fog without my glasses.'
      ]
    },
    wrongExample: 'I was walking along the beach when I suddenly looked a dolphin in the bay.',
    rightExample: 'I was walking along the beach when I suddenly saw a dolphin in the bay.',
    quickCheck: {
      id: 'qc-look-see',
      question: "Fill in the blank: 'Please ________ at the whiteboard while I write down the key formulas.'",
      options: ['see', 'look', 'watch', 'notice'],
      correctAnswer: 1,
      explanation: "'Look at' asks someone to intentionally direct their gaze toward a specific object or spot."
    },
    relatedLessonHref: '/grammar/present-simple',
    relatedLessonTitle: 'Stative Verbs and Verbs of Perception'
  },
  {
    id: 'house-vs-home',
    slug: 'house-vs-home',
    pair: ['House', 'Home'],
    title: 'House vs Home: Physical Building vs Emotional Place',
    summary: "A 'house' is a physical physical structure or residential building. A 'home' is the place where you live and feel warmth, belonging, and emotional connection.",
    difference: "You can buy, paint, build, or sell a 'house'. 'Home' is the abstract concept of your personal living sanctuary. Notice that you say 'go home' without the preposition 'to'.",
    firstWordRules: {
      word: 'House',
      meaning: 'A standalone physical building designed for people to live in.',
      examples: [
        'They bought a two-storey brick house with a spacious backyard.',
        'Several Victorian houses line the historic boulevard.',
        'The workers painted the exterior of the house light gray.'
      ]
    },
    secondWordRules: {
      word: 'Home',
      meaning: 'The emotional space, dwelling, or sanctuary where someone belongs.',
      examples: [
        'After six months of international travel, it feels wonderful to be back home.',
        'Make yourself at home while I brew some fresh tea.',
        'Home is where we share meals with the people we cherish.'
      ]
    },
    wrongExample: 'I am exhausted after the flight; I want to go to home immediately.',
    rightExample: 'I am exhausted after the flight; I want to go home immediately.',
    quickCheck: {
      id: 'qc-house-home',
      question: "Which sentence correctly demonstrates standard English idiom?",
      options: [
        "Welcome to our modest house, make yourself comfortable.",
        "After work, she drove straightly to her home.",
        "They constructed a brand-new home with three bedrooms.",
        "After a tiring business trip, I arrived home at midnight."
      ],
      correctAnswer: 3,
      explanation: "'Arrive home' is standard idiom without 'to'. Home conveys belonging."
    },
    relatedLessonHref: '/grammar/prepositions-in-on-at',
    relatedLessonTitle: 'Prepositions of Place and Motion'
  },
  {
    id: 'among-vs-between',
    slug: 'among-vs-between',
    pair: ['Among', 'Between'],
    title: 'Among vs Between: When to Distinguish Group Relationships',
    summary: "'Between' is used when naming individual, distinct items (even if there are more than two). 'Among' is used when talking about being part of a group, crowd, or collective mass.",
    difference: "The traditional rule was 'between two, among three or more'. Modern precise English distinguishes by whether the entities are distinct individuals ('between negotiations involving France, Germany, and Spain') or an indefinite collective ('a cottage hidden among the trees').",
    firstWordRules: {
      word: 'Between',
      meaning: 'Used with distinct, named, individual people, places, or items.',
      examples: [
        'The trade treaty was agreed between Canada, Mexico, and the United States.',
        'You must choose between accepting the fellowship or staying in your current role.',
        'The small café is tucked between the library and the post office.'
      ]
    },
    secondWordRules: {
      word: 'Among',
      meaning: 'Used when someone or something is surrounded by or part of an undifferentiated group, crowd, or collection.',
      examples: [
        'The rare wildflower grows naturally among the tall alpine grasses.',
        'There was passionate debate among the faculty members about the new syllabus.',
        'She felt completely relaxed among close childhood friends.'
      ]
    },
    wrongExample: 'There was a secret agreement negotiated between the crowd of protestors.',
    rightExample: 'There was a secret agreement negotiated among the members of the committee.',
    quickCheck: {
      id: 'qc-among-between',
      question: "Select the sentence with accurate usage:",
      options: [
        "The diplomat divided the funds among the two rival factions.",
        "A peaceful path winds between the dense grove of oak trees.",
        "The confidential memo was circulated among senior executives.",
        "She stood among her mother and her sister on the balcony."
      ],
      correctAnswer: 2,
      explanation: "'Among' is used for members within a group of unspecified individuals (senior executives)."
    },
    relatedLessonHref: '/grammar/prepositions-in-on-at',
    relatedLessonTitle: 'Prepositions: Essential Rules and Usage'
  },
  {
    id: 'much-vs-many',
    slug: 'much-vs-many',
    pair: ['Much', 'Many'],
    title: 'Much vs Many: Countable vs Uncountable Quantifiers',
    summary: "Use 'many' with countable plural nouns (things you can count: apples, ideas, books). Use 'much' with uncountable nouns (substances or concepts: water, advice, time, information).",
    difference: "'Many' takes a plural countable noun ('many days', 'many questions'). 'Much' takes an uncountable singular noun ('much patience', 'much traffic'). Both are frequently used in questions and negative statements.",
    firstWordRules: {
      word: 'Many',
      meaning: 'A large number of individual countable items.',
      examples: [
        'How many participants registered for the workshop?',
        'There were many compelling questions raised during the panel discussion.',
        'We have not received many customer inquiries this morning.'
      ]
    },
    secondWordRules: {
      word: 'Much',
      meaning: 'A large amount or quantity of an uncountable substance or concept.',
      examples: [
        'Do we have much time left before the train departs?',
        'She does not have much experience with international commercial law.',
        'How much milk do you need for this recipe?'
      ]
    },
    wrongExample: 'The professor gave us so many helpful advices before our examination.',
    rightExample: 'The professor gave us so much helpful advice before our examination. (OR: ...so many helpful pieces of advice)',
    quickCheck: {
      id: 'qc-much-many',
      question: "Which sentence uses quantifiers correctly?",
      options: [
        "There are too much vehicles parked on this narrow street.",
        "I don't have many patience for repetitive software errors.",
        "How much luggage are you taking on the international flight?",
        "How many informations did the detective discover?"
      ],
      correctAnswer: 2,
      explanation: "'Luggage' is an uncountable noun in English, so it correctly pairs with 'much'."
    },
    relatedLessonHref: '/grammar/articles-a-an-the',
    relatedLessonTitle: 'Countable and Uncountable Nouns'
  }
];
