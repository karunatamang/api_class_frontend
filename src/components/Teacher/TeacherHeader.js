import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import TeacherBody from "./TeacherBody";
import TeacherForm from './TeacherForm';
import TeacherDynamic from './TeacherDynamic';
import TeacherData from './TeacherData';
import TeacherUpdate from './TeacherUpdate';
import TeacherLogin from './TeacherLogin';


const TeacherHeader = () => {
    return (

        <div>
            <ul>
                <li> <NavLink to="/">Home</NavLink></li>
                <li>  <NavLink to="/form">Form</NavLink></li>
                <li><NavLink to="/getteacher">TeacherData</NavLink></li>
                <li> <NavLink to="/upload">UploadTeacher</NavLink></li>
                <li>  <NavLink to="/login">Login</NavLink></li>
    
                {/* <NavLink to="/teacherdynamic/">Teacherdynamic</NavLink> */}
                {/* <li> <NavLink to ={"/Teacherdynamic/1"}>dynamic</NavLink></li> */}
            </ul>



            <Switch>
                <Route path="/form" component={TeacherForm} />
                <Route path="/upload" component={TeacherForm} />
                <Route path="/login" component={TeacherLogin} />
                <Route path="/Teacherdynamic/:id" exact component={TeacherDynamic} />
                <Route path="/updateteacher/:id" exact component={TeacherUpdate} />

                {/* <Route path ="/teacherdynamic" component={TeacherDynamic}/> */}
                <Route path="/getteacher" component={TeacherData} />
            </Switch>
        </div>
    )
}
export default TeacherHeader;