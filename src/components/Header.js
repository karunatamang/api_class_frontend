import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom';
import SignUpForm from './form/SignUpForm';
import LoginForm from './form/LoginForm';
import UserDashboard from './user/UserDashboard';


export default class Header extends Component {
    render() {
        return (
            <div>
                <p>Welcome to Cloth Bank</p>
                <div>
                    <NavLink to="/loginform">Login</NavLink>
                    <NavLink to="/signupform">Sign</NavLink>
                    <NavLink to="/donation">Donate</NavLink>
                </div>

                <Switch>
                    <Route path="/signupform" component={SignUpForm} />
                    <Route path="/loginform" component={LoginForm} />
                    <Route path="/userdashboard" component={UserDashboard} />
                    
                </Switch>
            </div>
        )
    }
}
