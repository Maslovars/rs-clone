import React from 'react';
import './App.scss';
import 'materialize-css/dist/css/materialize.min.css';
import MainHeader from '../components/MainHeader/MainHeader';
import MainFooter from '../components/MainFooter/MainFooter';
import useRoutes from '../components/MainPage/Routes';
import { AuthContext } from '../components/context/AuthContext';
import useAuth from '../components/hooks/auth.hook';

function App() {
    const { login, logout, token, userId } = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);
    return (
        <AuthContext.Provider value={{ login, logout, token, userId, isAuthenticated }} >
            <div className="App">
                <div className="app-wrapper">
                    <MainHeader />
                    {routes}
                    <MainFooter />
                </div>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
