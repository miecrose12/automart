import React from 'react';
import Sidebar from '../components/dash/sidebar/Sidebar';
import PasswordUpdate from '../components/dash/passwordupdate/PasswordUpdate';
import UserDetails from '../components/dash/userdetails/UserDetails';
import './dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard">
       <Sidebar />
    <div className="content">
      <div className="forms-container">
        <UserDetails />
        <PasswordUpdate />
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
