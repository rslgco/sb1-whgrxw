import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const questions = {
  health: [
    {
      id: 'sleep',
      question: 'How would you rate your sleep quality?',
      options: ['Poor', 'Fair', 'Good', 'Excellent'],
    },
    {
      id: 'exercise',
      question: 'How often do you exercise?',
      options: ['Rarely', '1-2 times/week', '3-4 times/week', '5+ times/week'],
    },
    {
      id: 'nutrition',
      question: 'How would you rate your eating habits?',
      options: ['Poor', 'Fair', 'Good', 'Excellent'],
    }
  ],
  wealth: [
    {
      id: 'savings',
      question: 'How much of your income do you save monthly?',
      options: ['0-5%', '5-15%', '15-25%', '25%+'],
    },
    {
      id: 'investments',
      question: 'How diversified is your investment portfolio?',
      options: ['No investments', 'Single asset', 'Multiple assets', 'Fully diversified'],
    },
    {
      id: 'debt',
      question: 'How would you describe your debt situation?',
      options: ['Significant debt', 'Some debt', 'Little debt', 'No debt'],
    }
  ],
  personal: [
    {
      id: 'goals',
      question: 'How often do you set and review personal goals?',
      options: ['Rarely', 'Sometimes', 'Often', 'Regularly'],
    },
    {
      id: 'learning',
      question: 'How much time do you dedicate to learning new skills?',
      options: ['Very little', 'Some', 'Moderate', 'Significant'],
    },
    {
      id: 'balance',
      question: 'How would you rate your work-life balance?',
      options: ['Poor', 'Fair', 'Good', 'Excellent'],
    }
  ]
};

export default function Assessment() {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState('health');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const sections = ['health', 'wealth', 'personal'];
  const currentQuestions = questions[currentSection];
  const currentQuestion = currentQuestions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: answer
    });

    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentSection !== sections[sections.length - 1]) {
      const nextSectionIndex = sections.indexOf(currentSection) + 1;
      setCurrentSection(sections[nextSectionIndex]);
      setCurrentQuestionIndex(0);
    } else {
      navigate('/results', { state: { answers } });
    }
  };

  const progress = ((sections.indexOf(currentSection) * currentQuestions.length + currentQuestionIndex + 1) / 
    (sections.length * currentQuestions.length)) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <div className="h-2 w-full bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">{currentQuestion.question}</h2>
            <p className="text-gray-600">Section: {currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}</p>
          </div>

          <div className="grid gap-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="p-4 text-left rounded-xl border-2 border-gray-200 hover:border-indigo-600 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            {currentQuestionIndex > 0 || currentSection !== sections[0] ? (
              <button
                onClick={() => {
                  if (currentQuestionIndex > 0) {
                    setCurrentQuestionIndex(currentQuestionIndex - 1);
                  } else {
                    const prevSectionIndex = sections.indexOf(currentSection) - 1;
                    setCurrentSection(sections[prevSectionIndex]);
                    setCurrentQuestionIndex(questions[sections[prevSectionIndex]].length - 1);
                  }
                }}
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>
            ) : <div></div>}
          </div>
        </div>
      </div>
    </div>
  );
}