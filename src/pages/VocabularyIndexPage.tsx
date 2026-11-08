import React, { useState } from 'react';
import { ArrowRight, Sparkles, Volume2 } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PronunciationButton } from '../components/PronunciationButton';
import { VOCABULARY_CATEGORIES, VOCABULARY_WORDS } from '../data/vocabulary';

interface VocabularyIndexPageProps {
  onNavigate: (path: string) => void;
}

export const VocabularyIndexPage: React.FC<VocabularyIndexPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Vocabulary' }]} onNavigate={onNavigate} />

      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">Lexicon & Collocations</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Build Your English Vocabulary
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Move beyond isolated word translation. Master high-frequency vocabulary, natural collocations, phrasal verbs, and idioms with authentic example sentences and native audio pronunciation.
        </p>
      </div>

      {/* Featured Words Spotlight */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Featured High-Yield Words</h2>
          <span className="text-xs text-slate-500">Click to study definition &amp; collocations</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {VOCABULARY_WORDS.map((w) => (
            <div
              key={w.slug}
              onClick={() => onNavigate(`/vocabulary/${w.slug}`)}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between space-y-4 cursor-pointer group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                    {w.word}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
                    {w.level}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-500">{w.phonetic}</span>
                  <span className="text-xs text-slate-400">· {w.pos}</span>
                  <PronunciationButton text={w.word} size="sm" />
                </div>
                <p className="text-xs text-slate-700 leading-relaxed pt-1">{w.definition}</p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-700">
                <span>View Synonyms & Examples</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vocabulary Categories */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Categories</span>
          <h2 className="text-2xl font-bold text-slate-900">Thematic Vocabulary Domains</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VOCABULARY_CATEGORIES.map((cat) => (
            <div
              key={cat.slug}
              onClick={() => onNavigate(`/vocabulary/${cat.slug}`)}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between space-y-3 cursor-pointer group"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold text-indigo-600">{cat.wordCount}</span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cat.description}</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {cat.keyThemes.map((t, ti) => (
                    <span key={ti} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-700">
                <span>Browse Domain</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vocabulary Quiz Link */}
      <div className="p-8 rounded-2xl bg-indigo-50/70 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-900">Test Your Practical Vocabulary</h3>
          <p className="text-xs text-slate-600">Challenge your understanding of collocations, precise adjectives, and idioms.</p>
        </div>
        <button
          onClick={() => onNavigate('/quizzes/vocabulary')}
          className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-700 hover:bg-indigo-800 rounded-xl transition-colors cursor-pointer shrink-0"
        >
          Take Vocabulary Quiz
        </button>
      </div>
    </div>
  );
};
