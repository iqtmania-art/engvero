import React, { useState } from 'react';
import { ArrowRight, Clock, FileQuestion, Award } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FEATURED_QUIZZES } from '../data/quizzes';

interface QuizzesIndexPageProps {
  onNavigate: (path: string) => void;
}

export const QuizzesIndexPage: React.FC<QuizzesIndexPageProps> = ({ onNavigate }) => {
  const [filterCat, setFilterCat] = useState<string>('All');

  const categories = ['All', 'Grammar', 'Tenses', 'Vocabulary', 'Common Mistakes'];

  const filteredQuizzes = FEATURED_QUIZZES.filter(
    (q) => filterCat === 'All' || q.category === filterCat
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Quizzes' }]} onNavigate={onNavigate} />

      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Self-Testing Engine</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Test Your English with Free Quizzes
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Interactive multiple-choice quizzes with immediate explanations for every question. No accounts, sign-ups, or passwords required. Practice immediately and review your accuracy.
        </p>
      </div>

      {/* Categories Filter */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl max-w-md overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilterCat(cat)}
            className={`py-1.5 px-3 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              filterCat === cat
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Quizzes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-sky-700">{quiz.category}</span>
                <div className="flex items-center gap-2">
                  <span>{quiz.difficulty}</span>
                  <span>·</span>
                  <span>Level {quiz.level}</span>
                </div>
              </div>
              <h2 className="text-xl font-bold text-slate-900">{quiz.title}</h2>
              <p className="text-xs text-slate-600 leading-relaxed">{quiz.description}</p>
              <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <FileQuestion className="w-3.5 h-3.5 text-slate-400" />
                  {quiz.questions.length} questions
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  ~{quiz.estimatedMinutes} min
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate(`/quizzes/${quiz.slug}`)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Quiz Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* English Level Test Card */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-sky-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-300">Comprehensive Check</span>
          <h3 className="text-2xl font-bold">Looking for a full CEFR Placement Test?</h3>
          <p className="text-xs text-slate-300 max-w-lg">
            Take our 12-question diagnostic assessment spanning A1 to C1 levels to evaluate your overall English profile.
          </p>
        </div>
        <button
          onClick={() => onNavigate('/english-level-test')}
          className="px-6 py-3 text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl transition-colors cursor-pointer shrink-0"
        >
          Take English Level Test
        </button>
      </div>
    </div>
  );
};
