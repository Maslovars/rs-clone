import { STARTING_LEVEL } from '../../constants';
import Phaser from 'phaser';

import bg1 from '../../assets/backgrounds/game_background_1/game_background_1-resized.png';
import bg2 from '../../assets/backgrounds/game_background_2/game_background_2-resized.png';
import bg3 from '../../assets/backgrounds/game_background_3/game_background_3-resized.png';
import bg4 from '../../assets/backgrounds/game_background_4/game_background_4-resized.png';

type stateGameType = {
    level: number,
    bgm: boolean,
    phaserGame: phaserGameType,
    onboardingStep: number
}

type sceneType = {
    preload: () => void,
    create: () => void,
}

type phaserGameType = {
        height: number,
        width: number,
        type: typeof Phaser.AUTO,
        scene: sceneType
}

let phaserScene: Phaser.Scene;
let bg: Phaser.GameObjects.Image;
let game: Phaser.Game;

function preload() {
    phaserScene.load.image('bg1', bg1)
    phaserScene.load.image('bg2', bg2)
    phaserScene.load.image('bg3', bg3)
    phaserScene.load.image('bg4', bg4)
}

function create() {
    bg = phaserScene.add.image(0, 0, "bg4")
    bg.setOrigin(0, 0)

    game.events.on('onMonsterDie', (level: number) => {
        if (level >= 6 && level < 11) {
            bg = phaserScene.add.image(0, 0, "bg1")
            bg.setOrigin(0, 0)
            return
        }

        if (level >= 11 && level < 16) {
            bg = phaserScene.add.image(0, 0, "bg2")
            bg.setOrigin(0, 0)
            return
        }

        if (level >= 16 && level < 21) {
            bg = phaserScene.add.image(0, 0, "bg3")
            bg.setOrigin(0, 0)
            return
        }

        bg = phaserScene.add.image(0, 0, "bg4")
        bg.setOrigin(0, 0)
    })
}

export let stateGame: stateGameType = {
        level: STARTING_LEVEL,
        bgm: true,
        phaserGame: {
            height: 576,
            width: 1024,
            type: Phaser.AUTO,
            scene: {
                preload: preload,
                create: create,
            }
        },
        onboardingStep: 0
}


