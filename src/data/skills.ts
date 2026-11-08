
import type { SkillCategory } from '../types';

export const FOUR_SKILLS: SkillCategory[] = [
  {
    id: 'speaking',
    slug: 'speaking',
    title: 'Speaking',
    iconName: 'Mic',
    subtitle: 'Build spontaneous spoken fluency, natural rhythm, and clear conversational confidence.',
    description: 'Speaking requires coordinating pronunciation, vocabulary retrieval, and sentence syntax in real time. ENGVERO guides you through structured speaking models, dialogue frameworks, and shadowing exercises designed to break hesitation and build instinct.',
    methodology: 'Active Speech Production & Shadowing: Repeat native audio models at natural speed to internalize intonation, word stress, and natural connected speech.',
    coreTechniques: [
      {
        title: 'Dialogue Frameworks & Conversational Fillers',
        description: 'Learn natural conversational connectors (e.g., "To be completely honest...", "From my perspective...", "What caught my attention was...") to buy thinking time gracefully without pausing.'
      },
      {
        title: 'Sentence Stress & Rhythm Practice',
        description: 'English is a stress-timed language. Master content word emphasis (nouns, verbs, adjectives) versus unstressed function words to sound natural.'
      },
      {
        title: 'Self-Introduction & Professional Elevator Pitch',
        description: 'Develop a crisp, 60-second introduction covering your origin, profession, passions, and current focal points with natural transitions.'
      }
    ],
    practiceExercises: [
      {
        title: 'Introducing Yourself Confidently',
        instructions: 'Listen to the example introduction, then practise speaking about yourself. Try recording your voice and listening to it.',
        level: 'A2',
        passage: `Hello! My name is Alex.

I live in a small city with my family.

I am a student, and I enjoy learning new things.

In my free time, I like reading books, watching movies, and playing football.

I am currently improving my English because I want to communicate confidently with people from different countries.

In the future, I hope to find a good job and travel to new places.

Thank you for listening!`
      },
      {
        title: 'Agreeing and Disagreeing Politely',
        instructions: 'Listen to the example discussion, practise polite agreement and disagreement, and record your own response.',
        level: 'B1',
        passage: `Emma: I think working from home is better than working in an office because it saves time and money.

Daniel: I agree that working from home saves time. However, working in an office also has some important advantages.

Emma: That's an interesting point. Could you explain what you mean?

Daniel: Certainly. Employees can communicate face to face and solve problems together more easily.

Emma: I see where you're coming from, but I believe online meetings can also help teams communicate effectively.

Daniel: That's true. Nevertheless, some people find it difficult to stay motivated when working alone.

Emma: You make a good point. Perhaps a combination of office work and remote work would be the best solution.

Daniel: I completely agree. A flexible working arrangement could provide the benefits of both approaches.

Now it is your turn.

Do you prefer working from home or working in an office?

Give your opinion, explain your reasons, and respond politely to a different viewpoint.`
      },
      {
        title: 'Expressing Opinions in Meetings',
        instructions: 'Listen to the professional meeting example, practise presenting a structured opinion, and record your own two-minute response.',
        level: 'B2',
        passage: `Good morning, everyone.

Thank you for giving me the opportunity to share my perspective on our proposed digital learning platform.

I would like to begin by highlighting the main objective of this project.

Our goal is to improve the learning experience by providing students with flexible access to educational resources and interactive practice activities.

From my perspective, the platform offers three important advantages.

First, students will be able to study at their own pace. This flexibility may help learners who need additional time to understand difficult concepts.

Second, interactive exercises can provide immediate feedback, allowing students to identify their mistakes and improve their performance.

Third, the platform could make educational resources available to a wider audience, including people who cannot attend traditional classroom sessions.

However, I also recognize several potential challenges.

Some students may have limited internet access, while others may require additional guidance when using digital learning tools.

I believe we should address these concerns before launching the platform.

For example, we could provide downloadable learning materials, clear user instructions, and a technical support service.

In conclusion, I support moving forward with the project, provided that we introduce it gradually and evaluate feedback from students and teachers.

I would welcome your thoughts and suggestions.

Thank you.

Now it is your turn.

Present your own two-minute opinion about introducing a new technology in your school or workplace.

Include an introduction, supporting arguments, a possible concern, a practical recommendation, and a conclusion.`
      }
    ],
    recommendedLessons: [
      {
        title: 'Say vs Tell: What is the Difference?',
        href: '/common-mistakes/say-vs-tell'
      },
      {
        title: 'Speak vs Talk: When to Use Each Verb',
        href: '/common-mistakes/speak-vs-talk'
      },
      {
        title: 'English Pronunciation Guide',
        href: '/pronunciation'
      }
    ]
  },

  {
    id: 'listening',
    slug: 'listening',
    title: 'Listening',
    iconName: 'Headphones',
    subtitle: 'Train your ear to decode connected speech, varied accents, and natural conversational cadence.',
    description: 'Many English learners struggle with listening not because their vocabulary is weak, but because native speech features linking, elision, weak forms, and reduced vowels (schwa). We train you to decode what you actually hear.',
    methodology: 'Acoustic Decoding & Intensive Audio Dictation: Moving from individual sounds to connected speech chunks to overcome the "blur" of fast native speakers.',
    coreTechniques: [
      {
        title: 'Decoding Connected Speech & Linking',
        description: 'Understand how consonant-to-vowel linking transforms phrases like "pick it up" into /pɪ.kɪ.tʌp/ and "going to" into "gonna".'
      },
      {
        title: 'Recognizing Weak Forms and the Schwa /ə/',
        description: 'Notice how auxiliary verbs and prepositions (was, have, at, to, for) reduce to neutral schwa sounds in unaccented positions.'
      },
      {
        title: 'Listening for Key Signpost Words',
        description: 'Identify audio cues that signal shifts in argument ("however", "conversely"), causes ("due to"), and conclusions ("ultimately").'
      }
    ],
    practiceExercises: [
      {
        title: 'Beginner Daily Conversations & Inquiries',
        instructions: 'Listen to the conversation and answer three questions.',
        level: 'A2',
        passage: `Customer: Good morning! What time does the shop open?
Assistant: We open at nine o'clock every morning.
Customer: Great! How much is this blue shirt?
Assistant: It costs twenty dollars.
Customer: Can I pay by card?
Assistant: Yes, of course. We accept cards and cash.`,
        questions: [
          {
            id: 'listening-a2-1',
            question: 'What time does the shop open?',
            options: ['8:00 AM', '9:00 AM', '10:00 AM'],
            correctAnswer: 1,
            explanation: 'The assistant says the shop opens at nine o’clock.'
          },
          {
            id: 'listening-a2-2',
            question: 'How much does the blue shirt cost?',
            options: ['$10', '$15', '$20'],
            correctAnswer: 2,
            explanation: 'The shirt costs twenty dollars.'
          },
          {
            id: 'listening-a2-3',
            question: 'Which payment methods are accepted?',
            options: ['Cash only', 'Cards only', 'Cards and cash'],
            correctAnswer: 2,
            explanation: 'The shop accepts both cards and cash.'
          }
        ]
      },
      {
        title: 'Intermediate Podcast & Narrative Comprehension',
        instructions: 'Listen to the short podcast about a community garden, then answer five comprehension questions.',
        level: 'B1',
        passage: `Host: Welcome to Everyday Stories. Today, we're talking to Sarah about a community garden in her neighborhood.

Host: Sarah, how did the garden project begin?

Sarah: Two years ago, an empty piece of land near our library was full of rubbish. A group of neighbors decided to clean it and turn it into a garden.

Host: What was the biggest challenge?

Sarah: At first, we didn't have enough money to buy tools and seeds. Fortunately, a local business donated some equipment, and volunteers helped us prepare the soil.

Host: How has the garden changed the neighborhood?

Sarah: People now grow vegetables and flowers together. Children learn about nature, and older residents enjoy meeting their neighbors. We also give some vegetables to families who need extra support.

Host: What are your plans for next year?

Sarah: We hope to build a small greenhouse so we can grow plants during colder months. We're also planning free gardening workshops.

Host: That sounds wonderful. Thank you for sharing your story, Sarah.`,
        questions: [
          {
            id: 'listening-b1-1',
            question: 'What was the land used for before the garden project?',
            options: [
              'A sports field',
              'An empty area filled with rubbish',
              'A school playground',
              'A parking area'
            ],
            correctAnswer: 1,
            explanation: 'Sarah explains that the land was empty and full of rubbish.'
          },
          {
            id: 'listening-b1-2',
            question: 'What was the biggest problem at the beginning?',
            options: [
              'Not enough volunteers',
              'Poor weather',
              'Not enough money for tools and seeds',
              'No available land'
            ],
            correctAnswer: 2,
            explanation: 'The group initially lacked money to purchase tools and seeds.'
          },
          {
            id: 'listening-b1-3',
            question: 'How did a local business help the project?',
            options: [
              'It donated equipment',
              'It purchased all the vegetables',
              'It built a greenhouse',
              'It hired professional gardeners'
            ],
            correctAnswer: 0,
            explanation: 'A local business donated equipment to support the project.'
          },
          {
            id: 'listening-b1-4',
            question: 'How does the garden support the local community?',
            options: [
              'It sells expensive flowers',
              'It provides free transportation',
              'It offers employment to everyone',
              'It brings neighbors together and shares vegetables'
            ],
            correctAnswer: 3,
            explanation: 'Residents work together, and some vegetables are shared with families needing support.'
          },
          {
            id: 'listening-b1-5',
            question: 'What does Sarah hope to do next year?',
            options: [
              'Close the garden',
              'Build a greenhouse and offer workshops',
              'Move the garden to another city',
              'Replace the vegetables with trees'
            ],
            correctAnswer: 1,
            explanation: 'Sarah plans to build a greenhouse and organize free gardening workshops.'
          }
        ]
      },
      {
        title: 'Lecture & Analytical Discussion Note-Taking',
        instructions: 'Listen to an academic-style lecture about artificial intelligence in education. Identify the main argument, supporting evidence, limitations, and conclusion. Answer six analytical questions.',
        level: 'B2',
        passage: `Lecturer: Good afternoon, everyone. Today's lecture explores the opportunities and challenges of artificial intelligence in education.

Artificial intelligence is increasingly being used to support teaching, assessment, and personalized learning. However, its effectiveness depends not only on technological capabilities but also on how educators implement these systems.

First, let us consider personalized learning. Traditional classrooms often follow a common pace, even though students have different learning needs. AI-powered educational platforms can analyze student responses and recommend exercises based on individual performance.

For example, a student struggling with fractions might receive additional practice, while another student who has mastered the topic could progress to more challenging mathematical problems.

Nevertheless, personalization does not automatically guarantee better learning outcomes. Recommendations may be inaccurate when student data is incomplete or when an algorithm has not been adequately evaluated.

Second, AI can reduce certain administrative responsibilities. Automated systems can help teachers organize assignments, identify common mistakes, and provide preliminary feedback.

This may allow teachers to devote more time to discussion, mentoring, and individual support.

However, there is an important distinction between automated feedback and meaningful educational assessment. A system may identify grammatical errors in an essay, but evaluating originality, reasoning, and creativity often requires human judgment.

Third, we must examine ethical concerns.

AI systems frequently depend on substantial amounts of student data. Educational institutions therefore need clear policies concerning privacy, consent, data security, and responsible use.

Another concern is algorithmic bias. If a system is developed using data that does not adequately represent diverse learners, its recommendations may disadvantage certain student groups.

Finally, access to technology remains unequal. Schools with limited financial resources or unreliable internet connections may struggle to implement advanced educational tools.

Consequently, AI adoption could widen existing educational inequalities unless institutions address infrastructure and accessibility.

To conclude, artificial intelligence offers promising opportunities for personalized instruction and administrative support. Nevertheless, it should be regarded as a tool that supports teachers rather than a replacement for professional educational judgment.

Successful implementation requires careful evaluation, appropriate teacher training, strong privacy protections, and equitable access.

Thank you for listening.`,
        questions: [
          {
            id: 'listening-b2-1',
            question: 'What is the main argument of the lecture?',
            options: [
              'Artificial intelligence should replace teachers completely.',
              'AI is useful only for administrative tasks.',
              'AI offers educational benefits but requires responsible implementation.',
              'Traditional education should avoid all technological tools.'
            ],
            correctAnswer: 2,
            explanation: 'The lecturer argues that AI can improve education, but its implementation must address educational, ethical, and accessibility concerns.'
          },
          {
            id: 'listening-b2-2',
            question: 'How can AI support personalized learning?',
            options: [
              'By giving every student identical exercises.',
              'By adapting learning activities to individual student performance.',
              'By eliminating classroom discussions.',
              'By preventing students from progressing independently.'
            ],
            correctAnswer: 1,
            explanation: 'AI platforms can analyze student responses and recommend exercises appropriate to individual learning needs.'
          },
          {
            id: 'listening-b2-3',
            question: 'Why might personalized AI recommendations be ineffective?',
            options: [
              'Students always reject personalized exercises.',
              'Teachers cannot access digital platforms.',
              'Personalization is unsuitable for mathematics.',
              'Student data may be incomplete or algorithms insufficiently evaluated.'
            ],
            correctAnswer: 3,
            explanation: 'The lecturer explains that incomplete data and inadequately evaluated algorithms can produce inaccurate recommendations.'
          },
          {
            id: 'listening-b2-4',
            question: 'Which task does the lecturer suggest still requires substantial human judgment?',
            options: [
              'Evaluating originality, reasoning, and creativity in essays.',
              'Organizing assignment submissions.',
              'Identifying basic grammatical errors.',
              'Recording student responses.'
            ],
            correctAnswer: 0,
            explanation: 'The lecture distinguishes automated error detection from deeper assessment of originality, reasoning, and creativity.'
          },
          {
            id: 'listening-b2-5',
            question: 'How could AI increase educational inequality?',
            options: [
              'By making all schools equally well equipped.',
              'By eliminating the need for internet access.',
              'By benefiting well-resourced schools more than schools with limited infrastructure.',
              'By guaranteeing identical educational outcomes.'
            ],
            correctAnswer: 2,
            explanation: 'Schools with limited resources or unreliable internet access may be unable to benefit equally from advanced AI tools.'
          },
          {
            id: 'listening-b2-6',
            question: 'Which conclusion best reflects the lecturer’s recommendations?',
            options: [
              'Schools should immediately automate every teaching responsibility.',
              'AI should support teachers, with careful evaluation, training, privacy safeguards, and equitable access.',
              'Educational institutions should stop collecting all performance information.',
              'Algorithmic systems are always more reliable than professional teachers.'
            ],
            correctAnswer: 1,
            explanation: 'The lecturer recommends using AI to support rather than replace teachers, while ensuring evaluation, training, privacy, and fair access.'
          }
        ]
      }
    ],
    recommendedLessons: [
      {
        title: 'Look vs See vs Watch: Understanding Perception Verbs',
        href: '/common-mistakes/look-vs-see'
      },
      {
        title: 'Prepositions of Time and Place: In, On, At',
        href: '/grammar/prepositions-in-on-at'
      }
    ]
  },

  {
    id: 'reading',
    slug: 'reading',
    title: 'Reading',
    iconName: 'BookOpen',
    subtitle: 'Advance from word-by-word translation to rapid analytical comprehension and rich vocabulary inference.',
    description: 'Reading is the single most efficient way to acquire high-frequency collocations, idiomatic expressions, and complex syntactic patterns naturally. ENGVERO provides graded texts, analytical breakdowns, and active reading strategies.',
    methodology: 'Dual-Track Extensive & Intensive Reading: Reading enjoyable texts smoothly for broad comprehension, combined with targeted structural dissection of complex sentences.',
    coreTechniques: [
      {
        title: 'Skimming & Scanning Strategies',
        description: 'Skim paragraphs for the overarching central idea (topic sentences) and scan specifically for names, dates, quantities, and keywords.'
      },
      {
        title: 'Inferring Unfamiliar Vocabulary from Context',
        description: 'Use syntactic clues, contrast indicators ("whereas", "unlike"), and prefix/suffix morphology to deduce word meanings without pausing for a dictionary.'
      },
      {
        title: 'Analyzing Cohesive Devices and Pronoun Referents',
        description: 'Track back references ("this phenomenon", "the former", "which resulted in") across complex sentences to never lose the thread of meaning.'
      }
    ],
    practiceExercises: [
      {
        title: 'Beginner Short Stories & Practical Guides',
        instructions: 'Read a short story about a visit to the library and answer five comprehension questions.',
        level: 'A2',
        passage: `A Visit to the Library

Last Saturday, Emma visited the town library with her younger brother, Jack.

They arrived at ten o'clock in the morning. The library was quiet, and several people were reading books.

Emma wanted to find a book about animals because she was preparing a school project.

A friendly librarian showed her where the science books were kept.

Jack chose a storybook about a young boy who travels around the world.

After choosing their books, they sat near a large window and read for thirty minutes.

Before leaving, Emma borrowed two books, while Jack borrowed one.

They promised to return their books the following Saturday.

On their way home, they stopped at a small café and enjoyed some sandwiches.

Emma felt happy because she had found useful information for her school project.`,
        questions: [
          {
            id: 'reading-a2-1',
            question: 'When did Emma visit the library?',
            options: [
              'Friday morning',
              'Saturday morning',
              'Sunday afternoon',
              'Monday evening'
            ],
            correctAnswer: 1,
            explanation: 'The story states that Emma visited the library last Saturday.'
          },
          {
            id: 'reading-a2-2',
            question: 'Why did Emma need a book about animals?',
            options: [
              'For a school project',
              'For her brother',
              'For a competition',
              'For a holiday'
            ],
            correctAnswer: 0,
            explanation: 'Emma was preparing a school project about animals.'
          },
          {
            id: 'reading-a2-3',
            question: 'Who helped Emma find the science books?',
            options: [
              'Her teacher',
              'Her brother',
              'A librarian',
              'A friend'
            ],
            correctAnswer: 2,
            explanation: 'A friendly librarian showed Emma where the books were kept.'
          },
          {
            id: 'reading-a2-4',
            question: 'How many books did Jack borrow?',
            options: ['One', 'Two', 'Three', 'Four'],
            correctAnswer: 0,
            explanation: 'Jack borrowed one book, while Emma borrowed two.'
          },
          {
            id: 'reading-a2-5',
            question: 'What did they do on their way home?',
            options: [
              'Visited a museum',
              'Played football',
              'Went shopping',
              'Ate sandwiches at a café'
            ],
            correctAnswer: 3,
            explanation: 'They stopped at a café and enjoyed sandwiches.'
          }
        ]
      },

      {
        title: 'News Articles & Science Briefings',
        instructions: 'Read a news-style article about urban green spaces and answer six questions.',
        level: 'B1',
        passage: `Why Cities Are Creating More Green Spaces

Many cities around the world are investing in parks, gardens, and green walking areas.

Urban planners believe that these spaces can improve the quality of life for people living in crowded neighborhoods.

One important benefit is environmental protection. Trees provide shade, absorb carbon dioxide, and help reduce temperatures during hot weather.

Green spaces can also support physical and mental well-being. Residents often use parks for walking, exercise, and relaxation.

Some cities have converted unused parking areas into small public gardens.

These projects are sometimes called pocket parks because they occupy relatively small spaces.

However, creating green areas can be expensive. Local governments must purchase land, maintain plants, and provide safe public facilities.

Another challenge is ensuring equal access. Wealthier neighborhoods often have better parks, while lower-income communities may have fewer recreational areas.

Urban planning researchers argue that public investment should focus on communities with the greatest need.

Community participation is also important. Residents can help choose suitable locations, organize gardening activities, and protect shared facilities.

Although green spaces cannot solve every urban problem, they can make cities healthier, more attractive, and more enjoyable places to live.`,
        questions: [
          {
            id: 'reading-b1-1',
            question: 'What is the main purpose of the article?',
            options: [
              'To explain why cities invest in green spaces',
              'To describe the history of parking areas',
              'To argue that all buildings should be removed',
              'To compare different types of cars'
            ],
            correctAnswer: 0,
            explanation: 'The article discusses the benefits and challenges of urban green spaces.'
          },
          {
            id: 'reading-b1-2',
            question: 'How do trees help cities during hot weather?',
            options: [
              'By increasing traffic',
              'By reducing temperatures and providing shade',
              'By preventing all rainfall',
              'By replacing public transportation'
            ],
            correctAnswer: 1,
            explanation: 'Trees provide shade and help reduce urban temperatures.'
          },
          {
            id: 'reading-b1-3',
            question: 'What are pocket parks?',
            options: [
              'Large national forests',
              'Private gardens inside houses',
              'Small public green spaces',
              'Underground parking facilities'
            ],
            correctAnswer: 2,
            explanation: 'Pocket parks are small public gardens or green areas.'
          },
          {
            id: 'reading-b1-4',
            question: 'Which challenge is mentioned in the article?',
            options: [
              'People cannot walk in parks',
              'Trees always damage buildings',
              'All cities have unlimited funding',
              'Creating and maintaining parks can be expensive'
            ],
            correctAnswer: 3,
            explanation: 'Land purchases, maintenance, and public facilities require funding.'
          },
          {
            id: 'reading-b1-5',
            question: 'Why is equal access to parks important?',
            options: [
              'Some communities have fewer recreational spaces',
              'Only wealthy people enjoy nature',
              'Parks should be restricted to tourists',
              'All neighborhoods already have equal facilities'
            ],
            correctAnswer: 0,
            explanation: 'The article highlights unequal access between wealthier and lower-income communities.'
          },
          {
            id: 'reading-b1-6',
            question: 'What role can residents play?',
            options: [
              'Preventing all public development',
              'Helping plan and maintain community green spaces',
              'Replacing professional urban planners completely',
              'Closing existing public parks'
            ],
            correctAnswer: 1,
            explanation: 'Residents can participate in planning, gardening, and protecting public facilities.'
          }
        ]
      },

      {
        title: 'Scholarly Articles & Analytical Essays',
        instructions: 'Read an analytical essay about artificial intelligence and critical thinking, then answer seven advanced questions.',
        level: 'C1',
        passage: `Artificial Intelligence and the Future of Critical Thinking

The growing integration of artificial intelligence into education has generated substantial debate concerning the relationship between technological assistance and independent intellectual development.

Advocates argue that AI-powered systems can provide personalized feedback, facilitate access to information, and support learners who require additional academic guidance.

These advantages are particularly significant in educational environments where teachers face large classes and limited instructional resources.

Nevertheless, the availability of automated assistance raises questions about the extent to which students continue to engage in independent reasoning.

When learners rely on generative systems to produce explanations, summaries, or written arguments, they may achieve immediate task completion without developing the cognitive processes traditionally associated with those activities.

However, it would be misleading to assume that technological assistance necessarily undermines critical thinking.

The educational consequences depend substantially on how AI tools are integrated into learning activities.

For example, asking students to evaluate an AI-generated argument, identify unsupported assumptions, and compare alternative interpretations may encourage deeper analytical engagement.

Conversely, using automated systems merely to generate final answers may reduce opportunities for intellectual exploration.

Another important consideration concerns the reliability of AI-generated information.

Generative systems can produce convincing explanations that contain factual inaccuracies, incomplete evidence, or misleading interpretations.

Consequently, students must develop the ability to verify sources, distinguish evidence from assertion, and recognize uncertainty.

Educational institutions therefore face a pedagogical challenge rather than a purely technological decision.

Instead of choosing between unrestricted adoption and complete prohibition, educators may need to establish structured practices that combine technological assistance with independent evaluation.

Assessment methods may also require revision. Tasks emphasizing reflection, evidence-based argumentation, and transparent documentation of AI use could provide more meaningful indicators of learning than assignments evaluated solely by their final written output.

Ultimately, the central question is not whether artificial intelligence should participate in education, but whether educational practices can ensure that such participation strengthens rather than replaces human judgment.`,
        questions: [
          {
            id: 'reading-c1-1',
            question: 'What is the central argument of the essay?',
            options: [
              'AI should replace conventional teaching.',
              'AI should be prohibited in every educational setting.',
              'The educational impact of AI depends on how it is used.',
              'Students cannot learn independently when technology is available.'
            ],
            correctAnswer: 2,
            explanation: 'The author argues that educational outcomes depend on the integration and use of AI.'
          },
          {
            id: 'reading-c1-2',
            question: 'What concern does the author raise about automated task completion?',
            options: [
              'Students may finish assignments without developing independent reasoning.',
              'Automated systems always produce incorrect answers.',
              'Teachers will immediately become unnecessary.',
              'Educational institutions will stop using assessments.'
            ],
            correctAnswer: 0,
            explanation: 'The author distinguishes completing a task from developing the cognitive skills involved.'
          },
          {
            id: 'reading-c1-3',
            question: 'Which activity would most likely strengthen critical thinking?',
            options: [
              'Copying AI-generated responses without checking them',
              'Avoiding all academic discussion',
              'Submitting automated summaries as original work',
              'Evaluating AI-generated arguments and identifying unsupported assumptions'
            ],
            correctAnswer: 3,
            explanation: 'Critical evaluation of generated arguments requires analytical engagement.'
          },
          {
            id: 'reading-c1-4',
            question: 'What does the phrase "pedagogical challenge" suggest?',
            options: [
              'A problem involving computer hardware',
              'A challenge concerning teaching methods and learning design',
              'A financial dispute between technology companies',
              'A technical problem with internet connectivity'
            ],
            correctAnswer: 1,
            explanation: 'Pedagogy concerns the methods and principles of teaching.'
          },
          {
            id: 'reading-c1-5',
            question: 'Why does the author emphasize source verification?',
            options: [
              'AI systems never provide useful information.',
              'All published academic sources are unreliable.',
              'AI-generated explanations may contain convincing inaccuracies.',
              'Students should avoid reading alternative interpretations.'
            ],
            correctAnswer: 2,
            explanation: 'The author warns that convincing generated information may still be inaccurate.'
          },
          {
            id: 'reading-c1-6',
            question: 'Which assessment approach best reflects the author’s recommendations?',
            options: [
              'Evaluating reasoning, evidence, reflection, and transparent AI use',
              'Grading only the final appearance of written assignments',
              'Eliminating all student writing activities',
              'Allowing automated systems to determine every grade'
            ],
            correctAnswer: 0,
            explanation: 'The author recommends assessing intellectual processes and transparent use of AI.'
          },
          {
            id: 'reading-c1-7',
            question: 'Which statement best describes the author’s position?',
            options: [
              'Completely opposed to educational technology',
              'Unconditionally supportive of all AI applications',
              'Concerned only with reducing educational costs',
              'Supportive of carefully structured AI use that preserves human judgment'
            ],
            correctAnswer: 3,
            explanation: 'The conclusion advocates AI assistance that strengthens rather than replaces human judgment.'
          }
        ]
      }
    ],
    recommendedLessons: [
      {
        title: 'Definite and Indefinite Articles: A, An, and The',
        href: '/grammar/articles-a-an-the'
      },
      {
        title: 'Much vs Many: Countable vs Uncountable',
        href: '/common-mistakes/much-vs-many'
      },
      {
        title: 'Build Your English Vocabulary',
        href: '/vocabulary'
      }
    ]
  },

  {
    id: 'writing',
    slug: 'writing',
    title: 'Writing',
    iconName: 'PenTool',
    subtitle: 'Express ideas with grammatical precision, elegant paragraph flow, and appropriate stylistic register.',
    description: 'Good writing is clear thinking made visible. Whether drafting a concise professional email, an academic argument, or an engaging personal story, ENGVERO equips you with templates, transition signals, and punctuation mastery.',
    methodology: 'Sentence Combining & Structural Modeling: Moving from simple clause construction to compound-complex sentences with varied clause openers and pristine coherence.',
    coreTechniques: [
      {
        title: 'The Architecture of an Effective Paragraph',
        description: 'Master the classic formula: clear Topic Sentence + 2-3 Supporting Sentences with empirical evidence + Concluding Synthesizing Sentence.'
      },
      {
        title: 'Varying Sentence Structure & Openers',
        description: 'Avoid repetitive Subject-Verb-Object patterns by beginning sentences with adverbial phrases, participial clauses, or conditional propositions.'
      },
      {
        title: 'Mastering Professional Register & Tone',
        description: 'Calibrate formal versus neutral register: knowing when to replace informal phrasal verbs with formal single-word equivalents (e.g. "look into" -> "investigate").'
      }
    ],
    practiceExercises: [
      {
        title: 'Composing a Professional Follow-Up Email',
        instructions: 'Write a polite 4-sentence email inquiring about the status of a proposal with professional sign-offs.',
        level: 'A2',
        modelAnswer: `Subject: Follow-Up on My Proposal

Dear Mr. Ahmed,

I hope you are doing well.
I am writing to ask about the status of the proposal I sent last week.
Could you please let me know if there are any updates?
Thank you for your time, and I look forward to your reply.

Best regards,
Alex`
      },
      {
        title: 'Cause-and-Effect Explanatory Paragraph',
        instructions: 'Write a 120-word paragraph explaining how remote work influences urban design, using transitional phrases like "consequently" and "as a result".',
        level: 'B1',
        modelAnswer: `Remote work is changing how people use cities. In the past, many workers travelled to offices every morning. Today, some employees work from home several days a week. Consequently, fewer people may use busy roads and public transport during rush hour. As a result, city planners can consider adding bicycle lanes, wider pavements, and more green spaces. Remote workers also spend more time in their neighbourhoods, so local cafés, shops, and parks may become more important. However, some office districts could lose customers if fewer people travel there. Therefore, planners should study changing travel patterns before redesigning streets and public spaces. Overall, remote work may encourage cities to create more flexible, accessible, and pleasant neighbourhoods for residents.`
      },
      {
        title: 'Argumentative & Comparative Essay Drafting',
        instructions: 'Draft a balanced 300-word analysis weighing the pros and cons of renewable energy investments.',
        level: 'B2',
        modelAnswer: `Renewable Energy Investments: Benefits and Challenges

Renewable energy is increasingly important as countries seek cleaner electricity and greater energy security. Investing in solar, wind, and other renewable technologies offers substantial advantages, but it also creates financial and technical challenges. A balanced investment strategy must consider both sides.

One major benefit is the potential to reduce greenhouse gas emissions. Solar panels and wind turbines generate electricity without burning fossil fuels during operation. Consequently, they can help reduce pollution and support national climate goals. Renewable projects may also create jobs in construction, installation, maintenance, and engineering. Furthermore, countries with strong domestic renewable resources can reduce their dependence on imported fuels and become less vulnerable to international price changes.

However, these projects often require considerable initial investment. Building renewable power plants, upgrading transmission networks, and installing storage systems can be expensive. Another challenge is reliability: solar generation falls at night, while wind output changes with weather conditions. Electricity networks therefore need flexible supplies, storage, and careful planning to balance demand. Renewable developments may also affect landscapes, wildlife, and nearby communities. These impacts should be assessed before construction begins.

Compared with conventional fossil-fuel projects, renewable technologies generally offer lower operational emissions, but their costs and performance depend on local conditions. For example, a sunny region may benefit greatly from solar power, whereas another area may need a combination of wind, hydroelectricity, and other sources. Policymakers should avoid assuming that one technology is suitable everywhere.

In conclusion, renewable energy investments can deliver environmental, economic, and strategic benefits. Nevertheless, governments should address high upfront costs, variable generation, and environmental concerns through transparent regulation, improved infrastructure, and realistic financial planning. A diversified and carefully managed energy system is more effective than relying on a single solution.`
      }
    ],
    recommendedLessons: [
      {
        title: 'Present Simple: Uses, Rules, and Examples',
        href: '/grammar/present-simple'
      },
      {
        title: 'House vs Home: Physical Building vs Emotional Place',
        href: '/common-mistakes/house-vs-home'
      },
      {
        title: '12 English Tenses Overview',
        href: '/tenses'
      }
    ]
  }
];
