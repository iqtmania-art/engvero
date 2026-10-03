import { SearchResult } from '../types';
import { EDUCATIONAL_LESSONS } from './lessons';
import { ENGLISH_TENSES } from './tenses';
import { COMMON_MISTAKES } from './mistakes';
import { VOCABULARY_WORDS, VOCABULARY_CATEGORIES } from './vocabulary';
import { FEATURED_QUIZZES } from './quizzes';
import { LATEST_ARTICLES } from './articles';
import { FOUR_SKILLS } from './skills';

export function getAllSearchableItems(): SearchResult[] {
  const items: SearchResult[] = [];

  // Lessons
  EDUCATIONAL_LESSONS.forEach((lesson) => {
    items.push({
      title: lesson.title,
      category: lesson.category,
      url: `/grammar/${lesson.slug}`,
      snippet: lesson.summary
    });
  });

  // Tenses
  ENGLISH_TENSES.forEach((tense) => {
    items.push({
      title: `${tense.name} Tense`,
      category: 'Tenses',
      url: `/tenses/${tense.slug}`,
      snippet: `${tense.keyUse} Formula: ${tense.formula.positive}`
    });
  });

  // Common Mistakes
  COMMON_MISTAKES.forEach((mistake) => {
    items.push({
      title: mistake.title,
      category: 'Common Mistakes',
      url: `/common-mistakes/${mistake.slug}`,
      snippet: mistake.summary
    });
  });

  // Vocabulary words
  VOCABULARY_WORDS.forEach((word) => {
    items.push({
      title: `${word.word} (${word.pos})`,
      category: 'Vocabulary',
      url: `/vocabulary/${word.slug}`,
      snippet: word.definition
    });
  });

  // Vocabulary categories
  VOCABULARY_CATEGORIES.forEach((cat) => {
    items.push({
      title: cat.name,
      category: 'Vocabulary',
      url: `/vocabulary/${cat.slug}`,
      snippet: cat.description
    });
  });

  // Quizzes
  FEATURED_QUIZZES.forEach((quiz) => {
    items.push({
      title: quiz.title,
      category: 'Quizzes',
      url: `/quizzes/${quiz.slug}`,
      snippet: quiz.description
    });
  });

  // Articles
  LATEST_ARTICLES.forEach((article) => {
    items.push({
      title: article.title,
      category: 'Blog',
      url: `/blog/${article.slug}`,
      snippet: article.excerpt
    });
  });

  // Four Skills
  FOUR_SKILLS.forEach((skill) => {
    items.push({
      title: `${skill.title} Skills Mastery`,
      category: 'Skills',
      url: `/${skill.slug}`,
      snippet: skill.subtitle
    });
  });

  // Level test
  items.push({
    title: 'English Level Diagnostic Test',
    category: 'Assessment',
    url: '/english-level-test',
    snippet: 'Discover which CEFR level (A1 to C1) matches your current English grammar, vocabulary, and usage.'
  });

  // Pronunciation
  items.push({
    title: 'English Pronunciation & Phonetics Guide',
    category: 'Pronunciation',
    url: '/pronunciation',
    snippet: 'Master English vowel sounds, word stress, connected speech, and the schwa /ə/ with audio examples.'
  });

  // Daily English
  items.push({
    title: 'Daily English Practice & Idioms',
    category: 'Daily English',
    url: '/daily-english',
    snippet: 'Explore today’s Word of the Day, Phrase of the Day, Idiom of the Day, and Grammar Tip.'
  });

  // Gemini Chatbot
  items.push({
    title: 'Gemini English Chatbot & AI Practice Partner',
    category: 'AI Tutor',
    url: '/chat',
    snippet: 'Multi-turn conversation practice, instant grammar fixing, and IELTS/academic writing review powered by Gemini.'
  });

  return items;
}
