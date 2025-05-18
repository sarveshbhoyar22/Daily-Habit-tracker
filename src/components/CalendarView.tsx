import React from 'react';
import { format } from 'date-fns';
import { Habit } from '../types';
import { getCurrentWeekDates, formatDateToISO, isHabitCompletedForDate } from '../utils/dateUtils';

interface CalendarViewProps {
  habits: Habit[];
  onToggleHabit: (id: string, date: string) => void;
}

const CalendarView: React.FC<CalendarViewProps> = ({ habits, onToggleHabit }) => {
  const weekDates = getCurrentWeekDates();
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-8 overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Weekly Overview</h2>
      
      <div className="min-w-full">
        <div className="grid grid-cols-8 gap-2 border-b border-gray-200 dark:border-gray-700 pb-2 mb-3">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Habit</div>
          
          {weekDates.map(date => (
            <div 
              key={date.toString()} 
              className="text-sm font-medium text-center text-gray-500 dark:text-gray-400"
            >
              <div>{format(date, 'EEE')}</div>
              <div>{format(date, 'd')}</div>
            </div>
          ))}
        </div>
        
        {habits.length === 0 ? (
          <div className="text-center py-4 text-gray-500 dark:text-gray-400">
            No habits to display
          </div>
        ) : (
          habits.map(habit => (
            <div key={habit.id} className="grid grid-cols-8 gap-2 py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
              <div className="text-sm font-medium text-gray-800 dark:text-white truncate" title={habit.name}>
                {habit.name}
              </div>
              
              {weekDates.map(date => {
                const dateStr = formatDateToISO(date);
                const completed = isHabitCompletedForDate(habit, dateStr);
                
                return (
                  <div 
                    key={date.toString()} 
                    className="flex justify-center"
                  >
                    <button
                      onClick={() => onToggleHabit(habit.id, dateStr)}
                      className={`w-6 h-6 rounded-full ${
                        completed 
                          ? 'bg-green-500 dark:bg-green-600'
                          : 'bg-gray-200 dark:bg-gray-700'
                      } transition-colors duration-200`}
                      aria-label={completed ? 'Completed' : 'Not completed'}
                    >
                      {completed && (
                        <span className="flex justify-center items-center text-white">✓</span>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CalendarView;