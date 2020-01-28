import React from 'react';
import axios from 'axios';


class TeacherUpdate extends React.Component {
    state = {
        user_name: '',
        age: '',
        password: '',
        email: '',
        teacher_data: []
    }
    componentDidMount() {
        axios.get("http://localhost:3030/users/single/" + this.props.match.params.id).then(res => {
            this.setState({
                user_name: res.data.username,
                age: res.data.age,
                password: res.data.password,
                email: res.data.email,
            })
        });
    }
    Updatecomponent = () => {
        const data = {
            username: this.state.user_name,
            age: this.state.age,
            password: this.state.password,
            email: this.state.email

        }

        axios.put("http://localhost:3030/update/" + this.props.match.params.id, data)


        // console.log(res)
        // this.setState({ teacher_data: res.data });

    }
    render() {

        return (
            <section>
        
                <div>
                    <label>Username:</label>
                    <input type="text" value={this.state.user_name}
                        onChange={(event) => this.setState({ user_name: event.target.value })} /><br>
                    </br>
                    <label>Password:</label>
                    <input type="text" value={this.state.password}
                        onChange={(event) => this.setState({ password: event.target.value })} /><br>
                    </br>
                    <label>Age:</label>
                    <input type="text" value={this.state.age}
                        onChange={(event) => this.setState({ age: event.target.value })} /><br>
                    </br>
                    <label>email:</label>
                    <input type="text" value={this.state.email}
                        onChange={(event) => this.setState({ email: event.target.value })} /><br>
                    </br>

                    <button onClick={this.Updatecomponent}>Update</button>
                </div>
            </section>

        )
    }

}
export default TeacherUpdate;