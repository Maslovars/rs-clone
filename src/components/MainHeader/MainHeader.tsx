import React, { ChangeEvent } from 'react';
import './MainHeader.scss';
import MainNavbar from './MainNavbar/MainNavbar';
import logo from '../../assets/connectionForm/logo.png';

type HeaderProps = {
    currentLocale: string;
    handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

function MainHeader(props: HeaderProps) {
    const { currentLocale, handleChange } = props;

    return (
        <div className="main-header">
            <div className="main-header__container">
                <div className="main-header__logo">
                    <img src={logo} alt="logo" />
                </div>
                <MainNavbar currentLocale={currentLocale} handleChange={handleChange} />
            </div>
        </div>
    );
}

export default MainHeader;
