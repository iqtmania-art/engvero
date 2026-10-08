import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Mail, CheckCircle2, MessageSquare, Send } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Lesson Feedback');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setIsSent(true);
  };

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Contact ENGVERO' }]} onNavigate={onNavigate} />

      <header className="space-y-3 border-b border-slate-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Get in Touch</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Contact &amp; Feedback
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
  Have a question about English grammar, vocabulary, pronunciation, or
  learning strategies? Contact ENGVERO to suggest an educational topic, report
  an error, or share feedback. We welcome questions and constructive feedback
  from English learners and educators.
</p>
      </header>

      {isSent ? (
        <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Message Received</h2>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Thank you for reaching out to the ENGVERO educational team. We review all feedback to continually refine our explanations and quiz exercises.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSent(false);
              setMessage('');
            }}
            className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="text-xs font-bold text-slate-700">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Maria Gonzalez"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-sky-500 focus:outline-hidden"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="text-xs font-bold text-slate-700">
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-sky-500 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-topic" className="text-xs font-bold text-slate-700">
              Topic
            </label>
            <select
              id="contact-topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-sky-500 focus:outline-hidden bg-white"
            >
              <option value="Lesson Feedback">Lesson Feedback &amp; Suggestions</option>
              <option value="Grammar Question">Grammar Question / Clarification</option>
              <option value="Correction">Report an Error or Typo</option>
              <option value="General Inquiry">General Educational Inquiry</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="text-xs font-bold text-slate-700">
              Your Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Please provide specifics regarding the lesson or question..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-sky-500 focus:outline-hidden"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-sky-700 hover:bg-sky-800 rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              <Send className="w-4 h-4" />
              <span>Submit Message</span>
            </button>
          </div>
        </form>
      )}
    </article>
  );
};
