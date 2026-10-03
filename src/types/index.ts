export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface LessonRule {
  heading: string;
  explanation: string;
  examples: string[];
}

export interface LessonItem {
  id: string;
  slug: string;
  title: string;
  category: 'Grammar' | 'Tenses' | 'Vocabulary' | 'Pronunciation' | 'Common Mistakes';
  level: CEFRLevel;
  readTime: string;
  summary: string;
  formula?: string;
  keyTakeaway: string;
  rules: LessonRule[];
  commonMistakes: {
    wrong: string;
    right: string;
    reason: string;
  }[];
  practiceQuestions?: QuizQuestion[];
  relatedLessons: { title: string; href: string; category: string }[];
  relatedQuizSlug?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0-based index
  explanation: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  topic?: string;
  category?: string;
}

export interface QuizItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  level: CEFRLevel;
  estimatedMinutes: number;
  questions: QuizQuestion[];
}

export interface DailyEnglishData {
  wordOfTheDay: {
    word: string;
    phonetic: string;
    partOfSpeech: string;
    definition: string;
    example: string;
    collocation: string;
    slug: string;
  };
  phraseOfTheDay: {
    phrase: string;
    meaning: string;
    example: string;
    usageNote: string;
    slug: string;
  };
  idiomOfTheDay: {
    idiom: string;
    meaning: string;
    origin?: string;
    example: string;
    slug: string;
  };
  grammarTip: {
    title: string;
    rule: string;
    correct: string;
    incorrect: string;
    slug: string;
  };
}

export interface CommonMistakeItem {
  id: string;
  slug: string;
  pair: [string, string];
  title: string;
  summary: string;
  difference: string;
  firstWordRules: {
    word: string;
    meaning: string;
    examples: string[];
  };
  secondWordRules: {
    word: string;
    meaning: string;
    examples: string[];
  };
  wrongExample: string;
  rightExample: string;
  quickCheck: QuizQuestion;
  relatedLessonHref: string;
  relatedLessonTitle: string;
}

export interface TenseItem {
  id: string;
  slug: string;
  name: string;
  timeFrame: 'Present' | 'Past' | 'Future';
  aspect: 'Simple' | 'Continuous' | 'Perfect' | 'Perfect Continuous';
  formula: {
    positive: string;
    negative: string;
    question: string;
  };
  keyUse: string;
  signalWords: string[];
  examples: string[];
  commonMistake: {
    incorrect: string;
    correct: string;
    note: string;
  };
  relatedQuizSlug: string;
}

export interface VocabularyCategoryInfo {
  slug: string;
  name: string;
  description: string;
  wordCount: string;
  keyThemes: string[];
}

export interface VocabularyWord {
  slug: string;
  word: string;
  phonetic: string;
  pos: string;
  level: CEFRLevel;
  definition: string;
  examples: string[];
  synonyms: string[];
  antonyms: string[];
  collocations: string[];
  usageNote?: string;
  category: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  excerpt: string;
  contentParagraphs: string[];
  keyPoints: string[];
  relatedSlug?: string;
}

export interface SkillCategory {
  id: string;
  slug: string;
  title: string;
  iconName: string;
  subtitle: string;
  description: string;
  methodology: string;
  coreTechniques: { title: string; description: string }[];
  practiceExercises: { title: string; instructions: string; level: CEFRLevel }[];
  recommendedLessons: { title: string; href: string }[];
}

export interface LevelDescription {
  code: CEFRLevel;
  title: string;
  descriptor: string;
  canDo: string[];
  grammarFocus: string[];
  vocabularyGoal: string;
  sampleTopics: string[];
  quizSlug: string;
}

export interface SearchResult {
  title: string;
  category: string;
  url: string;
  snippet: string;
}
