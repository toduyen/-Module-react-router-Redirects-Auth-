import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  withRouter
} from "react-router-dom";
import RouterURL from "./router/RouterURL";
import fakeAuth from '../src/components/faceKae';
////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <RouterURL/>
      </div>
    </Router>
  );
}
const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" PhanTuan "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>bạn chưa đăng nhập.</p>
    )
);
export default AuthExample;
