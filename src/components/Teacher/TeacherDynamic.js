import React from 'react';
import axios from 'axios';


class TeacherDynamic extends React.Component {
    state = {
        teacher_data: []
    }
    componentDidMount() {
        axios.get("http://localhost:3030/users/single/" + this.props.match.params.id).then(res => {
            console.log(res)
            this.setState({ teacher_data: res.data });
        });
    }
    render() {

        return (

            <div>
                <p>Username:
                 {this.state.teacher_data.username}</p>
                <p>Age:
                 {this.state.teacher_data.age}</p>

            </div>

        )
    }

}
export default TeacherDynamic;