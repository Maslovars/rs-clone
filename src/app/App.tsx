import React from 'react';
import './App.scss';
// import GameComponent from '../components/GameComponent/GameComponent';
import MainHeader from '../components/MainHeader/MainHeader';
import MainPage from '../components/MainPage/MainPage';
import MainFooter from '../components/MainFooter/MainFooter';

function App() {
    return (
        <div className="App">
            <div className="app-wrapper">
                <MainHeader />
                <MainPage />
                <MainFooter />
            </div>
        </div>
    );
}

export default App;
