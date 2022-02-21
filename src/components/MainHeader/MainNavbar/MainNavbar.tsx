import React, { useContext } from 'react';
import './MainNavbar.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

function MainNavbar() {
    const navigate = useNavigate();

    const auth = useContext(AuthContext);

    const logoutHandler = (e: any) => {
        e.preventDefault();
        auth.logout();
        navigate('/');
    };

    return (
        <nav className="main-navbar">
            <ul className="main-navbar__ul">
                <li className="main-navbar__li">
                    <NavLink to="/game">Game </NavLink>
                </li>
                <li className="main-navbar__li">
                    <NavLink to="/score">Score </NavLink>
                </li>
                <li className="main-navbar__li">
                    <a href="/" onClick={logoutHandler}>
                        LogOut
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavbar;
