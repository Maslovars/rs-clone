import React from 'react';
import './App.scss';
import MainHeader from '../components/MainHeader/MainHeader';
import MainFooter from '../components/MainFooter/MainFooter';
import useRoutes from '../components/MainPage/Routes';

function App() {
    const isAuthenticated = false;
    const routes = useRoutes(isAuthenticated);
    return (
        <div className="App">
            <div className="app-wrapper">
                <MainHeader />
                {routes}
                <MainFooter />
            </div>
        </div>
    );
}

export default App;
