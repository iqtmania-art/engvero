import React from 'react';
import { ArrowRight, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMMON_MISTAKES } from '../data/mistakes';

interface CommonMistakesPageProps {
  onNavigate: (path: string) => void;
}

export const CommonMistakesPage: React.FC<CommonMistakesPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Common Mistakes' }]} onNavigate={onNavigate} />

      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Precision in Usage</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Common English Mistakes Explained
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
  Learn common English mistakes and confusing word pairs with clear
  explanations, practical examples, and simple rules. Improve your English
  grammar, vocabulary, and everyday communication by understanding the
  differences between commonly confused words and expressions.
</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COMMON_MISTAKES.map((mistake) => (
          <article
            key={mistake.id}
            onClick={() => onNavigate(`/common-mistakes/${mistake.slug}`)}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between space-y-4 cursor-pointer group"
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
              <h2 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                {mistake.title}
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">{mistake.summary}</p>

              <div className="p-3 bg-slate-50 rounded-xl space-y-1 text-xs">
                <p className="text-rose-700 truncate">
                  <span className="font-bold">✕</span> {mistake.wrongExample}
                </p>
                <p className="text-emerald-700 font-medium truncate">
                  <span className="font-bold">✓</span> {mistake.rightExample}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-800">
              <span>Read Rule & Take Quiz</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>

      <div className="p-8 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-900">Take the Common Mistakes Diagnostic Quiz</h3>
          <p className="text-xs text-slate-600">Test if you can accurately spot these deceptive word traps in real sentences.</p>
        </div>
        <button
          onClick={() => onNavigate('/quizzes/common-mistakes')}
          className="px-5 py-2.5 text-xs font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-xl transition-colors cursor-pointer shrink-0"
        >
          Start Diagnostic Quiz
        </button>
      </div>
    </div>
  );
};
