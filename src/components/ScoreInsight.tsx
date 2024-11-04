import React from 'react';
import { BookOpen, Target, ArrowUpRight, CheckCircle } from 'lucide-react';

interface Expert {
  name: string;
  book: string;
  insight: string;
  actionableSteps: string[];
}

interface ScoreInsightProps {
  category: string;
  score: number;
  experts: Expert[];
  focusAreas: string[];
}

export default function ScoreInsight({ category, score, experts, focusAreas }: ScoreInsightProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-semibold text-gray-900">{category} Insights</h3>
        <span className="text-2xl font-bold text-indigo-600">{score}%</span>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-gray-600 mb-2">FOCUS AREAS</h4>
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((area, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-600 mb-2">EXPERT INSIGHTS & ACTION STEPS</h4>
          <div className="space-y-6">
            {experts.map((expert, index) => (
              <div key={index} className="border-l-2 border-indigo-200 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-medium">{expert.name}</span>
                  <span className="text-sm text-gray-500">"{expert.book}"</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{expert.insight}</p>
                <div className="space-y-2">
                  {expert.actionableSteps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium">
          <Target className="w-4 h-4" />
          Set Goals Based on These Insights
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}