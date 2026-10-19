
import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LevelTestEngine } from '../components/LevelTestEngine';
import {
  Award,
  CheckCircle2,
  Clock,
  HelpCircle,
  BookOpen,
  Target,
} from 'lucide-react';

interface LevelTestPageProps {
  onNavigate: (path: string) => void;
}

const LevelTestPage: React.FC<LevelTestPageProps> = ({ onNavigate }) => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[{ label: 'English Level Test' }]}
        onNavigate={onNavigate}
      />

      {/* Page Introduction */}
      <header className="space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
          Free English Assessment
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Free English Level Test: Find Your CEFR Level
        </h1>

        <p className="text-base text-slate-600 leading-relaxed">
          Discover your estimated English proficiency with this free English
          level test. Answer 12 diagnostic questions to receive an immediate
          result indicating your possible CEFR level, from A1 beginner to C1
          advanced, along with recommendations for improving your English.
        </p>

        {/* Feature Indicators */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-2">
          <span className="flex items-center gap-1.5 font-medium">
            <Clock className="w-4 h-4 text-sky-600" />
            About 5 Minutes
          </span>

          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-sky-600" />
            12 Questions
          </span>

          <span className="flex items-center gap-1.5 font-medium">
            <Award className="w-4 h-4 text-sky-600" />
            CEFR-Based Estimate
          </span>
        </div>
      </header>

      {/* Interactive English Level Test */}
      <section aria-label="Take the English level test">
        <LevelTestEngine onNavigate={onNavigate} />
      </section>

      {/* Understanding Your English Level */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-sky-700" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            What Your English Level Means
          </h2>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          The Common European Framework of Reference for Languages (CEFR)
          describes language proficiency using six main levels. This test
          provides an educational estimate within the A1 to C1 range.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="font-bold text-slate-900">A1 – Beginner</h3>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              Understand and use basic everyday expressions and simple
              sentences.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="font-bold text-slate-900">A2 – Elementary</h3>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              Communicate in simple, familiar situations and discuss everyday
              topics.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="font-bold text-slate-900">B1 – Intermediate</h3>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              Understand the main points of clear communication and handle
              many familiar situations.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="font-bold text-slate-900">B2 – Upper Intermediate</h3>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              Understand complex ideas and communicate with greater fluency
              and independence.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white sm:col-span-2">
            <h3 className="font-bold text-slate-900">C1 – Advanced</h3>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              Understand demanding texts and express ideas fluently and
              effectively in academic, professional, and social settings.
            </p>
          </div>
        </div>
      </section>

      {/* How to Improve */}
      <section className="p-6 rounded-2xl bg-sky-50 border border-sky-100 space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-sky-700" />
          <h2 className="text-lg font-bold text-slate-900">
            How to Improve Your English Level
          </h2>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed">
          Use your result to identify what to practise next. Build vocabulary
          through useful words and example sentences, review grammar regularly,
          read English texts, and practise listening and speaking consistently.
          Retake the test after further study to review your progress.
        </p>

        <button
          type="button"
          onClick={() => onNavigate('/vocabulary')}
          className="inline-flex items-center justify-center rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-800"
        >
          Explore English Vocabulary
        </button>
      </section>

      {/* Frequently Asked Questions */}
      <section
        className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-5"
        aria-labelledby="level-test-faq"
      >
        <h2
          id="level-test-faq"
          className="font-bold text-slate-900 flex items-center gap-2 text-xl"
        >
          <HelpCircle className="w-5 h-5 text-sky-700" />
          English Level Test: Frequently Asked Questions
        </h2>

        <div className="divide-y divide-slate-200">
          <details className="py-4">
            <summary className="cursor-pointer font-semibold text-slate-900">
              How can I check my English level online for free?
            </summary>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Take the free test on this page, answer the 12 diagnostic
              questions, and review the result provided by the test.
            </p>
          </details>

          <details className="py-4">
            <summary className="cursor-pointer font-semibold text-slate-900">
              What is a CEFR level checker?
            </summary>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              A CEFR level checker estimates language proficiency using the
              Common European Framework of Reference for Languages. This
              assessment gives an educational estimate from A1 to C1.
            </p>
          </details>

          <details className="py-4">
            <summary className="cursor-pointer font-semibold text-slate-900">
              How long does the English level test take?
            </summary>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              The test is designed to take approximately five minutes,
              depending on how quickly you answer the questions.
            </p>
          </details>

          <details className="py-4">
            <summary className="cursor-pointer font-semibold text-slate-900">
              Is this an official English proficiency certificate?
            </summary>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              No. This is an educational self-assessment, not an official
              certification. It does not replace an accredited language
              examination or a formal assessment of all four language skills.
            </p>
          </details>

          <details className="py-4">
            <summary className="cursor-pointer font-semibold text-slate-900">
              Does the test cover every CEFR level?
            </summary>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              The test is intended to estimate levels from A1 to C1. It does
              not claim to assess the full range of CEFR levels or provide a
              formal proficiency diagnosis.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
};

export default LevelTestPage;
