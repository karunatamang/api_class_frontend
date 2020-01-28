import React from 'react'
import './Teacher.css'
import axios from 'axios'
import { Route, NavLink, Switch } from 'react-router-dom';
import TeacherDynamic from "./TeacherDynamic.js";
import TeacherUpdate from "./TeacherUpdate.js";

class TeacherBody extends React.Component {
    DeleteTeacher = () => {
        axios.delete('http://localhost:3030/deleteuser/' + this.props.user_id)
    }
    render() {
        return (
            <section>

                <div className="teachereach">
                    <h3>{this.props.name1}</h3>
                    <p>age :{this.props.age11}</p>
                    <NavLink to={"/Teacherdynamic/"+this.props.user_id}>dynamic</NavLink><br></br>
                    <NavLink to={"/updateteacher/"+this.props.user_id}>update</NavLink>

                    <p><button onClick={this.DeleteTeacher}>Delete</button> </p>


                    <Switch>
                        <Route path="/Teacherdynamic/:id" component={TeacherDynamic} />
                        <Route path="/updateteacher/:id" component={TeacherUpdate} />

                    </Switch>

                </div>
            </section>
        )
    }
}
export default TeacherBody;