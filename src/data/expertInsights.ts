interface CategoryInsights {
  category: string;
  experts: {
    name: string;
    book: string;
    insight: string;
    actionableSteps: string[];
  }[];
  focusAreas: string[];
}

export const categoryInsights: Record<string, CategoryInsights> = {
  health: {
    category: 'Health & Fitness',
    experts: [
      {
        name: 'James Clear',
        book: 'Atomic Habits',
        insight: 'Build a system of small, consistent health habits rather than focusing on goals alone.',
        actionableSteps: [
          'Start with a 2-minute exercise routine',
          'Track your meals using a food diary',
          'Set up your environment for success',
          'Create implementation intentions'
        ]
      },
      {
        name: 'Dr. Matthew Walker',
        book: 'Why We Sleep',
        insight: 'Prioritize 7-9 hours of quality sleep as it directly impacts physical health, mental performance, and longevity.',
        actionableSteps: [
          'Maintain consistent sleep/wake times',
          'Create a cool, dark sleeping environment',
          'Avoid screens 1 hour before bed',
          'Practice relaxation techniques'
        ]
      },
      {
        name: 'Dr. Peter Attia',
        book: 'Outlive',
        insight: 'Focus on four key pillars: exercise, nutrition, sleep, and emotional health for optimal longevity.',
        actionableSteps: [
          'Incorporate both strength and cardio training',
          'Practice time-restricted eating',
          'Prioritize protein intake',
          'Regular stress management practices'
        ]
      }
    ],
    focusAreas: [
      'Sleep Optimization',
      'Strength Training',
      'Nutrition Planning',
      'Stress Management',
      'Recovery Protocols'
    ]
  },
  wealth: {
    category: 'Financial Growth',
    experts: [
      {
        name: 'Morgan Housel',
        book: 'The Psychology of Money',
        insight: 'Focus on reasonable financial decisions over a long time horizon rather than brilliant decisions in short bursts.',
        actionableSteps: [
          'Create an automated savings plan',
          'Build a 6-month emergency fund',
          'Invest consistently regardless of market conditions',
          'Focus on your savings rate over returns'
        ]
      },
      {
        name: 'Ramit Sethi',
        book: 'I Will Teach You To Be Rich',
        insight: 'Automate your finances and focus on spending consciously on what you value most.',
        actionableSteps: [
          'Set up automatic bill payments',
          'Create separate savings accounts for goals',
          'Negotiate recurring bills annually',
          'Optimize credit card rewards'
        ]
      },
      {
        name: 'JL Collins',
        book: 'The Simple Path to Wealth',
        insight: 'Invest in low-cost index funds and focus on long-term market growth rather than timing the market.',
        actionableSteps: [
          'Choose low-cost index funds',
          'Maximize tax-advantaged accounts',
          'Maintain a simple portfolio',
          'Rebalance annually'
        ]
      }
    ],
    focusAreas: [
      'Emergency Fund',
      'Investment Strategy',
      'Debt Management',
      'Tax Optimization',
      'Retirement Planning'
    ]
  },
  personal: {
    category: 'Personal Growth',
    experts: [
      {
        name: 'Carol S. Dweck',
        book: 'Mindset',
        insight: 'Develop a growth mindset by viewing challenges as opportunities to learn and improve.',
        actionableSteps: [
          'Embrace challenges as learning opportunities',
          'Focus on the process over outcomes',
          'Learn from criticism and feedback',
          'Study success stories in your field'
        ]
      },
      {
        name: 'Cal Newport',
        book: 'Deep Work',
        insight: 'Cultivate the ability to focus without distraction on cognitively demanding tasks.',
        actionableSteps: [
          'Schedule deep work blocks',
          'Create a distraction-free environment',
          'Practice digital minimalism',
          'Track deep work hours'
        ]
      },
      {
        name: 'Brené Brown',
        book: 'Daring Greatly',
        insight: 'Embrace vulnerability and authenticity as strengths in personal development.',
        actionableSteps: [
          'Practice self-reflection daily',
          'Share your struggles and successes',
          'Set boundaries in relationships',
          'Cultivate self-compassion'
        ]
      }
    ],
    focusAreas: [
      'Skill Development',
      'Time Management',
      'Relationship Building',
      'Mental Resilience',
      'Goal Setting'
    ]
  }
};