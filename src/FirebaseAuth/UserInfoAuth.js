import React, {Component, Fragment} from "react";
import firebase from "firebase";
import Login from "./LoginAuth";
import {firebaseApp} from "./base";
import RouterURL from "../router/RouterURL";
import {Link} from "react-router-dom";
class UserInfoAuth extends Component {
    state = {
        email: null,
        displayName: null
    };

    componentDidMount() {
        firebase
            .auth()
            .onAuthStateChanged(user => {
                if (user) {
                    this.authHandler({user});
                }
            });
    }

    authHandler = async authData => {
        console.log(authData);
        const user = authData.user;
        this.setState({email: user.email, displayName: user.displayName});
    };

    authenticate = provider => {
        console.log(provider);
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler);
    };

    logout = async() => {
        console.log("logout");
        await firebase
            .auth()
            .signOut();
        this.setState({email: null, displayName: null});
    };

    render() {
        console.log(this.state);
        const logout = <button onClick={this.logout}>Log Out!</button>;
        if (!this.state.email) {
            return <Login authenticate={this.authenticate}/>;
        }
        return (
            <Fragment>
                <ul>
                    <li>
                    <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                    <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>
                <RouterURL/>
                <div>{logout}</div>
            </Fragment>
        );
    }
}

export default UserInfoAuth;