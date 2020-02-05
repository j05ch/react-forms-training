import React, { useContext } from 'react';
import AuthContext from './contexts/AuthContext';

function Success(props) {
    const {authState} = useContext(AuthContext);
    console.log(authState);
    return (
        <div>{props.user} erfolgreich eingeloggt</div>
    );
}

export default Success;
