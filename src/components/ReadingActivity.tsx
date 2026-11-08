
import React, { useState } from 'react';
import { BookOpen, CheckCircle2, RotateCcw } from 'lucide-react';
import type { QuizQuestion } from '../types';

interface ReadingActivityProps {
  passage: string;
  questions: QuizQuestion[];
}

export const ReadingActivity: React.FC<ReadingActivityProps> = ({
  passage,
  questions
}) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = questions.every(
    (question) => answers[question.id] !== undefined
  );

  const score = questions.filter(
    (question) => answers[question.id] === question.correctAnswer
  ).length;

  const resetActivity = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="mt-5 space-y-6 border-t border-slate-200 pt-5">
      {/* Reading passage */}
      <section className="rounded-xl border border-indigo-200 bg-indigo-50 p-5">
        <h4 className="mb-3 flex items-center gap-2 font-bold text-indigo-900">
          <BookOpen size={20} />
          Reading Passage
        </h4>

        <p className="mb-4 text-sm text-slate-600">
          Read the passage carefully, then answer all the questions below.
        </p>

        <div className="whitespace-pre-line rounded-lg bg-white p-5 text-base leading-8 text-slate-800">
          {passage}
        </div>
      </section>

      {/* Comprehension questions */}
      <section className="space-y-5">
        <h4 className="text-lg font-bold text-slate-900">
          Reading Comprehension Questions
        </h4>

        {questions.map((question, index) => (
          <fieldset
            key={question.id}
            className="space-y-3 rounded-xl border border-slate-200 p-4"
          >
            <legend className="px-1 text-sm font-bold text-slate-900">
              {index + 1}. {question.question}
            </legend>

            {question.options.map((option, optionIndex) => (
              <label
                key={optionIndex}
                className="flex cursor-pointer items-center gap-3 rounded-lg bg-slate-50 p-3 text-sm hover:bg-indigo-50"
              >
                <input
                  type="radio"
                  name={question.id}
                  checked={answers[question.id] === optionIndex}
                  disabled={submitted}
                  onChange={() =>
                    setAnswers((previous) => ({
                      ...previous,
                      [question.id]: optionIndex
                    }))
                  }
                />
                {option}
              </label>
            ))}

            {submitted && (
              <div
                className={
                  answers[question.id] === question.correctAnswer
                    ? 'rounded-lg bg-green-50 p-3 text-sm text-green-800'
                    : 'rounded-lg bg-red-50 p-3 text-sm text-red-800'
                }
              >
                <p className="font-bold">
                  {answers[question.id] === question.correctAnswer
                    ? 'Correct!'
                    : `Incorrect. Correct answer: ${
                        question.options[question.correctAnswer]
                      }`}
                </p>

                <p className="mt-1">{question.explanation}</p>
              </div>
            )}
          </fieldset>
        ))}
      </section>

      {/* Answer submission */}
      {!submitted ? (
        <button
          type="button"
          disabled={!allAnswered || questions.length === 0}
          onClick={() => setSubmitted(true)}
          className="rounded-lg bg-indigo-700 px-5 py-3 text-sm font-bold text-white hover:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Check Answers
        </button>
      ) : (
        <div
          role="status"
          className="rounded-xl border border-green-200 bg-green-50 p-5"
        >
          <p className="flex items-center gap-2 text-lg font-bold text-green-800">
            <CheckCircle2 size={21} />
            Your Score: {score} / {questions.length}
          </p>

          <p className="mt-2 text-sm text-green-900">
            You answered {score} out of {questions.length} questions correctly.
          </p>

          <button
            type="button"
            onClick={resetActivity}
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-indigo-700 underline"
          >
            <RotateCcw size={16} />
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};
