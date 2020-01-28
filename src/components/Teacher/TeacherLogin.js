import React from 'react'
import axios from 'axios'

class TeacherLogin extends React.Component{
    state = {
        user_name: '',
        password: ''
    }
    Login=()=>{
        const userdata={
            username:this.state.user_name,
            password:this.state.password
        }
        axios.post("http://localhost:3030/login", userdata)
    }
render(){
    return (
        <section>
            <div>
                 <label>Username:</label>
                    <input type="text" value={this.state.user_name}
                        onChange={(event) => this.setState({ user_name: event.target.value })} /><br>
                    </br>
                    <label>Password:</label>
                    <input type="password" value={this.state.password}
                        onChange={(event) => this.setState({ password: event.target.value })} /><br>
                    </br>
                    <button onClick={this.Login}>Login</button>
            </div>
        </section>
    )
}
}
export default TeacherLogin;