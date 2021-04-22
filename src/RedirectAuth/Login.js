import React, { Component } from 'react';
import fakeAuth from './fakeAuth';
import {Redirect} from "react-router-dom";
import { connect } from 'react-redux';
class Login extends Component {
  state = { redirectToReferrer: false };
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };
  thucThiKhiCoMa = ()  => {
    if(this.props.reducerStateLoginAuth.dataLogin == 'xmZjFzpHjFc2fEYQy1odP62MJaQ2')
    {
      fakeAuth.authenticate(() => {
        this.setState({ redirectToReferrer: true });
      });
    }
    else
    {
      return null;
    }
  }
  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;
    if (redirectToReferrer) return <Redirect to={from} />;
    return (
      <div>
          {this.thucThiKhiCoMa()}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    reducerStateLoginAuth: state.reducerStateLoginAuth
  }
}
export default connect(mapStateToProps)(Login)