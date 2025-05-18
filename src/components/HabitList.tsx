import React from 'react';
import { Habit } from '../types';
import HabitItem from './HabitItem';

interface HabitListProps {
  habits: Habit[];
  onToggleHabit: (id: string, date: string) => void;
  onDeleteHabit: (id: string) => void;
}

const HabitList: React.FC<HabitListProps> = ({ habits, onToggleHabit, onDeleteHabit }) => {
  if (habits.length === 0) {
    return (
      <div className="text-center py-10 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">
          No habits added yet
        </h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Add your first habit using the form above
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {habits.map(habit => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onToggle={onToggleHabit}
          onDelete={onDeleteHabit}
        />
      ))}
    </div>
  );
};

export default HabitList;