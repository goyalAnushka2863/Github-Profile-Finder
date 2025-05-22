import React from 'react';

const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-r-blue-300 border-b-transparent border-l-transparent animate-spin animation-delay-150"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-r-transparent border-b-blue-200 border-l-transparent animate-spin animation-delay-300"></div>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-300 animate-pulse">Loading profile data...</p>
    </div>
  );
};

export default LoadingState;
