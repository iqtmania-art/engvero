import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen, Clock, FileQuestion, Sparkles } from 'lucide-react';
import { getAllSearchableItems } from '../data/searchIndex';
import { SearchResult } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (url: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelect }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const inputRef = useRef<HTMLInputElement>(null);

  const allItems = getAllSearchableItems();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories = ['All', 'Grammar', 'Tenses', 'Vocabulary', 'Common Mistakes', 'Quizzes', 'Skills'];

  const filteredItems = allItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const q = query.toLowerCase().trim();
    if (!q) return matchesCategory;
    const matchesQuery =
      item.title.toLowerCase().includes(q) ||
      item.snippet.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  }).slice(0, 15);

  const handleItemClick = (url: string) => {
    onSelect(url);
    onClose();
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Quizzes':
        return <FileQuestion className="w-4 h-4 text-sky-600" />;
      case 'Tenses':
        return <Clock className="w-4 h-4 text-teal-600" />;
      case 'Vocabulary':
        return <Sparkles className="w-4 h-4 text-indigo-600" />;
      default:
        return <BookOpen className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search ENGVERO content"
      className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 px-4 bg-slate-900/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search grammar, 12 tenses, vocabulary, mistakes, quizzes..."
            className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-base focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md focus-visible:outline-sky-500 mr-2"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 rounded bg-slate-200 text-slate-600 hover:bg-slate-300 transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center gap-1.5 px-4 py-2 border-b border-slate-100 overflow-x-auto text-xs bg-white">
          <span className="text-slate-400 font-medium shrink-0 mr-1">Filter:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-colors font-medium cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 divide-y divide-slate-100 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-10 text-center">
              <p className="text-sm font-medium text-slate-700">No educational topics found</p>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for &quot;Present Simple&quot;, &quot;Prepositions&quot;, &quot;Say vs Tell&quot;, or &quot;Vocabulary&quot;.
              </p>
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleItemClick(item.url)}
                className="w-full text-left p-3 rounded-xl hover:bg-sky-50/70 transition-colors flex items-start justify-between group cursor-pointer"
              >
                <div className="flex items-start gap-3 min-w-0 pr-2">
                  <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white transition-colors shrink-0 mt-0.5">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-900 group-hover:text-sky-700 transition-colors truncate">
                        {item.title}
                      </span>
                      <span className="text-xs text-slate-500">· {item.category}</span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">{item.snippet}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-2" />
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <span>{filteredItems.length} educational topics available</span>
          <span>Press Esc or click outside to close</span>
        </div>
      </div>
    </div>
  );
};
