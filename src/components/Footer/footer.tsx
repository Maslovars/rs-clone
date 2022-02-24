import React from 'react';
import './footer.scss';

import { FormattedMessage } from 'react-intl';
import upgrade from '../../assets/ui/buttons/upgrade.png';
import shop from '../../assets/ui/buttons/shop.png';
import settings from '../../assets/ui/buttons/settings.png';
import about from '../../assets/ui/buttons/about.png';

type FooterPropsType = {
    onUpgradeClick?: () => void;
    onShopClick?: () => void;
    onSettingsClick?: () => void;
    onAboutClick?: () => void;
};

const defaultProps = {
    onUpgradeClick: null,
    onShopClick: null,
    onSettingsClick: null,
    onAboutClick: null
};

function Footer(props: FooterPropsType) {
    const { onUpgradeClick, onShopClick, onSettingsClick, onAboutClick } = props;

    return (
        <div className="com-Footer">
            <div className="footer-inner">
                <div className="button" onClick={onUpgradeClick} role="button" tabIndex={0}>
                    <img src={upgrade} alt="upgrade" />
                    <span>
                        <FormattedMessage id="footer_runes" />
                    </span>
                </div>
                <div className="button" onClick={onAboutClick} role="button" tabIndex={0}>
                    <img src={about} alt="about" />
                    <span>
                        <FormattedMessage id="footer_stats" />
                    </span>
                </div>
                <div className="button" onClick={onShopClick} role="button" tabIndex={0}>
                    <img src={shop} alt="shop" />
                    <span>
                        <FormattedMessage id="footer_shop" />
                    </span>
                </div>
                <div className="button" onClick={onSettingsClick} role="button" tabIndex={0}>
                    <img src={settings} alt="settings" />
                    <span>
                        <FormattedMessage id="footer_settings" />
                    </span>
                </div>
            </div>
        </div>
    );
}

Footer.defaultProps = defaultProps;

export default Footer;
