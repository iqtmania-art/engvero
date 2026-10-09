import React from 'react';
import { Home, BookOpen, Languages, ClipboardCheck } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full text-center">
        <p className="text-7xl font-extrabold text-sky-700">404</p>

        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
          Page Not Found
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Sorry, we couldn't find that page. Continue learning English with these sections.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button onClick={() => onNavigate('/')} className="inline-flex items-center gap-2 rounded-lg bg-sky-700 px-5 py-3 font-semibold text-white">
            <Home size={18} /> Homepage
          </button>

          <button onClick={() => onNavigate('/grammar')} className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-semibold">
            <BookOpen size={18} /> Grammar
          </button>

          <button onClick={() => onNavigate('/vocabulary')} className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-semibold">
            <Languages size={18} /> Vocabulary
          </button>

          <button onClick={() => onNavigate('/quizzes')} className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-semibold">
            <ClipboardCheck size={18} /> Quizzes
          </button>

          <button onClick={() => onNavigate('/english-level-test')} className="rounded-lg border px-5 py-3 font-semibold">
            English Level Test
          </button>
        </div>
      </div>
    </section>
  );
};

export { NotFoundPage };