import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Goal {
  id: number;
  title: string;
  progress: number;
  dueDate: string;
}

export default function GoalTracker() {
  const goals: Goal[] = [
    { id: 1, title: 'Complete 30 minutes of exercise', progress: 80, dueDate: 'Today' },
    { id: 2, title: 'Read for personal development', progress: 60, dueDate: 'Tomorrow' },
    { id: 3, title: 'Review monthly budget', progress: 40, dueDate: 'This week' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Goals</h3>
      <div className="space-y-4">
        {goals.map((goal) => (
          <div key={goal.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                <span className="font-medium">{goal.title}</span>
              </div>
              <span className="text-sm text-gray-500">{goal.dueDate}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${goal.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}