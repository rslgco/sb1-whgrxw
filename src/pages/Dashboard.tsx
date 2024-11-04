import React, { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import ProgressCard from '../components/ProgressCard';
import AIChat from '../components/AIChat';
import GoalTracker from '../components/GoalTracker';
import ScoreInsight from '../components/ScoreInsight';
import { categoryInsights } from '../data/expertInsights';

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState('health');
  
  const progressData = [
    { title: 'Health Score', score: 85, change: 5, color: 'text-green-600', key: 'health' },
    { title: 'Wealth Score', score: 72, change: 3, color: 'text-blue-600', key: 'wealth' },
    { title: 'Personal Score', score: 78, change: 7, color: 'text-purple-600', key: 'personal' },
  ];

  const insights = categoryInsights[selectedCategory];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader userName="Alex" />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {progressData.map((data) => (
            <div 
              key={data.key}
              onClick={() => setSelectedCategory(data.key)}
              className="cursor-pointer transform hover:scale-105 transition-transform"
            >
              <ProgressCard {...data} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <ScoreInsight
              category={insights.category}
              score={progressData.find(d => d.key === selectedCategory)?.score || 0}
              experts={insights.experts}
              focusAreas={insights.focusAreas}
            />
          </div>
          <div>
            <GoalTracker />
          </div>
        </div>

        <div>
          <AIChat />
        </div>
      </main>
    </div>
  );
}