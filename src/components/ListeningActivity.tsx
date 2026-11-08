
import React, { useEffect, useState } from 'react';
import { Volume2, Square, CheckCircle2 } from 'lucide-react';
import type { QuizQuestion } from '../types';

interface ListeningActivityProps {
  passage: string;
  questions: QuizQuestion[];
}

export const ListeningActivity: React.FC<ListeningActivityProps> = ({
  passage,
  questions
}) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [audioError, setAudioError] = useState('');

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const playAudio = () => {
    if (!('speechSynthesis' in window)) {
      setAudioError('Audio playback is not supported in this browser.');
      return;
    }

    window.speechSynthesis.cancel();
    setAudioError('');

    const utterance = new SpeechSynthesisUtterance(passage);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = (event) => {
      setSpeaking(false);
      if (event.error !== 'canceled' && event.error !== 'interrupted') {
        setAudioError('Unable to play audio. Please try again.');
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopAudio = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  const score = questions.filter(
    (question) => answers[question.id] === question.correctAnswer
  ).length;

  const allAnswered = questions.every(
    (question) => answers[question.id] !== undefined
  );

  return (
    <div className="mt-5 space-y-5 border-t border-slate-200 pt-5">
      <div className="rounded-xl bg-sky-50 border border-sky-200 p-4 space-y-3">
        <h4 className="font-bold text-slate-900">
          Listening Practice
        </h4>

        <p className="text-xs text-slate-600">
          Listen carefully before answering the questions.
          Audio uses your browser's synthetic English voice.
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={playAudio}
            className="flex items-center gap-2 rounded-lg bg-sky-700 px-4 py-2 text-sm font-bold text-white hover:bg-sky-800"
          >
            <Volume2 size={17} />
            Play Audio
          </button>

          <button
            type="button"
            onClick={stopAudio}
            disabled={!speaking}
            className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold disabled:opacity-50"
          >
            <Square size={15} />
            Stop
          </button>
        </div>

        {audioError && (
          <p role="alert" className="text-sm text-red-700">
            {audioError}
          </p>
        )}

        <button
          type="button"
          onClick={() => setShowTranscript(!showTranscript)}
          aria-expanded={showTranscript}
          className="text-sm font-semibold text-sky-700 underline"
        >
          {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
        </button>

        {showTranscript && (
          <div className="whitespace-pre-line rounded-lg bg-white p-4 text-sm leading-relaxed text-slate-700">
            {passage}
          </div>
        )}
      </div>

      <div className="space-y-5">
        {questions.map((question, index) => (
          <fieldset
            key={question.id}
            className="rounded-xl border border-slate-200 p-4 space-y-3"
          >
            <legend className="px-1 text-sm font-bold text-slate-900">
              {index + 1}. {question.question}
            </legend>

            {question.options.map((option, optionIndex) => (
              <label
                key={optionIndex}
                className="flex cursor-pointer items-center gap-3 rounded-lg bg-slate-50 p-3 text-sm"
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
              <p
                className={
                  answers[question.id] === question.correctAnswer
                    ? 'text-sm font-medium text-green-700'
                    : 'text-sm font-medium text-red-700'
                }
              >
                {answers[question.id] === question.correctAnswer
                  ? 'Correct! '
                  : `Incorrect. Correct answer: ${question.options[question.correctAnswer]}. `}
                {question.explanation}
              </p>
            )}
          </fieldset>
        ))}
      </div>

      {!submitted ? (
        <button
          type="button"
          disabled={!allAnswered}
          onClick={() => setSubmitted(true)}
          className="rounded-lg bg-sky-700 px-5 py-3 text-sm font-bold text-white hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Check Answers
        </button>
      ) : (
        <div
          role="status"
          className="rounded-xl border border-green-200 bg-green-50 p-4"
        >
          <p className="flex items-center gap-2 font-bold text-green-800">
            <CheckCircle2 size={19} />
            Your Score: {score} / {questions.length}
          </p>

          <button
            type="button"
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
            }}
            className="mt-3 text-sm font-bold text-sky-700 underline"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};
