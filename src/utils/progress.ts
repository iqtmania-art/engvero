export interface EngveroProgress {
  completedLessons: string[];
  savedWords: string[];
  quizBestScores: Record<string, { score: number; total: number }>;
  streakDays: number;
  lastVisitDate: string;
}
const KEY = "engvero_progress_v1";
const DEF: EngveroProgress = { completedLessons: [], savedWords: [], quizBestScores: {}, streakDays: 0, lastVisitDate: "" };

export function loadProgress(): EngveroProgress {
  if (typeof window === "undefined") return DEF;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? { ...DEF, ...JSON.parse(raw) } : DEF;
  } catch { return DEF; }
}
export function saveProgress(next: EngveroProgress): void {
  if (typeof window === "undefined") return;
  try { window.localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
}
export function markLessonComplete(slug: string): EngveroProgress {
  const p = loadProgress();
  if (!p.completedLessons.includes(slug)) p.completedLessons = [...p.completedLessons, slug];
  const today = new Date().toISOString().slice(0, 10);
  if (p.lastVisitDate !== today) {
    const yest = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    p.streakDays = p.lastVisitDate === yest ? p.streakDays + 1 : 1;
    p.lastVisitDate = today;
  }
  saveProgress(p);
  return p;
}
export function toggleSavedWord(word: string): EngveroProgress {
  const p = loadProgress();
  p.savedWords = p.savedWords.includes(word) ? p.savedWords.filter((w) => w !== word) : [...p.savedWords, word];
  saveProgress(p);
  return p;
}
export function recordQuizScore(id: string, score: number, total: number): EngveroProgress {
  const p = loadProgress();
  const prev = p.quizBestScores[id];
  if (!prev || (total > 0 && score / total >= prev.score / prev.total)) p.quizBestScores[id] = { score, total };
  saveProgress(p);
  return p;
}