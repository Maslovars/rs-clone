import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../app/redux-store';
import { InitialAuthType } from '../../reducers/auth';
import { Canvas } from '@react-three/fiber';
import {
    COIN_SPENT,
    POPUP_SCREEN_ABOUT,
    POPUP_SCREEN_FAQ, POPUP_SCREEN_SETTINGS, POPUP_SCREEN_SHOP,
    POPUP_SCREEN_UPGRADE
} from '../../constants';
import { RUNE_BUY } from '../../constants/runes';
import RuneScreen from '../RuneScreen/runeScreen';

type GamePropsType = {

};

const Game = (props: GamePropsType) => {
    const app = useSelector<AppStateType, string>(state => state.app.language);
    const auth = useSelector<AppStateType, InitialAuthType>(state => state.auth);
    const open = useSelector<AppStateType, boolean | null>(state => state.popup.open);
    const dispatch = useDispatch();
    const [bgm, setBgm] = useState<boolean>(true)

    setInterval(() => {
       // localStorage.setItem("game-data", JSON.stringify(state))
    }, 5000)

    function getBoxes() {
        return (
            <Canvas className="canvas">
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
{/*                <Box position={[-2, -1, 0]} turningSpeed={0.01} />
                <Box position={[0, 0, 0]} turningSpeed={0.03} />
                <Box position={[2, 1, 0]} turningSpeed={0.075} />*/}
                {/*<Line />*/}
            </Canvas>
        )
    }

    function getSettings() {
        return (
            <React.Fragment>
                <h1>Toggle BGM</h1>
                <button onClick={() => {setBgm(!bgm)}} className="bgm">
                    {bgm ? "Pause" : "Play"}
                </button>
            </React.Fragment>
        )
    }

    function getPopupContent() {

        switch (open) {
        /*case POPUP_SCREEN_UPGRADE:
            return (
                <RuneScreen
                    onRuneBuy={(rune) => {
                        dispatch({ type: COIN_SPENT, payload: { coins: rune.price } })
                        dispatch({ type: RUNE_BUY, payload: { rune } })
                    }}
                />
            )

        case POPUP_SCREEN_FAQ:
            return (
                <React.Fragment>
                    <h1>How to Play</h1>
                    <br />
                    <ul>
                        <li>1. Click and match weapons to get one level higher.</li>
                        <br />
                        <li>2. Every weapon gives you coins and deals damage to monsters.</li>
                        <br />
                        <li>3. Upgrade your runes to gain even more coins and damage.</li>
                        <br />
                        <li>4. That's all. How many levels can you beat?</li>
                    </ul>
                </React.Fragment>
            )

        case POPUP_SCREEN_ABOUT:
            return (
                <React.Fragment>
                    <h1>Character Sheet (under construction)</h1>
                </React.Fragment>
            )

        case POPUP_SCREEN_SHOP:
            return (
                <React.Fragment>
                    <h1>Shop (under construction)</h1>
                    <br />
                    <p>Sorry, there is nothing for sale right now.</p>
                </React.Fragment>
            )

        case POPUP_SCREEN_SETTINGS:
            return getSettings()*/

        default:
            return null
        }
    }



};

export default Game;
