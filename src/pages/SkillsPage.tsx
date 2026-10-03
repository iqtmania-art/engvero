import React from 'react';
import { ArrowRight, BookOpen, Mic, Headphones, PenTool, CheckCircle2, Volume2 } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PronunciationButton } from '../components/PronunciationButton';
import { SkillCategory } from '../types';

interface SkillsPageProps {
  skill: SkillCategory;
  subpage?: string;
  onNavigate: (path: string) => void;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ skill, subpage, onNavigate }) => {
  const icons = {
    speaking: Mic,
    listening: Headphones,
    reading: BookOpen,
    writing: PenTool
  };
  const Icon = icons[skill.id as keyof typeof icons] || BookOpen;

  const formattedSubpage = subpage
    ? subpage.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : null;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={
          formattedSubpage
            ? [
                { label: `${skill.title} Skills`, href: `/${skill.slug}` },
                { label: formattedSubpage }
              ]
            : [{ label: `${skill.title} Skills` }]
        }
        onNavigate={onNavigate}
      />

      {/* Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center">
          <Icon className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Language Pillar</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {formattedSubpage ? `${skill.title}: ${formattedSubpage}` : `${skill.title} Mastery`}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
            {skill.subtitle}
          </p>
        </div>

        {formattedSubpage && (
          <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs sm:text-sm text-sky-950 flex items-center justify-between">
            <div>
              <strong className="block font-bold">Specialized Practice Module:</strong>
              <span>Targeted {skill.title.toLowerCase()} exercise for {formattedSubpage.toLowerCase()} fluency.</span>
            </div>
            <PronunciationButton text={`Practice ${formattedSubpage} in English`} size="sm" />
          </div>
        )}

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{skill.description}</p>

        {/* Methodology Card */}
        <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs sm:text-sm text-sky-950">
          <strong className="font-bold text-sky-900 block mb-1">Methodology & Learning Strategy:</strong>
          {skill.methodology}
        </div>
      </header>

      {/* Core Techniques */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Core Techniques to Practice</h2>
        <div className="grid grid-cols-1 gap-4">
          {skill.coreTechniques.map((tech, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <span>{tech.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Structured Practice Exercises */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Graded Practice Activities</h2>
        <div className="grid grid-cols-1 gap-4">
          {skill.practiceExercises.map((ex, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900">{ex.title}</h3>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
                  Target Level: {ex.level}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{ex.instructions}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Lessons */}
      <section className="p-6 rounded-2xl bg-slate-100/70 border border-slate-200 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
          Recommended Lessons for {skill.title}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {skill.recommendedLessons.map((rec, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate(rec.href)}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-300 shadow-xs flex items-center justify-between text-left cursor-pointer group"
            >
              <span className="text-xs font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                {rec.title}
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          ))}
        </div>
      </section>
    </article>
  );
};
