import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-full transition-colors duration-200 
                  ${theme === 'dark' 
                     ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
                     : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun size={20} className="transition-transform duration-300 hover:rotate-12" />
      ) : (
        <Moon size={20} className="transition-transform duration-300 hover:rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;