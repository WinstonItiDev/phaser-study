
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
            rectGroup.push(new GameUi(_this, this.cameras.main.width / 2, 10 + 120 * index + 1, 200, 100, index))
        });

        this.input.keyboard.on('keydown', event => {
            switch (event.key) {
              case 'ArrowUp':
                activeRect -= 1
                _this.events.emit('CHANGE_BUTTON')
                break
              case 'ArrowDown':
                activeRect += 1
                _this.events.emit('CHANGE_BUTTON')
                break
            }

            console.log(activeRect);
          })

        this.events.addListener('CHANGE_BUTTON', (payload) => {
            if (activeRect < 0) {
                activeRect += rects.length;
            }

            if (payload && typeof payload.setIndex !== 'undefined')
                activeRect = payload.setIndex;
                rectGroup.forEach((rect) => {
                    rect.setStyleActive(rect.index == activeRect % rects.length)
                })
                console.log(payload);
        })

        console.log(rects);

    }
    update(time, delta) {
    }
}

