import React, { Component } from "react";
import {BrowserRouter as Router,Link,withRouter} from "react-router-dom";
import RouterURL from "./router/RouterURL";
import fakeAuth from '../src/components/faceKae';
import UserInfo from "./FirebaseAuth/UserInfoAuth";
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

 
class App extends Component {
  render() { 
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              Welcome to React JS Social Oauth Login App
            </h1>
          </header>
          <UserInfo />
        </div>
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
}
 
export default App;
