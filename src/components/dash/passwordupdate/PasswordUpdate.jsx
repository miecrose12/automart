import React from 'react';
import './passwordupdate.css';

const PasswordUpdate = () => {
  return (
    <div className="box">
      <h2>Change Password</h2>
      <form>
        <div className="form-group1">
          <label htmlFor="old-password">Old Password</label>
          <input type="password" id="old-password" />
        </div>
        <div className="form-group1">
          <label htmlFor="new-password">New Password</label>
          <input type="password" id="new-password" />
        </div>
        <div className="form-group1">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" />
        </div>
        <button type="submit" className='btn'>Update Password</button>
      </form>
    </div>
  );
};

export default PasswordUpdate;
