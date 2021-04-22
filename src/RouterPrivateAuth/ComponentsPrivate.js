import React from 'react';
import fakeAuth from '../RedirectAuth/fakeAuth';
import {Route,Redirect} from "react-router-dom";
const  PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          fakeAuth.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
}
export default PrivateRoute;