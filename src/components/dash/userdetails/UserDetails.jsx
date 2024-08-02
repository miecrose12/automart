import React from 'react';
import './userdetails.css'; 


const UserDetails = () => {

    const userData = JSON.parse(localStorage.getItem("loginFormData"));
  return (
    <div className="box2">
      <h2>User Details</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <p className="border border-gray-300 px-3 py-1  bg-gray-50  text-sm">
              {userData?.username}
            </p>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <p className="border border-gray-300 px-3 py-1  bg-gray-50  text-sm">
              {userData?.email}
            </p>
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <p className="border border-gray-300 px-3 py-1  bg-gray-50  text-sm">
              {userData?.mobile}
            </p>
        </div>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <p className="border border-gray-300 px-3 py-1  bg-gray-50  text-sm">
              {userData?.firat_name}
            </p>
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <p className="border border-gray-300 px-3 py-1  bg-gray-50  text-sm">
              {userData?.last_name}
            </p>
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
