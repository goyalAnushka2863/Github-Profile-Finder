import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import ProfileFinder from './components/ProfileFinder';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <ProfileFinder />
      </Layout>
    </ThemeProvider>
  );
}

export default App;