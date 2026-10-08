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
  },
  {
    id: 'fmc-6',
    question: "Choose the correct sentence:",
    options: [
      "He don't like working late.",
      "He doesn't likes working late.",
      "He doesn't like working late.",
      "He not like working late."
    ],
    correctAnswer: 2,
    explanation: "With 'he', use 'doesn't' followed by the base form 'like'.",
    topic: 'Present Simple',
    category: 'Grammar'
  },
  {
    id: 'fmc-7',
    question: "Complete the sentence: 'I have lived here ________ five years.'",
    options: [
      "since",
      "for",
      "from",
      "during"
    ],
    correctAnswer: 1,
    explanation: "Use 'for' with a period of duration such as 'five years'.",
    topic: 'Prepositions',
    category: 'Grammar'
  },
  {
    id: 'fmc-8',
    question: "Choose the correct form: 'If I ________ more time, I would learn another language.'",
    options: [
      "have",
      "had",
      "will have",
      "am having"
    ],
    correctAnswer: 1,
    explanation: "The second conditional uses 'if + past simple' followed by 'would + base verb'.",
    topic: 'Conditionals',
    category: 'Grammar'
  },
  {
    id: 'fmc-9',
    question: "Select the correct sentence:",
    options: [
      "She has already finished her assignment.",
      "She already has finish her assignment.",
      "She have already finished her assignment.",
      "She has finish already her assignment."
    ],
    correctAnswer: 0,
    explanation: "The Present Perfect is formed with 'has/have + past participle'. 'Finished' is the correct past participle.",
    topic: 'Present Perfect',
    category: 'Tenses'
  },
  {
    id: 'fmc-10',
    question: "Choose the correct word: 'The manager asked me ________ the report before Friday.'",
    options: [
      "finish",
      "finishing",
      "to finish",
      "finished"
    ],
    correctAnswer: 2,
    explanation: "The verb 'ask' is commonly followed by an object and the infinitive: 'asked me to finish'.",
    topic: 'Infinitives',
    category: 'Grammar'
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
      },
        {
        id: 'psq-5',
        question: "Choose the correct sentence:",
        options: [
          "She go to work by bus every day.",
          "She goes to work by bus every day.",
          "She going to work by bus every day.",
          "She does goes to work by bus every day."
        ],
        correctAnswer: 1,
        explanation: "With a third-person singular subject such as 'she', the Present Simple verb takes '-s' or '-es': 'goes'."
      },
      {
        id: 'psq-6',
        question: "Complete the sentence: 'My brother ________ coffee every morning.'",
        options: [
          "drink",
          "drinks",
          "drinking",
          "does drinks"
        ],
        correctAnswer: 1,
        explanation: "The subject 'my brother' is third-person singular, so the verb takes the '-s' form: 'drinks'."
      },
      {
        id: 'psq-7',
        question: "Which sentence correctly uses the negative Present Simple?",
        options: [
          "They doesn't live here.",
          "They don't lives here.",
          "They don't live here.",
          "They not live here."
        ],
        correctAnswer: 2,
        explanation: "With 'they', use 'don't' followed by the base form of the verb: 'don't live'."
      },
      {
        id: 'psq-8',
        question: "Complete the question: '______ your father work in a hospital?'",
        options: [
          "Do",
          "Does",
          "Is",
          "Has"
        ],
        correctAnswer: 1,
        explanation: "Use 'does' with a third-person singular subject such as 'your father'."
      },
      {
        id: 'psq-9',
        question: "Choose the correct sentence about a regular habit:",
        options: [
          "I usually walks to school.",
          "I usually walking to school.",
          "I usually walk to school.",
          "I does usually walk to school."
        ],
        correctAnswer: 2,
        explanation: "With the subject 'I', use the base form 'walk'. Adverbs of frequency such as 'usually' commonly appear before the main verb."
      },{
  id: 'psq-10',
  question: "Which sentence correctly describes a fixed timetable?",
  options: [
    "The train leave at 8:00 tomorrow morning.",
    "The train leaves at 8:00 tomorrow morning.",
    "The train is leave at 8:00 tomorrow morning.",
    "The train leaving at 8:00 tomorrow morning."
  ],
  correctAnswer: 1,
  explanation: "The Present Simple can describe fixed timetables and schedules. With the singular subject 'the train', use 'leaves'."
},
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
      },
      {
        id: 'artq-4',
        question: "Choose the correct sentence: 'She bought ________ umbrella before leaving the house.'",
        options: ["a", "an", "the", "no article"],
        correctAnswer: 1,
        explanation: "'Umbrella' begins with a vowel sound, so the indefinite article 'an' is used."
      },
      {
        id: 'artq-5',
        question: "Complete the sentence: 'I saw ________ interesting documentary last night.'",
        options: ["a", "an", "the", "no article"],
        correctAnswer: 1,
        explanation: "'Interesting' begins with a vowel sound, so 'an' is required."
      },
      {
        id: 'artq-6',
        question: "Choose the correct article: 'Please close ________ door when you leave.'",
        options: ["a", "an", "the", "no article"],
        correctAnswer: 2,
        explanation: "'The' is used because the listener can identify the specific door being referred to."
      },
      {
        id: 'artq-7',
        question: "Which sentence is correct?",
        options: [
          "She is an university student.",
          "She is a university student.",
          "She is the university student.",
          "She is university student."
        ],
        correctAnswer: 1,
        explanation: "'University' begins with a consonant sound /juː/, so 'a' is used rather than 'an'."
      },
      {
        id: 'artq-8',
        question: "Choose the correct sentence:",
        options: [
          "The honesty is important in life.",
          "An honesty is important in life.",
          "Honesty is important in life.",
          "A honesty is important in life."
        ],
        correctAnswer: 2,
        explanation: "Abstract nouns used in a general sense commonly take no article: 'Honesty is important in life.'"
      },
      {
        id: 'artq-9',
        question: "Complete the sentence: 'We had dinner at ________ restaurant near our hotel.'",
        options: ["a", "an", "the", "no article"],
        correctAnswer: 0,
        explanation: "A singular countable noun mentioned for the first time generally takes the indefinite article 'a'."
      },
      {
        id: 'artq-10',
        question: "Choose the correct sentence:",
        options: [
          "The sun rises in east.",
          "A sun rises in the east.",
          "Sun rises in an east.",
          "The sun rises in the east."
        ],
        correctAnswer: 3,
        explanation: "'The sun' refers to the unique object, and 'the east' refers to a specific geographical direction."
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
      },
            {
        id: 'prep-4',
        question: "Choose the correct preposition: 'She was born ________ July 15, 1995.'",
        options: ['at', 'in', 'on', 'by'],
        correctAnswer: 2,
        explanation: "Specific dates take the preposition 'on': 'on July 15, 1995'."
      },
      {
        id: 'prep-5',
        question: "Complete the sentence: 'The meeting starts ________ 9:00 AM.'",
        options: ['in', 'on', 'at', 'by'],
        correctAnswer: 2,
        explanation: "Use 'at' with a precise clock time such as 'at 9:00 AM'."
      },
      {
        id: 'prep-6',
        question: "Choose the correct sentence:",
        options: [
          "I usually study in the evening.",
          "I usually study on the evening.",
          "I usually study at the evening.",
          "I usually study by the evening."
        ],
        correctAnswer: 0,
        explanation: "Parts of the day such as 'the morning', 'the afternoon', and 'the evening' normally take 'in'."
      },
      {
        id: 'prep-7',
        question: "Complete the sentence: 'There is a beautiful painting ________ the wall.'",
        options: ['in', 'at', 'on', 'by'],
        correctAnswer: 2,
        explanation: "Something attached to or positioned on a surface takes 'on': 'on the wall'."
      },
      {
        id: 'prep-8',
        question: "Which sentence is correct?",
        options: [
          "We arrived at the airport in noon.",
          "We arrived at the airport on noon.",
          "We arrived at the airport at noon.",
          "We arrived at the airport by noon yesterday only."
        ],
        correctAnswer: 2,
        explanation: "The fixed expression is 'at noon'."
      },
      {
        id: 'prep-9',
        question: "Choose the correct preposition: 'My parents have lived in Lahore ________ 2010.'",
        options: ['for', 'since', 'at', 'on'],
        correctAnswer: 1,
        explanation: "Use 'since' with a specific starting point in time, such as a year: 'since 2010'."
      },
      {
        id: 'prep-10',
        question: "Complete the sentence: 'The students will submit their assignments ________ Friday.'",
        options: ['at', 'in', 'on', 'since'],
        correctAnswer: 2,
        explanation: "Days of the week take 'on': 'on Friday'."
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
      },
      {
        id: 'tq-4',
        question: "Complete the sentence: 'She ________ English for three years before she moved to Canada.'",
        options: [
          "studied",
          "has studied",
          "had been studying",
          "is studying"
        ],
        correctAnswer: 2,
        explanation: "Past Perfect Continuous ('had been studying') emphasizes an ongoing activity that continued up to another past event."
      },
      {
        id: 'tq-5',
        question: "Choose the correct form: 'Look at those dark clouds! It ________ soon.'",
        options: [
          "rains",
          "is going to rain",
          "has rained",
          "was raining"
        ],
        correctAnswer: 1,
        explanation: "Use 'be going to' for a future prediction based on present evidence, such as dark clouds."
      },
      {
        id: 'tq-6',
        question: "Which sentence correctly uses the Present Perfect?",
        options: [
          "I have visited London last year.",
          "I visited London last year.",
          "I have visit London last year.",
          "I am visited London last year."
        ],
        correctAnswer: 1,
        explanation: "A finished time expression such as 'last year' normally requires the Past Simple: 'I visited London last year.'"
      },
      {
        id: 'tq-7',
        question: "Complete the sentence: 'When I entered the classroom, the teacher ________ the lesson.'",
        options: [
          "already started",
          "has already started",
          "had already started",
          "will already start"
        ],
        correctAnswer: 2,
        explanation: "Past Perfect shows that the lesson started before the later past event of entering the classroom."
      },
      {
        id: 'tq-8',
        question: "Choose the correct future form: 'This time next week, we ________ on the beach.'",
        options: [
          "relax",
          "will be relaxing",
          "have relaxed",
          "relaxed"
        ],
        correctAnswer: 1,
        explanation: "Future Continuous describes an action that will be in progress at a specific time in the future."
      },
      {
        id: 'tq-9',
        question: "Complete the sentence: 'They ________ the project by the end of this month.'",
        options: [
          "will complete",
          "will have completed",
          "completed",
          "are completing yesterday"
        ],
        correctAnswer: 1,
        explanation: "Future Perfect ('will have completed') describes an action that will be finished before a specified future deadline."
      },
      {
        id: 'tq-10',
        question: "Choose the correct sentence:",
        options: [
          "I am knowing him for ten years.",
          "I know him since ten years.",
          "I have known him for ten years.",
          "I had know him for ten years."
        ],
        correctAnswer: 2,
        explanation: "The Present Perfect is used with 'for + period of time' to describe a state that began in the past and continues to the present."
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
      },
      {
        id: 'vq-4',
        question: "Choose the word that means 'to make something better':",
        options: ['Improve', 'Ignore', 'Prevent', 'Reduce'],
        correctAnswer: 0,
        explanation: "'Improve' means to make something better in quality, condition, or performance."
      },
      {
        id: 'vq-5',
        question: "Choose the natural collocation: 'She ________ attention to every detail.'",
        options: ['does', 'makes', 'pays', 'takes'],
        correctAnswer: 2,
        explanation: "The standard English collocation is 'pay attention'."
      },
      {
        id: 'vq-6',
        question: "Which word is closest in meaning to 'brief'?",
        options: ['Lengthy', 'Concise', 'Complicated', 'Permanent'],
        correctAnswer: 1,
        explanation: "'Concise' means expressing something clearly and in few words, making it a close synonym of 'brief'."
      },
      {
        id: 'vq-7',
        question: "Choose the correct collocation: 'The company needs to ________ an opportunity to expand overseas.'",
        options: ['take', 'make', 'do', 'build'],
        correctAnswer: 0,
        explanation: "The natural collocation is 'take an opportunity', meaning to make use of a favorable situation."
      },
      {
        id: 'vq-8',
        question: "What does 'mandatory' mean?",
        options: [
          'Optional',
          'Difficult to understand',
          'Required by a rule or authority',
          'Likely to change'
        ],
        correctAnswer: 2,
        explanation: "'Mandatory' means required or compulsory; it is not optional."
      },
      {
        id: 'vq-9',
        question: "Choose the most natural expression: 'The new policy will ________ effect next month.'",
        options: ['make', 'take', 'do', 'give'],
        correctAnswer: 1,
        explanation: "The established expression is 'take effect', meaning to begin to operate or become active."
      },
      {
        id: 'vq-10',
        question: "Which word best describes a person who is willing to consider new ideas?",
        options: ['Stubborn', 'Open-minded', 'Careless', 'Reluctant'],
        correctAnswer: 1,
        explanation: "'Open-minded' describes someone willing to consider different ideas, opinions, or possibilities."
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
    },
    {
      id: 'cmq-4',
      question: "Choose the correct sentence:",
      options: [
        "I saw him yesterday at the station.",
        "I looked him yesterday at the station.",
        "I watched him yesterday at the station.",
        "I see him yesterday at the station."
      ],
      correctAnswer: 0,
      explanation: "'See' is used for noticing or perceiving someone or something. 'Look' normally requires 'at' when referring to directing your eyes toward something."
    },
    {
      id: 'cmq-5',
      question: "Choose the correct sentence:",
      options: [
        "I am living in this house since 2020.",
        "I have been living in this house since 2020.",
        "I live in this house since 2020.",
        "I was living in this house since 2020."
      ],
      correctAnswer: 1,
      explanation: "Use the Present Perfect Continuous with 'since' to describe an action that started in the past and continues to the present."
    },
    {
      id: 'cmq-6',
      question: "Which sentence correctly uses 'home'?",
      options: [
        "I went to home after work.",
        "I went home after work.",
        "I went at home after work.",
        "I went to the home after work."
      ],
      correctAnswer: 1,
      explanation: "When 'home' means the place where someone lives, we normally say 'go home' without 'to'."
    },
    {
      id: 'cmq-7',
      question: "Choose the correct sentence:",
      options: [
        "She explained me the problem.",
        "She explained the problem to me.",
        "She explained to me the problem it.",
        "She explained me about the problem."
      ],
      correctAnswer: 1,
      explanation: "'Explain' is normally followed by the thing being explained and then 'to' plus the person: 'explain the problem to me'."
    },
    {
      id: 'cmq-8',
      question: "Fill in the blank: 'There are ________ students in this class than last year.'",
      options: [
        "less",
        "little",
        "fewer",
        "few"
      ],
      correctAnswer: 2,
      explanation: "'Fewer' is used with countable plural nouns such as 'students'."
    },
    {
      id: 'cmq-9',
      question: "Which sentence is correct?",
      options: [
        "He is married with a doctor.",
        "He is married to a doctor.",
        "He married with a doctor.",
        "He is married by a doctor."
      ],
      correctAnswer: 1,
      explanation: "The standard expression is 'be married to someone'."
    },
    {
      id: 'cmq-10',
      question: "Choose the correct sentence:",
      options: [
        "I have a good news for you.",
        "I have some good news for you.",
        "I have a good newses for you.",
        "I have good a news for you."
      ],
      correctAnswer: 1,
      explanation: "'News' is an uncountable noun, so we say 'some good news', not 'a good news'."
    }
  ]
}
];