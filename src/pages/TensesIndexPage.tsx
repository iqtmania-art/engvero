import React, { useState } from 'react';
import { ArrowRight, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ENGLISH_TENSES } from '../data/tenses';

interface TensesIndexPageProps {
  onNavigate: (path: string) => void;
}

export const TensesIndexPage: React.FC<TensesIndexPageProps> = ({ onNavigate }) => {
  const [filterTime, setFilterTime] = useState<'All' | 'Present' | 'Past' | 'Future'>('All');

  const filteredTenses = ENGLISH_TENSES.filter(
    (t) => filterTime === 'All' || t.timeFrame === filterTime
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Tenses' }]} onNavigate={onNavigate} />

      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Tense Architecture</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Master the 12 English Tenses
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          English verbs express time through 3 timeframes (Past, Present, Future) multiplied by 4 aspects (Simple, Continuous, Perfect, Perfect Continuous). Understand the logic behind every tense with formulas and natural example sentences.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl max-w-sm">
        {(['All', 'Present', 'Past', 'Future'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setFilterTime(tab)}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              filterTime === tab
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tenses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTenses.map((tense) => (
          <div
            key={tense.id}
            onClick={() => onNavigate(`/tenses/${tense.slug}`)}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between space-y-4 cursor-pointer group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-teal-700">{tense.timeFrame}</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px] font-medium text-slate-700">
                  {tense.aspect}
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                {tense.name}
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">{tense.keyUse}</p>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1 font-mono text-[11px] text-slate-700">
                <p className="font-bold text-slate-900">Formula:</p>
                <p className="text-teal-900">{tense.formula.positive}</p>
              </div>

              <div className="pt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Signal Words:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {tense.signalWords.slice(0, 4).map((sw, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                      {sw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
              <span>View Full Tense Guide</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Tense Quiz CTA */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-teal-50 to-slate-50 border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-900">Ready to test your tenses?</h3>
          <p className="text-xs text-slate-600">Challenge yourself with questions covering past, present, and future aspects.</p>
        </div>
        <button
          onClick={() => onNavigate('/quizzes/english-tenses')}
          className="px-5 py-2.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition-colors cursor-pointer shrink-0"
        >
          Take 12 Tenses Quiz
        </button>
      </div>
    </div>
  );
};
