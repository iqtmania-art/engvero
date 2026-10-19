
import fs from 'node:fs';
import path from 'node:path';
import { VOCABULARY_CATEGORIES, VOCABULARY_WORDS } from '../src/data/vocabulary.ts';
import { EDUCATIONAL_LESSONS } from '../src/data/lessons.ts';
import { ENGLISH_TENSES } from '../src/data/tenses.ts';
import { FEATURED_QUIZZES } from '../src/data/quizzes.ts';
import { COMMON_MISTAKES } from '../src/data/mistakes.ts';
const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');
const siteUrl = 'https://engvero.netlify.app';

const pages = [
  {
    route: '/',
    title: 'ENGVERO â€“ Learn English Online with Grammar, Vocabulary & Quizzes',
    description: 'Learn English online with clear grammar lessons, practical vocabulary, English tenses, interactive quizzes, and daily practice for learners worldwide.',
  },
  {
    route: '/blog',
    title: 'English Learning Articles & Guides â€“ ENGVERO',
    description: 'Explore practical English learning articles about grammar, vocabulary, common mistakes, and learning strategies.',
  },
  {
    route: '/english-level-test',
    title: 'Free English Level Test â€“ Find Your CEFR Level | ENGVERO',
    description: 'Take a free English level test to estimate your CEFR level from A1 to C1 and discover how to improve your English.',
  },
  {
    route: '/vocabulary',
    title: 'English Vocabulary: Meanings, Examples & Usage â€“ ENGVERO',
    description: 'Build your English vocabulary with word meanings, practical examples, synonyms, antonyms, and usage guidance.',
  },
  {
    route: '/grammar',
    title: 'English Grammar Lessons and Rules | ENGVERO',
    description: 'Learn English grammar with clear rules, examples, common mistakes, and practice questions for English learners.',
  },
  {
    route: '/tenses',
    title: 'All 12 English Tenses: Rules and Examples | ENGVERO',
    description: 'Study all 12 English tenses with sentence formulas, usage guidance, signal words, examples, and common mistakes.',
  },
  {
    route: '/common-mistakes',
    title: 'Common English Mistakes and How to Avoid Them â€“ ENGVERO',
    description: 'Learn to identify and correct common English grammar, vocabulary, and usage mistakes with practical examples.',
  },
  {
    route: '/daily-english',
    title: 'Daily English Practice â€“ Learn English Every Day | ENGVERO',
    description: 'Improve your English every day with practical English learning activities, useful expressions, and regular practice.',
  },
  {
    route: '/blog/present-simple-uses-rules-examples',
    title: 'Present Simple: Uses, Rules and Examples â€“ ENGVERO',
    description: 'Learn the main uses of the Present Simple, third-person singular spelling rules, and common mistakes.',
  },
  {
    route: '/blog/say-vs-tell-whats-the-difference',
    title: "Say vs Tell: What's the Difference? â€“ ENGVERO",
    description: 'Learn the difference between say and tell with a clear rule and practical examples.',
  },
  {
    route: '/blog/50-useful-english-words-for-everyday-conversation',
    title: '50 Useful English Words for Everyday Conversation â€“ ENGVERO',
    description: 'Learn useful conversational English words and collocations to make your spoken English more natural.',
  },
  {
    route: '/blog/common-english-mistakes-esl-learners-make',
    title: 'Common English Mistakes ESL Learners Make â€“ ENGVERO',
    description: 'Explore common English grammar and vocabulary mistakes, with practical tips for correcting them.',
  },
  {
    route: '/blog/how-to-improve-your-english-vocabulary',
    title: 'How to Improve Your English Vocabulary â€“ ENGVERO',
    description: 'Discover strategies for improving English vocabulary through spaced repetition, word roots, and contextual learning.',
  },
    { route: '/grammar/present-perfect', title: 'Present Perfect: Form, Uses and Time Expressions | ENGVERO', description: 'Learn the Present Perfect tense, including its form, uses, time expressions, and practical examples.' },  ...COMMON_MISTAKES.map((mistake) => ({
    route: `/common-mistakes/${mistake.slug}`,
    title: `${mistake.title} | ENGVERO`,
    description: mistake.summary,
  })),
  { route: '/pronunciation', title: 'English Pronunciation & Phonetics Guide – ENGVERO', description: 'Improve English pronunciation with vowel sounds, syllable stress, consonant clarity, and natural English rhythm.' },
  { route: '/quizzes', title: 'Free English Quizzes & Tests – ENGVERO', description: 'Practice English with interactive quizzes covering grammar, tenses, vocabulary, and common mistakes.' },
  { route: '/speaking', title: 'English Speaking Practice – Speak English Confidently | ENGVERO', description: 'Improve English speaking with practical conversations, natural expressions, pronunciation guidance, and fluency exercises.' },
  { route: '/listening', title: 'English Listening Practice – Improve Listening Skills | ENGVERO', description: 'Improve English listening with natural conversations, connected speech, varied accents, and practical listening exercises.' },
  { route: '/reading', title: 'English Reading Practice – Improve Reading Skills | ENGVERO', description: 'Build English reading skills with comprehension strategies, vocabulary in context, skimming, scanning, and reading exercises.' },
  { route: '/writing', title: 'English Writing Practice – Improve Writing Skills | ENGVERO', description: 'Improve English writing with grammar practice, paragraph structure, sentence building, and clear expression.' },
  { route: '/about', title: 'About ENGVERO – Simple Lessons, Real English', description: 'Discover ENGVERO, an English learning platform offering practical lessons, examples, quizzes, and daily practice.' },
  { route: '/contact', title: 'Contact ENGVERO – Feedback & Suggestions', description: 'Contact ENGVERO to suggest English lesson topics, report errors, ask questions, or share educational feedback.' },
  { route: '/chat', title: 'AI English Practice Chat – ENGVERO', description: 'Practice conversational English, receive grammar feedback, and improve your writing with an AI learning assistant.' },  ...FEATURED_QUIZZES.map((quiz) => ({
    route: `/quizzes/${quiz.slug}`,
    title: `${quiz.title} | ENGVERO`,
    description: quiz.description,
  })),
];

for (const category of VOCABULARY_CATEGORIES) {
  pages.push({
    route: `/vocabulary/${category.slug}`,
    title: `${category.name}: English Vocabulary and Examples | ENGVERO`,
    description: `${category.description} Explore vocabulary examples and practical English usage on ENGVERO.`,
  });
}

for (const word of VOCABULARY_WORDS) {
  pages.push({
    route: `/vocabulary/${word.slug}`,
    title: `${word.word}: Meaning, Examples and Usage | ENGVERO`,
    description: `Learn the meaning of ${word.word.toLowerCase()}, its English usage, examples, synonyms, and related expressions.`,
  });
}

for (const lesson of EDUCATIONAL_LESSONS) {
  const routePrefix = lesson.category === 'Tenses' ? '/tenses' : '/grammar';
  pages.push({
    route: `${routePrefix}/${lesson.slug}`,
    title: `${lesson.title} | ENGVERO`,
    description: lesson.summary,
  });
}

for (const tense of ENGLISH_TENSES) {
  pages.push({
    route: `/tenses/${tense.slug}`,
    title: `${tense.name}: Rules, Formula and Examples | ENGVERO`,
    description: `Learn the ${tense.name} tense: ${tense.keyUse} Review sentence formulas, signal words, examples, and common mistakes.`,
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function setMeta(html, attribute, key, content) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(
    `<meta\\s+[^>]*${attribute}=["']${escapedKey}["'][^>]*>`,
    'i',
  );
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`;

  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace('</head>', `  ${tag}\n</head>`);
}

if (!fs.existsSync(indexPath)) {
  throw new Error('dist/index.html not found. Run the Vite build first.');
}

const template = fs.readFileSync(indexPath, 'utf8');

for (const page of pages) {
  let html = template;
  const canonicalUrl =
    page.route === '/' ? `${siteUrl}/` : `${siteUrl}${page.route}/`;

  html = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(page.title)}</title>`,
  );

  html = setMeta(html, 'name', 'description', page.description);
  html = setMeta(html, 'property', 'og:title', page.title);
  html = setMeta(html, 'property', 'og:description', page.description);
  html = setMeta(html, 'property', 'og:url', canonicalUrl);
  html = setMeta(html, 'name', 'twitter:title', page.title);
  html = setMeta(html, 'name', 'twitter:description', page.description);

  const canonicalPattern = /<link\s+rel=["']canonical["'][^>]*>/i;
  const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" />`;

  html = canonicalPattern.test(html)
    ? html.replace(canonicalPattern, canonicalTag)
    : html.replace('</head>', `  ${canonicalTag}\n</head>`);

  const outputDir =
    page.route === '/'
      ? distDir
      : path.join(distDir, page.route.slice(1));

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf8');

  console.log(`Prerendered: ${page.route}`);
}

console.log(`Finished prerendering ${pages.length} pages.`);
