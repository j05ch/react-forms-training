import React, { useState } from 'react';
import Registration from './forms/Registration';
import CraftsmanForm from './forms/CraftsmanForm';
import ProjectForm from './forms/ProjectForm';
import Login from './forms/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Success from './Success';
import { handwerker, projekte } from './models/mockData';
import Projects from './Projects';
import Craftsmen from './Craftsmen';

function Main() {
    const [user, setUser] = useState('');

    function handleSuccessfulAuth(data) {
        const user = data.email;
        setUser(user);
    }

    return (
        <Router>
            <Switch>
                <Route path='/login' key='login' render={props => <Login {...props} handleSuccessfulAuth={handleSuccessfulAuth} />} />
                <Route path='/success' key='success' render={props => <Success {...props} user={user} />} />
                <Route path='/projects' key='projects' render={props => <Projects {...props} projects={projekte} />} />
                <Route path='/craftsmen' key='craftsmen' render={props => <Craftsmen {...props} craftsmen={handwerker} />} />
                <Route path='/register' key='register' component={Registration} />
                <Route path='/handwerker' key='handwerker' component={CraftsmanForm} />
                <Route path='/projekt' key='projekt' component={ProjectForm} />
            </Switch>
        </Router>
    )
}

export default Main;
