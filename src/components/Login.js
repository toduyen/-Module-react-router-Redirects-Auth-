import React, { Component } from 'react';
import fakeAuth from '../components/faceKae';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
class Login extends Component {
  state = { redirectToReferrer: false };
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };
  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;
    if (redirectToReferrer) return <Redirect to={from} />;
    return (
      <div>
        <p>Vị trí bạn đang đứng là {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}
 
export default Login;