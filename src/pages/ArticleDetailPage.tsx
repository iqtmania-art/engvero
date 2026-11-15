import { AuthorBox } from '../components/AuthorBox';
import React from 'react';
import { ArrowRight, Clock, Calendar, CheckCircle2, BookOpen } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArticleItem } from '../types';

interface ArticleDetailPageProps {
  article: ArticleItem;
  onNavigate: (path: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ article, onNavigate }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog' },
          { label: article.title }
        ]}
        onNavigate={onNavigate}
      />

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <span className="text-sky-700 font-semibold">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
          <span aria-hidden="true">·</span>
          <span>Published {article.publishedDate}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed font-medium">{article.excerpt}</p>
      </header>

      {/* Key Takeaways */}
      <section className="p-6 rounded-2xl bg-sky-50 border border-sky-200 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-sky-900 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-sky-700" />
          Key Editorial Takeaways
        </h2>
        <ul className="space-y-2 text-xs sm:text-sm text-sky-950">
          {article.keyPoints.map((pt, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="font-bold text-sky-700 shrink-0">â€¢</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Content Paragraphs */}
      <section className="space-y-6 text-slate-800 text-sm sm:text-base leading-relaxed">
        {article.contentParagraphs.map((para, idx) => (
          <p key={idx} className="leading-relaxed">
            {para}
          </p>
        ))}
      </section>

      {/* Related Section CTA */}
      {article.relatedSlug && (
        <section className="p-6 rounded-2xl bg-slate-100/70 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Explore Interactive Lesson & Practice</h3>
            <p className="text-xs text-slate-600">Deepen your knowledge with structured exercises and rules.</p>
          </div>
          <button
            onClick={() => onNavigate(article.relatedSlug!)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-xl transition-colors cursor-pointer shrink-0"
          >
            <span>Go to Lesson</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      )}
      <AuthorBox />
  </article>
  );
};
