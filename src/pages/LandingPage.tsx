import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, TrendingUp, Calendar, Award } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            Build Better Habits,<br />One Day at a Time
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Track your daily habits, build streaks, and achieve your goals with our intuitive habit tracking platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/signup"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
            >
              Get Started Free
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Everything you need to build better habits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <CheckCircle className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Daily Tracking
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Easily track your daily habits with simple checkmarks and progress indicators.
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <TrendingUp className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Progress Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Visualize your progress with detailed analytics and insights.
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Calendar className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Calendar View
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track your habits over time with an intuitive calendar interface.
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Award className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Achievement System
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Stay motivated with streaks and achievement badges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;