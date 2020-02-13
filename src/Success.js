import React, { useContext } from 'react';
import AuthContext from './contexts/AuthContext';

function Success(props) {
    const {authState, handleUserLogout, handleUserLogin} = useContext(AuthContext);
    console.log('Auth-State: (Success)', authState);
    return (
        <>
            <div>{props.user} erfolgreich eingeloggt</div>
            {/*<button onClick={handleUserLogout}>Logout</button>*/}
            {/*<button onClick={handleUserLogin}>Login</button>*/}
        </>
    );
}

export default Success;
