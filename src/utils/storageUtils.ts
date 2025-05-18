import { AppState, Habit } from '../types';

const STORAGE_KEY = 'habit-tracker-state';

const defaultState: AppState = {
  habits: [],
  theme: 'light'
};

// Load app state from localStorage
export const loadState = (): AppState => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (!serializedState) return defaultState;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    return defaultState;
  }
};

// Save app state to localStorage
export const saveState = (state: AppState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (err) {
    console.error('Error saving state to localStorage:', err);
  }
};

// Add a new habit
export const addHabit = (name: string): AppState => {
  const state = loadState();
  const newHabit: Habit = {
    id: crypto.randomUUID(),
    name,
    createdAt: new Date().toISOString(),
    completedDates: [],
    color: getRandomColor()
  };
  
  const updatedState = {
    ...state,
    habits: [...state.habits, newHabit]
  };
  
  saveState(updatedState);
  return updatedState;
};

// Delete a habit
export const deleteHabit = (habitId: string): AppState => {
  const state = loadState();
  const updatedState = {
    ...state,
    habits: state.habits.filter(habit => habit.id !== habitId)
  };
  
  saveState(updatedState);
  return updatedState;
};

// Toggle habit completion for a specific date
export const toggleHabitCompletion = (habitId: string, date: string): AppState => {
  const state = loadState();
  const updatedHabits = state.habits.map(habit => {
    if (habit.id === habitId) {
      const isAlreadyCompleted = habit.completedDates.includes(date);
      
      if (isAlreadyCompleted) {
        // Remove date if already completed
        return {
          ...habit,
          completedDates: habit.completedDates.filter(d => d !== date)
        };
      } else {
        // Add date if not completed
        return {
          ...habit,
          completedDates: [...habit.completedDates, date]
        };
      }
    }
    return habit;
  });
  
  const updatedState = {
    ...state,
    habits: updatedHabits
  };
  
  saveState(updatedState);
  return updatedState;
};

// Toggle theme
export const toggleTheme = (): AppState => {
  const state = loadState();
  const newTheme = state.theme === 'light' ? 'dark' : 'light';
  
  const updatedState = {
    ...state,
    theme: newTheme
  };
  
  saveState(updatedState);
  return updatedState;
};

// Get a random color for habit
const getRandomColor = (): string => {
  const colors = [
    '#8B5CF6', // Purple
    '#14B8A6', // Teal
    '#F97316', // Orange
    '#EC4899', // Pink
    '#3B82F6', // Blue
    '#10B981', // Green
    '#F59E0B', // Amber
  ];
  
  return colors[Math.floor(Math.random() * colors.length)];
};