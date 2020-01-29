import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/appContext';

function PrivateRoute({ component: RouteComponent, ...rest }) {
  const {
    state: {
      authState: { currentUser }
    }
  } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() =>
        currentUser.isAuthenticated ? (
          <RouteComponent />
        ) : (
          <Redirect to={'/login'} />
        )
      }
    />
  );
}

export default PrivateRoute;
