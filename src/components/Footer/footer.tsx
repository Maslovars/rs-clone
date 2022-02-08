import React from 'react';

type FooterPropsType = {
    onUpgradeClick: () => void;
    onShopClick: () => void;
    onSettingsClick: () => void;
    onAboutClick: () => void;
    // onFaqClick: () => void;
};

const Footer = React.memo((props: FooterPropsType) => {
    const {
        onUpgradeClick,
        onShopClick,
        onSettingsClick,
        onAboutClick,
        // onFaqClick,
    } = props;

    return (
        <div className="com-Footer">
            <div className="footer-inner">
                <div
                    className="button"
                    onClick={onUpgradeClick}
                    role="button"
                    tabIndex={0}
                >
                    <img src="upgrade" alt="upgrade" />
                    <span>Runes</span>
                </div>
                <div
                    className="button"
                    onClick={onAboutClick}
                    role="button"
                    tabIndex={0}
                >
                    <img src="about" alt="about" />
                    <span>Stats</span>
                </div>
                {/* <div className="button disabled" onClick={onFaqClick}>
            <img src={faq} />
            <span>Help</span>
          </div> */}
                <div
                    className="button"
                    onClick={onShopClick}
                    role="button"
                    tabIndex={0}
                >
                    <img src="shop" alt="shop" />
                    <span>Shop</span>
                </div>
                <div
                    className="button"
                    onClick={onSettingsClick}
                    role="button"
                    tabIndex={0}
                >
                    <img src="settings" alt="settings" />
                    <span>Settings</span>
                </div>
            </div>
        </div>
    );
});

export default Footer;

