import React, {Component} from 'react';

class LoginAuth extends Component {
    render() {
        return (
            <div className="login">
                <button className="github" onClick={() => this.props.authenticate("Github")}>
                    Log In With Github
                </button>
                <button
                    className="facebook"
                    onClick={() => this.props.authenticate("Facebook")}>
                    Log In With Facebook
                </button>
            </div>
        );
    }
}

export default LoginAuth;