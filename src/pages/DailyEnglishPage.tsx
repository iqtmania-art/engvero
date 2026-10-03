import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PronunciationButton } from '../components/PronunciationButton';
import { DAILY_ENGLISH_DATA } from '../data/dailyEnglish';
import { Calendar, Sparkles, BookOpen, Clock, ArrowRight } from 'lucide-react';

interface DailyEnglishPageProps {
  onNavigate: (path: string) => void;
}

export const DailyEnglishPage: React.FC<DailyEnglishPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Daily English' }]} onNavigate={onNavigate} />

      <div className="space-y-4 max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Daily Routine</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Daily English Hub
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Consistent, small doses of English build natural conversational intuition. Here is today&apos;s curated language set:
        </p>
      </div>

      <div className="space-y-8">
        {/* Word of the Day Card */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Word of the Day
            </span>
            <span className="text-xs text-slate-400">{DAILY_ENGLISH_DATA.wordOfTheDay.partOfSpeech}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">{DAILY_ENGLISH_DATA.wordOfTheDay.word}</h2>
              <span className="text-xs font-mono text-slate-500">{DAILY_ENGLISH_DATA.wordOfTheDay.phonetic}</span>
            </div>
            <PronunciationButton text={DAILY_ENGLISH_DATA.wordOfTheDay.word} size="md" label="Listen" />
          </div>

          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            {DAILY_ENGLISH_DATA.wordOfTheDay.definition}
          </p>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs italic text-slate-700 flex items-center justify-between gap-3">
            <span>&ldquo;{DAILY_ENGLISH_DATA.wordOfTheDay.example}&rdquo;</span>
            <PronunciationButton text={DAILY_ENGLISH_DATA.wordOfTheDay.example} size="sm" />
          </div>

          <div className="pt-2 text-xs text-slate-500">
            <strong>Collocations:</strong> {DAILY_ENGLISH_DATA.wordOfTheDay.collocation}
          </div>
        </section>

        {/* Phrase of the Day Card */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> Phrase of the Day
            </span>
            <span className="text-xs text-slate-400">Conversational English</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-900">{DAILY_ENGLISH_DATA.phraseOfTheDay.phrase}</h2>
            <PronunciationButton text={DAILY_ENGLISH_DATA.phraseOfTheDay.phrase} size="md" label="Listen" />
          </div>

          <p className="text-sm text-slate-700 leading-relaxed">
            {DAILY_ENGLISH_DATA.phraseOfTheDay.meaning}
          </p>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs italic text-slate-700 flex items-center justify-between gap-3">
            <span>&ldquo;{DAILY_ENGLISH_DATA.phraseOfTheDay.example}&rdquo;</span>
            <PronunciationButton text={DAILY_ENGLISH_DATA.phraseOfTheDay.example} size="sm" />
          </div>

          <p className="text-xs text-slate-500">
            <strong>Usage Note:</strong> {DAILY_ENGLISH_DATA.phraseOfTheDay.usageNote}
          </p>
        </section>

        {/* Idiom of the Day */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">Idiom of the Day</span>
            <span className="text-xs text-slate-400">Figurative Language</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-900">{DAILY_ENGLISH_DATA.idiomOfTheDay.idiom}</h2>
            <PronunciationButton text={DAILY_ENGLISH_DATA.idiomOfTheDay.idiom} size="md" label="Listen" />
          </div>

          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            {DAILY_ENGLISH_DATA.idiomOfTheDay.meaning}
          </p>

          {DAILY_ENGLISH_DATA.idiomOfTheDay.origin && (
            <p className="text-xs text-slate-500">
              <strong>Origin:</strong> {DAILY_ENGLISH_DATA.idiomOfTheDay.origin}
            </p>
          )}

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs italic text-slate-700 flex items-center justify-between gap-3">
            <span>&ldquo;{DAILY_ENGLISH_DATA.idiomOfTheDay.example}&rdquo;</span>
            <PronunciationButton text={DAILY_ENGLISH_DATA.idiomOfTheDay.example} size="sm" />
          </div>
        </section>

        {/* Grammar Tip */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Quick Grammar Tip
            </span>
          </div>

          <h2 className="text-xl font-bold text-slate-900">{DAILY_ENGLISH_DATA.grammarTip.title}</h2>
          <p className="text-sm text-slate-700 leading-relaxed">{DAILY_ENGLISH_DATA.grammarTip.rule}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 text-rose-900">
              <span className="font-bold text-rose-700 block mb-1">✕ Incorrect:</span>
              <span>&ldquo;{DAILY_ENGLISH_DATA.grammarTip.incorrect}&rdquo;</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-900">
              <span className="font-bold text-emerald-700 block mb-1">✓ Correct:</span>
              <span>&ldquo;{DAILY_ENGLISH_DATA.grammarTip.correct}&rdquo;</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
