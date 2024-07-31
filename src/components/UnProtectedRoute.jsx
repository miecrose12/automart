import React from 'react';
import { Navigate } from 'react-router-dom';
 
const UnProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('AutoCarAppToken');
  return isAuthenticated ? <Navigate to="/" /> : element;

};
 
export default UnProtectedRoute;