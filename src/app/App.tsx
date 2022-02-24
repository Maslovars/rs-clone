import React, { ChangeEvent, useState } from 'react';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { IntlProvider } from 'react-intl';
import MainHeader from '../components/MainHeader/MainHeader';
import MainFooter from '../components/MainFooter/MainFooter';
import useRoutes from '../components/MainPage/Routes';
import AuthContext from '../components/context/AuthContext';
import useAuth from '../components/hooks/auth.hook';
import { messages } from '../i18n/messages';
import { LOCALES } from '../i18n/locales';

function getInitialLocale() {
    const savedLocale = localStorage.getItem('locale');
    return savedLocale || LOCALES.ENGLISH;
}

function App() {
    const { login, logout, token, userId } = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);
    const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurrentLocale(e.target.value);
        localStorage.setItem('locale', e.target.value);
    };

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <AuthContext.Provider value={{ login, logout, token, userId, isAuthenticated }}>
            <IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale={LOCALES.ENGLISH}>
                <div className="App">
                    <div className="app-wrapper">
                        <MainHeader currentLocale={currentLocale} handleChange={handleChange} />
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
            </IntlProvider>
        </AuthContext.Provider>
    );
}

export default App;
