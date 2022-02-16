import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../app/redux-store';
import { InitialAuthType } from '../../reducers/auth';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    COIN_RECEIVED,
    COIN_SPENT, ITEM_MERGE, ITEM_PRODUCE, MONSTER_DIE, MONSTER_UPDATE,
    POPUP_SCREEN_ABOUT,
    POPUP_SCREEN_FAQ, POPUP_SCREEN_SETTINGS, POPUP_SCREEN_SHOP,
    POPUP_SCREEN_UPGRADE
} from '../../constants';
import { RUNE_BUY } from '../../constants/runes';
import RuneScreen from '../RuneScreen/runeScreen';
import { InitialPopupType } from '../../reducers/popup';
import { Mesh } from 'three';
import { stateGame } from './stateGame';
import ItemBoardScreen from '../ItemBoardScreen/ItemBoardScreen';
import { ITEM_LEVEL_MAP } from '../../constants/items';
import HeaderGame from '../HeaderGame/headerGame';
import MonstersScreen from '../MonstersScreen/monstersScreen';
import FooterGame from '../FooterGame/footerGame';
import Tutorial from '../../components/Tutorial/tutorial';
import { IonPhaser } from '@ion-phaser/react';

type GamePropsType = {

};

type BoxPropsType = {
    position: [x: number, y: number, z: number],
    turningSpeed: number,
};

function Box(props: BoxPropsType) {
    const mesh = useRef<Mesh>();
    const [hovered, setHover] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);
    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x += props.turningSpeed;
        }
    })
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)} >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

/*function Line() {
    const mesh = useRef<Mesh>();
    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.8
            mesh.current.rotation.x += 0.8

            if (mesh.current.position.x < 10) {
                mesh.current.position.x += 0.1
            } else {
                mesh.current.position.x = -10
            }
        }
    })

    return (
        <mesh ref={mesh}>
            <boxGeometry args={[1, 0.1, 1]} />
            <meshStandardMaterial color="#dd7777" />
        </mesh>
    )
}*/

const Game = (props: GamePropsType) => {
    // const app = useSelector<AppStateType, string>(state => state.app.language);
   // const auth = useSelector<AppStateType, InitialAuthType>(state => state.auth);
    const popup = useSelector<AppStateType, InitialPopupType>(state => state.popup);
    const dispatch = useDispatch();
    const [bgm, setBgm] = useState<boolean>(true);
    const [onboardingStep, setOnboardingStep] = useState<number>(stateGame.onboardingStep);
    const [level, setLevel] = useState<number>(stateGame.level);

    setInterval(() => {
        localStorage.setItem("game-data", JSON.stringify(stateGame))
    }, 5000)

    function getBoxes() {
        return (
            <Canvas className="canvas">
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-2, -1, 0]} turningSpeed={0.01} />
                <Box position={[0, 0, 0]} turningSpeed={0.03} />
                <Box position={[2, 1, 0]} turningSpeed={0.075} />
                {/*<Line />*/}
            </Canvas>
        )
    }

    function getSettings() {
        return (
            <React.Fragment>
                <h1>Toggle BGM</h1>
                <button
                    onClick={() => {
                        setBgm(!bgm)
                    }} className="bgm">
                    {bgm ? "Pause" : "Play"}
                </button>
            </React.Fragment>
        )
    }

    function getPopupContent() {
        switch (popup.open) {
        case POPUP_SCREEN_UPGRADE:
            return (
                <RuneScreen
                    onRuneBuy={(rune) => {
                        dispatch({
                            type: COIN_SPENT,
                            payload: { coins: rune.price }
                        })
                        dispatch({
                            type: RUNE_BUY,
                            payload: { rune }
                        })
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
            return getSettings()

        default:
            return null
        }
    }

    function renderContent() {
        const onboardingLastStep = 8
        const start = onboardingStep === onboardingLastStep
        const header = <HeaderGame key="Header" level={level} />

        const itemBoard = (
            <ItemBoardScreen
                key="ItemBoardScreen"
                start={start}
                onMergeItem={(fromIndex, toIndex) => {
                    if (onboardingStep < 4) {
                        return;
                    }

                    if (onboardingStep === 4) {
                        setOnboardingStep(onboardingStep + 1)
                    }

                    dispatch({
                        type: ITEM_MERGE,
                        payload: {
                            fromIndex,
                            toIndex
                        }
                    })
                }}
                onReceiveCoin={coins => dispatch({
                    type: COIN_RECEIVED,
                    payload: { coins }
                })}
            />
        )

        const monsters = (
            <MonstersScreen
                key="MonstersScreen"
                start={start}
                level={level}
                onMonsterDie={(level, monster) => {
                    setLevel(level)
                    /*stateGame.phaserGame.instance.events.emit("onMonsterDie", level)*/

                    dispatch({ type: MONSTER_DIE, payload: { level } })

                    if (monster[level].loot) {
                        dispatch({ type: ITEM_PRODUCE, payload: { items: [ITEM_LEVEL_MAP[1]] } })
                    }
                }}
                onMonsterHit={monster => {
                    dispatch({ type: MONSTER_UPDATE, payload: { monster } })
                }}
            />
        )

        const footer = <FooterGame key="Footer" />

        const tutorial = (
            <Tutorial
                key="Tutorial"
                step={onboardingStep}
                onNext={() => {
                    setOnboardingStep(onboardingStep + 1);
                }}
            />
        )

        if (onboardingStep !== onboardingLastStep) {
            if (onboardingStep <= 1) {
                return [header, tutorial]
            }

            return [header, itemBoard, tutorial]
        }

        return [header, itemBoard, monsters, footer]
    }
    return (
        <div className="game-container">
            <audio
                preload="auto"
                autoPlay={true}
                loop={true}
                muted={!bgm}
                src={"../../assets/music/the_path_of_the_goblin_king.mp3"}
            />

            <div className={ `"screen" ${popup.open ? "popupActive" : ""}` }>
                {/*<IonPhaser game={stateGame.phaserGame} state={stateGame} />*/}
                {renderContent()}
            </div>

            {/*{popup.open && (
                <Popup
                    type={popup.open}
                    content={this.getPopupContent()}
                    onClose={e => {
                        this.props.dispatch({ type: POPUP_CLOSE })
                    }}
                />
            )}*/}

        </div>
    )

}

export default Game;
