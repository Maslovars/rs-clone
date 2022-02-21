import React from 'react';
import './MainHeader.scss';
import MainNavbar from './MainNavbar/MainNavbar';
import logo from '../../assets/connectionForm/logo.png';

// type HeaderProps = {
//     token: any
// }

function MainHeader() {
    return (
        <div className="main-header">
            <div className="main-header__container">
                <div className="main-header__logo">
                    <img src={logo} alt="logo" />
                </div>
                <MainNavbar />
            </div>
        </div>
    );
}

export default MainHeader;
