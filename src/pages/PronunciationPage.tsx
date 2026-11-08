import React from 'react';
import { Volume2, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PronunciationButton } from '../components/PronunciationButton';

interface PronunciationPageProps {
  onNavigate: (path: string) => void;
}

export const PronunciationPage: React.FC<PronunciationPageProps> = ({ onNavigate }) => {
  const minimalPairs = [
    { sound1: '/iː/ (Long E)', word1: 'Sheep', sound2: '/ɪ/ (Short I)', word2: 'Ship' },
    { sound1: '/æ/ (Short A)', word1: 'Bat', sound2: '/e/ (Short E)', word2: 'Bet' },
    { sound1: '/b/ (Voiced)', word1: 'Berry', sound2: '/v/ (Fricative)', word2: 'Very' },
    { sound1: '/θ/ (Unvoiced TH)', word1: 'Think', sound2: '/s/ (Sibilant)', word2: 'Sink' }
  ];

  const wordStressExamples = [
    { word: 'PREsent', pos: 'noun', meaning: 'a gift or the current time', stress: 'First syllable stressed' },
    { word: 'preSENT', pos: 'verb', meaning: 'to introduce or deliver a talk', stress: 'Second syllable stressed' },
    { word: 'REcord', pos: 'noun', meaning: 'an account or music disc', stress: 'First syllable stressed' },
    { word: 'reCORD', pos: 'verb', meaning: 'to store audio/video', stress: 'Second syllable stressed' }
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Pronunciation' }]} onNavigate={onNavigate} />

      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <span className="text-emerald-700 font-semibold">Phonetics & Accent Training</span>
          <span aria-hidden="true">·</span>
          <span>Audio Assisted</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          English Pronunciation &amp; Phonetics
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Clear pronunciation is not about eliminating your natural heritage—it is about clarity, correct syllable stress, vowel precision, and natural rhythm so you are understood effortlessly worldwide.
        </p>
      </header>

      {/* 1. The Schwa /ə/ */}
      <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-xl font-bold text-slate-900">1. The Most Important Sound: The Schwa /ə/</h2>
          <PronunciationButton text="about" size="sm" label="Hear /ə/ in 'about'" />
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          The schwa /ə/ is the most frequent vowel sound in the English language. It occurs exclusively in <strong>unstressed syllables</strong>. Instead of pronouncing full written vowels in words like <em>banana</em> or <em>photograph</em>, native speakers relax the jaw and tongue into a neutral, short &quot;uh&quot; sound.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {[
            { word: 'About', phon: '/əˈbaʊt/', note: 'Initial "a" is schwa' },
            { word: 'Doctor', phon: '/ˈdɒk.tər/', note: 'Final "or" is schwa' },
            { word: 'Support', phon: '/səˈpɔːt/', note: 'Initial "u" is schwa' }
          ].map((item, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-900 text-sm">{item.word}</span>
                <p className="text-xs font-mono text-slate-500">{item.phon}</p>
              </div>
              <PronunciationButton text={item.word} size="sm" />
            </div>
          ))}
        </div>
      </section>

      {/* 2. Minimal Pairs */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-slate-900">2. Minimal Pairs Training</h2>
          <p className="text-xs text-slate-600">
            Minimal pairs are words that differ by only a single sound. Training your ear to distinguish them removes common pronunciation traps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {minimalPairs.map((pair, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-sky-800 font-semibold">{pair.sound1}</span>
                    <p className="font-bold text-slate-900 text-sm mt-0.5">{pair.word1}</p>
                  </div>
                  <PronunciationButton text={pair.word1} size="sm" />
                </div>
                <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-indigo-800 font-semibold">{pair.sound2}</span>
                    <p className="font-bold text-slate-900 text-sm mt-0.5">{pair.word2}</p>
                  </div>
                  <PronunciationButton text={pair.word2} size="sm" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Two-Syllable Stress Shifts */}
      <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-xl font-bold text-slate-900">3. Word Stress &amp; Part of Speech Shifts</h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Many two-syllable words change grammatical function from noun to verb depending on which syllable is stressed:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {wordStressExamples.map((item, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-900">{item.word}</span>
                <span className="text-slate-400 mx-1">({item.pos})</span>
                <p className="text-slate-600 text-[11px] mt-0.5">{item.meaning}</p>
                <span className="text-[10px] font-semibold text-emerald-700">{item.stress}</span>
              </div>
              <PronunciationButton text={item.word} size="sm" />
            </div>
          ))}
        </div>
      </section>

      {/* Speaking cross-link */}
      <section className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-emerald-950">Practice Spoken Fluency</h3>
          <p className="text-xs text-emerald-800">Combine pronunciation with our structured speaking dialogue frameworks.</p>
        </div>
        <button
          onClick={() => onNavigate('/speaking')}
          className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors cursor-pointer shrink-0"
        >
          Go to Speaking Practice
        </button>
      </section>
    </article>
  );
};
