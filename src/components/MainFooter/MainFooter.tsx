import React from 'react';
import './MainFooter.scss';
import { FormattedMessage } from 'react-intl';
import rssLogo from '../../assets/connectionForm/rs_school_js.svg';

function MainFooter() {
    return (
        <div className="main-footer">
            <div className="main-footer__container">
                <div className="main-footer__created-by">
                    <h3>
                        <FormattedMessage id="main_footer_create" />
                    </h3>
                    <ul className="main-footer__ul">
                        <li className="main-footer__li">
                            <a href="https://github.com/Maslovars" target="_blank" rel="noreferrer">
                                <FormattedMessage id="main_footer_author_arseny" />
                            </a>
                        </li>
                        <li className="main-footer__li">
                            <a href="https://github.com/zhirkovpetr" target="_blank" rel="noreferrer">
                                <FormattedMessage id="main_footer_author_petr" />
                            </a>
                        </li>
                        <li className="main-footer__li">
                            <a href="https://github.com/ViktorElenich" target="_blank" rel="noreferrer">
                                <FormattedMessage id="main_footer_author_victor" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="main-footer__year">© 2022</div>
                <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
                    <img src={rssLogo} alt="rss-logo" />
                </a>
            </div>
        </div>
    );
}

export default MainFooter;
