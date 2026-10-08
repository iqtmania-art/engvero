import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CheckCircle2, BookOpen, Globe, Award } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'About ENGVERO' }]} onNavigate={onNavigate} />

      <header className="space-y-4 border-b border-slate-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">About Our Platform</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          About ENGVERO
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed font-medium">
  ENGVERO is an English learning platform designed to help learners improve
  grammar, vocabulary, pronunciation, speaking, listening, reading, and writing
  through clear lessons, practical examples, interactive quizzes, and daily
  English practice.
</p>
      </header>

      <section className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
        <p>
          ENGVERO was created to solve a widespread problem in language education: English courses and textbooks that are bloated with complex linguistic jargon, buried behind mandatory paywalls, or cluttered with childish distractions.
        </p>
        <p>
          We believe that English proficiency develops when clear grammatical concepts are immediately reinforced through realistic examples, audio pronunciation, and daily practice quizzes. Our platform is completely open, ad-light, and engineered to serve students, adult professionals, ESL/EFL learners, and travelers worldwide.
        </p>
      </section>

      {/* Core Principles */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <BookOpen className="w-6 h-6 text-sky-700" />
          <h2 className="text-base font-bold text-slate-900">Zero Artificial Fluff</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every explanation focuses strictly on practical application, natural collocations, and avoiding real-world pitfalls.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <Globe className="w-6 h-6 text-teal-700" />
          <h2 className="text-base font-bold text-slate-900">Global CEFR Standards</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            All materials are structured according to the Common European Framework of Reference for Languages (A1 through C2).
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <Award className="w-6 h-6 text-indigo-700" />
          <h2 className="text-base font-bold text-slate-900">Immediate Interactive Practice</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Test yourself instantly on any device without mandatory account creation or subscription gates.
          </p>
        </div>
      </section>

      {/* Editorial Policy */}
      <section className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs leading-relaxed text-slate-600">
        <h2 className="font-bold text-slate-900 text-sm">Editorial &amp; Content Integrity</h2>
        <p>
          ENGVERO does not publish unverified statistics, fabricated user testimonials, or machine-generated placeholder text. All educational definitions, example sentences, and diagnostic questions are carefully developed by experienced English educators and verified against standard corpora.
        </p>
      </section>
    </article>
  );
};
