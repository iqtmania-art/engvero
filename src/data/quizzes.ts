import { QuizItem, QuizQuestion } from '../types';

export const FIVE_MINUTE_CHALLENGE_QUESTIONS: QuizQuestion[] = [
  {
    id: 'fmc-1',
    question: "Choose the correct sentence for a habitual action:",
    options: [
      "She work in the design department every weekday.",
      "She works in the design department every weekday.",
      "She is working in the design department every weekday.",
      "She has worked in the design department every weekday."
    ],
    correctAnswer: 1,
    explanation: "Present Simple with third-person singular ('she') requires the '-s' suffix ('works') for regular habitual activities.",
    topic: 'Present Simple',
    category: 'Grammar'
  },
  {
    id: 'fmc-2',
    question: "Fill in the blank: 'Could you please ________ me the truth about what happened at the client meeting?'",
    options: ['say', 'tell', 'speak', 'talk'],
    correctAnswer: 1,
    explanation: "'Tell' is followed directly by a personal object ('me') without a preposition. 'Say' would require 'to me'.",
    topic: 'Common Mistakes',
    category: 'Common Mistakes'
  },
  {
    id: 'fmc-3',
    question: "Select the sentence with accurate preposition usage:",
    options: [
      "Our flight departs on 6:30 AM tomorrow morning.",
      "Our flight departs at 6:30 AM tomorrow morning.",
      "Our flight departs in 6:30 AM tomorrow morning.",
      "Our flight departs to 6:30 AM tomorrow morning."
    ],
    correctAnswer: 1,
    explanation: "Use the preposition 'at' for precise clock times ('at 6:30 AM').",
    topic: 'Prepositions',
    category: 'Grammar'
  },
  {
    id: 'fmc-4',
    question: "Identify the correct article: 'Dr. Katherine has been working as ________ university lecturer for over eight years.'",
    options: ['an', 'a', 'the', 'no article needed'],
    correctAnswer: 1,
    explanation: "'University' begins with a consonant sound (/juː/), so the indefinite article 'a' is required, not 'an'.",
    topic: 'Articles',
    category: 'Grammar'
  },
  {
    id: 'fmc-5',
    question: "Which tense correctly expresses an ongoing action up to the present: 'They ________ in this neighborhood since 2018.'",
    options: [
      "are living",
      "lived",
      "have lived",
      "were living"
    ],
    correctAnswer: 2,
    explanation: "With 'since 2018' indicating duration from the past to the present, the Present Perfect ('have lived') is the correct standard choice.",
    topic: 'Tenses',
    category: 'Tenses'
  }
];

export const FEATURED_QUIZZES: QuizItem[] = [
  {
    id: 'present-simple-quiz',
    slug: 'present-simple',
    title: 'Present Simple Mastery Quiz',
    description: 'Test your understanding of third-person singular rules, negative forms, and auxiliary verbs in the present simple.',
    category: 'Grammar',
    difficulty: 'Beginner',
    level: 'A1',
    estimatedMinutes: 5,
    questions: [
      {
        id: 'psq-1',
        question: "Select the correct sentence:",
        options: [
          "He don't watch television very often.",
          "He doesn't watch television very often.",
          "He doesn't watches television very often.",
          "He isn't watch television very often."
        ],
        correctAnswer: 1,
        explanation: "Third-person singular uses 'doesn't' followed by the base verb 'watch' without an -s ending."
      },
      {
        id: 'psq-2',
        question: "How do you spell the third-person form of 'hurry'?",
        options: ["hurrys", "hurries", "hurres", "hurrying"],
        correctAnswer: 1,
        explanation: "Verbs ending in consonant + y change 'y' to 'ies' (hurry -> hurries)."
      },
      {
        id: 'psq-3',
        question: "Which question form is grammatically correct?",
        options: [
          "Where do your sister work?",
          "Where does your sister works?",
          "Where does your sister work?",
          "Where is your sister work?"
        ],
        correctAnswer: 2,
        explanation: "'Your sister' is third-person singular (she), so use 'does' + subject + base verb 'work'."
      },
      {
        id: 'psq-4',
        question: "Complete the sentence: 'Water ________ at 100 degrees Celsius.'",
        options: ["boil", "boils", "is boiling", "has boiled"],
        correctAnswer: 1,
        explanation: "Scientific truths and physical laws take the Present Simple singular form: 'boils'."
      }
    ]
  },
  {
    id: 'articles-quiz',
    slug: 'articles-a-an-the',
    title: 'Articles: A, An & The Quiz',
    description: 'Master when to use indefinite articles, definite articles, or the zero article across varied sentences.',
    category: 'Grammar',
    difficulty: 'Beginner',
    level: 'A2',
    estimatedMinutes: 5,
    questions: [
      {
        id: 'artq-1',
        question: "Choose the correct phrase: 'It was ________ honest mistake that anyone could have made.'",
        options: ["a", "an", "the", "no article"],
        correctAnswer: 1,
        explanation: "'Honest' begins with a silent 'h', producing an initial vowel sound /ɒ/, which takes 'an'."
      },
      {
        id: 'artq-2',
        question: "Which sentence correctly uses the zero article for general statements?",
        options: [
          "The children usually enjoy the ice cream.",
          "Children usually enjoy ice cream.",
          "A children usually enjoy an ice cream.",
          "Children usually enjoys the ice creams."
        ],
        correctAnswer: 1,
        explanation: "When speaking of children and ice cream in general, no articles are used."
      },
      {
        id: 'artq-3',
        question: "Select the sentence with accurate geographical article usage:",
        options: [
          "We hiked across the Mount Everest.",
          "They visited the France last autumn.",
          "They crossed the Pacific Ocean on a research vessel.",
          "The Lake Geneva is very picturesque."
        ],
        correctAnswer: 2,
        explanation: "Oceans, seas, and rivers take 'the' (the Pacific Ocean). Singular lakes and mountains do not take 'the'."
      }
    ]
  },
  {
    id: 'prepositions-quiz',
    slug: 'prepositions',
    title: 'Prepositions: In, On & At Quiz',
    description: 'Pinpoint precise time expressions and spatial locations using intuitive preposition hierarchy.',
    category: 'Grammar',
    difficulty: 'Intermediate',
    level: 'B1',
    estimatedMinutes: 6,
    questions: [
      {
        id: 'prep-1',
        question: "Fill in the blank: 'We always exchange holiday gifts ________ Christmas Day.'",
        options: ['at', 'in', 'on', 'by'],
        correctAnswer: 2,
        explanation: "Specific days like 'Christmas Day' or 'my birthday' take 'on'. (Note: 'at Christmas' is used for the overall season)."
      },
      {
        id: 'prep-2',
        question: "Which preposition fits: 'The new scientific journal was founded ________ 2021.'",
        options: ['on', 'in', 'at', 'since'],
        correctAnswer: 1,
        explanation: "Years, decades, and centuries take 'in' ('in 2021')."
      },
      {
        id: 'prep-3',
        question: "Select the correct spatial phrase: 'The office is located ________ the third floor.'",
        options: ['in', 'at', 'on', 'inside'],
        correctAnswer: 2,
        explanation: "Floors of a building always take 'on' ('on the third floor')."
      }
    ]
  },
  {
    id: 'english-tenses-quiz',
    slug: 'english-tenses',
    title: '12 English Tenses Challenge',
    description: 'Diagnose your command across past, present, and future aspects with realistic scenarios.',
    category: 'Tenses',
    difficulty: 'Intermediate',
    level: 'B1',
    estimatedMinutes: 7,
    questions: [
      {
        id: 'tq-1',
        question: "Choose the correct past tense: 'By the time the rescue team arrived, the hikers ________ a temporary shelter.'",
        options: [
          "built",
          "had already built",
          "have already built",
          "were already building"
        ],
        correctAnswer: 1,
        explanation: "Past Perfect ('had already built') expresses an action completed before another past event ('arrived')."
      },
      {
        id: 'tq-2',
        question: "Which form is correct: 'Don’t telephone me at 8 PM tonight because I ________ dinner with my grandparents.'",
        options: [
          "will have",
          "will be having",
          "have had",
          "would have"
        ],
        correctAnswer: 1,
        explanation: "Future Continuous ('will be having') describes an activity that will be in progress at that specific future time."
      },
      {
        id: 'tq-3',
        question: "Select the sentence with accurate time clause tense: 'As soon as he ________, we will initiate the conference.'",
        options: [
          "will arrive",
          "arrives",
          "is arriving",
          "arrived"
        ],
        correctAnswer: 1,
        explanation: "In future time clauses after 'as soon as', 'when', or 'before', use the Present Simple ('arrives'), not 'will'."
      }
    ]
  },
  {
    id: 'vocabulary-quiz',
    slug: 'vocabulary',
    title: 'Practical Vocabulary & Collocations Quiz',
    description: 'Expand your word choice, collocations, and register across professional and conversational contexts.',
    category: 'Vocabulary',
    difficulty: 'Intermediate',
    level: 'B2',
    estimatedMinutes: 5,
    questions: [
      {
        id: 'vq-1',
        question: "Which adjective means 'able to recover quickly from difficult conditions'?",
        options: ['Resilient', 'Reluctant', 'Redundant', 'Repetitive'],
        correctAnswer: 0,
        explanation: "'Resilient' means strong enough to withstand or recover quickly from difficult conditions or hardship."
      },
      {
        id: 'vq-2',
        question: "Choose the natural collocation: 'We need to ________ a decision before the end of the day.'",
        options: ['do', 'make', 'create', 'perform'],
        correctAnswer: 1,
        explanation: "In standard English, the established collocation is 'make a decision', not 'do a decision'."
      },
      {
        id: 'vq-3',
        question: "What is an antonym for 'reliable'?",
        options: ['Trustworthy', 'Dependable', 'Erratic', 'Punctual'],
        correctAnswer: 2,
        explanation: "'Erratic' means unpredictable and inconsistent, which is the opposite of 'reliable'."
      }
    ]
  },
  {
    id: 'common-mistakes-quiz',
    slug: 'common-mistakes',
    title: 'Common English Mistakes Diagnostic Quiz',
    description: 'Can you spot easily confused words like Say vs Tell, Look vs See, and House vs Home?',
    category: 'Common Mistakes',
    difficulty: 'All Levels',
    level: 'A2',
    estimatedMinutes: 5,
    questions: [
      {
        id: 'cmq-1',
        question: "Which sentence is correct?",
        options: [
          "She said to me that she was leaving.",
          "She said me that she was leaving.",
          "She told that she was leaving.",
          "She told to me that she was leaving."
        ],
        correctAnswer: 0,
        explanation: "'Say to [person]' or 'Tell [person]' are correct. 'Said me' and 'told to me' are incorrect."
      },
      {
        id: 'cmq-2',
        question: "Fill in the blank: 'How ________ furniture did you order for the new office suite?'",
        options: ['many', 'much', 'few', 'large'],
        correctAnswer: 1,
        explanation: "'Furniture' is an uncountable noun in English, so 'much' is used."
      },
      {
        id: 'cmq-3',
        question: "Which word best completes: 'The secret was shared ________ the five founding partners.'",
        options: ['between', 'among', 'into', 'withing'],
        correctAnswer: 1,
        explanation: "'Among' is used when distributing or sharing within a group or collective."
      }
    ]
  }
];
