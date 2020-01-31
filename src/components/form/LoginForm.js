import React from 'react';
import '../css/form.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


class LoginForm extends React.Component {

    state = {
        email: '',
        password: '',
        isloggedIn: false

    }

    handleChange = (e) => {
        this.setState(
            { [e.target.email]: e.target.value }
        )
    }
    UserLogin = () => {
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post("http://localhost:3030/login", data).then((response) => {
                localStorage.setItem('token', response.data.token);
                this.setState({ isloggedIn: true }).catch((err) => console.log(err.response))
                this.setState({ email: '', password: '' })
            

            });
    }

    render() {
        if (this.state.isloggedIn === true) {
            return <Redirect to='/userdashboard' />
        } else {
            return (<section>
                <form>
                    <h1>Login Form</h1>
                    <fieldset>
                        <label for="email">Email:</label>
                        <input type="email" name="email" value={this.state.email}
                            onChange={this.handleChange} required />

                        <label for="password">Password:</label>
                        <input type="password" name="password" value={this.state.password}
                            onChange={this.handleChange} required />
                    </fieldset>

                    <button onClick={this.UserLogin}>Login</button>
                </form>
            </section>

            );

        }


    }
}

export default LoginForm;


