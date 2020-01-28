import React from 'react';
import axios from 'axios'
import TeacherBody from '../../components/Teacher/TeacherBody.js';

class Teacher extends React.Component {
    state={
        mydata:[]
    }
    componentDidMount(){
        axios.get("http://localhost:3030/users").then(res=>{
            console.log(res)
            this.setState({mydata:res.data})
        })
    }
    render() {
        const mydata222 = this.state.mydata.map(userlists=>{
            return <TeacherBody name1={userlists.username} age11={userlists.age} user_id={userlists._id}
             password1={userlists.password} email1={userlists.email}/>})
           
        return (
            <section>
                <div className="myteacher"> this is data page.....
                </div>
            
                {mydata222}
            </section>
        )
    }
}
export default Teacher;