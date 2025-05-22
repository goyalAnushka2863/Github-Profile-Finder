import React, { useState } from 'react';
import { Star, GitFork, Code, Eye, BookOpen, AlertCircle, Filter } from 'lucide-react';

const Repositories = ({ repos, username }) => {
  const [sortBy, setSortBy] = useState('updated');
  const [filterText, setFilterText] = useState('');
  
  const sortedAndFilteredRepos = [...repos]
    .filter(repo => repo.name.toLowerCase().includes(filterText.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'stars') return b.stargazers_count - a.stargazers_count;
      if (sortBy === 'forks') return b.forks_count - a.forks_count;
      // Default sort by updated
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays < 1) return 'today';
    if (diffInDays === 1) return 'yesterday';
    if (diffInDays < 30) return `${diffInDays} days ago`;
    
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };
  
  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-500',
      Python: 'bg-blue-600',
      Java: 'bg-orange-500',
      HTML: 'bg-red-500',
      CSS: 'bg-purple-500',
      PHP: 'bg-indigo-500',
      Ruby: 'bg-red-600',
      Swift: 'bg-orange-600',
      Go: 'bg-cyan-500',
      C: 'bg-gray-500',
      'C++': 'bg-pink-600',
      'C#': 'bg-green-600',
      Rust: 'bg-orange-700',
      Shell: 'bg-green-500',
    };
    
    return language ? colors[language] || 'bg-gray-400' : 'bg-gray-300';
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
            <BookOpen className="h-5 w-5 mr-2" />
            Repositories <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">({repos.length})</span>
          </h3>
          
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Filter repositories..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
              <Filter className="absolute left-2.5 top-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="py-1.5 pl-3 pr-8 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            >
              <option value="updated">Recently Updated</option>
              <option value="stars">Most Stars</option>
              <option value="forks">Most Forks</option>
            </select>
          </div>
        </div>
      </div>
      
      {sortedAndFilteredRepos.length > 0 ? (
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {sortedAndFilteredRepos.map(repo => (
            <div key={repo.id} className="p-4 hover:bg-gray-700 dark:hover:bg-gray-750 transition-colors duration-200">
              <div className="mb-2">
                <a 
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {repo.name}
                </a>
              </div>
              
              {repo.description && (
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                  {repo.description}
                </p>
              )}
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                {repo.language && (
                  <div className="flex items-center">
                    <span className={`h-3 w-3 rounded-full mr-1.5 ${getLanguageColor(repo.language)}`}></span>
                    <span className="text-gray-700 dark:text-gray-300">{repo.language}</span>
                  </div>
                )}
                
                {repo.stargazers_count > 0 && (
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Star className="h-4 w-4 mr-1" />
                    <span>{repo.stargazers_count.toLocaleString()}</span>
                  </div>
                )}
                
                {repo.forks_count > 0 && (
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <GitFork className="h-4 w-4 mr-1" />
                    <span>{repo.forks_count.toLocaleString()}</span>
                  </div>
                )}
                
                {repo.watchers_count > 0 && (
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Eye className="h-4 w-4 mr-1" />
                    <span>{repo.watchers_count.toLocaleString()}</span>
                  </div>
                )}
                
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <span>Updated {formatDate(repo.updated_at)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center">
          <AlertCircle className="h-12 w-12 mx-auto text-gray-400 mb-3" />
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">No repositories found</h3>
          <p className="text-gray-500 dark:text-gray-400">
            {filterText ? 'Try a different filter' : `${username} doesn't have any public repositories yet`}
          </p>
        </div>
      )}
      
      {repos.length > 0 && (
        <div className="p-4 bg-gray-50 dark:bg-gray-750 border-t border-gray-200 dark:border-gray-700 text-center">
          <a 
            href={`https://github.com/${username}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all repositories
          </a>
        </div>
      )}
    </div>
  );
};

export default Repositories;
