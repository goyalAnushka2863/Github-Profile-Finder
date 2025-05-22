import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 my-6">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertCircle className="h-5 w-5 text-red-500 dark:text-red-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800 dark:text-red-300">Error</h3>
          <div className="mt-2 text-sm text-red-700 dark:text-red-200">
            <p>{message}</p>
          </div>
          {message.includes('rate limit') && (
            <div className="mt-2">
              <p className="text-xs text-red-600 dark:text-red-300">
                GitHub API has rate limits for unauthenticated requests. Please try again later.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;

