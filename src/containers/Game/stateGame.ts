import { STARTING_LEVEL } from '../../constants';
import Phaser from 'phaser';

import bg1 from '../../assets/backgrounds/game_background_1/game_background_1-resized.png';
import bg2 from '../../assets/backgrounds/game_background_2/game_background_2-resized.png';
import bg3 from '../../assets/backgrounds/game_background_3/game_background_3-resized.png';
import bg4 from '../../assets/backgrounds/game_background_4/game_background_4-resized.png';

export let stateGame = {
    level: STARTING_LEVEL,
    bgm: true,
    phaserGame: {
        height: 576,
        width: 1024,
        type: Phaser.AUTO,
        scene: {
            init: function() {

            },
            /*preload: function() {
                this.load.image('bg1', bg1)
                this.load.image('bg2', bg2)
                this.load.image('bg3', bg3)
                this.load.image('bg4', bg4)
            },*/
            /*create: function() {
                let bg = this.add.image(0, 0, "bg4")
                bg.setOrigin(0, 0)

                this.game.events.on('onMonsterDie', (level) => {
                    if (level >= 6 && level < 11) {
                        let bg = this.add.image(0, 0, "bg1")
                        bg.setOrigin(0, 0)
                        return
                    }

                    if (level >= 11 && level < 16) {
                        let bg = this.add.image(0, 0, "bg2")
                        bg.setOrigin(0, 0)
                        return
                    }

                    if (level >= 16 && level < 21) {
                        let bg = this.add.image(0, 0, "bg3")
                        bg.setOrigin(0, 0)
                        return
                    }

                    let bg = this.add.image(0, 0, "bg4")
                    bg.setOrigin(0, 0)
                })
            },*/
            update: function() {

            }
        }
    },
    onboardingStep: 0
}
