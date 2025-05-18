import React from 'react';

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  // Ensure percentage is between 0 and 100
  const clampedPercentage = Math.min(100, Math.max(0, percentage));
  
  // Determine color based on completion percentage
  const getColorClass = () => {
    if (clampedPercentage < 30) return 'bg-red-500';
    if (clampedPercentage < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Today's Progress</h2>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {clampedPercentage}% Complete
        </span>
      </div>
      
      <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full ${getColorClass()} transition-all duration-500 ease-out`}
          style={{ width: `${clampedPercentage}%` }}
          role="progressbar"
          aria-valuenow={clampedPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      {clampedPercentage === 100 && (
        <div className="mt-2 text-sm text-green-600 dark:text-green-400 font-medium text-center animate-pulse">
          🎉 Great job! You've completed all your habits for today!
        </div>
      )}
    </div>
  );
};

export default ProgressBar;