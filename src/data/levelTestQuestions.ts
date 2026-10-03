import { CEFRLevel } from '../types';

export interface LevelTestQuestion {
  id: string;
  level: CEFRLevel;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  focusArea: 'Grammar' | 'Vocabulary' | 'Tenses' | 'Prepositions' | 'Collocations';
}

export const ENGLISH_LEVEL_TEST_QUESTIONS: LevelTestQuestion[] = [
  // A1 Questions
  {
    id: 'lt-1',
    level: 'A1',
    question: "Hello! My name is Carlos. Where ________ you from?",
    options: ['is', 'are', 'am', 'be'],
    correctAnswer: 1,
    explanation: "With the subject pronoun 'you', the present tense form of the verb 'to be' is 'are'.",
    focusArea: 'Grammar'
  },
  {
    id: 'lt-2',
    level: 'A1',
    question: "Sophie usually ________ breakfast at seven o'clock in the morning.",
    options: ['eat', 'eats', 'is eating', 'has eaten'],
    correctAnswer: 1,
    explanation: "Present Simple with third-person singular subject ('Sophie') takes the -s suffix ('eats') for habitual actions.",
    focusArea: 'Tenses'
  },
  // A2 Questions
  {
    id: 'lt-3',
    level: 'A2',
    question: "We arrived ________ the train station just in time for our morning departure.",
    options: ['at', 'in', 'on', 'to'],
    correctAnswer: 0,
    explanation: "Use 'arrive at' for specific buildings or locations like stations, airports, and hotels.",
    focusArea: 'Prepositions'
  },
  {
    id: 'lt-4',
    level: 'A2',
    question: "Yesterday afternoon, Marcus ________ a new laptop for his university studies.",
    options: ['bought', 'buys', 'has bought', 'was buying'],
    correctAnswer: 0,
    explanation: "'Yesterday afternoon' is a completed past time expression, which requires Past Simple ('bought').",
    focusArea: 'Tenses'
  },
  {
    id: 'lt-5',
    level: 'A2',
    question: "This digital camera is much ________ than the older model we tested.",
    options: ['more heavy', 'heavier', 'heaviest', 'more heavier'],
    correctAnswer: 1,
    explanation: "Two-syllable adjectives ending in -y change -y to -ier in the comparative form ('heavier').",
    focusArea: 'Grammar'
  },
  // B1 Questions
  {
    id: 'lt-6',
    level: 'B1',
    question: "The director asked me to ________ a quick phone call to verify the client's address.",
    options: ['do', 'make', 'perform', 'create'],
    correctAnswer: 1,
    explanation: "The standard English collocation is 'make a phone call', never 'do a phone call'.",
    focusArea: 'Collocations'
  },
  {
    id: 'lt-7',
    level: 'B1',
    question: "If it ________ tomorrow, the community outdoor festival will be postponed.",
    options: ['will rain', 'rains', 'is raining', 'rained'],
    correctAnswer: 1,
    explanation: "In first conditional 'if' clauses referring to real future possibilities, use Present Simple ('rains'), not 'will'.",
    focusArea: 'Grammar'
  },
  {
    id: 'lt-8',
    level: 'B1',
    question: "Dr. Alvarez ________ at the regional medical clinic since 2017.",
    options: ['works', 'is working', 'has worked', 'worked'],
    correctAnswer: 2,
    explanation: "Use Present Perfect ('has worked') with 'since' to denote an activity that started in the past and continues up to the present.",
    focusArea: 'Tenses'
  },
  // B2 Questions
  {
    id: 'lt-9',
    level: 'B2',
    question: "By the time the emergency generator was activated, the laboratory ________ power for twenty minutes.",
    options: ['has lost', 'was losing', 'had lost', 'lost'],
    correctAnswer: 2,
    explanation: "Past Perfect ('had lost') expresses an action completed before another past event ('was activated').",
    focusArea: 'Tenses'
  },
  {
    id: 'lt-10',
    level: 'B2',
    question: "Despite numerous technological setbacks, the engineering team remained remarkably ________.",
    options: ['resilient', 'reluctant', 'redundant', 'repetitive'],
    correctAnswer: 0,
    explanation: "'Resilient' means capable of withstanding shock and recovering quickly from difficulties.",
    focusArea: 'Vocabulary'
  },
  {
    id: 'lt-11',
    level: 'B2',
    question: "You had better ________ the contract thoroughly before affixing your signature.",
    options: ['review', 'to review', 'reviewing', 'reviewed'],
    correctAnswer: 0,
    explanation: "'Had better' is an idiom of advice followed directly by the bare infinitive ('review') without 'to'.",
    focusArea: 'Grammar'
  },
  // C1 Questions
  {
    id: 'lt-12',
    level: 'C1',
    question: "Rarely ________ such an articulate presentation of contradictory scientific findings.",
    options: [
      'I have witnessed',
      'have I witnessed',
      'did I witnessed',
      'I had witnessed'
    ],
    correctAnswer: 1,
    explanation: "Negative and restrictive adverbs like 'Rarely' placed at the front of a sentence trigger subject-auxiliary inversion ('have I witnessed').",
    focusArea: 'Grammar'
  }
];
