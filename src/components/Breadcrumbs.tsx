import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbCrumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbCrumb[];
  onNavigate: (href: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
        <li className="flex items-center">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-sky-700 transition-colors inline-flex items-center gap-1 font-medium focus-visible:outline-sky-500"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
              {isLast || !item.href ? (
                <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => item.href && onNavigate(item.href)}
                  className="hover:text-sky-700 transition-colors font-medium truncate max-w-[160px] sm:max-w-xs focus-visible:outline-sky-500"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
