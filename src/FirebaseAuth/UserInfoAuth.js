import React, {Component, Fragment} from "react";
import firebase from "firebase";
import Login from "./LoginAuth";
import {firebaseApp} from "./base";
import RouterURL from "../router/RouterURL";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
class UserInfoAuth extends Component {
    state = {
        email: null,
        displayName: null,
        uid: null
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
        this.props.layID(authData.user.uid); // xmZjFzpHjFc2fEYQy1odP62MJaQ2
        const user = authData.user;
        this.setState({email: user.email, displayName: user.displayName , uid:user.uid});
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
        this.setState({email: null, displayName: null, uid:null});
    };

    render() {
        const logout = <button onClick={this.logout}>Log Out! Auth Github or Facebook</button>;
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
const mapStateToProps = (state, ownProps) => {
    return {
        reducerStateLoginAuth: state.reducerStateLoginAuth
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        layID: (getString) => {
            dispatch({type:"CHANGE_STATE_LOGIN",getString})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfoAuth)