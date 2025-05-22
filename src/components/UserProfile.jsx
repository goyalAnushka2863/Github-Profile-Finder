import React from 'react';
import { Users, MapPin, Link as LinkIcon, Calendar, Building } from 'lucide-react';

const UserProfile = ({ user }) => {
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:shadow-lg">
      <div className="p-6">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="relative mb-4">
            <img 
              src={user.avatar_url} 
              alt={`${user.login}'s avatar`}
              className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-700 shadow-md transition-transform duration-300 hover:scale-105"
            />
            {user.hireable && (
              <span className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1.5 border-2 border-white dark:border-gray-800" title="Available for hire">
                <span className="sr-only">Available for hire</span>
              </span>
            )}
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {user.name || user.login}
          </h2>
          
          <a 
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-3"
          >
            @{user.login}
          </a>
          
          {user.bio && (
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {user.bio}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{user.followers}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Followers</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{user.following}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Following</p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/30 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">{user.public_repos}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Repositories</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">{user.public_gists || 0}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Gists</p>
          </div>
        </div>
        
        <div className="space-y-3">
          {user.company && (
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <Building className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
              <span>{user.company}</span>
            </div>
          )}
          
          {user.location && (
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <MapPin className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
              <span>{user.location}</span>
            </div>
          )}
          
          {user.blog && (
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <LinkIcon className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
              <a 
                href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                {user.blog}
              </a>
            </div>
          )}
          
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <Calendar className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
            <span>Joined {formatDate(user.created_at)}</span>
          </div>
        </div>
      </div>
      
      <a 
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-3 text-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default UserProfile;
