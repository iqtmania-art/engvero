import { DailyEnglishData } from '../types';

export const DAILY_ENGLISH_DATA: DailyEnglishData = {
  wordOfTheDay: {
    word: 'Reliable',
    phonetic: '/rɪˈlaɪ.ə.bəl/',
    partOfSpeech: 'adjective',
    definition: 'Consistently good in quality or performance; able to be trusted.',
    example: 'He is a reliable friend who always arrives on time when you need help.',
    collocation: 'reliable source, highly reliable, reliable transport',
    slug: 'reliable'
  },
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
