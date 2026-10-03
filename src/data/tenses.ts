import { TenseItem } from '../types';

export const ENGLISH_TENSES: TenseItem[] = [
  {
    id: 'present-simple',
    slug: 'present-simple',
    name: 'Present Simple',
    timeFrame: 'Present',
    aspect: 'Simple',
    formula: {
      positive: 'Subject + Base Verb (add -s/-es for he/she/it)',
      negative: 'Subject + do/does not + Base Verb',
      question: 'Do/Does + Subject + Base Verb?'
    },
    keyUse: 'Habits, daily routines, universal facts, and general truths.',
    signalWords: ['always', 'usually', 'often', 'every day', 'seldom', 'never'],
    examples: [
      'She works at an international architecture firm in London.',
      'Water boils at 100 degrees Celsius.',
      'Do you practice English every morning before breakfast?'
    ],
    commonMistake: {
      incorrect: 'He go to university by bus every day.',
      correct: 'He goes to university by bus every day.',
      note: 'Remember to add -s or -es to the verb with third-person singular (he, she, it).'
    },
    relatedQuizSlug: 'present-simple'
  },
  {
    id: 'present-continuous',
    slug: 'present-continuous',
    name: 'Present Continuous',
    timeFrame: 'Present',
    aspect: 'Continuous',
    formula: {
      positive: 'Subject + am/is/are + Verb-ing',
      negative: 'Subject + am/is/are + not + Verb-ing',
      question: 'Am/Is/Are + Subject + Verb-ing?'
    },
    keyUse: 'Actions happening right now or temporary situations around the present.',
    signalWords: ['now', 'at the moment', 'currently', 'right now', 'these days'],
    examples: [
      'I am preparing a presentation for the board meeting right now.',
      'They are temporarily living in Madrid while their house is renovated.',
      'Why is the printer making that strange noise?'
    ],
    commonMistake: {
      incorrect: 'I am knowing the answer to this question.',
      correct: 'I know the answer to this question.',
      note: 'Stative verbs like know, believe, understand, and want are rarely used in continuous tenses.'
    },
    relatedQuizSlug: 'english-tenses'
  },
  {
    id: 'present-perfect',
    slug: 'present-perfect',
    name: 'Present Perfect',
    timeFrame: 'Present',
    aspect: 'Perfect',
    formula: {
      positive: 'Subject + have/has + Past Participle (V3)',
      negative: 'Subject + have/has + not + Past Participle (V3)',
      question: 'Have/Has + Subject + Past Participle (V3)?'
    },
    keyUse: 'Life experiences, recent past actions with present results, and unfinished time periods.',
    signalWords: ['already', 'yet', 'just', 'ever', 'never', 'since', 'for', 'recently'],
    examples: [
      'I have visited three different continents so far.',
      'Has the client signed the agreement yet?',
      'She has lived in this historic neighborhood since 2018.'
    ],
    commonMistake: {
      incorrect: 'I have seen that documentary yesterday evening.',
      correct: 'I saw that documentary yesterday evening.',
      note: 'Use Past Simple (not Present Perfect) when a specific finished time word like yesterday, last year, or in 2020 is mentioned.'
    },
    relatedQuizSlug: 'english-tenses'
  },
  {
    id: 'present-perfect-continuous',
    slug: 'present-perfect-continuous',
    name: 'Present Perfect Continuous',
    timeFrame: 'Present',
    aspect: 'Perfect Continuous',
    formula: {
      positive: 'Subject + have/has + been + Verb-ing',
      negative: 'Subject + have/has + not + been + Verb-ing',
      question: 'Have/Has + Subject + been + Verb-ing?'
    },
    keyUse: 'Actions that started in the past and continue into the present, or actions with visible recent evidence.',
    signalWords: ['for', 'since', 'all day', 'lately', 'how long'],
    examples: [
      'They have been negotiating the terms for over three hours.',
      'Her eyes are tired because she has been reading financial reports all morning.',
      'How long have you been studying English?'
    ],
    commonMistake: {
      incorrect: 'I am studying English for five years.',
      correct: 'I have been studying English for five years.',
      note: 'When stating the duration of an action up to the present, use Present Perfect Continuous, not Present Continuous.'
    },
    relatedQuizSlug: 'english-tenses'
  },
  {
    id: 'past-simple',
    slug: 'past-simple',
    name: 'Past Simple',
    timeFrame: 'Past',
    aspect: 'Simple',
    formula: {
      positive: 'Subject + Past Form of Verb (V2)',
      negative: 'Subject + did not + Base Verb',
      question: 'Did + Subject + Base Verb?'
    },
    keyUse: 'Completed actions or states at a definite time in the past.',
    signalWords: ['yesterday', 'last night', 'two years ago', 'in 2019', 'when I was young'],
    examples: [
      'We launched the new website last Friday afternoon.',
      'Did you receive my email about the conference schedule?',
      'She did not finish the draft before the deadline.'
    ],
    commonMistake: {
      incorrect: 'Did you went to the meeting yesterday?',
      correct: 'Did you go to the meeting yesterday?',
      note: 'After the auxiliary verb "did" or "did not", the main verb always reverts to its base form.'
    },
    relatedQuizSlug: 'english-tenses'
  },
  {
    id: 'past-continuous',
    slug: 'past-continuous',
    name: 'Past Continuous',
    timeFrame: 'Past',
    aspect: 'Continuous',
    formula: {
      positive: 'Subject + was/were + Verb-ing',
      negative: 'Subject + was/were + not + Verb-ing',
      question: 'Was/Were + Subject + Verb-ing?'
    },
    keyUse: 'Ongoing actions in progress at a specific moment in the past, or interrupted past actions.',
    signalWords: ['while', 'as', 'at 8 PM yesterday', 'when'],
    examples: [
      'I was driving home when the torrential rain started.',
      'While we were discussing the budget, the director entered the room.',
      'What were you doing at ten o’clock yesterday evening?'
    ],
    commonMistake: {
      incorrect: 'When the phone rang, I cooked dinner.',
      correct: 'When the phone rang, I was cooking dinner.',
      note: 'Use Past Continuous for the longer background action that was in progress when the shorter Past Simple action occurred.'
    },
    relatedQuizSlug: 'english-tenses'
  },
  {
    id: 'past-perfect',
    slug: 'past-perfect',
    name: 'Past Perfect',
    timeFrame: 'Past',
    aspect: 'Perfect',
    formula: {
      positive: 'Subject + had + Past Participle (V3)',
      negative: 'Subject + had + not + Past Participle (V3)',
      question: 'Had + Subject + Past Participle (V3)?'
    },
    keyUse: 'An action completed before another past action or past point in time.',
    signalWords: ['before', 'after', 'by the time', 'already', 'hardly'],
    examples: [
      'By the time we arrived at the terminal, the flight had already departed.',
      'She felt confident because she had rehearsed her speech five times.',
      'Had you visited Germany before your company transferred you there?'
    ],
    commonMistake: {
      incorrect: 'When I reached the station, the train left already.',
      correct: 'When I reached the station, the train had already left.',
      note: 'Use Past Perfect for the earlier of the two past events to make the sequence clear.'
    },
    relatedQuizSlug: 'english-tenses'
  },
  {
    id: 'past-perfect-continuous',
    slug: 'past-perfect-continuous',
    name: 'Past Perfect Continuous',
    timeFrame: 'Past',
    aspect: 'Perfect Continuous',
    formula: {
      positive: 'Subject + had + been + Verb-ing',
      negative: 'Subject + had + not + been + Verb-ing',
      question: 'Had + Subject + been + Verb-ing?'
    },
    keyUse: 'An ongoing past action that continued up until another event or time in the past.',
    signalWords: ['for', 'since', 'before', 'all afternoon'],
    examples: [
      'They had been walking for six hours before they finally spotted the mountain lodge.',
      'The engineer was exhausted because he had been troubleshooting the server all night.',
      'How long had you been waiting before the train arrived?'
    ],
    commonMistake: {
      incorrect: 'He was running for two hours before he sat down.',
      correct: 'He had been running for two hours before he sat down.',
      note: 'When emphasizing the duration of an ongoing action before another past event, use Past Perfect Continuous.'
    },
    relatedQuizSlug: 'english-tenses'
  },
  {
    id: 'future-simple',
    slug: 'future-simple',
    name: 'Future Simple',
    timeFrame: 'Future',
    aspect: 'Simple',
    formula: {
      positive: 'Subject + will + Base Verb',
      negative: 'Subject + will not (won’t) + Base Verb',
      question: 'Will + Subject + Base Verb?'
    },
    keyUse: 'Spontaneous decisions, predictions based on opinion, promises, and offers.',
    signalWords: ['tomorrow', 'next week', 'soon', 'I think', 'probably', 'in the future'],
    examples: [
      'The phone is ringing; I will answer it.',
      'Experts believe artificial intelligence will transform medical diagnostics.',
      'We will deliver the final design specifications by Friday afternoon.'
    ],
    commonMistake: {
      incorrect: 'If it will rain tomorrow, we will cancel the picnic.',
      correct: 'If it rains tomorrow, we will cancel the picnic.',
      note: 'In first conditional time clauses (after if, when, as soon as), use Present Simple, not "will".'
    },
    relatedQuizSlug: 'english-tenses'
  },
  {
    id: 'future-continuous',
    slug: 'future-continuous',
    name: 'Future Continuous',
    timeFrame: 'Future',
    aspect: 'Continuous',
    formula: {
      positive: 'Subject + will + be + Verb-ing',
      negative: 'Subject + will + not + be + Verb-ing',
      question: 'Will + Subject + be + Verb-ing?'
    },
    keyUse: 'Actions that will be in progress at a specific moment in the future.',
    signalWords: ['this time tomorrow', 'at 8 PM next Monday', 'in five years'],
    examples: [
      'This time tomorrow, we will be flying over the Atlantic.',
      'Don’t call between 2 and 4 PM because I will be conducting an interview.',
      'Will you be attending the annual symposium next month?'
    ],
    commonMistake: {
      incorrect: 'At 3 PM tomorrow, I will finish the exam.',
      correct: 'At 3 PM tomorrow, I will be taking the exam.',
      note: 'Use Future Continuous when the activity is ongoing at that future time, rather than completed.'
    },
    relatedQuizSlug: 'english-tenses'
  },
  {
    id: 'future-perfect',
    slug: 'future-perfect',
    name: 'Future Perfect',
    timeFrame: 'Future',
    aspect: 'Perfect',
    formula: {
      positive: 'Subject + will + have + Past Participle (V3)',
      negative: 'Subject + will + not + have + Past Participle (V3)',
      question: 'Will + Subject + have + Past Participle (V3)?'
    },
    keyUse: 'An action that will be completed prior to a specific point or event in the future.',
    signalWords: ['by then', 'by next month', 'by the end of the year', 'in two weeks’ time'],
    examples: [
      'By the end of this semester, students will have completed thirty lab experiments.',
      'We will have finalized the budget report before the auditors arrive.',
      'Will you have finished the manuscript by December?'
    ],
    commonMistake: {
      incorrect: 'By 2028, I will graduate from medical school.',
      correct: 'By 2028, I will have graduated from medical school.',
      note: 'When referencing a milestone completed "by" a future date, Future Perfect emphasizes completion.'
    },
    relatedQuizSlug: 'english-tenses'
  },
  {
    id: 'future-perfect-continuous',
    slug: 'future-perfect-continuous',
    name: 'Future Perfect Continuous',
    timeFrame: 'Future',
    aspect: 'Perfect Continuous',
    formula: {
      positive: 'Subject + will + have + been + Verb-ing',
      negative: 'Subject + will + not + have + been + Verb-ing',
      question: 'Will + Subject + have + been + Verb-ing?'
    },
    keyUse: 'Emphasizing the duration of an ongoing action up to a specific future point in time.',
    signalWords: ['by next year', 'for ten years', 'by the time'],
    examples: [
      'By next October, Dr. Sanders will have been teaching at this university for twenty-five years.',
      'Next month, they will have been working on this renewable energy project for a full decade.',
      'How long will you have been living abroad by the time your visa expires?'
    ],
    commonMistake: {
      incorrect: 'By next year, I will work here for five years.',
      correct: 'By next year, I will have been working here for five years.',
      note: 'Use Future Perfect Continuous to measure the continuing duration up to a future milestone.'
    },
    relatedQuizSlug: 'english-tenses'
  }
];
