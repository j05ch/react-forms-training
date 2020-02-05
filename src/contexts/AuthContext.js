import React from 'react';

const AuthContext = React.createContext({
    authState: false,
    handleUserLogin: () => {},
    handleUserLogout: () => {}
});

export default AuthContext;
