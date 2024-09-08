// frontend/src/pages/Dashboard.js

import React from 'react';
import SessionList from '../components/SessionList';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <SessionList userId={user._id} isAdmin={false} />
    </div>
  );
};

export default Dashboard;
