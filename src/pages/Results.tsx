import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Lock, Unlock, Send } from 'lucide-react';

export default function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateScores = (answers) => ({
    health: 85,
    wealth: 72,
    personal: 78
  });

  const scores = calculateScores(location.state?.answers || {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Your Personal Growth Score</h1>
          <p className="text-xl text-gray-600">Unlock your detailed analysis and personalized improvement plan</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {Object.entries(scores).map(([category, score]) => (
            <div key={category} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 capitalize">{category}</h3>
              <div className="relative">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 filter blur-sm">
                  {score}%
                </div>
                <Lock className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Unlock Your Full Analysis</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Enter your email to receive your detailed report
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>
                  Unlock Your Results
                  <Unlock className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            By continuing, you agree to our Terms of Service and Privacy Policy.
            <br />
            We'll send you personalized insights and recommendations to help you achieve your goals.
          </p>
        </div>
      </div>
    </div>
  );
}