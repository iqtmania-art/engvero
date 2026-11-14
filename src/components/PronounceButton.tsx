import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface PronounceButtonProps {
  text: string;
  lang?: 'en-US' | 'en-GB';
  className?: string;
  size?: 'sm' | 'md';
}

export const PronounceButton: React.FC<PronounceButtonProps> = ({
  text,
  lang = 'en-US',
  className = '',
  size = 'sm',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;
    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    window.speechSynthesis.speak(utterance);
  };

  const iconSize = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  const buttonPadding = size === 'sm' ? 'p-1.5' : 'p-2';

  return (
    <button
      type="button"
      onClick={handleSpeak}
      title={`Listen to "${text}"`}
      aria-label={`Listen to pronunciation of ${text}`}
      className={`inline-flex items-center justify-center rounded-lg transition-colors cursor-pointer text-slate-500 hover:text-sky-700 hover:bg-sky-50 focus-visible:outline-sky-500 ${buttonPadding} ${className}`}
    >
      {isPlaying ? (
        <VolumeX className={`${iconSize} text-sky-600 animate-pulse`} />
      ) : (
        <Volume2 className={iconSize} />
      )}
    </button>
  );
};
