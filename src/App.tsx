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
import { LevelTestPage } from './pages/LevelTestPage';
import { DailyEnglishPage } from './pages/DailyEnglishPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { AboutPage } from './pages/AboutPage';
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
      return path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
    }
    return '/';
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Synchronize browser history and page titles for SEO
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
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update dynamic document title & meta description for SEO
  useEffect(() => {
    let pageTitle = 'ENGVERO – Learn English. Practice Daily. Speak Confidently.';
    let pageDesc = 'Clear English lessons, practical vocabulary, grammar practice, quizzes, and everyday English for learners at every level.';

    if (currentPath === '/grammar') {
      pageTitle = 'English Grammar Lessons: Rules, Examples & Practice | ENGVERO';
pageDesc = 'Learn English grammar with clear rules, examples, sentence structures, verb tenses, articles, prepositions, and practice exercises.';
    } else if (currentPath.startsWith('/grammar/')) {
      const slug = currentPath.replace('/grammar/', '');
      const lesson = EDUCATIONAL_LESSONS.find((l) => l.slug === slug);
      if (lesson) {
        pageTitle = `${lesson.title} – ENGVERO`;
        pageDesc = lesson.summary;
      }
    } else if (currentPath === '/tenses') {
      pageTitle = 'Master the 12 English Tenses – ENGVERO';
      pageDesc = 'Learn all 12 English tenses with formulas, signal words, and example sentences.';
    } else if (currentPath.startsWith('/tenses/')) {
      const slug = currentPath.replace('/tenses/', '');
      const tense = ENGLISH_TENSES.find((t) => t.slug === slug);
      if (tense) {
        pageTitle = `${tense.name} Tense Guide – ENGVERO`;
        pageDesc = tense.keyUse;
      }
    } else if (currentPath === '/vocabulary') {
      pageTitle = 'English Vocabulary Builder – ENGVERO';
      pageDesc = 'High-frequency English vocabulary, collocations, phrasal verbs, and idioms with audio pronunciation.';
    } else if (currentPath.startsWith('/vocabulary/')) {
      const slug = currentPath.replace('/vocabulary/', '');
      const word = VOCABULARY_WORDS.find((w) => w.slug === slug);
      if (word) {
        pageTitle = `${word.word} (${word.pos}): Meaning, Examples & Audio – ENGVERO`;
        pageDesc = word.definition;
      } else {
        const cat = VOCABULARY_CATEGORIES.find((c) => c.slug === slug);
        if (cat) {
          pageTitle = `${cat.name} Vocabulary – ENGVERO`;
          pageDesc = cat.description;
        }
      }
    } else if (currentPath === '/pronunciation') {
      pageTitle = 'English Pronunciation & Phonetics Guide – ENGVERO';
      pageDesc = 'Audio pronunciation lessons on vowel sounds, syllable stress, minimal pairs, and the schwa sound.';
    } else if (currentPath === '/quizzes') {
      pageTitle = 'Free English Quizzes & Tests – ENGVERO';
      pageDesc = 'Interactive multiple-choice English grammar, vocabulary, tenses, and common mistakes quizzes.';
    } else if (currentPath.startsWith('/quizzes/')) {
      const slug = currentPath.replace('/quizzes/', '');
      const quiz = FEATURED_QUIZZES.find((q) => q.slug === slug);
      if (quiz) {
        pageTitle = `${quiz.title} – ENGVERO`;
        pageDesc = quiz.description;
      }
    } else if (currentPath === '/common-mistakes') {
      pageTitle = 'Common English Mistakes Explained – ENGVERO';
      pageDesc = 'Stop confusing Say vs Tell, Look vs See, Much vs Many, and other frequent ESL word traps.';
    } else if (currentPath.startsWith('/common-mistakes/')) {
      const slug = currentPath.replace('/common-mistakes/', '');
      const mistake = COMMON_MISTAKES.find((m) => m.slug === slug);
      if (mistake) {
        pageTitle = `${mistake.title} – ENGVERO`;
        pageDesc = mistake.summary;
      }
    } else if (currentPath === '/speaking') {
      pageTitle = 'English Speaking Practice & Fluency – ENGVERO';
      pageDesc = 'Develop conversational rhythm, dialogue frameworks, and self-introduction formulas.';
    } else if (currentPath === '/listening') {
      pageTitle = 'English Listening Comprehension Skills – ENGVERO';
      pageDesc = 'Decode connected speech, weak forms, reduced vowels, and varied accents.';
    } else if (currentPath === '/reading') {
      pageTitle = 'English Reading Comprehension & Inference – ENGVERO';
      pageDesc = 'Extensive and intensive reading strategies to absorb high-yield collocations.';
    } else if (currentPath === '/writing') {
      pageTitle = 'English Writing & Paragraph Architecture – ENGVERO';
      pageDesc = 'Master sentence variety, formal email etiquette, and coherent paragraph flow.';
    } else if (currentPath === '/english-level-test') {
      pageTitle = 'English Level Diagnostic Test (A1–C1) – ENGVERO';
      pageDesc = 'Take our 12-question diagnostic test to discover which CEFR level matches your current English skills.';
    } else if (currentPath === '/daily-english') {
      pageTitle = 'Daily English: Word, Phrase, Idiom & Tip – ENGVERO';
      pageDesc = 'Daily bite-sized English lessons, audio pronunciation, and real example sentences.';
    } else if (currentPath === '/blog') {
      pageTitle = 'Educational English Articles & Guides – ENGVERO';
      pageDesc = 'Editorial articles on grammar rules, learning methodologies, and conversational fluency.';
    } else if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      const article = LATEST_ARTICLES.find((a) => a.slug === slug);
      if (article) {
        pageTitle = `${article.title} – ENGVERO`;
        pageDesc = article.excerpt;
      }
    } else if (currentPath === '/about') {
      pageTitle = 'About ENGVERO – Simple Lessons, Real English';
      pageDesc = 'Learn about our educational mission to deliver free, high-quality, practical English resources.';
    } else if (currentPath === '/contact') {
      pageTitle = 'Contact ENGVERO – Feedback & Suggestions';
      pageDesc = 'Send feedback, suggest new lesson topics, or ask a grammar question.';
    } else if (currentPath === '/chat') {
      pageTitle = 'Gemini English Chatbot & AI Practice Partner – ENGVERO';
      pageDesc = 'Practice conversational English, get instant grammar corrections, and receive IELTS writing analysis with Gemini.';
    }

    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageDesc);
    }
  }, [currentPath]);

  // Route Resolver
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
        return <VocabularyCategoryPage category={cat} words={categoryWords} onNavigate={navigate} />;
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
    if (['/speaking', '/listening', '/reading', '/writing'].some((s) => currentPath.startsWith(s))) {
      const parts = currentPath.split('/');
      const skillId = parts[1];
      const subpage = parts[2];
      const skill = FOUR_SKILLS.find((s) => s.id === skillId) || FOUR_SKILLS[0];
      return <SkillsPage skill={skill} subpage={subpage} onNavigate={navigate} />;
    }

    // 12. Common mistakes index
    if (currentPath === '/common-mistakes') {
      return <CommonMistakesPage onNavigate={navigate} />;
    }

    // 13. Mistake detail
    if (currentPath.startsWith('/common-mistakes/')) {
      const slug = currentPath.replace('/common-mistakes/', '');
      const mistake = COMMON_MISTAKES.find((m) => m.slug === slug);
      if (mistake) {
        return <MistakeDetailPage mistake={mistake} onNavigate={navigate} />;
      }
      return <CommonMistakesPage onNavigate={navigate} />;
    }

    // 14. Level test
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

    // 20. Gemini Chat
    if (currentPath === '/chat') {
      return <GeminiChatPage onNavigate={navigate} />;
    }

    // Fallback default
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      {/* Responsive Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full" id="main-content">
        {renderCurrentView()}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={navigate} />

      {/* Floating Gemini Chat Widget */}
      <FloatingChatWidget onNavigate={navigate} currentPath={currentPath} />

      {/* Instant Search Dialog */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelect={(url) => navigate(url)}
      />
    </div>
  );
}
