import React, { Component } from 'react'
import LoginForm from '../form/LoginForm'
import SignUpForm from '../form/SignUpForm'

export default class AdminHeader extends Component {
    render() {
        return (
            <div>
                <p>This is admin nav header</p>
            <div>
                <NavLink to="/scrap">Scrap</NavLink>
                <NavLink to="/loginform">Login Form</NavLink>
                <NavLink to="/signupform">Sign Up Form</NavLink>
                
            </div>

            <Switch>
                <Route path="/signupform" component={SignUpForm} />
                <Route path="/loginform" component={LoginForm} />
                <Route path="/scrap" component={TeacherData} />
                <Route path="/teacherdashboard" component={TeacherDashboard} />
                {/* <Route path="/singleuser/:id" exact component={SingleTeacher} />
                <Route path="/update/:id" exact component={TeacherUpdate} /> */}
                
            </Switch>
                
            </div>
        )
    }
}
