import React, { useState, lazy, Suspense } from 'react';
import { Bot, X, Sparkles, Maximize2 } from 'lucide-react';
const GeminiChatInterface = lazy(() =>
  import('./GeminiChatInterface').then((module) => ({
    default: module.GeminiChatInterface,
  }))
);

interface FloatingChatWidgetProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

export const FloatingChatWidget: React.FC<FloatingChatWidgetProps> = ({ onNavigate, currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  // If already on the /chat page, do not display the floating popup
  if (currentPath === '/chat') {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <div className="w-[360px] sm:w-[420px] max-w-[calc(100vw-2rem)] h-[580px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-200">
          <div className="p-3 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-sky-500 text-slate-950 flex items-center justify-center font-bold">
                <Bot className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold">Gemini English Tutor</span>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onNavigate('/chat');
                }}
                title="Open Full Page Chat"
                className="p-1 text-slate-400 hover:text-white rounded cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1 text-slate-400 hover:text-white rounded cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-hidden">
            <Suspense fallback={<div className="p-4 text-sm text-slate-500">Loading Gemini Tutor...</div>}>
  <GeminiChatInterface initialRole="general" />
</Suspense>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-xl hover:shadow-2xl transition-all cursor-pointer group focus-visible:outline-sky-500 border border-slate-700/60"
          aria-label="Open Gemini English Chatbot"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
          </div>
          <span className="text-xs font-semibold">Gemini Tutor</span>
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
        </button>
      )}
    </div>
  );
};
