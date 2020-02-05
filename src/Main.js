import React, { useState } from 'react';
import Registration from './Registration';
import Handwerker from './Handwerker';
import Projekt from './Projekt';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Success from './Success';

function Main() {
    const [user, setUser] = useState('');

    function handleSuccessfulAuth(data) {
        const user = data.email;
        setUser(user);
        // this.history.push('/success');
        // return (
        //     <Redirect to={'/success'} />
        // )
    }

    return (
        <Router>
            <Switch>
                <Route exact path='/' key='login' render={props => <Login {...props} handleSuccessfulAuth={handleSuccessfulAuth} />} />
                <Route path='/success' key='success' render={props => <Success {...props} user={user} />} />
                {/*<Registration />*/}
                {/*<Login/>*/}
                {/*<Handwerker />*/}
                {/*<Projekt />*/}
            </Switch>
        </Router>
    )
}

export default Main;
