// frontend/src/pages/AdminDashboard.js

import React from 'react';
import SessionScheduler from '../components/SessionScheduler';
import SessionList from '../components/SessionList';

const AdminDashboard = () => {
  const userId = 'selectedUserId'; // The ID of the user selected by admin

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SessionScheduler userId={userId} />
      <SessionList isAdmin={true} />
    </div>
  );
};

export default AdminDashboard;
