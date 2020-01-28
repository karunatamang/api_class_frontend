import React from 'react'
import axios from 'axios'

class TeacherForm extends React.Component{

render(){
    return (
        <section>
            <div>
                <label>Username:</label>
                <input type="text"/><br/>
                
                <label>Password:</label>
                <input type="text"/><br/>

                <label>Address:</label>
                <input type="text"/><br/>

                <label>Phone Number:</label>
                <input type="number"/><br/>

                <input type="submit" value="submit"/><br/>

            </div>
        </section>
    )
}
}
export default TeacherForm;