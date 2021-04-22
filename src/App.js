import React, { Component } from "react";
import {BrowserRouter as Router,withRouter} from "react-router-dom";
import fakeAuth from './components/faceAuth';
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
      <p>Tùy quyền mà sẽ hiện chức năng tương ứng</p>
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
