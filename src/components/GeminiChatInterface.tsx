import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  Zap,
  GraduationCap,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import { PronunciationButton } from './PronunciationButton';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
  modelUsed?: string;
}

export type ChatRole = 'general' | 'fast' | 'complex';

interface RoleConfig {
  id: ChatRole;
  name: string;
  model: string;
  badge: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  promptStarters: string[];
}

const ROLES: RoleConfig[] = [
  {
    id: 'general',
    name: 'Conversation Partner',
    model: 'gemini-3.8-flash',
    badge: 'General Tasks',
    description: 'Friendly practice for everyday conversation, fluency, and idioms.',
    icon: MessageSquare,
    promptStarters: [
      "Let's practice an everyday conversation about our weekend plans.",
      "How do native speakers naturally say goodbye at the end of a phone call?",
      "Can you give me 3 natural ways to agree with someone politely?"
    ]
  },
  {
    id: 'fast',
    name: 'Instant Grammar Fixer',
    model: 'gemini-3.1-flash-lite',
    badge: 'Fast Tasks',
    description: 'Lightning-fast sentence corrections, rule explanations, and examples.',
    icon: Zap,
    promptStarters: [
      "Is this sentence correct: 'I look forward to hear from you soon'?",
      "Fix this: 'She don't have many experience in marketing.'",
      "What is the difference between 'since' and 'for'?"
    ]
  },
  {
    id: 'complex',
    name: 'Deep Writing & IELTS Review',
    model: 'gemini-3.8-flash',
    badge: 'Writing Review',
    description: 'Deep analytical critique for formal essays, IELTS/TOEFL, and advanced syntax.',
    icon: GraduationCap,
    promptStarters: [
      "Review this introduction paragraph for an IELTS Task 2 essay on renewable energy.",
      "How can I rewrite this formal email to sound more diplomatic and persuasive?",
      "Analyze the cohesion and sentence variety of this paragraph."
    ]
  }
];

export const GeminiChatInterface: React.FC<{ initialRole?: ChatRole }> = ({ initialRole = 'general' }) => {
  const [selectedRole, setSelectedRole] = useState<ChatRole>(initialRole);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome-1',
      role: 'assistant',
      text: "Hello! I am your ENGVERO Gemini English Tutor. How can I help you practice your English today? You can converse with me, ask me to check your grammar, or have me review a paragraph you've written!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      modelUsed: 'gemini-3.8-flash'
    }
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const currentRoleConfig = ROLES.find((r) => r.id === selectedRole) || ROLES[0];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    setErrorMessage(null);
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Build conversation payload for multi-turn history
      const payload = {
        role: selectedRole,
        messages: newMessages.map((m) => ({
          role: m.role,
          text: m.text
        }))
      };

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with status ${res.status}`);
      }

      const data = await res.json();
      const assistantMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        text: data.reply || 'I could not generate an answer. Please try again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: data.modelUsed || currentRoleConfig.model
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setErrorMessage(err.message || 'Failed to get a response. Please check your network or try again.');
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        text: `Switched to ${currentRoleConfig.name}. How can I assist you with your English practice?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: currentRoleConfig.model
      }
    ]);
    setErrorMessage(null);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md flex flex-col h-[700px] max-h-[82vh] overflow-hidden">
      {/* Role Selector Header */}
      <div className="p-4 border-b border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-900">ENGVERO Gemini Tutor</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                {currentRoleConfig.model}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 line-clamp-1">{currentRoleConfig.description}</p>
          </div>
        </div>

        {/* Clear chat action */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            type="button"
            onClick={handleClearHistory}
            title="Clear chat and restart"
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Chat</span>
          </button>
        </div>
      </div>

      {/* Role Switcher Tabs */}
      <div className="grid grid-cols-3 p-1.5 bg-slate-100/80 border-b border-slate-200 text-xs">
        {ROLES.map((role) => {
          const Icon = role.icon;
          const isActive = selectedRole === role.id;
          return (
            <button
              key={role.id}
              type="button"
              onClick={() => {
                setSelectedRole(role.id);
                setMessages((prev) => [
                  ...prev,
                  {
                    id: `role-switch-${Date.now()}`,
                    role: 'assistant',
                    text: `Switched mode to **${role.name}** (powered by \`${role.model}\`). ${role.description}`,
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    modelUsed: role.model
                  }
                ]);
              }}
              className={`py-2 px-2 rounded-lg font-medium transition-all flex flex-col items-center justify-center text-center gap-0.5 cursor-pointer ${
                isActive
                  ? 'bg-white text-sky-800 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-sky-600' : 'text-slate-500'}`} />
                <span className="truncate">{role.name}</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">
                {role.model}
              </span>
            </button>
          );
        })}
      </div>

      {/* Messages Scrollable Thread */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/30">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                  isUser
                    ? 'bg-sky-700 text-white'
                    : 'bg-white border border-slate-200 text-sky-700 shadow-xs'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              {/* Message Content */}
              <div className={`max-w-[85%] sm:max-w-[75%] space-y-1.5 ${isUser ? 'items-end' : 'items-start'}`}>
                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-sky-700 text-white rounded-tr-xs'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-xs shadow-xs'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>

                {/* Footer metadata & actions */}
                <div
                  className={`flex items-center gap-2 text-[10px] text-slate-400 px-1 ${
                    isUser ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <span>{msg.timestamp}</span>
                  {!isUser && msg.modelUsed && (
                    <>
                      <span>·</span>
                      <span className="font-mono">{msg.modelUsed}</span>
                    </>
                  )}
                  {!isUser && (
                    <>
                      <span>·</span>
                      <PronunciationButton text={msg.text} size="sm" />
                      <button
                        type="button"
                        onClick={() => handleCopy(msg.id, msg.text)}
                        title="Copy message text"
                        className="hover:text-slate-600 transition-colors p-0.5 rounded cursor-pointer"
                      >
                        {copiedId === msg.id ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-sky-700 flex items-center justify-center shrink-0 shadow-xs">
              <Bot className="w-4 h-4 animate-spin" />
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-xs shadow-xs space-y-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className="w-2 h-2 rounded-full bg-sky-600 animate-ping" />
                <span>Gemini ({currentRoleConfig.model}) is thinking...</span>
              </div>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {errorMessage && (
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div className="flex-1 space-y-1">
              <p className="font-bold">Chat Error</p>
              <p className="text-[11px] text-rose-800">{errorMessage}</p>
            </div>
            <button
              onClick={() => handleSend(messages[messages.length - 1]?.text)}
              className="px-2 py-1 bg-white border border-rose-300 rounded text-rose-700 hover:bg-rose-100 font-semibold cursor-pointer shrink-0"
            >
              Retry
            </button>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Starter Prompts */}
      {messages.length <= 2 && (
        <div className="p-3 border-t border-slate-100 bg-white space-y-1.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-1">
            Suggested {currentRoleConfig.name} Prompts:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {currentRoleConfig.promptStarters.map((starter, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(starter)}
                className="text-left text-xs bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-800 border border-slate-200 hover:border-sky-200 rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer"
              >
                {starter}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Bar */}
      <div className="p-3 sm:p-4 border-t border-slate-200 bg-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-end gap-2"
        >
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              rows={2}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={`Ask Gemini for English practice, grammar explanations, or corrections (Enter to send)...`}
              className="w-full resize-none p-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-sky-500 focus:outline-hidden placeholder:text-slate-400 bg-slate-50/50 focus:bg-white transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={`p-3 rounded-xl flex items-center justify-center transition-all cursor-pointer shrink-0 ${
              !input.trim() || isLoading
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-sky-700 hover:bg-sky-800 text-white shadow-xs'
            }`}
            aria-label="Send message to Gemini"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 px-1">
          <span>Press Enter to send, Shift + Enter for new line</span>
          <span>Role: {currentRoleConfig.name} ({currentRoleConfig.model})</span>
        </div>
      </div>
    </div>
  );
};
