import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Login from '../components/Login';
import Protecred from '../components/Protecred';
import Public from '../components/Public';
import ComponentsPrivate from '../componentsPrivate/ComponentsPrivate';
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