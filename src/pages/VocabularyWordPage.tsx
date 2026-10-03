import React from 'react';
import { ArrowRight, Volume2, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PronunciationButton } from '../components/PronunciationButton';
import { VocabularyWord } from '../types';

interface VocabularyWordPageProps {
  word: VocabularyWord;
  onNavigate: (path: string) => void;
}

export const VocabularyWordPage: React.FC<VocabularyWordPageProps> = ({ word, onNavigate }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Vocabulary', href: '/vocabulary' },
          { label: word.word }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <span className="text-indigo-700 font-semibold">{word.category}</span>
          <span aria-hidden="true">·</span>
          <span>Level {word.level}</span>
          <span aria-hidden="true">·</span>
          <span>{word.pos}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              {word.word}
            </h1>
            <p className="text-sm font-mono text-slate-500">{word.phonetic}</p>
          </div>
          <PronunciationButton text={word.word} size="lg" label="Listen to Word" />
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Definition</span>
          <p className="text-base sm:text-lg text-slate-900 font-medium mt-1 leading-relaxed">
            {word.definition}
          </p>
        </div>

        {word.usageNote && (
          <p className="text-xs text-slate-600 bg-sky-50/60 p-3 rounded-lg border border-sky-100">
            <strong className="text-sky-900">Usage Note:</strong> {word.usageNote}
          </p>
        )}
      </header>

      {/* Example Sentences */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Example Sentences in Context</h2>
        <div className="space-y-3">
          {word.examples.map((ex, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between gap-4"
            >
              <p className="text-sm font-medium text-slate-800 leading-relaxed">&ldquo;{ex}&rdquo;</p>
              <PronunciationButton text={ex} size="sm" />
            </div>
          ))}
        </div>
      </section>

      {/* Synonyms & Antonyms */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Synonyms */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Synonyms (Similar Words)</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {word.synonyms.map((syn, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 text-xs font-medium border border-emerald-100"
              >
                {syn}
              </span>
            ))}
          </div>
        </div>

        {/* Antonyms */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-xs font-bold">
              ≠
            </span>
            <span>Antonyms (Opposites)</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {word.antonyms.map((ant, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-900 text-xs font-medium border border-rose-100"
              >
                {ant}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Collocations */}
      <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
        <h2 className="text-lg font-bold text-slate-900">Common Collocations (Word Partners)</h2>
        <p className="text-xs text-slate-600">
          Native English speakers naturally pair &quot;{word.word}&quot; with these expressions:
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {word.collocations.map((col, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-950 text-xs font-semibold"
            >
              {col}
            </span>
          ))}
        </div>
      </section>

      {/* Next actions */}
      <section className="p-6 rounded-2xl bg-slate-100/70 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900">Expand Your Vocabulary</h3>
          <p className="text-xs text-slate-600">Explore more high-utility words in the {word.category} domain.</p>
        </div>
        <button
          onClick={() => onNavigate('/vocabulary')}
          className="px-4 py-2 text-xs font-semibold text-white bg-indigo-700 hover:bg-indigo-800 rounded-lg transition-colors cursor-pointer shrink-0"
        >
          Back to Vocabulary Hub
        </button>
      </section>
    </article>
  );
};
