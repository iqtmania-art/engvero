import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [skillsDropdownOpen, setSkillsDropdownOpen] = useState(false);

  const mainNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'Grammar', href: '/grammar/' },
    { label: 'Tenses', href: '/tenses/' },
    { label: 'Vocabulary', href: '/vocabulary/' },
    { label: 'Pronunciation', href: '/pronunciation/' },
    { label: 'Quizzes', href: '/quizzes/' }
  ];

  const skillsLinks = [
    { label: 'Speaking', href: '/speaking/' },
    { label: 'Listening', href: '/listening/' },
    { label: 'Reading', href: '/reading/' },
    { label: 'Writing', href: '/writing/' }
  ];

  const handleNavClick = (href: string) => {
    onNavigate(href);
    setMobileMenuOpen(false);
    setSkillsDropdownOpen(false);
  };

  const isActive = (href: string) => {
    const cleanCurrent = currentPath.endsWith('/') ? currentPath : currentPath + '/';
    const cleanHref = href.endsWith('/') ? href : href + '/';
    if (cleanHref === '/') return cleanCurrent === '/';
    return cleanCurrent.startsWith(cleanHref);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/');
              }}
              className="text-2xl font-extrabold tracking-tight text-slate-900 hover:text-sky-600 transition-colors"
            >
              ENGVERO
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600" aria-label="Main Navigation">
            {mainNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={py-1 transition-colors hover:text-sky-600 relative }
              >
                {link.label}
              </a>
            ))}

            <div className="relative">
              <button
                type="button"
                onClick={() => setSkillsDropdownOpen(!skillsDropdownOpen)}
                onBlur={() => setTimeout(() => setSkillsDropdownOpen(false), 200)}
                className={lex items-center gap-1 py-1 hover:text-sky-600 transition-colors cursor-pointer }
                aria-expanded={skillsDropdownOpen}
              >
                <span>Skills</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {skillsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-slate-200 py-1.5 z-50">
                  {skillsLinks.map((skill) => (
                    <a
                      key={skill.href}
                      href={skill.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(skill.href);
                      }}
                      className={lock px-4 py-2 text-xs font-medium hover:bg-sky-50 hover:text-sky-700 transition-colors }
                    >
                      {skill.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/common-mistakes/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/common-mistakes/');
              }}
              className={py-1 transition-colors hover:text-sky-600 }
            >
              Mistakes
            </a>

            <a
              href="/blog/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/blog/');
              }}
              className={py-1 transition-colors hover:text-sky-600 }
            >
              Blog
            </a>

            <a
              href="/chat/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/chat/');
              }}
              className={py-1 transition-colors hover:text-sky-600 flex items-center gap-1 }
            >
              <span>Gemini Chat</span>
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search lessons, vocabulary, and grammar"
              className="p-2 text-slate-600 hover:text-sky-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer focus-visible:outline-sky-500"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('/english-level-test/')}
              className="hidden sm:inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow-xs transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-sky-500"
            >
              Level Test
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus-visible:outline-sky-500 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-1 pb-3 border-b border-slate-100">
            {mainNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={px-3 py-2 rounded-lg text-sm font-medium transition-colors }
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <span className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400">Four Skills</span>
            <div className="grid grid-cols-2 gap-1 mt-1">
              {skillsLinks.map((skill) => (
                <a
                  key={skill.href}
                  href={skill.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(skill.href);
                  }}
                  className={px-3 py-2 rounded-lg text-sm font-medium transition-colors }
                >
                  {skill.label}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-1">
            <a
              href="/common-mistakes/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/common-mistakes/');
              }}
              className={px-3 py-2 rounded-lg text-sm font-medium transition-colors }
            >
              Common Mistakes
            </a>
            <a
              href="/daily-english/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/daily-english/');
              }}
              className={px-3 py-2 rounded-lg text-sm font-medium transition-colors }
            >
              Daily English
            </a>
            <a
              href="/blog/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/blog/');
              }}
              className={px-3 py-2 rounded-lg text-sm font-medium transition-colors }
            >
              Educational Articles
            </a>
            <a
              href="/english-level-test/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/english-level-test/');
              }}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 transition-colors"
            >
              Take Level Test
            </a>
            <a
              href="/chat/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/chat/');
              }}
              className={px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between }
            >
              <span>Gemini Chat Tutor</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500 text-slate-950 font-bold">AI</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
