import React from 'react';
import { CheckSquare } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm py-4 px-6 mb-8 flex justify-between items-center transition-colors duration-200">
      <div className="flex items-center">
        <CheckSquare size={28} className="text-purple-600 dark:text-purple-400 mr-2" />
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Daily Habit Tracker
        </h1>
      </div>
      
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </header>
  );
};

export default Header;