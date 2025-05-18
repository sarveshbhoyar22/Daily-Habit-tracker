import React from 'react';
import { Target, Award, TrendingUp } from 'lucide-react';

const MissionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Empowering individuals to build lasting habits and achieve their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
            <Target className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Vision Statement
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              To be the world's most trusted platform for personal habit development and growth,
              helping millions of people transform their lives through the power of consistent action.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
            <Award className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Core Values
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Simplicity in Design</li>
              <li>• User Privacy First</li>
              <li>• Continuous Innovation</li>
              <li>• Community Support</li>
              <li>• Data-Driven Decisions</li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-12">
          <TrendingUp className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Our Goals
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                1. Empower Personal Growth
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Provide tools and insights that help users understand their habits and make meaningful changes in their lives.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                2. Foster Community
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create a supportive environment where users can share experiences and motivate each other.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                3. Drive Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuously improve our platform with new features and insights based on user feedback and research.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-purple-600 text-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
          <p className="mb-6">
            Be part of a community dedicated to personal growth and positive change. Start your journey with HabitTrack today.
          </p>
          <button className="bg-white text-purple-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;