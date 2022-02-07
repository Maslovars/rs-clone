import React from "react";

type FooterPropsType = {
    onUpgradeClick: () => {};
    onShopClick: () => {};
    onSettingsClick: () => {};
    onAboutClick: () => {};
    onFaqClick: () => {};
};

const Footer = React.memo((props: FooterPropsType) => {
    const { onUpgradeClick, onShopClick, onSettingsClick, onAboutClick, onFaqClick } = props

    return (
        <div className={"com-Footer"}>
            <div className={"footer-inner"}>
                <div className="button" onClick={onUpgradeClick}>
                    <img src={'upgrade'}  alt={'upgrade-image'}/>
                    <span>Runes</span>
                </div>
                <div className="button" onClick={onAboutClick}>
                    <img src={'about'}  alt={'about-image'}/>
                    <span>Stats</span>
                </div>
                {/*<div className="button disabled" onClick={onFaqClick}>
            <img src={faq} />
            <span>Help</span>
          </div>*/}
                <div className="button" onClick={onShopClick}>
                    <img src={'shop'} alt={'shop-image'}/>
                    <span>Shop</span>
                </div>
                <div className="button" onClick={onSettingsClick}>
                    <img src={'settings'} alt={'settings-image'}/>
                    <span>Settings</span>
                </div>
            </div>
        </div>
    )
});

export default Footer;

