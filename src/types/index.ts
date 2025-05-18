export interface Habit {
  id: string;
  name: string;
  createdAt: string;
  completedDates: string[]; // ISO date strings (YYYY-MM-DD)
  color?: string;
}

export interface DateStatus {
  date: string; // ISO date string (YYYY-MM-DD)
  completed: boolean;
}

export interface AppState {
  habits: Habit[];
  theme: 'light' | 'dark';
}