import { DailyEnglishData } from '../types';

const DAILY_WORDS = [
  {
    word: 'Reliable',
    phonetic: '/rɪˈlaɪ.ə.bəl/',
    partOfSpeech: 'adjective',
    definition: 'Consistently good in quality or performance; able to be trusted.',
    example: 'He is a reliable friend who always arrives on time when you need help.',
    collocation: 'reliable source, highly reliable, reliable transport',
    slug: 'reliable'
  },
  {
    word: 'Curious',
    phonetic: '/ˈkjʊəriəs/',
    partOfSpeech: 'adjective',
    definition: 'Wanting to know or learn more about something.',
    example: 'She is curious about how people learn languages so quickly.',
    collocation: 'curious mind, curious about, naturally curious',
    slug: 'curious'
  },
  {
    word: 'Improve',
    phonetic: '/ɪmˈpruːv/',
    partOfSpeech: 'verb',
    definition: 'To become better or to make something better.',
    example: 'Reading English every day can improve your vocabulary.',
    collocation: 'improve your English, improve skills, improve performance',
    slug: 'improve'
  },
  {
    word: 'Confident',
    phonetic: '/ˈkɒnfɪdənt/',
    partOfSpeech: 'adjective',
    definition: 'Feeling sure about your abilities, decisions, or knowledge.',
    example: 'Regular speaking practice helped her become more confident in English.',
    collocation: 'feel confident, confident speaker, confident about',
    slug: 'confident'
  },
  {
    word: 'Accurate',
    phonetic: '/ˈækjərət/',
    partOfSpeech: 'adjective',
    definition: 'Correct and free from mistakes.',
    example: 'Try to use accurate grammar when writing formal emails.',
    collocation: 'accurate information, highly accurate, accurate answer',
    slug: 'accurate'
  }
];

const START_DATE = new Date('2026-10-08T00:00:00');

const today = new Date();

const dayNumber =
  Math.floor(
    (today.getTime() - START_DATE.getTime()) /
      (1000 * 60 * 60 * 24)
  ) + 1;

const dailyWord = DAILY_WORDS[(dayNumber - 1) % DAILY_WORDS.length];

export const DAILY_ENGLISH_DATA: DailyEnglishData = {
  wordOfTheDay: dailyWord,

  phraseOfTheDay: {
    phrase: 'Keep in touch',
    meaning: 'To maintain contact or communication with someone over time.',
    example: "It was great working with you on this project. Let's definitely keep in touch!",
    usageNote: 'Commonly used when saying goodbye to friends, colleagues, or classmates.',
    slug: 'keep-in-touch'
  },

  idiomOfTheDay: {
    idiom: 'Once in a blue moon',
    meaning: 'Very rarely; almost never.',
    origin: 'A blue moon is an unusual second full moon in a single calendar month.',
    example: 'My brother lives abroad, so I only get to see him in person once in a blue moon.',
    slug: 'once-in-a-blue-moon'
  },

  grammarTip: {
    title: "Indefinite Pronouns Are Singular ('Everyone', 'Somebody')",
    rule: "Words like 'everyone', 'everybody', 'someone', and 'nobody' take singular verbs in formal and standard English.",
    correct: 'Everyone is ready for the presentation.',
    incorrect: 'Everyone are ready for the presentation.',
    slug: 'singular-indefinite-pronouns'
  }
};