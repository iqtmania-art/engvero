import React from 'react';
import { ArrowRight, BookOpen, Clock, AlertTriangle } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PronunciationButton } from '../components/PronunciationButton';
import { TenseItem } from '../types';

interface TenseDetailPageProps {
  tense: TenseItem;
  onNavigate: (path: string) => void;
}

export const TenseDetailPage: React.FC<TenseDetailPageProps> = ({ tense, onNavigate }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Tenses', href: '/tenses' },
          { label: tense.name }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <span className="text-teal-700 font-semibold">{tense.timeFrame}</span>
          <span aria-hidden="true">·</span>
          <span>{tense.aspect} Aspect</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {tense.name} Tense
          </h1>
          <PronunciationButton text={tense.name} size="md" label="Pronounce Tense" />
        </div>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{tense.keyUse}</p>

        {/* Formulas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400">Positive (+)</span>
            <p className="font-mono text-xs text-teal-100">{tense.formula.positive}</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">Negative (-)</span>
            <p className="font-mono text-xs text-rose-100">{tense.formula.negative}</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">Question (?)</span>
            <p className="font-mono text-xs text-sky-100">{tense.formula.question}</p>
          </div>
        </div>
      </header>

      {/* Signal Words */}
      <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
        <h2 className="text-lg font-bold text-slate-900">Key Signal Words & Time Markers</h2>
        <p className="text-xs text-slate-600">
          When you see or hear these adverbs and time expressions, this tense is very commonly used:
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {tense.signalWords.map((sw, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-100 text-teal-900 text-xs font-semibold"
            >
              {sw}
            </span>
          ))}
        </div>
      </section>

      {/* Examples with Audio */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Natural Example Sentences</h2>
        <div className="space-y-3">
          {tense.examples.map((ex, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between gap-4"
            >
              <p className="text-sm font-medium text-slate-800">&ldquo;{ex}&rdquo;</p>
              <PronunciationButton text={ex} size="sm" />
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistake */}
      <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <h2 className="text-lg font-bold text-slate-900">Common Tense Pitfall</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 text-rose-900">
            <span className="font-bold text-rose-700 block mb-1">✕ Mistake:</span>
            <span>&ldquo;{tense.commonMistake.incorrect}&rdquo;</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-900">
            <span className="font-bold text-emerald-700 block mb-1">✓ Correct:</span>
            <span>&ldquo;{tense.commonMistake.correct}&rdquo;</span>
          </div>
        </div>

        <p className="text-xs text-slate-600 pt-1 leading-relaxed">
          <strong className="text-slate-800">Explanation:</strong> {tense.commonMistake.note}
        </p>
      </section>

      {/* Related Quiz CTA */}
      <section className="p-6 rounded-2xl bg-teal-50 border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-teal-950">Practice {tense.name}</h3>
          <p className="text-xs text-teal-800">Test your command with immediate feedback questions.</p>
        </div>
        <button
          onClick={() => onNavigate(`/quizzes/${tense.relatedQuizSlug}`)}
          className="px-5 py-2.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition-colors cursor-pointer shrink-0"
        >
          Take Tense Quiz
        </button>
      </section>
    </article>
  );
};
