import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import AuthContextProvider from './contexts/AuthContextProvider';

function App() {
    return (
        <AuthContextProvider>
            <Main />
        </AuthContextProvider>
    );
}

export default App;
