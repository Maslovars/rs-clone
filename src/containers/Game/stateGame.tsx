import Phaser from 'phaser';

import bg1 from '../../assets/backgrounds/game_background_1.png';
import bg2 from '../../assets/backgrounds/game_background_2.png';
import bg3 from '../../assets/backgrounds/game_background_3.png';
import bg4 from '../../assets/backgrounds/game_background_4.png';
import { STARTING_LEVEL } from '../../constants';

/* type sceneType = {
    preload: () => void;
    create: () => void;
};

type phaserGameType = {
    height: number;
    width: number;
    type: typeof Phaser.AUTO;
    scene: sceneType;
};

type stateGameType = {
    level: number;
    bgm: boolean;
    phaserGame: phaserGameType;
    onboardingStep: number;
};

let phaserScene: Phaser.Scene;
let bg: Phaser.GameObjects.Image;
let game: Phaser.Game;

function preload() {
    phaserScene.load.image('bg1', bg1);
    phaserScene.load.image('bg2', bg2);
    phaserScene.load.image('bg3', bg3);
    phaserScene.load.image('bg4', bg4);
}

function create() {
    bg = phaserScene.add.image(0, 0, 'bg4');
    bg.setOrigin(0, 0);
    game.events.on('onMonsterDie', (level: number) => {
        if (level >= 6 && level < 11) {
            bg = phaserScene.add.image(0, 0, 'bg1');
            bg.setOrigin(0, 0);
            return;
        }

        if (level >= 11 && level < 16) {
            bg = phaserScene.add.image(0, 0, 'bg2');
            bg.setOrigin(0, 0);
            return;
        }

        if (level >= 16 && level < 21) {
            bg = phaserScene.add.image(0, 0, 'bg3');
            bg.setOrigin(0, 0);
            return;
        }

        bg = phaserScene.add.image(0, 0, 'bg4');
        bg.setOrigin(0, 0);
    });
}

const stateGame: stateGameType = {
    level: STARTING_LEVEL,
    bgm: true,
    phaserGame: {
        height: 576,
        width: 1024,
        type: Phaser.AUTO,
        scene: {
            preload,
            create,
        },
    },
    onboardingStep: 0,
};

export default stateGame; */

export class Scene extends Phaser.Scene {
    constructor() {
        super({
            key: 'Scene',
        });
    }

    // eslint-disable-next-line class-methods-use-this
    init() {}

    preload() {
        this.load.image('bg1', bg1);
        this.load.image('bg2', bg2);
        this.load.image('bg3', bg3);
        this.load.image('bg4', bg4);
    }

    create() {
        let bg = this.add.image(0, 0, 'bg4');
        bg.setOrigin(0, 0);

        this.game.events.on('onMonsterDie', (level: number) => {
            // todo fix this bad code later
            if (level >= 6 && level < 11) {
                bg = this.add.image(0, 0, 'bg1');
                bg.setOrigin(0, 0);
                return;
            }

            if (level >= 11 && level < 16) {
                bg = this.add.image(0, 0, 'bg2');
                bg.setOrigin(0, 0);
                return;
            }

            if (level >= 16 && level < 21) {
                bg = this.add.image(0, 0, 'bg3');
                bg.setOrigin(0, 0);
                return;
            }

            bg = this.add.image(0, 0, 'bg4');
            bg.setOrigin(0, 0);
        });
    }

    // eslint-disable-next-line class-methods-use-this
    update() {}

    // eslint-disable-next-line class-methods-use-this
}

export const GameConfig = {
    level: STARTING_LEVEL,
    pixelArt: true,
    bgm: true,
    parent: 'game',
    phaserGame: {
        height: 576,
        width: 1024,
        type: Phaser.AUTO,
        scene: [Scene],
    },
    onboardingStep: 0,
};
