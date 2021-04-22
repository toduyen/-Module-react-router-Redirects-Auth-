import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Login from '../RedirectAuth/Login';
import Protecred from '../componentsPublic/Protecred';
import Public from '../componentsPublic/Public';
import ComponentsPrivate from '../RouterPrivateAuth/ComponentsPrivate';
class RouterURL extends Component {
    render() { 
        return (
            <div>
                <Route path="/public" component={Public} />
                <Route path="/login" component={Login} />
                <ComponentsPrivate path="/protected" component={Protecred} />
            </div>
        );
    }
}
 
export default RouterURL;