import React from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, BookOpen, Volume2 } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PronunciationButton } from '../components/PronunciationButton';
import { LessonItem } from '../types';
import { QuizEngine } from '../components/QuizEngine';

interface LessonDetailPageProps {
  lesson: LessonItem;
  onNavigate: (path: string) => void;
}

export const LessonDetailPage: React.FC<LessonDetailPageProps> = ({ lesson, onNavigate }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: lesson.category, href: lesson.category === 'Tenses' ? '/tenses' : '/grammar' },
          { label: lesson.title }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <span className="text-sky-700 font-semibold">{lesson.category}</span>
          <span aria-hidden="true">·</span>
          <span>Level {lesson.level}</span>
          <span aria-hidden="true">·</span>
          <span>{lesson.readTime}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {lesson.title}
          </h1>
          <PronunciationButton text={lesson.title} size="md" label="Listen to Title" />
        </div>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{lesson.summary}</p>

        {/* Formula Box */}
        {lesson.formula && (
          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">Formula & Structure</span>
            <p className="font-mono text-xs sm:text-sm text-sky-100">{lesson.formula}</p>
          </div>
        )}

        {/* Key Takeaway */}
        <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs sm:text-sm text-sky-950 flex items-start gap-3">
          <BookOpen className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Key Principle:</strong> {lesson.keyTakeaway}
          </div>
        </div>
      </header>

      {/* Rules & Explanations */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900">Grammar Rules & Core Applications</h2>

        {lesson.rules.map((rule, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-slate-900">{rule.heading}</h3>
            <p className="text-sm text-slate-700 leading-relaxed">{rule.explanation}</p>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Examples in Context:</span>
              <ul className="space-y-2">
                {rule.examples.map((ex, exIdx) => (
                  <li key={exIdx} className="flex items-center justify-between gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800">
                    <span className="font-medium">&ldquo;{ex}&rdquo;</span>
                    <PronunciationButton text={ex} size="sm" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Common Mistakes */}
      {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <h2 className="text-2xl font-bold text-slate-900">Common Traps & Mistakes to Avoid</h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {lesson.commonMistakes.map((mistake, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 text-rose-900">
                    <span className="font-bold text-rose-700 block mb-1">✕ Incorrect:</span>
                    <span>&ldquo;{mistake.wrong}&rdquo;</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-900">
                    <span className="font-bold text-emerald-700 block mb-1">✓ Correct:</span>
                    <span>&ldquo;{mistake.right}&rdquo;</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                  <strong className="text-slate-800">Why:</strong> {mistake.reason}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Embedded Practice Quiz */}
      {lesson.practiceQuestions && lesson.practiceQuestions.length > 0 && (
        <section className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <h2 className="text-2xl font-bold text-slate-900">Self-Practice Check</h2>
          </div>
          <QuizEngine
            title={`Quick Check: ${lesson.title}`}
            questions={lesson.practiceQuestions}
            relatedLessonHref={lesson.relatedQuizSlug ? `/quizzes/${lesson.relatedQuizSlug}` : undefined}
            relatedLessonTitle="Full Practice Quiz"
            onRelatedNavigate={onNavigate}
          />
        </section>
      )}

      {/* Internal Linking & Next Steps */}
      <section className="p-6 rounded-2xl bg-slate-100/80 border border-slate-200 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Related Educational Lessons & Quizzes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {lesson.relatedLessons.map((rel, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate(rel.href)}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-300 shadow-xs hover:shadow transition-all text-left flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700">{rel.category}</span>
                <p className="text-xs font-bold text-slate-900 group-hover:text-sky-700 transition-colors mt-1">
                  {rel.title}
                </p>
              </div>
              <span className="text-xs font-semibold text-sky-700 pt-3 flex items-center gap-1">
                <span>Study</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          ))}
        </div>
      </section>
    </article>
  );
};
