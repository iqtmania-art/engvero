import React, { useState } from 'react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [showSeoModal, setShowSeoModal] = useState(false);

  const handleLink = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Promise */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleLink('/')}
              className="text-2xl font-black tracking-tight text-white hover:text-sky-400 transition-colors text-left"
            >
              ENGVERO
            </button>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Learn English. Practice Daily. Speak Confidently.
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Simple lessons. Real English. Daily practice. Free high-quality educational resources for English learners worldwide.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span>ESL / EFL Reference</span>
              <span>·</span>
              <span>CEFR Aligned (A1–C2)</span>
              <span>·</span>
              <span>Global Accessibility</span>
            </div>
          </div>

          {/* Column 2: Lessons & Grammar */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Grammar & Structure</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLink('/grammar')} className="hover:text-white transition-colors">
                  English Grammar Guide
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/grammar/present-simple')} className="hover:text-white transition-colors">
                  Present Simple Rules
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/grammar/articles-a-an-the')} className="hover:text-white transition-colors">
                  Articles: A, An & The
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/tenses')} className="hover:text-white transition-colors">
                  12 English Tenses
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/common-mistakes')} className="hover:text-white transition-colors">
                  Common English Mistakes
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Skills & Vocabulary */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Skills & Vocabulary</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLink('/speaking')} className="hover:text-white transition-colors">
                  Speaking Practice
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/listening')} className="hover:text-white transition-colors">
                  Listening Comprehension
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/reading')} className="hover:text-white transition-colors">
                  Reading Strategies
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/writing')} className="hover:text-white transition-colors">
                  Writing & Paragraphs
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/vocabulary')} className="hover:text-white transition-colors">
                  Vocabulary Builder
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/pronunciation')} className="hover:text-white transition-colors">
                  Pronunciation Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quizzes & Practice */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Testing & Practice</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLink('/quizzes')} className="hover:text-white transition-colors">
                  All Practice Quizzes
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/chat')} className="hover:text-white text-sky-400 font-semibold transition-colors flex items-center gap-1">
                  <span>Gemini Chat Tutor</span>
                  <span className="text-[10px] px-1 py-0.2 rounded bg-sky-900 text-sky-200">AI</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/english-level-test')} className="hover:text-white transition-colors">
                  English Level Test (A1–C1)
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/daily-english')} className="hover:text-white transition-colors">
                  Daily English Hub
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/blog')} className="hover:text-white transition-colors">
                  Educational Blog & Guides
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/about')} className="hover:text-white transition-colors">
                  About ENGVERO
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/contact')} className="hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} ENGVERO. All educational content created for international English learners.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowSeoModal(true)}
              className="hover:text-slate-200 transition-colors underline cursor-pointer"
            >
              SEO Sitemap & Robots.txt
            </button>
            <button onClick={() => handleLink('/about')} className="hover:text-slate-200 transition-colors">
              Editorial Policy
            </button>
            <button onClick={() => handleLink('/contact')} className="hover:text-slate-200 transition-colors">
              Feedback
            </button>
          </div>
        </div>
      </div>

      {/* SEO Sitemap & Robots.txt Modal */}
      {showSeoModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs"
          onClick={() => setShowSeoModal(false)}
        >
          <div
            className="w-full max-w-2xl bg-white text-slate-900 rounded-2xl p-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h4 className="text-base font-bold text-slate-900">SEO Architecture: XML Sitemap & Robots.txt Structure</h4>
              <button
                onClick={() => setShowSeoModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-semibold"
              >
                Close
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <h5 className="font-bold text-slate-800 mb-1">robots.txt Preview</h5>
                <pre className="p-3 bg-slate-100 rounded-lg text-slate-800 font-mono overflow-x-auto">
{`User-agent: *
Allow: /
Sitemap: https://engvero.netlify.app/sitemap.xml`}
                </pre>
              </div>

              <div>
                <h5 className="font-bold text-slate-800 mb-1">Indexable Canonical Routes (XML Sitemap)</h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono text-[11px] text-slate-700">
                  <li>/</li>
                  <li>/grammar</li>
                  <li>/grammar/present-simple</li>
                  <li>/grammar/articles-a-an-the</li>
                  <li>/grammar/prepositions-in-on-at</li>
                  <li>/tenses</li>
                  <li>/tenses/present-simple</li>
                  <li>/tenses/present-perfect</li>
                  <li>/vocabulary</li>
                  <li>/vocabulary/reliable</li>
                  <li>/vocabulary/beautiful</li>
                  <li>/common-mistakes</li>
                  <li>/common-mistakes/say-vs-tell</li>
                  <li>/common-mistakes/look-vs-see</li>
                  <li>/common-mistakes/much-vs-many</li>
                  <li>/quizzes</li>
                  <li>/quizzes/present-simple</li>
                  <li>/quizzes/articles-a-an-the</li>
                  <li>/quizzes/english-tenses</li>
                  <li>/speaking</li>
                  <li>/listening</li>
                  <li>/reading</li>
                  <li>/writing</li>
                  <li>/pronunciation</li>
                  <li>/daily-english</li>
                  <li>/english-level-test</li>
                  <li>/blog</li>
                  <li>/about</li>
                  <li>/contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
