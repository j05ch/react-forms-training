import React, { useState } from 'react';
import Registration from './Registration';
import Handwerker from './Handwerker';
import Projekt from './Projekt';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Success from './Success';
import { handwerker, projekte } from './mockData';
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
                <Route path='/handwerker' key='handwerker' component={Handwerker} />
                <Route path='/projekt' key='projekt' component={Projekt} />
            </Switch>
        </Router>
    )
}

export default Main;
