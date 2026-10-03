import React from 'react';
import { ArrowRight, AlertTriangle, CheckCircle2, BookOpen } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PronunciationButton } from '../components/PronunciationButton';
import { CommonMistakeItem } from '../types';
import { QuizEngine } from '../components/QuizEngine';

interface MistakeDetailPageProps {
  mistake: CommonMistakeItem;
  onNavigate: (path: string) => void;
}

export const MistakeDetailPage: React.FC<MistakeDetailPageProps> = ({ mistake, onNavigate }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Common Mistakes', href: '/common-mistakes' },
          { label: `${mistake.pair[0]} vs ${mistake.pair[1]}` }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black text-sky-800 bg-sky-50 px-3 py-1 rounded-lg">
            {mistake.pair[0]}
          </span>
          <span className="text-sm font-bold text-slate-400">vs</span>
          <span className="text-xl font-black text-indigo-800 bg-indigo-50 px-3 py-1 rounded-lg">
            {mistake.pair[1]}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {mistake.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{mistake.summary}</p>

        {/* Fundamental Difference Box */}
        <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900">The Core Rule</span>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            {mistake.difference}
          </p>
        </div>
      </header>

      {/* Side by Side Breakdown */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Word 1 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-2xl font-bold text-sky-800">{mistake.firstWordRules.word}</h2>
            <PronunciationButton text={mistake.firstWordRules.word} size="sm" />
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{mistake.firstWordRules.meaning}</p>
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Natural Examples:</span>
            <ul className="space-y-2 text-xs">
              {mistake.firstWordRules.examples.map((ex, i) => (
                <li key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-800 flex items-center justify-between gap-2">
                  <span className="italic">&ldquo;{ex}&rdquo;</span>
                  <PronunciationButton text={ex} size="sm" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Word 2 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-2xl font-bold text-indigo-800">{mistake.secondWordRules.word}</h2>
            <PronunciationButton text={mistake.secondWordRules.word} size="sm" />
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{mistake.secondWordRules.meaning}</p>
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Natural Examples:</span>
            <ul className="space-y-2 text-xs">
              {mistake.secondWordRules.examples.map((ex, i) => (
                <li key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-800 flex items-center justify-between gap-2">
                  <span className="italic">&ldquo;{ex}&rdquo;</span>
                  <PronunciationButton text={ex} size="sm" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Examples */}
      <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-slate-900">Quick Comparison: Avoid This Mistake</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 space-y-1">
            <span className="font-bold text-rose-700 block">✕ Frequent Mistake:</span>
            <p className="text-sm font-semibold">&ldquo;{mistake.wrongExample}&rdquo;</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
            <span className="font-bold text-emerald-700 block">✓ Correct Expression:</span>
            <p className="text-sm font-semibold">&ldquo;{mistake.rightExample}&rdquo;</p>
          </div>
        </div>
      </section>

      {/* Embedded Quick Check Quiz */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Check Your Understanding</h2>
        <QuizEngine
          title={`Quick Check: ${mistake.pair[0]} vs ${mistake.pair[1]}`}
          questions={[mistake.quickCheck]}
          relatedLessonHref={mistake.relatedLessonHref}
          relatedLessonTitle={mistake.relatedLessonTitle}
          onRelatedNavigate={onNavigate}
        />
      </section>

      {/* Related Grammar Lesson */}
      <section className="p-6 rounded-2xl bg-slate-100/70 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Related Topic</span>
          <h3 className="text-sm font-bold text-slate-900">{mistake.relatedLessonTitle}</h3>
        </div>
        <button
          onClick={() => onNavigate(mistake.relatedLessonHref)}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer shrink-0"
        >
          <span>Study Related Lesson</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </article>
  );
};
