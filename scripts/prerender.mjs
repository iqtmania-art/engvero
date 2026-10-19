
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');
const siteUrl = 'https://engvero.netlify.app';

const pages = [
  {
    route: '/',
    title: 'ENGVERO – Learn English Online with Grammar, Vocabulary & Quizzes',
    description:
      'Learn English online with clear grammar lessons, practical vocabulary, English tenses, interactive quizzes, and daily practice for learners worldwide.',
  },
  {
    route: '/blog',
    title: 'English Learning Articles & Guides – ENGVERO',
    description:
      'Explore practical English learning articles about grammar, vocabulary, common mistakes, and learning strategies.',
  },
  {
    route: '/english-level-test',
    title: 'Free English Level Test – Find Your CEFR Level | ENGVERO',
    description:
      'Take a free English level test to estimate your CEFR level from A1 to C1 and discover how to improve your English.',
  },
  {
    route: '/vocabulary',
    title: 'English Vocabulary: Meanings, Examples & Usage – ENGVERO',
    description:
      'Build your English vocabulary with word meanings, practical examples, synonyms, antonyms, and usage guidance.',
  },
  {
    route: '/vocabulary/collaborate',
    title: 'Collaborate Meaning, Examples & Usage – ENGVERO',
    description:
      'Learn the meaning of collaborate, how to use collaborate with and collaborate on, useful examples, synonyms, and common collocations.',
  },
  {
    route: '/common-mistakes',
    title: 'Common English Mistakes and How to Avoid Them – ENGVERO',
    description:
      'Learn to identify and correct common English grammar, vocabulary, and usage mistakes with practical examples.',
  },
  {
    route: '/daily-english',
    title: 'Daily English Practice – Learn English Every Day | ENGVERO',
    description:
      'Improve your English every day with practical English learning activities, useful expressions, and regular practice.',
  },
  {
    route: '/blog/present-simple-uses-rules-examples',
    title: 'Present Simple: Uses, Rules and Examples – ENGVERO',
    description:
      'The Present Simple is the bedrock of English sentence structure. Here is how to master its four main uses, third-person singular spelling rules, and common pitfalls.',
  },
  {
    route: '/blog/say-vs-tell-whats-the-difference',
    title: "Say vs Tell: What's the Difference? – ENGVERO",
    description:
      'Few verb pairs cause as much hesitation as "say" and "tell". Master the one fundamental rule that guarantees you will never confuse them again.',
  },
  {
    route: '/blog/50-useful-english-words-for-everyday-conversation',
    title: '50 Useful English Words for Everyday Conversation – ENGVERO',
    description:
      'Move beyond basic textbook phrases. These 50 high-frequency conversational words and collocations will make your spoken English sound natural and expressive.',
  },
  {
    route: '/blog/common-english-mistakes-esl-learners-make',
    title: 'Common English Mistakes ESL Learners Make – ENGVERO',
    description:
      'From false friends and uncountable nouns to incorrect prepositions, explore the top grammatical traps and practical tips on how to correct them.',
  },
  {
    route: '/blog/how-to-improve-your-english-vocabulary',
    title: 'How to Improve Your English Vocabulary – ENGVERO',
    description:
      'Discover evidence-based strategies for vocabulary acquisition: spaced repetition, morphological root analysis, and active context immersion.',
  },
];

function escapeHtml(value) {
  return value
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

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace('</head>', `  ${tag}\n  </head>`);
}

if (!fs.existsSync(indexPath)) {
  throw new Error('dist/index.html not found. Run the Vite build first.');
}

const template = fs.readFileSync(indexPath, 'utf8');

for (const page of pages) {
  let html = template;
  const canonicalUrl = `${siteUrl}${page.route}`;

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

  if (canonicalPattern.test(html)) {
    html = html.replace(canonicalPattern, canonicalTag);
  } else {
    html = html.replace('</head>', `  ${canonicalTag}\n  </head>`);
  }

  const outputDir =
    page.route === '/'
      ? distDir
      : path.join(distDir, page.route.slice(1));

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf8');

  console.log(`Prerendered: ${page.route}`);
}

console.log(`Finished prerendering ${pages.length} pages.`);
