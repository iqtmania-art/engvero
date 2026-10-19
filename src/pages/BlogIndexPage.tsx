
import React from 'react';
import { ArrowRight, Clock, BookOpen, GraduationCap, Target } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LATEST_ARTICLES } from '../data/articles';

interface BlogIndexPageProps {
  onNavigate: (path: string) => void;
}

export const BlogIndexPage: React.FC<BlogIndexPageProps> = ({
  onNavigate,
}) => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs
        items={[{ label: 'Blog & Articles' }]}
        onNavigate={onNavigate}
      />

      {/* Blog Introduction */}
      <header className="space-y-4 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
          ENGVERO English Learning Resources
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          English Learning Blog: Grammar, Vocabulary & Practical Guides
        </h1>

        <p className="text-base text-slate-600 leading-relaxed">
          Improve your English with practical learning articles from ENGVERO.
          Explore grammar explanations, commonly confused English words,
          vocabulary-building tips, and strategies for everyday communication.
          Each guide is designed to help you understand English more clearly
          and apply what you learn in real situations.
        </p>
      </header>

      {/* Article Collection */}
      <section className="space-y-6" aria-labelledby="latest-articles-heading">
        <div className="space-y-2">
          <h2
            id="latest-articles-heading"
            className="text-2xl font-bold text-slate-900"
          >
            English Articles and Learning Guides
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
            Browse the articles below to practise English grammar, learn useful
            words, avoid common mistakes, and develop better language-learning
            habits.
          </p>
        </div>

        {LATEST_ARTICLES.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LATEST_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-sky-700">
                      {article.category}
                    </span>

                    <span aria-hidden="true">·</span>

                    <span className="flex items-center gap-1">
                      <Clock
                        className="w-3.5 h-3.5"
                        aria-hidden="true"
                      />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    <a
                      href={`/blog/${article.slug}`}
                      onClick={(event) => {
                        event.preventDefault();
                        onNavigate(`/blog/${article.slug}`);
                      }}
                      className="hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-sm"
                    >
                      {article.title}
                    </a>
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <a
                    href={`/blog/${article.slug}`}
                    onClick={(event) => {
                      event.preventDefault();
                      onNavigate(`/blog/${article.slug}`);
                    }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-sm"
                  >
                    Read Full Article
                    <ArrowRight
                      className="w-4 h-4"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
            New English learning articles are being prepared. Please check
            back soon.
          </p>
        )}
      </section>

      {/* Learning Topics */}
      <section className="space-y-5" aria-labelledby="learning-topics-heading">
        <div className="space-y-2">
          <h2
            id="learning-topics-heading"
            className="text-2xl font-bold text-slate-900"
          >
            Explore English Learning Topics
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
            Choose a learning area that matches your goals and build your
            English skills step by step.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-3">
            <BookOpen
              className="w-6 h-6 text-sky-700"
              aria-hidden="true"
            />

            <h3 className="font-bold text-slate-900">
              Grammar and Common Mistakes
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Understand grammar rules and learn how to avoid frequent English
              mistakes.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-3">
            <GraduationCap
              className="w-6 h-6 text-sky-700"
              aria-hidden="true"
            />

            <h3 className="font-bold text-slate-900">
              Vocabulary and Usage
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Learn useful words, meanings, example sentences, and expressions
              for everyday communication.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-3">
            <Target
              className="w-6 h-6 text-sky-700"
              aria-hidden="true"
            />

            <h3 className="font-bold text-slate-900">
              English Practice and Study Tips
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Discover practical ways to improve your reading, writing,
              listening, and speaking habits.
            </p>
          </div>
        </div>
      </section>

      {/* Continue Learning */}
      <section className="p-6 sm:p-8 rounded-2xl bg-sky-50 border border-sky-100 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          Continue Your English Learning Journey
        </h2>

        <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
          Reading English articles is a useful way to expand your vocabulary
          and strengthen your understanding of grammar. Combine reading with
          regular practice to make steady progress.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => onNavigate('/vocabulary')}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-700 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-800 transition-colors"
          >
            Explore Vocabulary
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/english-level-test')}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-800 hover:bg-sky-100 transition-colors"
          >
            Check Your English Level
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </section>
    </main>
  );
};
