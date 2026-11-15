export function speakEnglish(text: string, accent: "en-US" | "en-GB" = "en-US"): boolean {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return false;
  const synth = window.speechSynthesis;
  synth.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = accent;
  utt.rate = 0.92;
  const voices = synth.getVoices();
  const pick = voices.find((v) => v.lang === accent && /natural|google|samantha|daniel/i.test(v.name)) || voices.find((v) => v.lang.startsWith(accent)) || voices.find((v) => v.lang.startsWith("en"));
  if (pick) utt.voice = pick;
  synth.speak(utt);
  return true;
}