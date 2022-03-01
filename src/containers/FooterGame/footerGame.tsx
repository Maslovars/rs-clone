import React from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../../components/Footer/footer';
import { POPUP_SCREEN_ABOUT, POPUP_SCREEN_SETTINGS, POPUP_SCREEN_SHOP, POPUP_SCREEN_UPGRADE } from '../../constants';
import { openPopup } from '../../reducers/popup';

function FooterGame() {
    const dispatch = useDispatch();
    return (
        <Footer
            onUpgradeClick={() => {
                return dispatch(openPopup(POPUP_SCREEN_UPGRADE));
            }}
            onAboutClick={() => {
                return dispatch(openPopup(POPUP_SCREEN_ABOUT));
            }}
            onShopClick={() => {
                return dispatch(openPopup(POPUP_SCREEN_SHOP));
            }}
            onSettingsClick={() => {
                return dispatch(openPopup(POPUP_SCREEN_SETTINGS));
            }}
        />
    );
}

export default FooterGame;
