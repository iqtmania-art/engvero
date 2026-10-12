import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { EDUCATIONAL_LESSONS } from '../data/lessons';
interface GrammarIndexPageProps {
  onNavigate: (path: string) => void;
}

export const GrammarIndexPage: React.FC<GrammarIndexPageProps> = ({ onNavigate }) => {
  const [filterLevel, setFilterLevel] = useState<string>('All');

  const levels = ['All', 'A1', 'A2', 'B1', 'B2'];

  const filteredLessons = EDUCATIONAL_LESSONS.filter(
    (l) => filterLevel === 'All' || l.level === filterLevel
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Grammar' }]} onNavigate={onNavigate} />

      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Grammar Curriculum</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          English Grammar Lessons
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Master English sentence structures, verb tenses, articles, and prepositions with clear rules, real-world examples, and diagnostic practice questions.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl max-w-md">
        <span className="text-xs text-slate-500 font-semibold px-2">Level:</span>
        {levels.map((lvl) => (
          <button
            key={lvl}
            type="button"
            onClick={() => setFilterLevel(lvl)}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              filterLevel === lvl
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {lvl}
          </button>
        ))}
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map((lesson) => (
          <article
            key={lesson.id}
            onClick={() => onNavigate(`/grammar/${lesson.slug}`)}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between space-y-4 cursor-pointer group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-sky-700">Level {lesson.level}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {lesson.readTime}
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                {lesson.title}
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">{lesson.summary}</p>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-700">
              <span>Study Lesson</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>

      {/* Quick cross links */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-sky-50 to-slate-50 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-900">Want to test your grammar skills?</h3>
          <p className="text-xs text-slate-600">Take an instant interactive quiz with immediate score and explanations.</p>
        </div>
        <button
          onClick={() => onNavigate('/quizzes')}
          className="px-5 py-2.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-xl transition-colors cursor-pointer shrink-0"
        >
          Explore Grammar Quizzes
        </button>
      </div>
    </div>
  );
};
