import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LevelTestEngine } from '../components/LevelTestEngine';
import { Award, CheckCircle2, Clock, HelpCircle } from 'lucide-react';

interface LevelTestPageProps {
  onNavigate: (path: string) => void;
}

const LevelTestPage: React.FC<LevelTestPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs
        items={[{ label: 'English Level Test' }]}
        onNavigate={onNavigate}
      />

      {/* Page Introduction */}
      <div className="space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
          Diagnostic Assessment
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          How Good Is Your English?
        </h1>

        <p className="text-base text-slate-600 leading-relaxed">
          Take our free English level test to discover your CEFR level from A1
          to C1. Answer 12 diagnostic questions and get an immediate score
          breakdown with targeted study recommendations to improve your English
          skills.
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-2">
          <span className="flex items-center gap-1.5 font-medium">
            <Clock className="w-4 h-4 text-sky-600" />
            ~5 Minutes
          </span>

          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-sky-600" />
            12 Diagnostic Questions
          </span>

          <span className="flex items-center gap-1.5 font-medium">
            <Award className="w-4 h-4 text-sky-600" />
            CEFR Aligned Placement
          </span>
        </div>
      </div>

      {/* Interactive English Level Test */}
      <LevelTestEngine onNavigate={onNavigate} />

      {/* Information and Frequently Asked Questions */}
      <section
        className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-5"
        aria-labelledby="level-test-about"
      >
        <h2
          id="level-test-about"
          className="font-bold text-slate-800 flex items-center gap-1.5 text-base"
        >
          <HelpCircle className="w-4 h-4 text-slate-500" />
          About the English Level Test
        </h2>

        <p className="leading-relaxed">
          This English Level Test is an educational self-evaluation tool
          designed to help you identify your current English strengths and
          areas for improvement. It provides a general indication of your CEFR
          level from A1 to C1 and is not an official language certification.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-slate-800">
              What is this English level test?
            </h3>
            <p className="leading-relaxed mt-1">
              This diagnostic test contains 12 questions covering practical
              English skills and provides an estimate of your current level.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800">
              What do A1, A2, B1, B2, and C1 mean?
            </h3>
            <p className="leading-relaxed mt-1">
              These are levels in the Common European Framework of Reference
              for Languages (CEFR), ranging from beginner (A1) to advanced
              (C1).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800">
              How long does the test take?
            </h3>
            <p className="leading-relaxed mt-1">
              The test takes approximately 5 minutes to complete.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800">
              Is this test an official English certification?
            </h3>
            <p className="leading-relaxed mt-1">
              No. It is an educational self-assessment tool and does not
              replace an official exam or proctored certification.
            </p>
          </div>
        </div>
      </section>
        </div>
  );
};
export default LevelTestPage;