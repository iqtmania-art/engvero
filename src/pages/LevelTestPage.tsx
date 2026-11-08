import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LevelTestEngine } from '../components/LevelTestEngine';
import { Award, CheckCircle2, Clock, HelpCircle } from 'lucide-react';

interface LevelTestPageProps {
  onNavigate: (path: string) => void;
}

export const LevelTestPage: React.FC<LevelTestPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'English Level Test' }]} onNavigate={onNavigate} />

      <div className="space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Diagnostic Assessment</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          How Good Is Your English?
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Take our diagnostic English Level Test to discover which CEFR level (A1 to C1) best matches your current language skills. After answering 12 questions, you will receive an immediate score breakdown and targeted study recommendations.
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-2">
          <span className="flex items-center gap-1.5 font-medium">
            <Clock className="w-4 h-4 text-sky-600" /> ~5 Minutes
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-sky-600" /> 12 Diagnostic Questions
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Award className="w-4 h-4 text-sky-600" /> CEFR Aligned Placement
          </span>
        </div>
      </div>

      {/* The Working Test Engine */}
      <LevelTestEngine onNavigate={onNavigate} />

      {/* FAQ / Info block */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
        <h3 className="font-bold text-slate-800 flex items-center gap-1.5">
          <HelpCircle className="w-4 h-4 text-slate-500" />
          About this diagnostic assessment
        </h3>
        <p className="leading-relaxed">
          This test is designed as an educational self-evaluation tool to help you identify strengths and target areas for improvement across English grammar, vocabulary, tenses, and collocations. It does not replace an official proctored CEFR certification (such as IELTS or Cambridge English), but provides a reliable indicator for selecting appropriate study lessons on ENGVERO.
        </p>
      </div>
    </div>
  );
};
