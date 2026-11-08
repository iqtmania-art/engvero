
import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Award
} from 'lucide-react';
import { QuizQuestion } from '../types';

interface QuizEngineProps {
  title: string;
  showTitle?: boolean;
  category?: string;
  level?: string;
  questions: QuizQuestion[];
  onFinish?: (score: number, total: number) => void;
  onRelatedNavigate?: (url: string) => void;
  relatedLessonHref?: string;
  relatedLessonTitle?: string;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({
  title,
  showTitle = true,
  category,
  level,
  questions,
  onFinish,
  onRelatedNavigate,
  relatedLessonHref,
  relatedLessonTitle
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const [answersHistory, setAnswersHistory] = useState<
    { questionIndex: number; selected: number; isCorrect: boolean }[]
  >([]);

  // Handle quizzes without questions.
  if (!questions || questions.length === 0) {
    return (
      <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-slate-600 text-sm">
          No questions available for this quiz.
        </p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  const isCorrect =
    selectedOption !== null &&
    selectedOption === currentQ.correctAnswer;

  // Select an answer.
  const handleSelectOption = (idx: number) => {
    if (hasSubmitted) return;
    setSelectedOption(idx);
  };

  // Check the selected answer.
  const handleSubmitAnswer = () => {
    if (selectedOption === null || hasSubmitted) return;

    setHasSubmitted(true);

    const correct = selectedOption === currentQ.correctAnswer;

    if (correct) {
      setScore((prev) => prev + 1);
    }

    setAnswersHistory((prev) => [
      ...prev,
      {
        questionIndex: currentIndex,
        selected: selectedOption,
        isCorrect: correct
      }
    ]);
  };

  // Move to the next question or results.
  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setHasSubmitted(false);
    } else {
      setIsCompleted(true);

      if (onFinish) {
        onFinish(score, questions.length);
      }
    }
  };

  // Restart the quiz.
  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasSubmitted(false);
    setScore(0);
    setIsCompleted(false);
    setAnswersHistory([]);
  };

  // Quiz completion screen.
  if (isCompleted) {
    const finalScore = score;
    const percentage = Math.round(
      (finalScore / questions.length) * 100
    );

    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 text-center space-y-6">

        <div className="w-16 h-16 mx-auto rounded-full bg-sky-50 flex items-center justify-center text-sky-600">
          <Award className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Quiz Completed
          </span>

          <h3 className="text-2xl font-bold text-slate-900 mt-1">
            {title}
          </h3>
        </div>

        {/* Final score */}
        <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 inline-block min-w-[240px]">
          <div className="text-4xl font-extrabold text-slate-900 tabular-nums">
            {finalScore}{' '}
            <span className="text-xl font-normal text-slate-500">
              / {questions.length}
            </span>
          </div>

          <p className="text-sm font-semibold text-sky-700 mt-1">
            {percentage}% Accuracy
          </p>

          <p className="text-xs text-slate-500 mt-2">
            {percentage >= 80
              ? 'Excellent mastery! You have a solid grasp of this concept.'
              : percentage >= 60
              ? 'Good effort! Review the explanations to solidify tricky nuances.'
              : 'Keep practicing! Review the lesson rules below and try again.'}
          </p>
        </div>

        {/* Answer review */}
        <div className="text-left space-y-3 pt-4 border-t border-slate-100 max-h-72 overflow-y-auto pr-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Review Answers
          </h4>

          {questions.map((q, idx) => {
            const record = answersHistory.find(
              (a) => a.questionIndex === idx
            );

            const userChoice = record ? record.selected : -1;
            const wasCorrect = record?.isCorrect;

            return (
              <div
                key={idx}
                className="p-3 rounded-lg border border-slate-100 bg-slate-50/50 text-xs space-y-1"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-semibold text-slate-800">
                    {idx + 1}. {q.question}
                  </span>

                  {wasCorrect ? (
                    <span className="text-emerald-700 flex items-center gap-1 font-medium shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Correct
                    </span>
                  ) : (
                    <span className="text-rose-700 flex items-center gap-1 font-medium shrink-0">
                      <XCircle className="w-3.5 h-3.5" />
                      Incorrect
                    </span>
                  )}
                </div>

                {!wasCorrect && userChoice !== -1 && (
                  <p className="text-slate-500">
                    Your answer:{' '}
                    <span className="line-through text-rose-600">
                      {q.options[userChoice]}
                    </span>
                  </p>
                )}

                <p className="text-slate-700 font-medium">
                  Correct:{' '}
                  <span className="text-emerald-700">
                    {q.options[q.correctAnswer]}
                  </span>
                </p>

                <p className="text-slate-500 text-[11px] pt-1">
                  {q.explanation}
                </p>
              </div>
            );
          })}
        </div>

        {/* Completion actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Quiz</span>
          </button>

          {relatedLessonHref && onRelatedNavigate && (
            <button
              onClick={() => onRelatedNavigate(relatedLessonHref)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors cursor-pointer"
            >
              <span>
                Study {relatedLessonTitle || 'Related Lesson'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Active quiz screen.
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">

      {/* Quiz card header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            {category && <span>{category}</span>}

            {level && (
              <>
                <span>·</span>
                <span>Level {level}</span>
              </>
            )}
          </div>

          {/* Hide repeated title when page already has an H1 */}
          {showTitle && (
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              {title}
            </h3>
          )}
        </div>

        <div className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-full tabular-nums">
          Question {currentIndex + 1} of {questions.length}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-sky-600 h-full transition-all duration-300"
          style={{
            width: `${
              ((currentIndex + (hasSubmitted ? 1 : 0)) /
                questions.length) *
              100
            }%`
          }}
        />
      </div>

      {/* Current question */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-slate-400">
          Question {currentIndex + 1}
        </span>

        <h4 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
          {currentQ.question}
        </h4>
      </div>

      {/* Answer options */}
      <div className="space-y-2.5">
        {currentQ.options.map((option, optIdx) => {
          let optionStyles =
            'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 text-slate-800';

          if (hasSubmitted) {
            if (optIdx === currentQ.correctAnswer) {
              optionStyles =
                'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
            } else if (selectedOption === optIdx) {
              optionStyles =
                'border-rose-400 bg-rose-50 text-rose-950';
            } else {
              optionStyles =
                'border-slate-200 opacity-60 text-slate-500';
            }
          } else if (selectedOption === optIdx) {
            optionStyles =
              'border-sky-600 bg-sky-50 text-sky-950 ring-1 ring-sky-600 font-medium';
          }

          return (
            <button
              key={optIdx}
              type="button"
              onClick={() => handleSelectOption(optIdx)}
              disabled={hasSubmitted}
              className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-sm transition-all flex items-center justify-between group cursor-pointer ${optionStyles}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
                    hasSubmitted &&
                    optIdx === currentQ.correctAnswer
                      ? 'bg-emerald-600 text-white'
                      : hasSubmitted &&
                        selectedOption === optIdx
                      ? 'bg-rose-600 text-white'
                      : selectedOption === optIdx
                      ? 'bg-sky-700 text-white'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                  }`}
                >
                  {String.fromCharCode(65 + optIdx)}
                </span>

                <span className="leading-snug">
                  {option}
                </span>
              </div>

              {hasSubmitted &&
                optIdx === currentQ.correctAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}

              {hasSubmitted &&
                selectedOption === optIdx &&
                optIdx !== currentQ.correctAnswer && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
            </button>
          );
        })}
      </div>

      {/* Feedback and explanation */}
      {hasSubmitted && (
        <div
          className={`p-4 rounded-xl border text-xs leading-relaxed space-y-1 ${
            isCorrect
              ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
              : 'bg-rose-50/80 border-rose-200 text-rose-900'
          }`}
        >
          <div className="flex items-center gap-1.5 font-bold">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Correct!</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>
                  Not quite. Correct answer:{' '}
                  {currentQ.options[currentQ.correctAnswer]}
                </span>
              </>
            )}
          </div>

          <p className="text-slate-700 pt-1">
            {currentQ.explanation}
          </p>
        </div>
      )}

      {/* Score and navigation */}
      <div className="pt-2 flex items-center justify-between border-t border-slate-100">
        <span className="text-xs text-slate-500">
          Score:{' '}
          <strong className="text-slate-800">
            {score}
          </strong>{' '}
          / {currentIndex + (hasSubmitted ? 1 : 0)}
        </span>

        {!hasSubmitted ? (
          <button
            type="button"
            onClick={handleSubmitAnswer}
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
            <span>
              {currentIndex + 1 < questions.length
                ? 'Next Question'
                : 'View Results'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
