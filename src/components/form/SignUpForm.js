import React from 'react';
import '../css/form.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


class SignUpForm extends React.Component {

    state = {
        fullname: '',
        email: '',
        password: '',
        address: '',
        phonenumber: '',
        user_data: []
    }

    registerData = () => {
        const data = {
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
            phonenumber: this.state.phonenumber,
    
        }
        console.log(data);

        axios.post("http://localhost:3030/register", data).then((response) => {
            
            return <Redirect to='/loginform' />
        });

    }

    render() {
        return (
            <section>
                <form>
                    <h1>Sign Up</h1>
                    <fieldset>
                        <legend><span class="number">1</span>Your basic info</legend>
                        <label for="name">Name:</label>
                        <input type="text" value={this.state.fullname}
                            onChange={(event) => this.setState({ fullname: event.target.value })} required />

                        <label for="email">Email:</label>
                        <input type="email" value={this.state.email}
                            onChange={(event) => this.setState({ email: event.target.value })} required />

                    

                        <label for="password">Password:</label>
                        <input type="password" value={this.state.password}
                            onChange={(event) => this.setState({ password: event.target.value })} required />

                            
                        <label for="address">Address:</label>
                        <input type="text" value={this.state.address}
                            onChange={(event) => this.setState({ address: event.target.value })} required />

                        <label for="phonenumber">Phone Number:</label>
                        <input type="number" value={this.state.phonenumber}
                            onChange={(event) => this.setState({ phonenumber: event.target.value })} required />
                        

                    </fieldset>
                    <button onClick={this.registerData}>Sign Up</button>
                </form>
            </section>
        );
    }

}

export default SignUpForm;