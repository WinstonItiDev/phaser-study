
import { GameUi } from '../classes/GameUi.js'

export class GameScene extends Phaser.Scene {
    constructor() {
        super('Game')
    }
    create() {
        let _this = this
        let activeRect = 0
        let rectGroup = []
        let rects = [0, 1, 2, 3, 4]

        rects.forEach(index => {
            rectGroup.push(new GameUi(_this, 50 + 10 + 120 * index + 1, 70, 100, 50, index))
        });

        this.input.keyboard.on('keydown', event => {
            switch (event.key) {
                case 'ArrowLeft':
                    activeRect -= 1
                    _this.events.emit('CHANGE_BUTTON')
                    break
                case 'ArrowRight':
                    activeRect += 1
                    _this.events.emit('CHANGE_BUTTON')
                    break
            }

        })

        if (activeRect == 0) {
            console.log("active 0")
        }

        this.events.addListener('CHANGE_BUTTON', (payload) => {
            if (activeRect > 4) {
                activeRect = 0
            }

            if (activeRect < 0) {
                activeRect += rects.length;
            }

            if (payload && typeof payload.setIndex !== 'undefined')
                activeRect = payload.setIndex;
            rectGroup.forEach((rect) => {
                rect.setStyleActive(rect.index == activeRect % rects.length)
            })

            if (activeRect == 0) {
                console.log("active 0")
            }

            if (activeRect == 1) {
                console.log("active 1");
            }

            if (activeRect == 2) {
                console.log("active 2");
            }

            if (activeRect == 3) {
                console.log("active 3");
            }

            if (activeRect == 4) {
                console.log("active 4");
            }
            
        })

        console.log(rects);

    }
    update(time, delta) {
    }
}

