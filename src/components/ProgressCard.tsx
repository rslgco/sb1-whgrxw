import React from 'react';
import { TrendingUp } from 'lucide-react';

interface ProgressCardProps {
  title: string;
  score: number;
  change: number;
  color: string;
}

export default function ProgressCard({ title, score, change, color }: ProgressCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <span className={`px-2 py-1 rounded-full text-sm ${color} bg-opacity-10`}>
          {change > 0 ? '+' : ''}{change}%
        </span>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold">{score}%</span>
        <TrendingUp className={`w-5 h-5 ${color} mb-1`} />
      </div>
    </div>
  );
}