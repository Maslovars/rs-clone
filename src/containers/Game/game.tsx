import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonPhaser } from '@ion-phaser/react';
import { FormattedMessage } from 'react-intl';
import { AppStateType } from '../../app/redux-store';
import {
    POPUP_GAME_OVER,
    POPUP_SCREEN_ABOUT,
    POPUP_SCREEN_FAQ,
    POPUP_SCREEN_SETTINGS,
    POPUP_SCREEN_SHOP,
    POPUP_SCREEN_UPGRADE,
    STARTING_LEVEL
} from '../../constants';
import RuneScreen from '../RuneScreen/runeScreen';
import { closePopup, InitialPopupType, openPopup } from '../../reducers/popup';
import ItemBoardScreen from '../ItemBoardScreen/ItemBoardScreen';
import { ITEM_LEVEL_MAP } from '../../constants/items';
import HeaderGame from '../HeaderGame/headerGame';
import MonstersScreen from '../MonstersScreen/monstersScreen';
import FooterGame from '../FooterGame/footerGame';
import Tutorial from '../../components/Tutorial/tutorial';
import Popup from '../../components/Popup/popup';
import { GameConfig } from './stateGame';
import { coinReset, coinSpent, runeBuy } from '../../reducers/coin';
import { itemMerge, itemProduce, itemReset } from '../../reducers/item';
import { monsterDie } from '../../reducers/monster';
import music from '../../assets/music/the_path_of_the_goblin_king.mp3';
import useItemsSelectors from '../../selectors/itemSelector';
import './game.scss';
import '../../components/Tutorial/tutorial.scss';

function Game() {
    const popup = useSelector<AppStateType, InitialPopupType>((state) => state.popup);
    const dispatch = useDispatch();
    const [bgm, setBgm] = useState<boolean>(true);
    const [onboardingStep, setOnboardingStep] = useState<number>(GameConfig.onboardingStep);
    const [level, setLevel] = useState<number>(GameConfig.level);

    const { items } = useItemsSelectors();

    useEffect(() => {
        if (items[items.length - 1] !== null) {
            dispatch(itemReset());
            dispatch(coinReset());
            setLevel(STARTING_LEVEL);
            dispatch(openPopup(POPUP_GAME_OVER));
            dispatch(monsterDie(STARTING_LEVEL));
            setOnboardingStep(0);
        }
    }, [items]);

    function getSettings() {
        return (
            <>
                <h1>
                    <FormattedMessage id="game_music" />
                </h1>
                <button
                    type="button"
                    onClick={() => {
                        setBgm(!bgm);
                    }}
                    className="bgm"
                >
                    {bgm ? <FormattedMessage id="game_music_pause" /> : <FormattedMessage id="game_music_play" />}
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
                        <h1>
                            <FormattedMessage id="poput_faq_text_1" />
                        </h1>
                        <br />
                        <ul>
                            <li>
                                <FormattedMessage id="poput_faq_text_2" />
                            </li>
                            <br />
                            <li>
                                <FormattedMessage id="poput_faq_text_3" />
                            </li>
                            <br />
                            <li>
                                <FormattedMessage id="poput_faq_text_4" />
                            </li>
                            <br />
                            <li>
                                <FormattedMessage id="poput_faq_text_5" />
                            </li>
                        </ul>
                    </>
                );

            case POPUP_SCREEN_ABOUT:
                return (
                    <h1>
                        <FormattedMessage id="popup_about" />
                    </h1>
                );

            case POPUP_SCREEN_SHOP:
                return (
                    <>
                        <h1>
                            <FormattedMessage id="popup_shop_text_1" />
                        </h1>
                        <br />
                        <p>
                            <FormattedMessage id="popup_shop_text_2" />
                        </p>
                    </>
                );

            case POPUP_SCREEN_SETTINGS:
                return getSettings();

            case POPUP_GAME_OVER: {
                const startNewGame = () => {
                    dispatch(closePopup());
                };
                return (
                    <div className="com-Tutorial">
                        <div className="tutorial-content" style={{ alignItems: 'center', fontSize: 'xxx-large' }}>
                            <FormattedMessage id="popup_gameover" />
                        </div>
                        <button type="button" className="next" onClick={startNewGame}>
                            <FormattedMessage id="popup_newgame" />
                        </button>
                    </div>
                );
            }
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
                    GameConfig.phaserGame.instance.events.emit('onMonsterDie', level);
                    dispatch(monsterDie(level));

                    if (monster.loot) {
                        dispatch(itemProduce([ITEM_LEVEL_MAP[1]]));
                    }
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
            <audio preload="auto" autoPlay loop muted={!bgm} src={music} />
            <div className={`screen ${popup.open ? 'popupActive' : ''}`}>
                <IonPhaser game={GameConfig.phaserGame} initialize={GameConfig.bgm} />
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
