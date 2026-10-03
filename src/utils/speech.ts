let cachedVoices: SpeechSynthesisVoice[] = [];

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  cachedVoices = window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

/**
 * Simple, reliable Web Speech API wrapper for real native English pronunciation.
 */
export function speakEnglish(text: string, rate = 0.9): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  // Cancel any ongoing utterance
  window.speechSynthesis.cancel();

  const cleanText = text.replace(/[/\\*~_]/g, '').trim();
  if (!cleanText) return;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'en-US';
  utterance.rate = rate; // slightly slower for educational clarity

  // Prefer natural English voices if available
  const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
  const englishVoice =
    voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        (v.name.includes('Natural') ||
          v.name.includes('Google') ||
          v.name.includes('Samantha') ||
          v.name.includes('Daniel') ||
          v.name.includes('US English'))
    ) || voices.find((v) => v.lang.startsWith('en'));

  if (englishVoice) {
    utterance.voice = englishVoice;
  }

  window.speechSynthesis.speak(utterance);
}
