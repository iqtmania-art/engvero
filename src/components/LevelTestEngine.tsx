import React, { useState } from 'react';
import { Award, ArrowRight, RotateCcw, BookOpen, CheckCircle2, XCircle } from 'lucide-react';
import { ENGLISH_LEVEL_TEST_QUESTIONS } from '../data/levelTestQuestions';
import { CEFRLevel } from '../types';

interface LevelTestEngineProps {
  onNavigate: (path: string) => void;
}

export const LevelTestEngine: React.FC<LevelTestEngineProps> = ({ onNavigate }) => {
  const questions = ENGLISH_LEVEL_TEST_QUESTIONS;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<{ [index: number]: number }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (idx: number) => {
    setSelectedOption(idx);
    setUserAnswers((prev) => ({ ...prev, [currentIndex]: idx }));
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(userAnswers[currentIndex + 1] ?? null);
    } else {
      setIsSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setSelectedOption(userAnswers[currentIndex - 1] ?? null);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setUserAnswers({});
    setIsSubmitted(false);
  };

  // Calculate results
  const correctCount = questions.reduce((acc, q, idx) => {
    return acc + (userAnswers[idx] === q.correctAnswer ? 1 : 0);
  }, 0);

  const percentage = Math.round((correctCount / questions.length) * 100);

  // Determine estimated CEFR Level
  let estimatedLevel: CEFRLevel = 'A1';
  let levelDescriptor = '';
  let recommendedTopic = '';
  let recommendedUrl = '';

  if (correctCount >= 11) {
    estimatedLevel = 'C1';
    levelDescriptor = 'Advanced proficiency. You understand nuanced grammatical inversion, sophisticated vocabulary, and idiomatic subtleties with high accuracy.';
    recommendedTopic = 'Advanced Vocabulary & Rhetorical Nuance';
    recommendedUrl = '/vocabulary/advanced-vocabulary';
  } else if (correctCount >= 9) {
    estimatedLevel = 'B2';
    levelDescriptor = 'Upper-Intermediate proficiency. You have a solid grasp of complex past aspects, collocations, and dependent clauses.';
    recommendedTopic = '12 English Tenses Mastery & Collocations';
    recommendedUrl = '/tenses';
  } else if (correctCount >= 6) {
    estimatedLevel = 'B1';
    levelDescriptor = 'Intermediate proficiency. You can express yourself clearly in common everyday situations, conditionals, and standard tenses.';
    recommendedTopic = 'Common English Mistakes & Prepositions';
    recommendedUrl = '/common-mistakes';
  } else if (correctCount >= 4) {
    estimatedLevel = 'A2';
    levelDescriptor = 'Elementary level. You have good familiarity with basic past tenses, comparative adjectives, and routine daily phrases.';
    recommendedTopic = 'Articles (A, An, The) & Prepositions';
    recommendedUrl = '/grammar/articles-a-an-the';
  } else {
    estimatedLevel = 'A1';
    levelDescriptor = 'Beginner level. Start strengthening your foundations in Present Simple, basic pronouns, and high-frequency everyday vocabulary.';
    recommendedTopic = 'Present Simple: Rules & Examples';
    recommendedUrl = '/grammar/present-simple';
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-10 space-y-8">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 mx-auto rounded-full bg-sky-50 text-sky-600 flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Diagnostic Assessment Results</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Your Diagnostic English Placement</h2>
          <p className="text-xs text-slate-500 max-w-lg mx-auto">
            This test provides an indicative self-assessment based on CEFR benchmarks to guide your personal learning curriculum on ENGVERO. (This is not an official proctored CEFR certificate).
          </p>
        </div>

        {/* Level Banner */}
        <div className="bg-gradient-to-r from-sky-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-300">Estimated CEFR Level</span>
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-black text-white">{estimatedLevel}</span>
              <span className="text-xl font-medium text-slate-300">
                {estimatedLevel === 'A1'
                  ? 'Beginner'
                  : estimatedLevel === 'A2'
                  ? 'Elementary'
                  : estimatedLevel === 'B1'
                  ? 'Intermediate'
                  : estimatedLevel === 'B2'
                  ? 'Upper-Intermediate'
                  : 'Advanced'}
              </span>
            </div>
            <p className="text-xs text-slate-300 max-w-md pt-2 leading-relaxed">{levelDescriptor}</p>
          </div>

          <div className="p-4 bg-white/10 rounded-xl backdrop-blur-xs text-center shrink-0 min-w-[150px]">
            <div className="text-3xl font-bold tabular-nums text-white">
              {correctCount} <span className="text-lg font-normal text-slate-300">/ {questions.length}</span>
            </div>
            <span className="text-xs text-sky-200 font-semibold">{percentage}% Score</span>
          </div>
        </div>

        {/* Personalized Recommendation */}
        <div className="p-6 bg-sky-50/70 border border-sky-200 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-sky-900">
            <BookOpen className="w-5 h-5 text-sky-700" />
            <h3 className="text-sm font-bold">Recommended Next Study Step for Level {estimatedLevel}</h3>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            Based on your test results, focusing on <strong>{recommendedTopic}</strong> will yield the highest return on your study time. Practice the corresponding lessons and quizzes to reinforce your accuracy.
          </p>
          <div>
            <button
              onClick={() => onNavigate(recommendedUrl)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors cursor-pointer"
            >
              <span>Go to {recommendedTopic}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Question-by-Question Diagnostic Review */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Diagnostic Question Breakdown</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
            {questions.map((q, idx) => {
              const userPick = userAnswers[idx];
              const isCorrect = userPick === q.correctAnswer;
              return (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 text-xs space-y-1.5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">
                        [{q.level}] {q.focusArea}
                      </span>
                      <p className="text-slate-900 font-medium text-xs mt-0.5">
                        {idx + 1}. {q.question}
                      </p>
                    </div>
                    {isCorrect ? (
                      <span className="text-emerald-700 flex items-center gap-1 font-semibold shrink-0">
                        <CheckCircle2 className="w-4 h-4" /> Correct
                      </span>
                    ) : (
                      <span className="text-rose-700 flex items-center gap-1 font-semibold shrink-0">
                        <XCircle className="w-4 h-4" /> Incorrect
                      </span>
                    )}
                  </div>
                  {!isCorrect && userPick !== undefined && (
                    <p className="text-rose-700">
                      Your answer: <span className="line-through">{q.options[userPick]}</span>
                    </p>
                  )}
                  <p className="text-emerald-800 font-medium">
                    Correct answer: <span>{q.options[q.correctAnswer]}</span>
                  </p>
                  <p className="text-slate-600 text-[11px] pt-1 border-t border-slate-200/60">{q.explanation}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center pt-2">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake the Level Test</span>
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-10 space-y-6">
      {/* Test Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 text-xs">
        <div>
          <span className="font-bold text-sky-700 uppercase tracking-wider">Level Assessment ({currentQ.level})</span>
          <span className="text-slate-400 mx-2">·</span>
          <span className="text-slate-500 font-medium">{currentQ.focusArea}</span>
        </div>
        <span className="font-semibold text-slate-600 tabular-nums">
          Question {currentIndex + 1} of {questions.length}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-sky-600 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-slate-400">Diagnostic Question {currentIndex + 1}</span>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">{currentQ.question}</h3>
      </div>

      {/* Answer Options */}
      <div className="space-y-2.5">
        {currentQ.options.map((opt, optIdx) => {
          const isSelected = selectedOption === optIdx;
          return (
            <button
              key={optIdx}
              type="button"
              onClick={() => handleSelect(optIdx)}
              className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-center justify-between cursor-pointer ${
                isSelected
                  ? 'border-sky-600 bg-sky-50 text-sky-950 ring-1 ring-sky-600 font-medium'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
                    isSelected ? 'bg-sky-700 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {String.fromCharCode(65 + optIdx)}
                </span>
                <span className="leading-snug">{opt}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="pt-4 flex items-center justify-between border-t border-slate-100">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
            currentIndex === 0
              ? 'text-slate-300 cursor-not-allowed'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer'
          }`}
        >
          Previous
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={selectedOption === null}
          className={`inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
            selectedOption === null
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-sky-700 hover:bg-sky-800 text-white shadow-xs'
          }`}
        >
          <span>{currentIndex + 1 < questions.length ? 'Next Question' : 'Complete & See Placement'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
