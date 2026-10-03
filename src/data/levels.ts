import { LevelDescription } from '../types';

export const ENGLISH_LEVELS: LevelDescription[] = [
  {
    code: 'A1',
    title: 'Beginner',
    descriptor: 'Understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type.',
    canDo: [
      'Introduce yourself and others with basic details (name, nationality, home, work)',
      'Ask and answer simple questions about personal details and immediate surroundings',
      'Interact in a simple way provided the other person talks slowly and clearly',
      'Count, tell the time, name colors, days of the week, and common objects'
    ],
    grammarFocus: ['Present Simple (to be, regular verbs)', 'Articles (a, an)', 'Basic Pronouns', 'Simple Question Words (Who, What, Where)'],
    vocabularyGoal: '500 - 800 high-frequency words covering family, food, numbers, and basic routines.',
    sampleTopics: ['Introducing Yourself', 'Daily Habits', 'Ordering at a Café', 'Telling the Time'],
    quizSlug: 'present-simple'
  },
  {
    code: 'A2',
    title: 'Elementary',
    descriptor: 'Understand sentences and frequently used expressions related to areas of most immediate relevance (e.g. basic personal and family information, shopping, local geography, employment).',
    canDo: [
      'Communicate in simple and routine tasks requiring a direct exchange of information',
      'Describe in simple terms aspects of your background, immediate environment, and matters of immediate need',
      'Understand short, simple texts such as advertisements, menus, and timetables',
      'Narrate simple past events and express plans for the future'
    ],
    grammarFocus: ['Past Simple', 'Comparative & Superlative Adjectives', 'Prepositions of Place & Time (in, on, at)', 'Future with "going to" & "will"'],
    vocabularyGoal: '1,000 - 1,500 active words for work, travel, health, and leisure.',
    sampleTopics: ['Talking About Yesterday', 'Booking Accommodations', 'Giving Directions', 'Comparing Products'],
    quizSlug: 'articles-a-an-the'
  },
  {
    code: 'B1',
    title: 'Intermediate',
    descriptor: 'Understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc. Deal with most situations likely to arise while travelling in an English-speaking area.',
    canDo: [
      'Produce simple connected text on topics that are familiar or of personal interest',
      'Describe experiences, events, dreams, hopes, and ambitions',
      'Briefly give reasons and explanations for opinions and plans',
      'Enter unprepared into conversations on familiar everyday topics'
    ],
    grammarFocus: ['Present Perfect vs Past Simple', 'First & Second Conditionals', 'Modal Verbs of Obligation & Advice', 'Passive Voice (basic)'],
    vocabularyGoal: '2,000 - 3,000 words enabling independent daily conversation and reading.',
    sampleTopics: ['Describing Life Milestones', 'Job Interviews', 'Problem Solving', 'Travel Stories'],
    quizSlug: 'english-tenses'
  },
  {
    code: 'B2',
    title: 'Upper-Intermediate',
    descriptor: 'Understand the main ideas of complex text on both concrete and abstract topics, including technical discussions in your field of specialization. Interact with a degree of fluency and spontaneity.',
    canDo: [
      'Communicate smoothly with native speakers without strain for either party',
      'Produce clear, detailed text on a wide range of subjects and explain a viewpoint',
      'Weigh advantages and disadvantages of various options in discussions',
      'Understand extended speech and lectures and follow complex lines of argument'
    ],
    grammarFocus: ['Third & Mixed Conditionals', 'Relative Clauses (defining & non-defining)', 'Reported Speech', 'Advanced Phrasal Verbs'],
    vocabularyGoal: '4,000 - 5,000 words including formal idioms, collocations, and topic-specific vocabulary.',
    sampleTopics: ['Business Negotiations', 'Debating Current Events', 'Writing Analytical Reports', 'Nuanced Storytelling'],
    quizSlug: 'vocabulary'
  },
  {
    code: 'C1',
    title: 'Advanced',
    descriptor: 'Understand a wide range of demanding, longer texts, and recognize implicit meaning. Express ideas fluently and spontaneously without much obvious searching for expressions.',
    canDo: [
      'Use language flexibly and effectively for social, academic, and professional purposes',
      'Produce clear, well-structured, detailed text on complex subjects showing controlled organizational patterns',
      'Formulate ideas and opinions with precision and relate contributions skillfully to those of other speakers',
      'Appreciate subtle humor, irony, and cultural subtext in literature and media'
    ],
    grammarFocus: ['Inversion for Emphasis', 'Cleft Sentences', 'Subjunctive Mood', 'Complex Participle Clauses'],
    vocabularyGoal: '8,000+ words including elevated academic, philosophical, and literary vocabulary.',
    sampleTopics: ['Academic Research Synthesis', 'Executive Leadership Briefings', 'Rhetorical Persuasion', 'Literary Analysis'],
    quizSlug: 'common-mistakes'
  },
  {
    code: 'C2',
    title: 'Proficient',
    descriptor: 'Understand with ease virtually everything heard or read. Summarize information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation.',
    canDo: [
      'Express yourself spontaneously, very fluently, and precisely, differentiating finer shades of meaning',
      'Navigate difficult regional idioms, subtle nuances, and stylistic registers with effortless precision',
      'Hold your own effortlessly in any formal symposium, legal discussion, or academic debate',
      'Read archaic literature, technical treatises, and complex editorial prose with natural ease'
    ],
    grammarFocus: ['Stylistic Nuance & Register Calibration', 'Rhetorical Devices', 'Archaic and Specialized Syntactic Forms'],
    vocabularyGoal: '15,000+ comprehensive vocabulary encompassing specialized domains and stylistic variety.',
    sampleTopics: ['Scholarly Keynotes', 'High-Stakes Diplomatic Negotiations', 'Literary Criticism', 'Philosophical Discourse'],
    quizSlug: 'english-tenses'
  }
];
