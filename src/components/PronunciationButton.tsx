import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { speakEnglish } from '../utils/speech';

interface PronunciationButtonProps {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}

export const PronunciationButton: React.FC<PronunciationButtonProps> = ({
  text,
  size = 'md',
  label,
  className = ''
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      setIsPlaying(true);
      speakEnglish(text);
      setTimeout(() => setIsPlaying(false), 1200);
    } catch {
      setIsPlaying(false);
    }
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <button
      type="button"
      onClick={handleSpeak}
      title={`Listen to pronunciation of "${text}"`}
      aria-label={`Listen to pronunciation of ${text}`}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sky-700 bg-sky-50 hover:bg-sky-100 hover:text-sky-800 transition-colors cursor-pointer text-xs font-medium focus-visible:outline-2 focus-visible:outline-sky-500 ${className}`}
    >
      <Volume2 className={`${iconSizes[size]} ${isPlaying ? 'animate-pulse text-sky-600' : ''}`} />
      {label && <span>{label}</span>}
    </button>
  );
};
