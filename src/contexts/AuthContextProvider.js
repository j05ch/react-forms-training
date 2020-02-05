import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import * as ACTIONS from '../actions/actions';
import * as AuthReducer from '../store/AuthReducer';

function AuthContextProvider({children}) {
    const [stateAuthReducer, dispatchAuthReducer] = useReducer(AuthReducer.AuthReducer, AuthReducer.initialState);

    const handleLogin = () => {
        dispatchAuthReducer(ACTIONS.login_success())
    };

    const handleLogout = () => {
        dispatchAuthReducer(ACTIONS.login_failure())
    };

    return (
        <AuthContext.Provider
            value={{
                authState: stateAuthReducer.isAuthenticated,
                handleUserLogin: () => handleLogin(),
                handleUserLogout: () => handleLogout()
            }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
