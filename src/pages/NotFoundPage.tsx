
import React from 'react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigate,
}) => {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl font-bold text-slate-900">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold text-slate-800">
        Page Not Found
      </h2>

      <p className="mt-3 text-slate-600">
        Sorry, the page you are looking for does not exist.
      </p>

      <button
        onClick={() => onNavigate('/')}
        className="mt-6 rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-700"
      >
        Back to Home
      </button>
    </main>
  );
};
