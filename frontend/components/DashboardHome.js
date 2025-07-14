import React from 'react';
import WelcomeBanner from './WelcomeBanner';
import TodoList from './TodoList';
import JobRecommendations from './JobRecommendations';

const DashboardHome = () => {
  return (
    <div>
      <WelcomeBanner />
      <TodoList />
      <JobRecommendations />
    </div>
  );
};

export default DashboardHome;
