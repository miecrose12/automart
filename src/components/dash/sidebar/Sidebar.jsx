import React from 'react';
import './sidebar.css'; 

const userData = JSON.parse(localStorage.getItem("loginFormData"));
console.log("UserData:", userData);

const getUserInitial = (username) => {
  return username ? username.charAt(0).toUpperCase() : "";
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <h1>{getUserInitial(userData.username)}</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#">Profile</a></li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
