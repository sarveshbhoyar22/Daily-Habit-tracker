import React from 'react';
import { Trash2, CheckCircle, Circle } from 'lucide-react';
import { Habit } from '../types';
import { calculateStreak, getCurrentDate, isHabitCompletedForDate } from '../utils/dateUtils';

interface HabitItemProps {
  habit: Habit;
  onToggle: (id: string, date: string) => void;
  onDelete: (id: string) => void;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit, onToggle, onDelete }) => {
  const today = getCurrentDate();
  const isCompleted = isHabitCompletedForDate(habit, today);
  const currentStreak = calculateStreak(habit);
  
  const getStreakBadgeClass = () => {
    if (currentStreak >= 10) return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
    if (currentStreak >= 5) return 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100';
    if (currentStreak > 0) return 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100';
    return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  return (
    <div 
      className={`flex items-center justify-between p-4 mb-3 rounded-lg transition-all duration-300
                  ${isCompleted 
                     ? 'bg-white dark:bg-gray-800 border-l-4 border-green-500 shadow-md' 
                     : 'bg-white dark:bg-gray-800 border-l-4 border-gray-300 dark:border-gray-700 shadow-sm'}`}
      style={{ borderLeftColor: isCompleted ? '#10B981' : habit.color }}
    >
      <div className="flex items-center flex-1">
        <button
          onClick={() => onToggle(habit.id, today)}
          className={`mr-3 ${isCompleted ? 'text-green-500' : 'text-gray-400 dark:text-gray-500'} 
                      hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200`}
          aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
        >
          {isCompleted ? (
            <CheckCircle size={24} className="transition-transform duration-300 transform scale-110" />
          ) : (
            <Circle size={24} className="transition-transform duration-300" />
          )}
        </button>
        
        <span className={`text-base mr-2 ${isCompleted ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-white'}`}>
          {habit.name}
        </span>
        
        <span className={`ml-2 text-xs px-2 py-1 rounded-full ${getStreakBadgeClass()}`}>
          {currentStreak > 0 ? `${currentStreak} day${currentStreak !== 1 ? 's' : ''}` : 'No streak'}
        </span>
      </div>
      
      <button
        onClick={() => onDelete(habit.id)}
        className="ml-2 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 
                  transition-colors duration-200 p-1 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20"
        aria-label="Delete habit"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default HabitItem;