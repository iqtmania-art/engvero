import React from 'react';
import { ArrowRight, BookOpen, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PronunciationButton } from '../components/PronunciationButton';
import { VocabularyCategoryInfo, VocabularyWord } from '../types';

interface VocabularyCategoryPageProps {
  category: VocabularyCategoryInfo;
  words: VocabularyWord[];
  onNavigate: (path: string) => void;
}

export const VocabularyCategoryPage: React.FC<VocabularyCategoryPageProps> = ({
  category,
  words,
  onNavigate
}) => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Vocabulary', href: '/vocabulary' },
          { label: category.name }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <span className="text-indigo-700 font-semibold">Vocabulary Domain</span>
          <span aria-hidden="true">·</span>
          <span>{category.wordCount}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {category.name}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {category.description}
        </p>

        {/* Key themes */}
        <div className="pt-2 space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Themes in this Domain:</span>
          <div className="flex flex-wrap gap-2">
            {category.keyThemes.map((theme: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-950 text-xs font-semibold"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Words in this Category */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Featured Words &amp; Expressions</h2>

        {words.length === 0 ? (
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-600 space-y-2">
            <p>More words are being curated for this thematic domain.</p>
            <button
              onClick={() => onNavigate('/vocabulary')}
              className="text-xs font-semibold text-indigo-700 underline cursor-pointer"
            >
              Browse other categories
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {words.map((w) => (
              <div
                key={w.slug}
                onClick={() => onNavigate(`/vocabulary/${w.slug}`)}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                      {w.word}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{w.phonetic}</span>
                    <span className="text-xs text-slate-400">· {w.pos}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
                      {w.level}
                    </span>
                    <PronunciationButton text={w.word} size="sm" />
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{w.definition}</p>
                  <p className="text-xs italic text-slate-500 line-clamp-1">&ldquo;{w.examples[0]}&rdquo;</p>
                </div>

                <div className="pt-2 sm:pt-0 sm:pl-4 border-t sm:border-t-0 sm:border-l border-slate-100 flex items-center justify-between sm:justify-center text-xs font-semibold text-indigo-700 shrink-0">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ml-1" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Practice Quiz CTA */}
      <section className="p-6 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-indigo-950">Test Your Vocabulary &amp; Collocations</h3>
          <p className="text-xs text-indigo-800">Practice word meanings and natural pairings with immediate feedback.</p>
        </div>
        <button
          onClick={() => onNavigate('/quizzes/vocabulary')}
          className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-700 hover:bg-indigo-800 rounded-xl transition-colors cursor-pointer shrink-0"
        >
          Take Vocabulary Quiz
        </button>
      </section>
    </article>
  );
};
