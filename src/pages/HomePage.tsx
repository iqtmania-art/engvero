import React from 'react';
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  Clock,
  Volume2,
  AlertTriangle,
  Calendar,
  CheckCircle2,
  Award,
  ChevronRight,
  Headphones,
  Mic,
  PenTool,
  GraduationCap,
  Bot,
  Zap
} from 'lucide-react';
import { FiveMinuteChallenge } from '../components/FiveMinuteChallenge';
import { PronunciationButton } from '../components/PronunciationButton';
import { DAILY_ENGLISH_DATA } from '../data/dailyEnglish';
import { ENGLISH_TENSES } from '../data/tenses';
import { COMMON_MISTAKES } from '../data/mistakes';
import { FEATURED_QUIZZES } from '../data/quizzes';
import { VOCABULARY_CATEGORIES } from '../data/vocabulary';
import { FOUR_SKILLS } from '../data/skills';
import { ENGLISH_LEVELS } from '../data/levels';
import { LATEST_ARTICLES } from '../data/articles';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="pt-8 sm:pt-14 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 bg-gradient-to-b from-sky-50/50 via-white to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wide">
              <span>ENGVERO Education</span>
              <span aria-hidden="true">·</span>
              <span>Global English Learning</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] text-balance">
              Learn English. <br />
              <span className="text-sky-700">Practice Daily.</span> <br />
              Speak Confidently.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Clear English lessons, practical vocabulary, grammar practice, quizzes, and everyday English for learners at every level.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/grammar/present-simple')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-xl shadow-sm hover:shadow transition-all cursor-pointer focus-visible:outline-sky-500"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/quizzes')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-all cursor-pointer focus-visible:outline-sky-500"
              >
                <span>Take a Quiz</span>
              </button>
            </div>

            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free Open Educational Access
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> CEFR Aligned (A1 to C2)
              </span>
            </div>
          </div>

          {/* Right Column: Educational Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 bg-white group">
              <img
                src="/src/assets/images/hero_english_learning_1791020255111.jpg"
                alt="Educational illustration representing structured English lessons, grammar syntax, and vocabulary notebooks"
                className="w-full h-auto object-cover aspect-16/9 sm:aspect-4/3"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold">Brand Promise</p>
                  <p className="text-slate-300">Simple lessons · Real English · Daily practice</p>
                </div>
                <button
                  onClick={() => onNavigate('/daily-english')}
                  className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors cursor-pointer"
                >
                  Explore Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK PRACTICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center sm:text-left space-y-1 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Quick Access</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Practice English Your Way
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: 'Grammar',
              desc: 'Clear rules, structure explanations, sentence formulas, and practical examples.',
              url: '/grammar',
              icon: BookOpen,
              color: 'text-sky-700 bg-sky-50'
            },
            {
              title: 'Vocabulary',
              desc: 'High-frequency words, idioms, collocations, and natural conversational phrasing.',
              url: '/vocabulary',
              icon: Sparkles,
              color: 'text-indigo-700 bg-indigo-50'
            },
            {
              title: 'Tenses',
              desc: 'Master all 12 English tenses with timeline diagrams and signal words.',
              url: '/tenses',
              icon: Clock,
              color: 'text-teal-700 bg-teal-50'
            },
            {
              title: 'Pronunciation',
              desc: 'Train vowel sounds, consonant clusters, word stress, and rhythm with native audio.',
              url: '/pronunciation',
              icon: Volume2,
              color: 'text-emerald-700 bg-emerald-50'
            },
            {
              title: 'Common Mistakes',
              desc: 'Stop confusing Say vs Tell, Look vs See, Much vs Many, and tricky prepositions.',
              url: '/common-mistakes',
              icon: AlertTriangle,
              color: 'text-amber-700 bg-amber-50'
            },
            {
              title: 'Daily English',
              desc: 'Word of the day, phrase of the day, idiom of the day, and quick daily tips.',
              url: '/daily-english',
              icon: Calendar,
              color: 'text-cyan-700 bg-cyan-50'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => onNavigate(item.url)}
                className="text-left p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-sky-300 transition-all group flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-sky-700 group-hover:translate-x-1 transition-transform">
                  <span>Explore {item.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Gemini Chatbot Feature Banner */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400">
              <Bot className="w-4 h-4" />
              <span>Multi-Turn AI Practice</span>
              <span>·</span>
              <span>Powered by Gemini</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Practice English Conversations with Gemini
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Chat naturally with our specialized AI tutor. Switch between General Conversation (gemini-3.8-flash), Fast Grammar Checking (gemini-3.1-flash-lite), or Deep Academic &amp; IELTS Writing Review.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('/chat')}
              className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 shadow-md transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Chat with Gemini</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. 5-MINUTE ENGLISH CHALLENGE */}
      <FiveMinuteChallenge onNavigate={onNavigate} />

      {/* 4. DAILY ENGLISH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Daily English Bite</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Daily English
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Curated everyday English to reinforce your daily habit.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/daily-english')}
            className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <span>View Full Daily Archive</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Word of the Day */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700">Word of the Day</span>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-bold text-slate-900">{DAILY_ENGLISH_DATA.wordOfTheDay.word}</h3>
                <span className="text-xs text-slate-500">{DAILY_ENGLISH_DATA.wordOfTheDay.partOfSpeech}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-500">{DAILY_ENGLISH_DATA.wordOfTheDay.phonetic}</span>
                <PronunciationButton text={DAILY_ENGLISH_DATA.wordOfTheDay.word} size="sm" />
              </div>
              <p className="text-xs text-slate-700 pt-1 leading-relaxed">{DAILY_ENGLISH_DATA.wordOfTheDay.definition}</p>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs italic text-slate-600">
                &ldquo;{DAILY_ENGLISH_DATA.wordOfTheDay.example}&rdquo;
              </div>
            </div>
            <button
              onClick={() => onNavigate(`/vocabulary/${DAILY_ENGLISH_DATA.wordOfTheDay.slug}`)}
              className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 cursor-pointer pt-2 border-t border-slate-100"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Phrase of the Day */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">Phrase of the Day</span>
              <h3 className="text-xl font-bold text-slate-900">{DAILY_ENGLISH_DATA.phraseOfTheDay.phrase}</h3>
              <div className="flex items-center gap-2">
                <PronunciationButton text={DAILY_ENGLISH_DATA.phraseOfTheDay.phrase} size="sm" label="Listen" />
              </div>
              <p className="text-xs text-slate-700 pt-1 leading-relaxed">{DAILY_ENGLISH_DATA.phraseOfTheDay.meaning}</p>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs italic text-slate-600">
                &ldquo;{DAILY_ENGLISH_DATA.phraseOfTheDay.example}&rdquo;
              </div>
            </div>
            <button
              onClick={() => onNavigate('/daily-english')}
              className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 cursor-pointer pt-2 border-t border-slate-100"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Idiom of the Day */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700">Idiom of the Day</span>
              <h3 className="text-xl font-bold text-slate-900">{DAILY_ENGLISH_DATA.idiomOfTheDay.idiom}</h3>
              <p className="text-xs text-slate-700 pt-1 leading-relaxed">{DAILY_ENGLISH_DATA.idiomOfTheDay.meaning}</p>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs italic text-slate-600">
                &ldquo;{DAILY_ENGLISH_DATA.idiomOfTheDay.example}&rdquo;
              </div>
            </div>
            <button
              onClick={() => onNavigate('/daily-english')}
              className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 cursor-pointer pt-2 border-t border-slate-100"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Grammar Tip */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700">Grammar Tip</span>
              <h3 className="text-base font-bold text-slate-900 leading-snug">{DAILY_ENGLISH_DATA.grammarTip.title}</h3>
              <p className="text-xs text-slate-700 pt-1 leading-relaxed">{DAILY_ENGLISH_DATA.grammarTip.rule}</p>
              <div className="space-y-1 pt-1 text-xs">
                <p className="text-rose-700 flex items-center gap-1">
                  <span className="font-bold">✕</span> {DAILY_ENGLISH_DATA.grammarTip.incorrect}
                </p>
                <p className="text-emerald-700 flex items-center gap-1 font-medium">
                  <span className="font-bold">✓</span> {DAILY_ENGLISH_DATA.grammarTip.correct}
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('/grammar')}
              className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 cursor-pointer pt-2 border-t border-slate-100"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. POPULAR ENGLISH TOPICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-1 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Curriculum Foundation</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Popular English Topics
          </h2>
          <p className="text-xs text-slate-600">
            The core pillars every learner visits to advance their English mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: 'English Grammar',
              desc: 'From parts of speech and sentence structure to prepositions, relative clauses, and conditionals.',
              url: '/grammar',
              lessonCount: '18 Lessons Available'
            },
            {
              title: '12 English Tenses',
              desc: 'Master the full matrix of Past, Present, and Future across Simple, Continuous, Perfect, and Perfect Continuous.',
              url: '/tenses',
              lessonCount: '12 Detailed Guides'
            },
            {
              title: 'English Vocabulary',
              desc: 'High-yield words for conversation, business, academic writing, and travel with collocations and synonyms.',
              url: '/vocabulary',
              lessonCount: '8 Thematic Categories'
            },
            {
              title: 'English Pronunciation',
              desc: 'Phonetic alphabet (IPA), word stress, syllable reduction, connected speech, and eliminating flat accents.',
              url: '/pronunciation',
              lessonCount: 'Audio Models Included'
            },
            {
              title: 'Common English Mistakes',
              desc: 'Say vs Tell, Speak vs Talk, House vs Home, and false friends that cause unintentional miscommunication.',
              url: '/common-mistakes',
              lessonCount: 'Diagnostic Traps Solved'
            },
            {
              title: 'English Speaking Practice',
              desc: 'Practical dialogue scripts, transition signposts, self-introduction formulas, and conversational fillers.',
              url: '/speaking',
              lessonCount: 'Fluency Frameworks'
            }
          ].map((topic, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onNavigate(topic.url)}
              className="text-left p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-300 transition-all group flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-2">
                <span className="text-xs font-semibold text-sky-700">{topic.lessonCount}</span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{topic.desc}</p>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-slate-700 group-hover:text-sky-700 group-hover:translate-x-1 transition-all">
                <span>View Full Topic Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 6. LEARN BY LEVEL (A1 - C2) */}
      <section className="bg-slate-100/70 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">CEFR Framework</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Learn English by Level
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              The Common European Framework of Reference (CEFR) standardizes English proficiency from beginner to fluent mastery. Click any level to explore recommended study topics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ENGLISH_LEVELS.map((lvl) => (
              <div
                key={lvl.code}
                onClick={() => onNavigate(`/quizzes/${lvl.quizSlug}`)}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-300 transition-all group flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-sky-700">{lvl.code}</span>
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                      {lvl.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{lvl.descriptor}</p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Core Grammar Focus:</span>
                    <div className="flex flex-wrap gap-1 text-[11px] text-slate-600">
                      {lvl.grammarFocus.map((g, gi) => (
                        <span key={gi} className="bg-slate-50 border border-slate-200/60 rounded px-1.5 py-0.5">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs font-semibold text-sky-700 border-t border-slate-100 mt-4">
                  <span>Practice Level {lvl.code} Quiz</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURED QUIZZES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Immediate Assessment</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Test Your English
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Interactive multiple-choice quizzes with instant explanations. No account or sign-up required.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/quizzes')}
            className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <span>Browse All Quizzes</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURED_QUIZZES.map((quiz) => (
            <div
              key={quiz.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-sky-700">{quiz.category}</span>
                  <div className="flex items-center gap-2">
                    <span>{quiz.difficulty}</span>
                    <span>·</span>
                    <span>{quiz.questions.length} Questions</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{quiz.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{quiz.description}</p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate(`/quizzes/${quiz.slug}`)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start Quiz</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. COMMON ENGLISH MISTAKES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Precision in Usage</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Common English Mistakes
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Easily confused word pairs and the fundamental rules to keep them straight.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/common-mistakes')}
            className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <span>View All Word Distinctions</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {COMMON_MISTAKES.map((mistake) => (
            <div
              key={mistake.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-sky-800 bg-sky-50 px-2 py-0.5 rounded">
                    {mistake.pair[0]}
                  </span>
                  <span className="text-xs font-bold text-slate-400">vs</span>
                  <span className="text-sm font-black text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded">
                    {mistake.pair[1]}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{mistake.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{mistake.summary}</p>
                <div className="p-3 bg-slate-50 rounded-xl space-y-1.5 text-xs">
                  <p className="text-rose-700">
                    <span className="font-bold">Wrong:</span> {mistake.wrongExample}
                  </p>
                  <p className="text-emerald-700 font-medium">
                    <span className="font-bold">Right:</span> {mistake.rightExample}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onNavigate(`/common-mistakes/${mistake.slug}`)}
                className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 pt-2 border-t border-slate-100 cursor-pointer"
              >
                <span>Learn More & Practice</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 9. ENGLISH TENSES */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Grammar Matrix</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Master the 12 English Tenses
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Every tense serves a specific temporal perspective. Click any tense for formula structures, signal words, and realistic sentences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ENGLISH_TENSES.map((tense) => (
              <div
                key={tense.id}
                onClick={() => onNavigate(`/tenses/${tense.slug}`)}
                className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-sky-500 hover:bg-slate-800 transition-all flex flex-col justify-between space-y-3 cursor-pointer group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>{tense.timeFrame}</span>
                    <span>{tense.aspect}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                    {tense.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">{tense.keyUse}</p>
                </div>
                <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs text-sky-400 group-hover:translate-x-0.5 transition-transform">
                  <span>View Tense Rules</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('/tenses')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-xl transition-colors cursor-pointer"
            >
              <span>View Full 12 Tenses Overview Guide</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 10. ENGLISH VOCABULARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Active Expression</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Build Your English Vocabulary
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Curated vocabulary domains designed for real conversations, workplace interactions, and exams.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/vocabulary')}
            className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <span>Explore All Categories</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VOCABULARY_CATEGORIES.map((cat) => (
            <div
              key={cat.slug}
              onClick={() => onNavigate(`/vocabulary/${cat.slug}`)}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between space-y-3 cursor-pointer group"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold text-slate-400">{cat.wordCount}</span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cat.description}</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {cat.keyThemes.slice(0, 2).map((t, ti) => (
                    <span key={ti} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-700">
                <span>Browse Words</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FOUR SKILLS */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-2 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Integrated Fluency</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Build All Four English Skills
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl mx-auto lg:mx-0">
                True language mastery requires balance. ENGVERO develops your receptive capabilities (listening and reading) alongside active production (speaking and writing).
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <img
                src="/src/assets/images/skills_language_hub_1791020271669.jpg"
                alt="Infographic illustrating speaking, listening, reading, and writing"
                className="w-48 sm:w-56 h-auto rounded-xl shadow-md border border-slate-200 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUR_SKILLS.map((skill) => {
              const icons = {
                speaking: Mic,
                listening: Headphones,
                reading: BookOpen,
                writing: PenTool
              };
              const SkillIcon = icons[skill.id as keyof typeof icons] || GraduationCap;

              return (
                <div
                  key={skill.id}
                  onClick={() => onNavigate(`/${skill.slug}`)}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between space-y-4 cursor-pointer group"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
                      <SkillIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{skill.subtitle}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-700">
                    <span>How ENGVERO Helps You</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. ENGLISH LEVEL TEST PROMO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
              Personalized Benchmark
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              How Good Is Your English?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Take our English Level Test and discover which level best matches your current English skills. Receive personalized topic recommendations based on your diagnostic results.
            </p>
            <p className="text-[11px] text-slate-400">
              12 diagnostic questions · 5 minutes · Immediate score &amp; CEFR-aligned study suggestions.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <button
              type="button"
              onClick={() => onNavigate('/english-level-test')}
              className="px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all text-sm cursor-pointer whitespace-nowrap focus-visible:outline-white"
            >
              Take the Level Test
            </button>
          </div>
        </div>
      </section>

      {/* 13. LATEST ENGLISH ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Editorial Insights</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Latest from ENGVERO
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              In-depth articles covering language rules, common obstacles, and vocabulary strategies.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/blog')}
            className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <span>View All Articles</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LATEST_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onNavigate(`/blog/${article.slug}`)}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between space-y-4 cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-sky-700">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{article.excerpt}</p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-700">
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 14. FINAL CALL TO ACTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-sky-50 to-white border border-sky-200 rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-sm">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-sky-600 text-white flex items-center justify-center">
            <GraduationCap className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Make English Part of Your Daily Routine.
            </h2>
            <p className="text-base text-slate-600">
              Learn something useful, practice it, and come back tomorrow.
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/grammar')}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-sky-700 hover:bg-sky-800 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer focus-visible:outline-sky-500"
            >
              <span>Start Learning English</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
