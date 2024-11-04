import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Wallet, Heart, ArrowRight } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 inline-block text-transparent bg-clip-text">
            Transform Your Life with AI-Powered Guidance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your path to holistic well-being through personalized assessment and AI coaching in health, wealth, and personal growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Heart className="w-12 h-12 text-pink-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Health & Fitness</h2>
            <p className="text-gray-600">Optimize your physical well-being with personalized nutrition and fitness plans backed by leading experts.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Wallet className="w-12 h-12 text-green-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Financial Growth</h2>
            <p className="text-gray-600">Build lasting wealth with strategic guidance aligned with your personal financial goals and circumstances.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Brain className="w-12 h-12 text-purple-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Personal Development</h2>
            <p className="text-gray-600">Unlock your potential with habit-forming strategies from world-renowned personal development experts.</p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/assessment')}
            className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-16 text-center text-gray-600">
          <p className="mb-4 font-medium">Trusted by thousands of users worldwide</p>
          <div className="flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-indigo-600">98%</span>
              <span className="text-sm text-left leading-tight">User<br/>Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-indigo-600">50K+</span>
              <span className="text-sm text-left leading-tight">Active<br/>Users</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-indigo-600">85%</span>
              <span className="text-sm text-left leading-tight">Goal<br/>Achievement</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}