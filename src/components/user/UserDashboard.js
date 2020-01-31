import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router';

export default class UserDashboard extends Component {

    state = {
        headerdata: {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }
    }
    LogOut = () => {

        alert('clicked');

        // axios.post("http://localhost:7000/users/logout", this.state.headerdata).then((response) => {
        //     localStorage.removeItem('token');
        // });

        axios.post("http://localhost:3030/users/logout", this.state.headerdata)
        localStorage.removeItem('token');

    }

    componentDidMount() {
        alert(this.state.headerdata.headers.Authorization);
    }
    render() {
        if (this.state.headerdata.headers.Authorization === "Bearer null") {
            return <Redirect to='/loginform' />
        }

        return (<section>
            <div>
                <h1>This is dashboard page</h1>
            </div>
            <div>
                <button onClick={this.LogOut}>LOG OUT</button>
            </div>
        </section>)
    }

}
