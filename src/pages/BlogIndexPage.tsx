import React from 'react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LATEST_ARTICLES } from '../data/articles';

interface BlogIndexPageProps {
  onNavigate: (path: string) => void;
}

export const BlogIndexPage: React.FC<BlogIndexPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Blog & Articles' }]} onNavigate={onNavigate} />

      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">ENGVERO Editorial</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Educational English Articles
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Comprehensive guides exploring English grammar rules, easily confused vocabulary, learning methodologies, and everyday conversational tips.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LATEST_ARTICLES.map((article) => (
          <article
            key={article.id}
            onClick={() => onNavigate(`/blog/${article.slug}`)}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between space-y-4 cursor-pointer group"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-sky-700">{article.category}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {article.readTime}
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                {article.title}
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{article.excerpt}</p>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-700">
              <span>Read Full Article</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
