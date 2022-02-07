import React from 'react';
import Footer from '../../components/Footer/footer';
import { useDispatch } from 'react-redux';
import {
    POPUP_OPEN,
    POPUP_SCREEN_ABOUT,
    POPUP_SCREEN_FAQ, POPUP_SCREEN_SETTINGS, POPUP_SCREEN_SHOP,
    POPUP_SCREEN_UPGRADE
} from '../../constants';

const FooterGame = () => {
    const dispatch = useDispatch();
    return <Footer
        onUpgradeClick = { () => {
            return dispatch({
                type: POPUP_OPEN,
                payload: { open: POPUP_SCREEN_UPGRADE }
            });
            }}
        onFaqClick = { () => {
            return dispatch({
                type: POPUP_OPEN,
                payload: { open: POPUP_SCREEN_FAQ }
            });
        }}
        onAboutClick = { () => {
            return dispatch({
                type: POPUP_OPEN,
                payload: { open: POPUP_SCREEN_ABOUT }
            });
        }}
        onShopClick = { () => {
            return dispatch({
                type: POPUP_OPEN,
                payload: { open: POPUP_SCREEN_SHOP }
            });
        }}
        onSettingsClick = { () => {
            return dispatch({
                type: POPUP_OPEN,
                payload: { open: POPUP_SCREEN_SETTINGS }
            });
        }}
    />;
};

export default FooterGame;
