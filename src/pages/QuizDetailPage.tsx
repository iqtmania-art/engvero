import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { QuizEngine } from '../components/QuizEngine';
import { QuizItem } from '../types';

interface QuizDetailPageProps {
  quiz: QuizItem;
  onNavigate: (path: string) => void;
}

export const QuizDetailPage: React.FC<QuizDetailPageProps> = ({ quiz, onNavigate }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs
        items={[
          { label: 'Quizzes', href: '/quizzes' },
          { label: quiz.title }
        ]}
        onNavigate={onNavigate}
      />

      <QuizEngine
        title={quiz.title}
        category={quiz.category}
        level={quiz.level}
        questions={quiz.questions}
        onRelatedNavigate={onNavigate}
        relatedLessonHref={
          quiz.category === 'Tenses'
            ? '/tenses'
            : quiz.category === 'Common Mistakes'
            ? '/common-mistakes'
            : quiz.category === 'Vocabulary'
            ? '/vocabulary'
            : '/grammar'
        }
        relatedLessonTitle={`Related ${quiz.category} Lessons`}
      />
    </div>
  );
};
