import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Target, Users, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About HabitTrack
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're on a mission to help people build better habits and achieve their goals through consistent daily actions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <Target className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              To empower individuals to transform their lives through the power of consistent habits and daily progress.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <Users className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Our Team
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A passionate group of developers and designers committed to creating the best habit tracking experience.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <Heart className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Our Values
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We believe in simplicity, consistency, and the power of small actions to create meaningful change.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Our Story
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              HabitTrack started with a simple idea: make habit tracking simple and effective. We understand that building
              new habits can be challenging, which is why we've created a tool that makes it easy to track your progress
              and stay motivated.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our platform is designed to help you focus on what matters most - taking consistent action towards your goals.
              Whether you're trying to exercise more, read daily, or develop any other positive habit, we're here to
              support your journey.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Join thousands of others who are already using HabitTrack to transform their lives, one habit at a time.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/signup"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md
                     text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                     focus:ring-purple-500"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;