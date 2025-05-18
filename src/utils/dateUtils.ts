import { format, parse, addDays, subDays, startOfWeek, isSameDay } from 'date-fns';
import { Habit } from '../types';

// Format a date to YYYY-MM-DD
export const formatDateToISO = (date: Date): string => {
  return format(date, 'yyyy-MM-dd');
};

// Get current date in ISO format
export const getCurrentDate = (): string => {
  return formatDateToISO(new Date());
};

// Check if a habit is completed for a specific date
export const isHabitCompletedForDate = (habit: Habit, date: string): boolean => {
  return habit.completedDates.includes(date);
};

// Calculate the current streak for a habit
export const calculateStreak = (habit: Habit): number => {
  const today = new Date();
  let streak = 0;
  let currentDate = today;
  
  // Check today first
  const isCompletedToday = isHabitCompletedForDate(habit, formatDateToISO(today));
  if (!isCompletedToday) {
    // If not completed today, check if completed yesterday to continue the streak
    const yesterday = subDays(today, 1);
    const isCompletedYesterday = isHabitCompletedForDate(habit, formatDateToISO(yesterday));
    if (!isCompletedYesterday) {
      return 0; // Break streak if both today and yesterday are not completed
    }
    // If completed yesterday but not today, we'll count from yesterday
    currentDate = yesterday;
  }
  
  // Count consecutive days
  let dayToCheck = currentDate;
  let keepCounting = true;
  
  while (keepCounting) {
    const dateStr = formatDateToISO(dayToCheck);
    if (isHabitCompletedForDate(habit, dateStr)) {
      streak++;
      dayToCheck = subDays(dayToCheck, 1);
    } else {
      keepCounting = false;
    }
  }
  
  return streak;
};

// Get an array of dates for the current week
export const getCurrentWeekDates = (): Date[] => {
  const today = new Date();
  const startDay = startOfWeek(today, { weekStartsOn: 1 }); // Week starts on Monday
  
  return Array.from({ length: 7 }).map((_, index) => {
    return addDays(startDay, index);
  });
};

// Calculate completion percentage for today
export const calculateTodayCompletion = (habits: Habit[]): number => {
  if (habits.length === 0) return 0;
  
  const today = getCurrentDate();
  const completedToday = habits.filter(habit => 
    isHabitCompletedForDate(habit, today)
  ).length;
  
  return Math.round((completedToday / habits.length) * 100);
};