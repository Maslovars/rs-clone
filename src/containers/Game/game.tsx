import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonPhaser } from '@ion-phaser/react';
import { AppStateType } from '../../app/redux-store';
import {
    POPUP_SCREEN_ABOUT,
    POPUP_SCREEN_FAQ,
    POPUP_SCREEN_SETTINGS,
    POPUP_SCREEN_SHOP,
    POPUP_SCREEN_UPGRADE,
} from '../../constants';
import RuneScreen from '../RuneScreen/runeScreen';
import { closePopup, InitialPopupType } from '../../reducers/popup';
import ItemBoardScreen from '../ItemBoardScreen/ItemBoardScreen';
import { ITEM_LEVEL_MAP } from '../../constants/items';
import HeaderGame from '../HeaderGame/headerGame';
import MonstersScreen from '../MonstersScreen/monstersScreen';
import FooterGame from '../FooterGame/footerGame';
import Tutorial from '../../components/Tutorial/tutorial';
import Popup from '../../components/Popup/popup';
import { GameConfig } from './stateGame';
import './game.scss';
import { coinReceived, coinSpent, runeBuy } from '../../reducers/coin';
import { itemMerge, itemProduce } from '../../reducers/item';
import { monsterDie, monsterUpdate } from '../../reducers/monster';

function Game() {
    const popup = useSelector<AppStateType, InitialPopupType>(
        (state) => state.popup,
    );
    const dispatch = useDispatch();
    const [bgm, setBgm] = useState<boolean>(true);
    const [onboardingStep, setOnboardingStep] = useState<number>(
        GameConfig.onboardingStep,
    );
    const [level, setLevel] = useState<number>(GameConfig.level);

    function getSettings() {
        return (
            <>
                <h1>Toggle BGM</h1>
                <button
                    type="button"
                    onClick={() => {
                        setBgm(!bgm);
                    }}
                    className="bgm"
                >
                    {bgm ? 'Pause' : 'Play'}
                </button>
            </>
        );
    }

    function getPopupContent() {
        switch (popup.open) {
            case POPUP_SCREEN_UPGRADE:
                return (
                    <RuneScreen
                        onRuneBuy={(rune) => {
                            dispatch(coinSpent(rune.price));
                            dispatch(runeBuy(rune));
                        }}
                    />
                );

            case POPUP_SCREEN_FAQ:
                return (
                    <>
                        <h1>How to Play</h1>
                        <br />
                        <ul>
                            <li>
                                1. Click and match weapons to get one level
                                higher.
                            </li>
                            <br />
                            <li>
                                2. Every weapon gives you coins and deals damage
                                to monsters.
                            </li>
                            <br />
                            <li>
                                3. Upgrade your runes to gain even more coins
                                and damage.
                            </li>
                            <br />
                            <li>
                                4. That`&apos;`s all. How many levels can you
                                beat?
                            </li>
                        </ul>
                    </>
                );

            case POPUP_SCREEN_ABOUT:
                return <h1>Character Sheet (under construction)</h1>;

            case POPUP_SCREEN_SHOP:
                return (
                    <>
                        <h1>Shop (under construction)</h1>
                        <br />
                        <p>Sorry, there is nothing for sale right now.</p>
                    </>
                );

            case POPUP_SCREEN_SETTINGS:
                return getSettings();

            default:
                return null;
        }
    }

    function renderContent() {
        const onboardingLastStep = 8;
        const start = onboardingStep === onboardingLastStep;
        const header = <HeaderGame key="Header" level={level} />;

        const itemBoard = (
            <ItemBoardScreen
                key="ItemBoardScreen"
                start={start}
                onMergeItem={(fromIndex, toIndex) => {
                    if (onboardingStep < 4) {
                        return;
                    }

                    if (onboardingStep === 4) {
                        setOnboardingStep(onboardingStep + 1);
                    }

                    dispatch(itemMerge(fromIndex, toIndex));
                }}
                onReceiveCoin={(coins) => {
                    dispatch(coinReceived(coins));
                }}
            />
        );

        const monsters = (
            <MonstersScreen
                key="MonstersScreen"
                start={start}
                level={level}
                onMonsterDie={(level, monster) => {
                    setLevel(level);
                    // @ts-ignore
                    GameConfig.phaserGame.instance.events.emit(
                        'onMonsterDie',
                        level,
                    );
                    dispatch(monsterDie(level));

                    if (monster.loot) {
                        dispatch(itemProduce([ITEM_LEVEL_MAP[1]]));
                    }
                }}
                onMonsterHit={(monster) => {
                    dispatch(monsterUpdate(monster));
                }}
            />
        );

        const footer = <FooterGame key="Footer" />;

        const tutorial = (
            <Tutorial
                key="Tutorial"
                step={onboardingStep}
                onNext={() => {
                    setOnboardingStep(onboardingStep + 1);
                }}
            />
        );

        if (onboardingStep !== onboardingLastStep) {
            if (onboardingStep <= 1) {
                return [header, tutorial];
            }

            return [header, itemBoard, tutorial];
        }

        return [header, itemBoard, monsters, footer];
    }
    return (
        <div className="game-container">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <audio
                preload="auto"
                autoPlay
                loop
                muted={!bgm}
                src="../../assets/music/the_path_of_the_goblin_king.mp3"
            />
            <div className={`screen ${popup.open ? 'popupActive' : ''}`}>
                <IonPhaser
                    game={GameConfig.phaserGame}
                    initialize={GameConfig.bgm}
                />
                {renderContent()}
            </div>
            {popup.open && (
                <Popup
                    type={popup.open}
                    content={getPopupContent()}
                    onClose={() => {
                        dispatch(closePopup());
                    }}
                />
            )}
        </div>
    );
}

export default Game;
