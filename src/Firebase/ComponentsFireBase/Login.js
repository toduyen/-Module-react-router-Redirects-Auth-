import React, { Component } from 'react';
 
class Login extends Component {
    render() { 
        return (
            <div className="login">
                <p>Please click button below to sign in!</p>
                <button className="github" onClick={() => this.props.authenticate("Github")}>
                Log In With Github
                </button>
                <button className="facebook" onClick={() => this.props.authenticate("Facebook")}>
                Log In With Facebook
                </button>
            </div>
        );
    }
}
 
export default Login;