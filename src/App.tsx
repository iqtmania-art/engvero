
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { GrammarIndexPage } from './pages/GrammarIndexPage';
import { LessonDetailPage } from './pages/LessonDetailPage';
import { TensesIndexPage } from './pages/TensesIndexPage';
import { TenseDetailPage } from './pages/TenseDetailPage';
import { VocabularyIndexPage } from './pages/VocabularyIndexPage';
import { VocabularyWordPage } from './pages/VocabularyWordPage';
import { VocabularyCategoryPage } from './pages/VocabularyCategoryPage';
import { PronunciationPage } from './pages/PronunciationPage';
import { QuizzesIndexPage } from './pages/QuizzesIndexPage';
import { QuizDetailPage } from './pages/QuizDetailPage';
import { SkillsPage } from './pages/SkillsPage';
import { CommonMistakesPage } from './pages/CommonMistakesPage';
import { MistakeDetailPage } from './pages/MistakeDetailPage';
import LevelTestPage from './pages/LevelTestPage';
import { DailyEnglishPage } from './pages/DailyEnglishPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ContactPage } from './pages/ContactPage';
import { GeminiChatPage } from './pages/GeminiChatPage';
import { FloatingChatWidget } from './components/FloatingChatWidget';

// Data
import { EDUCATIONAL_LESSONS } from './data/lessons';
import { ENGLISH_TENSES } from './data/tenses';
import { VOCABULARY_WORDS, VOCABULARY_CATEGORIES } from './data/vocabulary';
import { FEATURED_QUIZZES } from './data/quizzes';
import { COMMON_MISTAKES } from './data/mistakes';
import { FOUR_SKILLS } from './data/skills';
import { LATEST_ARTICLES } from './data/articles';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path.endsWith('/') && path.length > 1
        ? path.slice(0, -1)
        : path;
    }
    return '/';
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Synchronize browser history and page navigation.
  const navigate = (path: string) => {
    let cleanPath = path;

    if (cleanPath.endsWith('/') && cleanPath.length > 1) {
      cleanPath = cleanPath.slice(0, -1);
    }

    if (cleanPath !== currentPath) {
      window.history.pushState({}, '', cleanPath);
      setCurrentPath(cleanPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      let path = window.location.pathname;

      if (path.endsWith('/') && path.length > 1) {
        path = path.slice(0, -1);
      }

      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Update document titles, descriptions, and canonical URLs for SEO.
  useEffect(() => {
    let pageTitle =
      'ENGVERO – Learn English. Practice Daily. Speak Confidently.';

    let pageDesc =
      'Learn English online with clear grammar lessons, practical vocabulary, tenses, quizzes, and daily practice.';

    if (currentPath === '/grammar') {
      pageTitle =
        'English Grammar Lessons: Rules, Examples & Practice | ENGVERO';

      pageDesc =
        'Learn English grammar with clear rules, examples, sentence structures, verb tenses, articles, prepositions, and practice exercises.';
    } else if (currentPath.startsWith('/grammar/')) {
      const slug = currentPath.replace('/grammar/', '');
      const lesson = EDUCATIONAL_LESSONS.find((l) => l.slug === slug);

      if (lesson) {
        pageTitle = `${lesson.title} – ENGVERO`;
        pageDesc = lesson.summary;
      }
    } else if (currentPath === '/tenses') {
      pageTitle = 'English Tenses: 12 Tenses, Rules & Examples | ENGVERO';

      pageDesc =
        'Learn all 12 English tenses with clear rules, formulas, signal words, examples, and practical English sentences.';
    } else if (currentPath.startsWith('/tenses/')) {
      const slug = currentPath.replace('/tenses/', '');
      const tense = ENGLISH_TENSES.find((t) => t.slug === slug);

      if (tense) {
        pageTitle = `${tense.name} Tense Guide – ENGVERO`;
        pageDesc = tense.keyUse;
      }
    } else if (currentPath === '/vocabulary') {
      pageTitle = 'English Vocabulary Builder – ENGVERO';

      pageDesc =
        'Build English vocabulary with useful words, collocations, phrasal verbs, idioms, and practical examples.';
    } else if (currentPath.startsWith('/vocabulary/')) {
      const slug = currentPath.replace('/vocabulary/', '');
      const word = VOCABULARY_WORDS.find((w) => w.slug === slug);

      if (word) {
        pageTitle = `${word.word} Meaning, Examples & Usage | ENGVERO`;

        pageDesc = `Learn the meaning of ${word.word.toLowerCase()}, its pronunciation, synonyms, antonyms, common collocations, and practical English examples.`;
      } else {
        const category = VOCABULARY_CATEGORIES.find(
          (c) => c.slug === slug
        );

        if (category) {
          pageTitle = `${category.name} Vocabulary – ENGVERO`;
          pageDesc = category.description;
        }
      }
    } else if (currentPath === '/pronunciation') {
      pageTitle = 'English Pronunciation & Phonetics Guide – ENGVERO';

      pageDesc =
        'Improve English pronunciation with vowel sounds, syllable stress, consonant clarity, and natural English rhythm.';
    } else if (currentPath === '/quizzes') {
      pageTitle = 'Free English Quizzes & Tests – ENGVERO';

      pageDesc =
        'Practice English with interactive quizzes covering grammar, tenses, vocabulary, and common mistakes.';
    } else if (currentPath.startsWith('/quizzes/')) {
      const slug = currentPath.replace('/quizzes/', '');
      const quiz = FEATURED_QUIZZES.find((q) => q.slug === slug);

      if (quiz) {
        pageTitle = `${quiz.title} – ENGVERO`;
        pageDesc = quiz.description;
      }
    } else if (currentPath === '/common-mistakes') {
      pageTitle = 'Common English Mistakes Explained – ENGVERO';

      pageDesc =
        'Understand common English mistakes and confusing word pairs with clear rules and practical examples.';
    } else if (currentPath.startsWith('/common-mistakes/')) {
      const slug = currentPath.replace('/common-mistakes/', '');
      const mistake = COMMON_MISTAKES.find((m) => m.slug === slug);

      if (mistake) {
        pageTitle = `${mistake.title} – ENGVERO`;
        pageDesc = mistake.summary;
      }
    } else if (currentPath === '/speaking') {
      pageTitle =
        'English Speaking Practice – Speak English Confidently | ENGVERO';

      pageDesc =
        'Improve English speaking with practical conversations, natural expressions, pronunciation guidance, and fluency exercises.';
    } else if (currentPath === '/listening') {
      pageTitle =
        'English Listening Practice – Improve Listening Skills | ENGVERO';

      pageDesc =
        'Improve English listening with natural conversations, connected speech, varied accents, and practical listening exercises.';
    } else if (currentPath === '/reading') {
      pageTitle =
        'English Reading Practice – Improve Reading Skills | ENGVERO';

      pageDesc =
        'Build English reading skills with comprehension strategies, vocabulary in context, skimming, scanning, and reading exercises.';
    } else if (currentPath === '/writing') {
      pageTitle =
        'English Writing Practice – Improve Writing Skills | ENGVERO';

      pageDesc =
        'Improve English writing with grammar practice, paragraph structure, sentence building, and clear expression.';
    } else if (currentPath === '/english-level-test') {
      pageTitle = 'Free English Level Test (A1–C1) | ENGVERO';

      pageDesc =
        'Take a 12-question English level test to estimate your CEFR level from A1 to C1 and receive study recommendations.';
    } else if (currentPath === '/daily-english') {
      pageTitle = 'Daily English: Word, Phrase, Idiom & Tip – ENGVERO';

      pageDesc =
        'Practice English daily with useful vocabulary, phrases, idioms, grammar tips, and practical examples.';
    } else if (currentPath === '/blog') {
      pageTitle = 'English Learning Articles & Guides – ENGVERO';

      pageDesc =
        'Explore practical English learning articles about grammar, vocabulary, common mistakes, and learning strategies.';
    } else if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      const article = LATEST_ARTICLES.find((a) => a.slug === slug);

      if (article) {
        pageTitle = `${article.title} – ENGVERO`;
        pageDesc = article.excerpt;
      }
    } else if (currentPath === '/about') {
      pageTitle = 'About ENGVERO – Simple Lessons, Real English';

      pageDesc =
        'Discover ENGVERO, an English learning platform offering practical lessons, examples, quizzes, and daily practice.';
    } else if (currentPath === '/contact') {
      pageTitle = 'Contact ENGVERO – Feedback & Suggestions';

      pageDesc =
        'Contact ENGVERO to suggest English lesson topics, report errors, ask questions, or share educational feedback.';
    } else if (currentPath === '/chat') {
      pageTitle = 'AI English Practice Chat – ENGVERO';

      pageDesc =
        'Practice conversational English, receive grammar feedback, and improve your writing with an AI learning assistant.';
    }

    document.title = pageTitle;

    const siteUrl = 'https://engvero.netlify.app';
    const canonicalUrl = `${siteUrl}${currentPath === '/' ? '/' : currentPath}`;

    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;

    const updateMeta = (
      selector: string,
      attribute: 'name' | 'property',
      key: string,
      content: string
    ) => {
      let meta = document.querySelector<HTMLMetaElement>(selector);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
      }

      meta.content = content;
    };

    updateMeta('meta[name="description"]', 'name', 'description', pageDesc);

    updateMeta(
      'meta[property="og:title"]',
      'property',
      'og:title',
      pageTitle
    );

    updateMeta(
      'meta[property="og:description"]',
      'property',
      'og:description',
      pageDesc
    );

    updateMeta(
      'meta[property="og:url"]',
      'property',
      'og:url',
      canonicalUrl
    );

    updateMeta(
      'meta[name="twitter:title"]',
      'name',
      'twitter:title',
      pageTitle
    );

    updateMeta(
      'meta[name="twitter:description"]',
      'name',
      'twitter:description',
      pageDesc
    );
  }, [currentPath]);

  // Route resolver.
  const renderCurrentView = () => {
    // 1. Home
    if (currentPath === '' || currentPath === '/') {
      return <HomePage onNavigate={navigate} />;
    }

    // 2. Grammar index
    if (currentPath === '/grammar') {
      return <GrammarIndexPage onNavigate={navigate} />;
    }

    // 3. Grammar lesson detail
    if (currentPath.startsWith('/grammar/')) {
      const slug = currentPath.replace('/grammar/', '');
      const lesson = EDUCATIONAL_LESSONS.find((l) => l.slug === slug);

      if (lesson) {
        return <LessonDetailPage lesson={lesson} onNavigate={navigate} />;
      }

      return <GrammarIndexPage onNavigate={navigate} />;
    }

    // 4. Tenses index
    if (currentPath === '/tenses') {
      return <TensesIndexPage onNavigate={navigate} />;
    }

    // 5. Tense detail
    if (currentPath.startsWith('/tenses/')) {
      const slug = currentPath.replace('/tenses/', '');
      const tense = ENGLISH_TENSES.find((t) => t.slug === slug);

      if (tense) {
        return <TenseDetailPage tense={tense} onNavigate={navigate} />;
      }

      return <TensesIndexPage onNavigate={navigate} />;
    }

    // 6. Vocabulary index
    if (currentPath === '/vocabulary') {
      return <VocabularyIndexPage onNavigate={navigate} />;
    }

    // 7. Vocabulary word or category
    if (currentPath.startsWith('/vocabulary/')) {
      const slug = currentPath.replace('/vocabulary/', '');
      const word = VOCABULARY_WORDS.find((w) => w.slug === slug);

      if (word) {
        return <VocabularyWordPage word={word} onNavigate={navigate} />;
      }

      const cat = VOCABULARY_CATEGORIES.find((c) => c.slug === slug);

      if (cat) {
        const categoryWords = VOCABULARY_WORDS.filter(
          (w) =>
            w.category.toLowerCase() === cat.name.toLowerCase() ||
            cat.slug.includes(w.category.toLowerCase().replace(/ /g, '-')) ||
            cat.name.toLowerCase().includes(w.category.toLowerCase())
        );

        return (
          <VocabularyCategoryPage
            category={cat}
            words={categoryWords}
            onNavigate={navigate}
          />
        );
      }

      return <VocabularyIndexPage onNavigate={navigate} />;
    }

    // 8. Pronunciation
    if (currentPath === '/pronunciation') {
      return <PronunciationPage onNavigate={navigate} />;
    }

    // 9. Quizzes index
    if (currentPath === '/quizzes') {
      return <QuizzesIndexPage onNavigate={navigate} />;
    }

    // 10. Quiz detail
    if (currentPath.startsWith('/quizzes/')) {
      const slug = currentPath.replace('/quizzes/', '');
      const quiz = FEATURED_QUIZZES.find((q) => q.slug === slug);

      if (quiz) {
        return <QuizDetailPage quiz={quiz} onNavigate={navigate} />;
      }

      return <QuizzesIndexPage onNavigate={navigate} />;
    }

    // 11. Four skills
    if (
      ['/speaking', '/listening', '/reading', '/writing'].some((s) =>
        currentPath.startsWith(s)
      )
    ) {
      const parts = currentPath.split('/');
      const skillId = parts[1];
      const subpage = parts[2];
      const skill = FOUR_SKILLS.find((s) => s.id === skillId) || FOUR_SKILLS[0];

      return (
        <SkillsPage
          skill={skill}
          subpage={subpage}
          onNavigate={navigate}
        />
      );
    }

    // 12. Common mistakes index
    if (currentPath === '/common-mistakes') {
      return <CommonMistakesPage onNavigate={navigate} />;
    }

    // 13. Common mistake detail
    if (currentPath.startsWith('/common-mistakes/')) {
      const slug = currentPath.replace('/common-mistakes/', '');
      const mistake = COMMON_MISTAKES.find((m) => m.slug === slug);

      if (mistake) {
        return <MistakeDetailPage mistake={mistake} onNavigate={navigate} />;
      }

      return <CommonMistakesPage onNavigate={navigate} />;
    }

    // 14. English level test
    if (currentPath === '/english-level-test') {
      return <LevelTestPage onNavigate={navigate} />;
    }

    // 15. Daily English
    if (currentPath === '/daily-english') {
      return <DailyEnglishPage onNavigate={navigate} />;
    }

    // 16. Blog index
    if (currentPath === '/blog') {
      return <BlogIndexPage onNavigate={navigate} />;
    }

    // 17. Blog detail
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      const article = LATEST_ARTICLES.find((a) => a.slug === slug);

      if (article) {
        return <ArticleDetailPage article={article} onNavigate={navigate} />;
      }

      return <BlogIndexPage onNavigate={navigate} />;
    }

    // 18. About
    if (currentPath === '/about') {
      return <AboutPage onNavigate={navigate} />;
    }

    // 19. Contact
    if (currentPath === '/contact') {
      return <ContactPage onNavigate={navigate} />;
    }

    // 20. Gemini chat
    if (currentPath === '/chat') {
      return <GeminiChatPage onNavigate={navigate} />;
    }

    // Fallback for unknown routes.
    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main className="flex-1 w-full" id="main-content">
        {renderCurrentView()}
      </main>

      <Footer onNavigate={navigate} />

      <FloatingChatWidget
        onNavigate={navigate}
        currentPath={currentPath}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelect={(url) => navigate(url)}
      />
    </div>
  );
}
