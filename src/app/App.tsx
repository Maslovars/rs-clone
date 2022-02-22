import React from 'react';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MainHeader from '../components/MainHeader/MainHeader';
import MainFooter from '../components/MainFooter/MainFooter';
import useRoutes from '../components/MainPage/Routes';
import AuthContext from '../components/context/AuthContext';
import useAuth from '../components/hooks/auth.hook';

function App() {
    const { login, logout, token, userId } = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);
    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <AuthContext.Provider value={{ login, logout, token, userId, isAuthenticated }}>
            <div className="App">
                <div className="app-wrapper">
                    <MainHeader />
                    <div className="main-page">{routes}</div>
                    <MainFooter />
                    <ToastContainer
                        position="top-center"
                        autoClose={1500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
