import React, { ChangeEvent, useContext } from 'react';
import './MainNavbar.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import AuthContext from '../../context/AuthContext';
import { LOCALES } from '../../../i18n/locales';

type HeaderProps = {
    currentLocale: string;
    handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

function MainNavbar(props: HeaderProps) {
    const { currentLocale, handleChange } = props;
    const navigate = useNavigate();

    const auth = useContext(AuthContext);

    const logoutHandler = (e: any) => {
        e.preventDefault();
        auth.logout();
        navigate('/');
    };

    const languages = [
        { name: 'En', code: LOCALES.ENGLISH },
        { name: 'Ru', code: LOCALES.RUSSIAN }
    ];

    return (
        <nav className="main-navbar">
            <ul className="main-navbar__ul">
                <li className="main-navbar__li">
                    <NavLink to="/game">
                        <FormattedMessage id="main_navbar_game" />
                    </NavLink>
                </li>
                <li className="main-navbar__li">
                    <NavLink to="/score">
                        <FormattedMessage id="main_navbar_score" />
                    </NavLink>
                </li>
                <li className="main-navbar__li">
                    <a href="/" onClick={logoutHandler}>
                        <FormattedMessage id="main_navbar_logout" />
                    </a>
                </li>
                <li className="switcher">
                    <select onChange={handleChange} value={currentLocale}>
                        {languages.map(({ name, code }) => (
                            <option key={code} value={code}>
                                {name}
                            </option>
                        ))}
                    </select>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavbar;
