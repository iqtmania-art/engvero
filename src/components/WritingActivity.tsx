
import React, { useId, useState } from 'react';

import {
  PenLine,
  BookOpen,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

// Define the properties accepted by WritingActivity.
interface WritingActivityProps {
  instructions: string;
  modelAnswer?: string;
  targetWords?: number;
}

// Export the component so SkillsPage can import it.
export const WritingActivity: React.FC<WritingActivityProps> = ({
  instructions,
  modelAnswer,
  targetWords = 120
}) => {
  // Create a unique ID for this writing editor.
  const editorId = useId();

  // Store the learner's written response.
  const [writing, setWriting] = useState('');

  // Track whether the learner has completed the activity.
  const [submitted, setSubmitted] = useState(false);

  // Control visibility of the example answer.
  const [showModel, setShowModel] = useState(false);

  // Calculate the number of words entered.
  const wordCount = writing.trim()
    ? writing.trim().split(/\s+/).length
    : 0;

  // Calculate progress toward the suggested word count.
  const progress = Math.min(
    100,
    Math.round((wordCount / Math.max(1, targetWords)) * 100)
  );

  // Reset this writing activity.
  const resetActivity = () => {
    setWriting('');
    setSubmitted(false);
    setShowModel(false);
  };

  return (
    <div className="mt-5 space-y-5 border-t border-slate-200 pt-5">

      {/* Writing Instructions */}
      <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 space-y-2">
        <h4 className="flex items-center gap-2 font-bold text-slate-900">
          <PenLine size={18} />
          Interactive Writing Practice
        </h4>

        <p className="text-sm leading-relaxed text-slate-700">
          {instructions}
        </p>

        <p className="text-xs font-semibold text-indigo-800">
          Suggested length: {targetWords} words
        </p>
      </div>

      {/* Writing Editor */}
      <div className="space-y-3">
        <label
          htmlFor={editorId}
          className="block text-sm font-bold text-slate-900"
        >
          Write Your Response
        </label>

        <textarea
          id={editorId}
          value={writing}
          onChange={(event) => {
            setWriting(event.target.value);
            setSubmitted(false);
          }}
          placeholder="Start writing your response here..."
          rows={10}
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-sm leading-relaxed text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />

        {/* Word Count */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
          <span>Words written: {wordCount}</span>
          <span>Suggested target: {targetWords}</span>
        </div>

        {/* Progress Bar */}
        <div
          className="h-2 overflow-hidden rounded-full bg-slate-200"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Writing progress"
        >
          <div
            className="h-full rounded-full bg-indigo-600 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Activity Controls */}
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          disabled={wordCount === 0}
          onClick={() => setSubmitted(true)}
          className="rounded-lg bg-indigo-700 px-5 py-3 text-sm font-bold text-white hover:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Complete Writing
        </button>

        {modelAnswer && (
          <button
            type="button"
            onClick={() => setShowModel((previous) => !previous)}
            aria-expanded={showModel}
            className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
          >
            <BookOpen size={17} />
            {showModel ? 'Hide Model Answer' : 'View Model Answer'}
          </button>
        )}

        <button
          type="button"
          onClick={resetActivity}
          className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
        >
          <RotateCcw size={17} />
          Start Again
        </button>
      </div>

      {/* Completion Feedback */}
      {submitted && (
        <div
          role="status"
          className="rounded-xl border border-green-200 bg-green-50 p-4 space-y-2"
        >
          <p className="flex items-center gap-2 font-bold text-green-800">
            <CheckCircle2 size={19} />
            Writing Practice Completed
          </p>

          <p className="text-sm text-green-900">
            You wrote {wordCount} words. Review your grammar,
            vocabulary, organization, and sentence structure.
          </p>

          {wordCount < targetWords && (
            <p className="text-sm text-amber-800">
              Your response is shorter than the suggested target.
              Consider adding supporting details or examples.
            </p>
          )}
        </div>
      )}

      {/* Model Answer */}
      {showModel && modelAnswer && (
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 space-y-3">
          <h4 className="font-bold text-slate-900">
            Example Model Answer
          </h4>

          <div className="whitespace-pre-line text-sm leading-relaxed text-slate-700">
            {modelAnswer}
          </div>

          <p className="text-xs text-slate-600">
            Compare the structure, grammar, vocabulary, and clarity
            of your response with this example.
          </p>
        </div>
      )}

    </div>
  );
};
