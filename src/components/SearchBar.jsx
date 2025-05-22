import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    // Auto-focus search input on component mount
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
    }
  };

  const handleClear = () => {
    setInput('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="relative w-full">
      <form 
        onSubmit={handleSubmit}
        className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
          isFocused ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
        }`}
      >
        <div className="flex items-center px-4 py-3">
          <Search className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search GitHub username..."
            className="flex-1 bg-transparent border-none outline-none text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            aria-label="Search GitHub username"
          />
          {input && (
            <button
              type="button"
              onClick={handleClear}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200 p-1"
              aria-label="Clear search"
            >
              <X className="h-5 w-5" />
            </button>
          )}
          <button
            type="submit"
            className={`ml-2 px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
              input.trim() 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400 cursor-not-allowed'
            }`}
            disabled={!input.trim()}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
