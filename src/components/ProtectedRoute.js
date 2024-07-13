import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, userRole, adminPath, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      userRole === 'admin' ? (
        <Component {...props} />
      ) : (
        <Redirect to="/unauthorized" />
      )
    }
  />
);

export default ProtectedRoute;
