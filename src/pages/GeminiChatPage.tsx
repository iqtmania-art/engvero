import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GeminiChatInterface } from '../components/GeminiChatInterface';
import { Sparkles, MessageSquare, Zap, GraduationCap, CheckCircle2 } from 'lucide-react';

interface GeminiChatPageProps {
  onNavigate: (path: string) => void;
}

export const GeminiChatPage: React.FC<GeminiChatPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Gemini English Chatbot' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>Interactive AI Practice</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Gemini English Tutor &amp; Practice Partner
        </h1>
        <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
          Converse freely with your multi-turn Gemini language tutor. Switch roles anytime depending on whether you want general everyday conversation practice, fast grammar corrections, or complex IELTS/academic writing critiques.
        </p>

        {/* Roles feature summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
              <MessageSquare className="w-4 h-4 text-sky-600" />
              <span>General Practice</span>
            </div>
            <p className="text-[11px] text-slate-500 font-mono">gemini-3.8-flash</p>
            <p className="text-xs text-slate-600">Everyday dialogues, cultural idioms, natural conversational fluency.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
              <Zap className="w-4 h-4 text-amber-600" />
              <span>Instant Fixer</span>
            </div>
            <p className="text-[11px] text-slate-500 font-mono">gemini-3.1-flash-lite</p>
            <p className="text-xs text-slate-600">Fast grammar, spelling, and sentence corrections with rule summaries.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              <span>Deep Review</span>
            </div>
            <p className="text-[11px] text-slate-500 font-mono">gemini-3.8-flash</p>
            <p className="text-xs text-slate-600">Advanced IELTS/TOEFL writing, cohesion, and register calibration.</p>
          </div>
        </div>
      </div>

      {/* The Chat Interface */}
      <GeminiChatInterface />
    </div>
  );
};
