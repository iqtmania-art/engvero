import React, { useState } from 'react';
import { Sparkles, CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { FIVE_MINUTE_CHALLENGE_QUESTIONS } from '../data/quizzes';

interface FiveMinuteChallengeProps {
  onNavigate: (path: string) => void;
}

export const FiveMinuteChallenge: React.FC<FiveMinuteChallengeProps> = ({ onNavigate }) => {
  const questions = FIVE_MINUTE_CHALLENGE_QUESTIONS;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentQ = questions[currentIndex];
  const isCorrect = selectedOption !== null && selectedOption === currentQ.correctAnswer;

  const handleSelect = (idx: number) => {
    if (hasSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null || hasSubmitted) return;
    setHasSubmitted(true);
    if (selectedOption === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setHasSubmitted(false);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasSubmitted(false);
    setScore(0);
    setCompleted(false);
  };

  return (
    <section className="bg-gradient-to-b from-sky-50/70 to-white py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200/80">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Interactive Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            5-Minute English Challenge
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            Improve your English with a quick daily practice session. Answer 5 questions to test your grammar, vocabulary, and everyday usage.
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
          {!completed ? (
            <div className="p-6 sm:p-8 space-y-6">
              {/* Question progress */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sky-700 uppercase tracking-wider">{currentQ.category}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500 font-medium">{currentQ.topic}</span>
                </div>
                <span className="font-semibold text-slate-600 tabular-nums">
                  Question {currentIndex + 1} of {questions.length}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-sky-600 h-full transition-all duration-300"
                  style={{ width: `${((currentIndex + (hasSubmitted ? 1 : 0)) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt, optIdx) => {
                  let style = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800';

                  if (hasSubmitted) {
                    if (optIdx === currentQ.correctAnswer) {
                      style = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                    } else if (selectedOption === optIdx) {
                      style = 'border-rose-400 bg-rose-50 text-rose-950';
                    } else {
                      style = 'border-slate-200 opacity-60 text-slate-500';
                    }
                  } else if (selectedOption === optIdx) {
                    style = 'border-sky-600 bg-sky-50 text-sky-950 ring-1 ring-sky-600 font-medium';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={hasSubmitted}
                      onClick={() => handleSelect(optIdx)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-sm transition-all flex items-center justify-between cursor-pointer ${style}`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
                            hasSubmitted && optIdx === currentQ.correctAnswer
                              ? 'bg-emerald-600 text-white'
                              : hasSubmitted && selectedOption === optIdx
                              ? 'bg-rose-600 text-white'
                              : selectedOption === optIdx
                              ? 'bg-sky-700 text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="leading-snug">{opt}</span>
                      </div>

                      {hasSubmitted && optIdx === currentQ.correctAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {hasSubmitted && selectedOption === optIdx && optIdx !== currentQ.correctAnswer && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback */}
              {hasSubmitted && (
                <div
                  className={`p-4 rounded-xl border text-xs leading-relaxed space-y-1 ${
                    isCorrect
                      ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                      : 'bg-rose-50/80 border-rose-200 text-rose-900'
                  }`}
                >
                  <p className="font-bold flex items-center gap-1.5">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Correct!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600" />
                        <span>Incorrect. Correct answer: {currentQ.options[currentQ.correctAnswer]}</span>
                      </>
                    )}
                  </p>
                  <p className="text-slate-700 pt-0.5">{currentQ.explanation}</p>
                </div>
              )}

              {/* Footer controls */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <span className="text-xs text-slate-500 font-medium">
                  Current Score: <span className="font-bold text-slate-800">{score}</span> / {questions.length}
                </span>

                {!hasSubmitted ? (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={selectedOption === null}
                    className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      selectedOption === null
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-sky-700 hover:bg-sky-800 text-white shadow-xs'
                    }`}
                  >
                    Check Answer
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>{currentIndex + 1 < questions.length ? 'Next Question' : 'View Challenge Summary'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="p-8 sm:p-12 text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Daily Challenge Result</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">Challenge Completed!</h3>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl inline-block min-w-[260px]">
                <div className="text-4xl font-extrabold text-slate-900 tabular-nums">
                  {score} <span className="text-xl font-normal text-slate-500">/ {questions.length}</span>
                </div>
                <p className="text-sm font-semibold text-sky-700 mt-1">
                  {Math.round((score / questions.length) * 100)}% Correct
                </p>
                <p className="text-xs text-slate-600 mt-2 max-w-xs">
                  {score === 5
                    ? 'Perfect score! You demonstrated flawless precision across all 5 areas.'
                    : score >= 3
                    ? 'Solid performance! Consistent 5-minute daily practice compounds rapidly.'
                    : 'Good practice today! Revisit grammar rules and try again tomorrow.'}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Try Again</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/quizzes')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Explore More Quizzes</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
