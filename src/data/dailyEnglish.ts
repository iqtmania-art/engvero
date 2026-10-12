import { DailyEnglishData } from '../types';

const DAILY_WORDS = [
  { word: 'Reliable', phonetic: '/rɪˈlaɪəbl/', partOfSpeech: 'adjective', definition: 'Able to be trusted or depended on.', example: 'She is a reliable colleague who always finishes her work.', collocation: 'reliable source, highly reliable, reliable service', slug: 'reliable' },
  { word: 'Curious', phonetic: '/ˈkjʊəriəs/', partOfSpeech: 'adjective', definition: 'Wanting to know or learn more.', example: 'He is curious about how languages develop.', collocation: 'curious mind, curious about, naturally curious', slug: 'curious' },
  { word: 'Improve', phonetic: '/ɪmˈpruːv/', partOfSpeech: 'verb', definition: 'To become better or make something better.', example: 'Reading daily can improve your vocabulary.', collocation: 'improve skills, improve performance, improve rapidly', slug: 'improve' },
  { word: 'Confident', phonetic: '/ˈkɒnfɪdənt/', partOfSpeech: 'adjective', definition: 'Feeling sure about your abilities or decisions.', example: 'Practice made her a confident speaker.', collocation: 'feel confident, confident speaker, confident about', slug: 'confident' },
  { word: 'Accurate', phonetic: '/ˈækjərət/', partOfSpeech: 'adjective', definition: 'Correct and free from mistakes.', example: 'Please provide accurate information.', collocation: 'accurate answer, accurate information, highly accurate', slug: 'accurate' },
  { word: 'Achieve', phonetic: '/əˈtʃiːv/', partOfSpeech: 'verb', definition: 'To succeed in reaching a goal.', example: 'She worked hard to achieve her goals.', collocation: 'achieve success, achieve a goal, achieve results', slug: 'achieve' },
  { word: 'Adapt', phonetic: '/əˈdæpt/', partOfSpeech: 'verb', definition: 'To adjust to new conditions.', example: 'It takes time to adapt to a new environment.', collocation: 'adapt quickly, adapt to change, adapt a method', slug: 'adapt' },
  { word: 'Benefit', phonetic: '/ˈbenɪfɪt/', partOfSpeech: 'noun', definition: 'An advantage or positive result.', example: 'Daily practice has many benefits.', collocation: 'great benefit, health benefits, benefit from', slug: 'benefit' },
  { word: 'Challenge', phonetic: '/ˈtʃælɪndʒ/', partOfSpeech: 'noun', definition: 'A difficult task that tests your ability.', example: 'Learning new vocabulary is a useful challenge.', collocation: 'face a challenge, overcome a challenge, major challenge', slug: 'challenge' },
  { word: 'Determine', phonetic: '/dɪˈtɜːmɪn/', partOfSpeech: 'verb', definition: 'To discover or decide something.', example: 'The test will help determine your English level.', collocation: 'determine the cause, determine the result, determine whether', slug: 'determine' },
  { word: 'Efficient', phonetic: '/ɪˈfɪʃənt/', partOfSpeech: 'adjective', definition: 'Working well without wasting time or resources.', example: 'Planning makes studying more efficient.', collocation: 'efficient method, highly efficient, efficient system', slug: 'efficient' },
  { word: 'Flexible', phonetic: '/ˈfleksəbl/', partOfSpeech: 'adjective', definition: 'Able to change or adjust easily.', example: 'My work schedule is flexible.', collocation: 'flexible schedule, flexible approach, remain flexible', slug: 'flexible' },
  { word: 'Generous', phonetic: '/ˈdʒenərəs/', partOfSpeech: 'adjective', definition: 'Willing to give or share with others.', example: 'Our generous neighbour helped the family.', collocation: 'generous offer, generous person, generous with time', slug: 'generous' },
  { word: 'Hesitate', phonetic: '/ˈhezɪteɪt/', partOfSpeech: 'verb', definition: 'To pause before doing or saying something.', example: 'Do not hesitate to ask questions.', collocation: 'hesitate to ask, hesitate briefly, without hesitation', slug: 'hesitate' },
  { word: 'Identify', phonetic: '/aɪˈdentɪfaɪ/', partOfSpeech: 'verb', definition: 'To recognize or establish what something is.', example: 'Can you identify the main problem?', collocation: 'identify a problem, identify a need, identify a pattern', slug: 'identify' },
  { word: 'Maintain', phonetic: '/meɪnˈteɪn/', partOfSpeech: 'verb', definition: 'To keep something in good condition or at the same level.', example: 'Maintain a regular study routine.', collocation: 'maintain balance, maintain quality, maintain contact', slug: 'maintain' },
  { word: 'Notice', phonetic: '/ˈnəʊtɪs/', partOfSpeech: 'verb', definition: 'To see or become aware of something.', example: 'I noticed a mistake in the sentence.', collocation: 'notice a difference, notice a change, take notice', slug: 'notice' },
  { word: 'Opportunity', phonetic: '/ˌɒpəˈtjuːnəti/', partOfSpeech: 'noun', definition: 'A suitable chance to do something.', example: 'The course gave me an opportunity to practise speaking.', collocation: 'great opportunity, job opportunity, seize an opportunity', slug: 'opportunity' },
  { word: 'Patient', phonetic: '/ˈpeɪʃnt/', partOfSpeech: 'adjective', definition: 'Able to wait calmly without becoming annoyed.', example: 'Be patient when learning a new skill.', collocation: 'patient teacher, remain patient, patient with', slug: 'patient' },
  { word: 'Require', phonetic: '/rɪˈkwaɪə/', partOfSpeech: 'verb', definition: 'To need something or make it necessary.', example: 'This task requires careful attention.', collocation: 'require attention, require permission, require effort', slug: 'require' },
  { word: 'Significant', phonetic: '/sɪɡˈnɪfɪkənt/', partOfSpeech: 'adjective', definition: 'Important or large enough to be noticed.', example: 'She made significant progress this month.', collocation: 'significant change, significant difference, significant progress', slug: 'significant' },
  { word: 'Thoughtful', phonetic: '/ˈθɔːtfl/', partOfSpeech: 'adjective', definition: 'Showing care and consideration for others.', example: 'It was thoughtful of him to send a thank-you note.', collocation: 'thoughtful gesture, thoughtful person, thoughtful response', slug: 'thoughtful' },
  { word: 'Unique', phonetic: '/juˈniːk/', partOfSpeech: 'adjective', definition: 'Being the only one of its kind.', example: 'Every learner has a unique way of studying.', collocation: 'unique opportunity, unique style, truly unique', slug: 'unique' },
  { word: 'Valuable', phonetic: '/ˈvæljuəbl/', partOfSpeech: 'adjective', definition: 'Very useful or important.', example: 'Feedback is valuable for improving your writing.', collocation: 'valuable advice, valuable experience, valuable resource', slug: 'valuable' },
  { word: 'Willing', phonetic: '/ˈwɪlɪŋ/', partOfSpeech: 'adjective', definition: 'Ready or prepared to do something.', example: 'She is willing to help new students.', collocation: 'willing to learn, willing to help, perfectly willing', slug: 'willing' },
  { word: 'Expand', phonetic: '/ɪkˈspænd/', partOfSpeech: 'verb', definition: 'To become larger or make something larger.', example: 'Reading helps expand your vocabulary.', collocation: 'expand knowledge, expand a business, expand rapidly', slug: 'expand' },
  { word: 'Genuine', phonetic: '/ˈdʒenjuɪn/', partOfSpeech: 'adjective', definition: 'Real, sincere, and not false.', example: 'She showed genuine interest in the lesson.', collocation: 'genuine concern, genuine interest, genuine smile', slug: 'genuine' },
  { word: 'Approach', phonetic: '/əˈprəʊtʃ/', partOfSpeech: 'noun', definition: 'A way of dealing with a task or problem.', example: 'We need a practical approach to learning grammar.', collocation: 'practical approach, new approach, take an approach', slug: 'approach' },
  { word: 'Resilient', phonetic: '/rɪˈzɪliənt/', partOfSpeech: 'adjective', definition: 'Able to recover after difficulties.', example: 'Resilient learners keep trying after mistakes.', collocation: 'resilient person, remain resilient, resilient community', slug: 'resilient' },
  { word: 'Express', phonetic: '/ɪkˈspres/', partOfSpeech: 'verb', definition: 'To communicate a thought, feeling, or idea.', example: 'Try to express your ideas clearly in English.', collocation: 'express an opinion, express feelings, express clearly', slug: 'express' }
];

const DAILY_PHRASES = [
  { phrase: 'Keep in touch', meaning: 'To continue communicating with someone.', example: "Let's keep in touch after the course ends.", usageNote: 'Often used when saying goodbye to friends or colleagues.', slug: 'keep-in-touch' },
  { phrase: 'By the way', meaning: 'Used to introduce additional information.', example: 'By the way, have you finished your homework?', usageNote: 'Useful for changing topics or adding a point in conversation.', slug: 'by-the-way' },
  { phrase: 'Sounds good', meaning: 'Used to show that an idea or plan is acceptable.', example: 'Meeting at five sounds good to me.', usageNote: 'Common in informal conversations.', slug: 'sounds-good' },
  { phrase: 'Take your time', meaning: 'Do something without rushing.', example: 'Take your time; there is no need to hurry.', usageNote: 'A polite way to reassure someone.', slug: 'take-your-time' },
  { phrase: 'As far as I know', meaning: 'Based on the information you have.', example: 'As far as I know, the office closes at four.', usageNote: 'Useful when you are not completely certain.', slug: 'as-far-as-i-know' },
  { phrase: 'That makes sense', meaning: 'That is logical or understandable.', example: 'Now I understand your explanation. That makes sense.', usageNote: 'Used to show understanding or agreement.', slug: 'that-makes-sense' },
  { phrase: 'Never mind', meaning: 'Used to say something is not important anymore.', example: 'Never mind; I found the missing document.', usageNote: 'Can also tell someone not to worry about a minor issue.', slug: 'never-mind' },
  { phrase: 'I appreciate it', meaning: 'A polite way to express gratitude.', example: 'Thank you for your help. I really appreciate it.', usageNote: 'A slightly more formal alternative to simply saying thanks.', slug: 'i-appreciate-it' },
  { phrase: 'It depends', meaning: 'The answer changes according to the circumstances.', example: 'Can we finish today? It depends on how much work remains.', usageNote: 'Useful when the answer is not simply yes or no.', slug: 'it-depends' },
  { phrase: 'Give it a try', meaning: 'Attempt to do something.', example: 'This exercise looks difficult, but give it a try.', usageNote: 'Encourages someone to attempt something new.', slug: 'give-it-a-try' },
  { phrase: 'Make yourself at home', meaning: 'Feel comfortable in someone else’s home.', example: 'Come in and make yourself at home.', usageNote: 'A friendly expression used to welcome guests.', slug: 'make-yourself-at-home' },
  { phrase: 'I am looking forward to it', meaning: 'I feel excited about a future event.', example: 'I am looking forward to our trip.', usageNote: 'Usually followed by a noun or an -ing form when naming the event.', slug: 'looking-forward-to-it' },
  { phrase: 'Could you do me a favour?', meaning: 'A polite way to ask for help.', example: 'Could you do me a favour and check this email?', usageNote: 'Common when making a polite request.', slug: 'do-me-a-favour' },
  { phrase: 'Let me know', meaning: 'Tell me when you have information.', example: 'Let me know when you arrive safely.', usageNote: 'Used to request an update or response.', slug: 'let-me-know' },
  { phrase: 'I see what you mean', meaning: 'I understand your point of view.', example: 'I see what you mean about the deadline.', usageNote: 'Shows understanding without necessarily agreeing.', slug: 'i-see-what-you-mean' },
  { phrase: 'No worries', meaning: 'An informal way to say that something is not a problem.', example: 'No worries; I can send the file again.', usageNote: 'Common in friendly, informal conversations.', slug: 'no-worries' },
  { phrase: 'On the other hand', meaning: 'Used to introduce a contrasting point.', example: 'The job pays well. On the other hand, it requires long hours.', usageNote: 'Useful for balanced arguments and comparisons.', slug: 'on-the-other-hand' },
  { phrase: 'To be honest', meaning: 'Used to introduce a sincere opinion.', example: 'To be honest, I found the first lesson difficult.', usageNote: 'Common in both casual speech and informal writing.', slug: 'to-be-honest' },
  { phrase: 'That is a good point', meaning: 'An acknowledgement that someone has made a useful observation.', example: 'That is a good point; we should check the figures again.', usageNote: 'Useful in discussions and meetings.', slug: 'that-is-a-good-point' },
  { phrase: 'I will get back to you', meaning: 'I will respond later with information or an answer.', example: 'I need to check my schedule, and I will get back to you.', usageNote: 'Common in professional communication.', slug: 'get-back-to-you' },
  { phrase: 'For the time being', meaning: 'For now, but not necessarily permanently.', example: 'We will work from home for the time being.', usageNote: 'Used for temporary arrangements.', slug: 'for-the-time-being' },
  { phrase: 'In other words', meaning: 'Used to explain something in a different way.', example: 'The deadline is flexible; in other words, we have some extra time.', usageNote: 'Helpful when clarifying an explanation.', slug: 'in-other-words' },
  { phrase: 'As soon as possible', meaning: 'At the earliest practical time.', example: 'Please send the completed form as soon as possible.', usageNote: 'Often used in requests and workplace messages.', slug: 'as-soon-as-possible' },
  { phrase: 'It is up to you', meaning: 'You can make the decision.', example: 'We can walk or take a taxi; it is up to you.', usageNote: 'Used to give someone the freedom to choose.', slug: 'it-is-up-to-you' },
  { phrase: 'Better late than never', meaning: 'Doing something late is better than not doing it at all.', example: 'He finally started learning English. Better late than never.', usageNote: 'A common expression about delayed action.', slug: 'better-late-than-never' },
  { phrase: 'Keep that in mind', meaning: 'Remember a particular fact or consideration.', example: 'The road gets busy after five, so keep that in mind.', usageNote: 'Used when giving advice or important information.', slug: 'keep-that-in-mind' },
  { phrase: 'I could not agree more', meaning: 'I completely agree.', example: 'Practice matters more than memorising rules. I could not agree more.', usageNote: 'A strong expression of agreement.', slug: 'could-not-agree-more' },
  { phrase: 'Let us get started', meaning: 'Let us begin an activity.', example: 'Everyone is here, so let us get started.', usageNote: 'Useful for lessons, meetings, and group activities.', slug: 'let-us-get-started' },
  { phrase: 'It is worth it', meaning: 'The benefits justify the effort, time, or cost.', example: 'The course is challenging, but the result is worth it.', usageNote: 'Used when something requires effort but brings value.', slug: 'it-is-worth-it' },
  { phrase: 'I will keep you posted', meaning: 'I will give you updates as things develop.', example: 'I will keep you posted about the interview results.', usageNote: 'Common in workplace and everyday communication.', slug: 'keep-you-posted' }
];

const DAILY_IDIOMS = [
  { idiom: 'Once in a blue moon', meaning: 'Very rarely.', origin: 'A blue moon is associated with an uncommon lunar event.', example: 'We eat at that restaurant once in a blue moon.', slug: 'once-in-a-blue-moon' },
  { idiom: 'Break the ice', meaning: 'To make people feel more comfortable in a social situation.', origin: 'The expression evokes opening a path through ice to allow movement.', example: 'The teacher told a joke to break the ice.', slug: 'break-the-ice' },
  { idiom: 'Piece of cake', meaning: 'Something very easy to do.', origin: 'The expression compares ease with the simple pleasure of eating cake.', example: 'The first exercise was a piece of cake.', slug: 'piece-of-cake' },
  { idiom: 'Under the weather', meaning: 'Feeling slightly ill.', origin: 'The expression is traditionally associated with feeling unwell.', example: 'I am feeling under the weather today.', slug: 'under-the-weather' },
  { idiom: 'Spill the beans', meaning: 'To reveal a secret.', origin: 'The expression is commonly used for accidentally revealing information.', example: 'Do not spill the beans about the surprise party.', slug: 'spill-the-beans' },
  { idiom: 'Hit the nail on the head', meaning: 'To describe or identify something exactly right.', origin: 'It refers to striking a nail precisely in the correct place.', example: 'You hit the nail on the head with that explanation.', slug: 'hit-the-nail-on-the-head' },
  { idiom: 'Cost an arm and a leg', meaning: 'To be extremely expensive.', origin: 'A figurative expression for paying a very high price.', example: 'That designer bag costs an arm and a leg.', slug: 'cost-an-arm-and-a-leg' },
  { idiom: 'Burn the midnight oil', meaning: 'To work or study late into the night.', origin: 'It refers to using oil lamps during late-night work.', example: 'She burned the midnight oil before her exams.', slug: 'burn-the-midnight-oil' },
  { idiom: 'A blessing in disguise', meaning: 'Something that seems bad at first but leads to a good result.', origin: 'The expression describes a hidden positive outcome.', example: 'Missing that train was a blessing in disguise because I met an old friend.', slug: 'blessing-in-disguise' },
  { idiom: 'Call it a day', meaning: 'To stop working for the day.', origin: 'A common expression for ending a period of work.', example: 'We have finished the main tasks, so let us call it a day.', slug: 'call-it-a-day' },
  { idiom: 'Get out of hand', meaning: 'To become difficult to control.', origin: 'The expression suggests losing control over a situation.', example: 'The argument got out of hand.', slug: 'get-out-of-hand' },
  { idiom: 'On cloud nine', meaning: 'Extremely happy.', origin: 'The exact origin is uncertain; the phrase is associated with great happiness.', example: 'He was on cloud nine after passing the exam.', slug: 'on-cloud-nine' },
  { idiom: 'The ball is in your court', meaning: 'It is your turn to take action or make a decision.', origin: 'It comes from games in which players take turns returning the ball.', example: 'I have made my offer; now the ball is in your court.', slug: 'the-ball-is-in-your-court' },
  { idiom: 'Pull someone’s leg', meaning: 'To joke with someone by making them believe something untrue.', origin: 'A familiar informal expression for teasing.', example: 'Relax, I am just pulling your leg.', slug: 'pull-someones-leg' },
  { idiom: 'Add fuel to the fire', meaning: 'To make a bad situation worse.', origin: 'Adding fuel makes a fire burn more strongly.', example: 'His angry reply added fuel to the fire.', slug: 'add-fuel-to-the-fire' },
  { idiom: 'Bite the bullet', meaning: 'To face a difficult situation bravely.', origin: 'It is traditionally associated with enduring pain during difficult circumstances.', example: 'I decided to bite the bullet and make the difficult phone call.', slug: 'bite-the-bullet' },
  { idiom: 'Beat around the bush', meaning: 'To avoid talking about the main point.', origin: 'The expression is associated with avoiding the central target.', example: 'Stop beating around the bush and tell me what happened.', slug: 'beat-around-the-bush' },
  { idiom: 'Kill two birds with one stone', meaning: 'To achieve two things with one action.', origin: 'A traditional expression describing one action producing two results.', example: 'I listen to English lessons while commuting and kill two birds with one stone.', slug: 'kill-two-birds-with-one-stone' },
  { idiom: 'Let the cat out of the bag', meaning: 'To reveal a secret, often accidentally.', origin: 'The exact origin is uncertain; the phrase is used for exposing hidden information.', example: 'She let the cat out of the bag about the birthday gift.', slug: 'let-the-cat-out-of-the-bag' },
  { idiom: 'When pigs fly', meaning: 'Something that will probably never happen.', origin: 'It uses an impossible image to express disbelief.', example: 'He says he will wake up at four every day, but that will happen when pigs fly.', slug: 'when-pigs-fly' },
  { idiom: 'Miss the boat', meaning: 'To miss an opportunity.', origin: 'The expression compares a missed chance to missing transport.', example: 'Apply before Friday or you may miss the boat.', slug: 'miss-the-boat' },
  { idiom: 'Through thick and thin', meaning: 'During both good and difficult times.', origin: 'The phrase describes remaining together through different conditions.', example: 'They supported each other through thick and thin.', slug: 'through-thick-and-thin' },
  { idiom: 'Back to square one', meaning: 'Back to the beginning after a setback.', origin: 'The expression is associated with returning to the first stage of a process.', example: 'The plan failed, so we are back to square one.', slug: 'back-to-square-one' },
  { idiom: 'Actions speak louder than words', meaning: 'What people do matters more than what they say.', origin: 'A traditional saying about the importance of behaviour.', example: 'He promised to help, but actions speak louder than words.', slug: 'actions-speak-louder-than-words' },
  { idiom: 'A storm in a teacup', meaning: 'A lot of anger or worry about a small issue.', origin: 'A British expression comparing a small problem to a large storm.', example: 'Their disagreement was just a storm in a teacup.', slug: 'storm-in-a-teacup' },
  { idiom: 'Every cloud has a silver lining', meaning: 'Something good can come from a difficult situation.', origin: 'The saying refers to sunlight visible around the edge of a cloud.', example: 'Losing that job helped her find a better one; every cloud has a silver lining.', slug: 'every-cloud-has-a-silver-lining' },
  { idiom: 'Keep an eye on', meaning: 'To watch or monitor something carefully.', origin: 'A figurative expression about paying attention.', example: 'Please keep an eye on the children.', slug: 'keep-an-eye-on' },
  { idiom: 'In hot water', meaning: 'In trouble.', origin: 'A traditional expression associated with an uncomfortable situation.', example: 'He was in hot water after missing the deadline.', slug: 'in-hot-water' },
  { idiom: 'Learn the ropes', meaning: 'To learn how a job or activity works.', origin: 'It is associated with learning how to handle ropes on a ship.', example: 'It took me a week to learn the ropes at my new job.', slug: 'learn-the-ropes' },
  { idiom: 'Go the extra mile', meaning: 'To make more effort than is expected.', origin: 'The expression refers to going farther than required.', example: 'A good teacher goes the extra mile to help students.', slug: 'go-the-extra-mile' }
];

const DAILY_GRAMMAR_TIPS = [
  { title: 'Indefinite Pronouns Are Singular', rule: "Words such as 'everyone', 'everybody', 'someone', and 'nobody' normally take singular verbs in standard English.", correct: 'Everyone is ready for the presentation.', incorrect: 'Everyone are ready for the presentation.', slug: 'singular-indefinite-pronouns' },
  { title: 'Use the Present Simple for Habits', rule: 'Use the present simple to describe routines, habits, and general truths.', correct: 'She studies English every evening.', incorrect: 'She study English every evening.', slug: 'present-simple-habits' },
  { title: 'Add -s to Third-Person Singular Verbs', rule: 'In the present simple, use the base verb plus -s or -es with he, she, or it.', correct: 'He works in a school.', incorrect: 'He work in a school.', slug: 'third-person-s' },
  { title: 'Use a Before a Consonant Sound', rule: 'Use the indefinite article a before a consonant sound, not simply based on the first letter.', correct: 'She bought a university textbook.', incorrect: 'She bought an university textbook.', slug: 'a-before-consonant-sound' },
  { title: 'Use An Before a Vowel Sound', rule: 'Use an before a vowel sound.', correct: 'He waited for an hour.', incorrect: 'He waited for a hour.', slug: 'an-before-vowel-sound' },
  { title: 'Use Did With the Base Verb', rule: 'In past simple questions and negatives with did, use the base form of the main verb.', correct: 'Did you see the message?', incorrect: 'Did you saw the message?', slug: 'did-base-verb' },
  { title: 'Use Was or Were in the Past', rule: 'Use was with I, he, she, and it; use were with you, we, and they.', correct: 'They were tired after work.', incorrect: 'They was tired after work.', slug: 'was-were' },
  { title: 'Use Much With Uncountable Nouns', rule: 'Much is commonly used with uncountable nouns, especially in questions and negative sentences.', correct: 'How much water do you drink?', incorrect: 'How many water do you drink?', slug: 'much-uncountable-nouns' },
  { title: 'Use Many With Countable Plurals', rule: 'Many is used with plural countable nouns.', correct: 'How many books do you own?', incorrect: 'How much books do you own?', slug: 'many-countable-nouns' },
  { title: 'Use Fewer With Countable Nouns', rule: 'Fewer is traditionally used with plural countable nouns.', correct: 'We have fewer mistakes today.', incorrect: 'We have less mistakes today.', slug: 'fewer-countable-nouns' },
  { title: 'Use Adjectives Before Nouns', rule: 'An adjective usually comes before the noun it describes.', correct: 'She bought a beautiful dress.', incorrect: 'She bought a dress beautiful.', slug: 'adjectives-before-nouns' },
  { title: 'Use Adverbs to Describe Verbs', rule: 'Adverbs often describe how an action is performed.', correct: 'He speaks clearly.', incorrect: 'He speaks clear.', slug: 'adverbs-describe-verbs' },
  { title: 'Use Than in Comparisons', rule: 'Use than after a comparative adjective when comparing two things.', correct: 'This book is cheaper than that one.', incorrect: 'This book is cheaper then that one.', slug: 'than-in-comparisons' },
  { title: 'Use the Superlative for Three or More', rule: 'Use a superlative to identify the highest or lowest degree in a group.', correct: 'She is the tallest student in the class.', incorrect: 'She is tallest student in the class.', slug: 'superlatives' },
  { title: 'Use Some in Positive Statements', rule: 'Some is commonly used in affirmative statements with plural countable and uncountable nouns.', correct: 'I bought some apples.', incorrect: 'I bought any apples.', slug: 'some-in-statements' },
  { title: 'Use Any in Many Questions and Negatives', rule: 'Any is commonly used in questions and negative statements.', correct: 'Do you have any questions?', incorrect: 'Do you have some questions? (when asking neutrally)', slug: 'any-questions-negatives' },
  { title: 'Use Since for a Starting Point', rule: 'Since identifies the point when a situation began.', correct: 'I have lived here since 2020.', incorrect: 'I have lived here for 2020.', slug: 'since-starting-point' },
  { title: 'Use For With a Duration', rule: 'For identifies how long something has continued.', correct: 'She has studied English for three years.', incorrect: 'She has studied English since three years.', slug: 'for-duration' },
  { title: 'Use the Present Perfect for Relevant Experience', rule: 'The present perfect can describe life experiences without specifying a finished past time.', correct: 'I have visited Lahore twice.', incorrect: 'I have visited Lahore last year.', slug: 'present-perfect-experience' },
  { title: 'Use Will for Many Future Predictions', rule: 'Will is commonly used for predictions, promises, and spontaneous decisions.', correct: 'I think it will rain tomorrow.', incorrect: 'I think it rains tomorrow. (for a prediction)', slug: 'will-future-predictions' },
  { title: 'Use Going to for Plans', rule: 'Be going to commonly describes intentions and plans already formed.', correct: 'We are going to visit our grandparents.', incorrect: 'We going to visit our grandparents.', slug: 'going-to-plans' },
  { title: 'Use Could for Polite Requests', rule: 'Could can make a request sound more polite.', correct: 'Could you help me, please?', incorrect: 'Could you to help me, please?', slug: 'could-polite-requests' },
  { title: 'Use Must for Strong Obligation', rule: 'Must expresses strong obligation or necessity.', correct: 'You must wear a seat belt.', incorrect: 'You must to wear a seat belt.', slug: 'must-obligation' },
  { title: 'Use Should for Advice', rule: 'Should is followed by the base form of a verb when giving advice.', correct: 'You should practise every day.', incorrect: 'You should to practise every day.', slug: 'should-advice' },
  { title: 'Use There Is With Singular Nouns', rule: 'Use there is with a singular countable noun or an uncountable noun.', correct: 'There is a book on the table.', incorrect: 'There are a book on the table.', slug: 'there-is-singular' },
  { title: 'Use There Are With Plural Nouns', rule: 'Use there are with plural countable nouns.', correct: 'There are three chairs in the room.', incorrect: 'There is three chairs in the room.', slug: 'there-are-plural' },
  { title: 'Use Object Pronouns After Verbs', rule: 'Use me, him, her, us, and them as objects of verbs and prepositions.', correct: 'The teacher helped me.', incorrect: 'The teacher helped I.', slug: 'object-pronouns' },
  { title: 'Use Possessive Adjectives Before Nouns', rule: 'My, your, his, her, its, our, and their show possession before a noun.', correct: 'This is their house.', incorrect: 'This is them house.', slug: 'possessive-adjectives' },
  { title: 'Use Although to Show Contrast', rule: 'Although introduces a contrasting idea. Avoid adding but to the same clause structure.', correct: 'Although it was raining, we went out.', incorrect: 'Although it was raining, but we went out.', slug: 'although-contrast' },
  { title: 'Keep Subject and Verb in Agreement', rule: 'A singular subject normally takes a singular verb, and a plural subject takes a plural verb.', correct: 'The students are ready.', incorrect: 'The students is ready.', slug: 'subject-verb-agreement' }
];

const START_DATE = new Date('2026-10-08T00:00:00Z');

function getDailyIndex(length: number): number {
  const now = new Date();
  const todayUTC = Date.UTC(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );
  const startUTC = Date.UTC(2026, 9, 8);
  const elapsedDays = Math.floor((todayUTC - startUTC) / 86400000);

  return ((elapsedDays % length) + length) % length;
}

const word = DAILY_WORDS[getDailyIndex(DAILY_WORDS.length)];
const phrase = DAILY_PHRASES[getDailyIndex(DAILY_PHRASES.length)];
const idiom = DAILY_IDIOMS[getDailyIndex(DAILY_IDIOMS.length)];
const grammar = DAILY_GRAMMAR_TIPS[getDailyIndex(DAILY_GRAMMAR_TIPS.length)];

export const DAILY_ENGLISH_DATA: DailyEnglishData = {
  wordOfTheDay: word,
  phraseOfTheDay: phrase,
  idiomOfTheDay: idiom,
  grammarTip: grammar
};