import React from 'react';
import { Award, CheckCircle2, BookOpen } from 'lucide-react';

export const AuthorBox: React.FC = () => {
  return (
    <aside aria-label="Editorial & Review Information" className="mt-12 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 bg-sky-100 text-sky-700 rounded-xl shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-slate-900">ENGVERO Editorial Team</h4>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                <CheckCircle2 className="w-3 h-3 text-sky-600" />
                Verified ESL Educators
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Lesson structured and reviewed according to the Common European Framework of Reference for Languages (CEFR A1–C1). Designed for clear, practical daily English acquisition.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500 shrink-0 self-end sm:self-center border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200">
          <BookOpen className="w-4 h-4 text-slate-400" />
          <span>Academic & ESL Standards</span>
        </div>
      </div>
    </aside>
  );
};
