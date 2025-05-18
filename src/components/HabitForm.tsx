import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface HabitFormProps {
  onAddHabit: (name: string) => void;
}

const HabitForm: React.FC<HabitFormProps> = ({ onAddHabit }) => {
  const [habitName, setHabitName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate input
    if (!habitName.trim()) {
      setError('Please enter a habit name');
      return;
    }
    
    // Add the habit
    onAddHabit(habitName);
    
    // Reset form
    setHabitName('');
    setError('');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 shadow-md transition-colors duration-200"
    >
      <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Add New Habit</h2>
      
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={habitName}
          onChange={(e) => {
            setHabitName(e.target.value);
            setError('');
          }}
          placeholder="Enter a habit name"
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 
                     dark:text-white transition-colors duration-200"
          aria-label="Habit name"
        />
        
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 
                     focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 
                     transition-colors duration-200 flex items-center justify-center"
        >
          <Plus size={20} className="mr-1" /> Add Habit
        </button>
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </form>
  );
};

export default HabitForm;