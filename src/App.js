import React, { Component } from "react";
import {BrowserRouter as Router,withRouter} from "react-router-dom";
import fakeAuth from './RedirectAuth/fakeAuth';
import UserInfo from "./LoginFlash/UserInfoAuth";
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
      <p>Tùy quyền mà sẽ hiện chức năng tương ứng hoặc một vài tính năng sẽ không được chuyển hướng</p>
    )
);

 
class App extends Component {
  render() { 
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              ReactJS Oauth Login + redirects (Auth)
            </h1>
          </header>
        
        </div>
        <div>
          <AuthButton />
          <UserInfo />
        </div>
      </Router>
    );
  }
}
export default App;
