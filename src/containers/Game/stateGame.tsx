import Phaser from 'phaser';
import { STARTING_LEVEL } from '../../constants';

import bg1 from '../../assets/backgrounds/game_background_1.png';
import bg2 from '../../assets/backgrounds/game_background_2.png';
import bg3 from '../../assets/backgrounds/game_background_3.png';
import bg4 from '../../assets/backgrounds/game_background_4.png';
import bg5 from '../../assets/backgrounds/game_background_5.png';
import bg6 from '../../assets/backgrounds/game_background_6.png';
import bg7 from '../../assets/backgrounds/game_background_7.png';

export class Scene extends Phaser.Scene {
    constructor() {
        super({
            key: 'Scene'
        });
    }

    init() {}

    preload() {
        this.load.image('bg1', bg1);
        this.load.image('bg2', bg2);
        this.load.image('bg3', bg3);
        this.load.image('bg4', bg4);
        this.load.image('bg5', bg5);
        this.load.image('bg6', bg6);
        this.load.image('bg7', bg7);
    }

    create() {
        let bg = this.add.image(0, 0, 'bg4');
        bg.setOrigin(0, 0);

        this.game.events.on('onMonsterDie', (level: number) => {
            if (level >= 2 && level < 6) {
                bg = this.add.image(0, 0, 'bg1');
                bg.setOrigin(0, 0);
                return;
            }

            if (level >= 6 && level < 11) {
                bg = this.add.image(0, 0, 'bg2');
                bg.setOrigin(0, 0);
                return;
            }

            if (level >= 11 && level < 16) {
                bg = this.add.image(0, 0, 'bg3');
                bg.setOrigin(0, 0);
                return;
            }

            if (level >= 16 && level < 21) {
                bg = this.add.image(0, 0, 'bg5');
                bg.setOrigin(0, 0);
                return;
            }

            if (level >= 21 && level < 26) {
                bg = this.add.image(0, 0, 'bg6');
                bg.setOrigin(0, 0);
                return;
            }

            if (level >= 26 && level < 31) {
                bg = this.add.image(0, 0, 'bg7');
                bg.setOrigin(0, 0);
                return;
            }

            bg = this.add.image(0, 0, 'bg4');
            bg.setOrigin(0, 0);
        });
    }

    update() {}
}

export const GameConfig = {
    level: STARTING_LEVEL,
    pixelArt: true,
    bgm: true,
    parent: 'game',
    phaserGame: {
        height: 768,
        width: 1024,
        type: Phaser.AUTO,
        scene: [Scene]
    },
    onboardingStep: 0
};
