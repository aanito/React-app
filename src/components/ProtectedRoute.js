// components/ProtectedRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, userRole, ...rest }) => {
  // Define your authentication logic here (e.g., check user role)
  const isAuthenticated = userRole === 'admin';

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          <Component />
        ) : (
          <Navigate to="/unauthorized" replace /> // Redirect to unauthorized page
        )
      }
    />
  );
};

export default ProtectedRoute;
