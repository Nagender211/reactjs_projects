import Cookies from 'js-cookie';
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component }) => {
  const jwtToken = Cookies.get('jwt-token');

  // If there's no JWT token, redirect to the login page
  if (!jwtToken) {
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, return the component they want to access
  return Component;
};

export default ProtectedRoute;


// export default ProtectedRoute
