import React, { useState } from 'react';
import { Github } from 'lucide-react';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import Repositories from './Repositories';
import LoadingState from './LoadingState';
import ErrorMessage from './ErrorMessage';

const ProfileFinder = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async (username) => {
    if (!username.trim()) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      
      if (!userResponse.ok) {
        if (userResponse.status === 404) {
          throw new Error('User not found');
        } else if (userResponse.status === 403) {
          throw new Error('API rate limit exceeded. Please try again later.');
        } else {
          throw new Error('Failed to fetch user data');
        }
      }
      
      const userData = await userResponse.json();
      setUser(userData);
      
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=updated`);
      
      if (!reposResponse.ok) {
        throw new Error('Failed to fetch repositories');
      }
      
      const reposData = await reposResponse.json();
      setRepos(reposData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setUser(null);
      setRepos([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (searchUsername) => {
    setUsername(searchUsername);
    fetchUserData(searchUsername);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>
      
      {isLoading && <LoadingState />}
      
      {error && <ErrorMessage message={error} />}
      
      {user && !isLoading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <UserProfile user={user} />
          </div>
          <div className="lg:col-span-2">
            <Repositories repos={repos} username={username} />
          </div>
        </div>
      )}
      
      {!user && !isLoading && !error && (
        <div className="text-center py-20">
          <div className="mb-4">
            <Github className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
            Search for a GitHub User
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Enter a GitHub username to see their profile details, repositories, and stats
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileFinder;

