
import { GameUi } from '../classes/GameUi.js'

let rects = [1, 2, 3]


export class GameScene extends Phaser.Scene {
    constructor() {
        super('Game')
    }
    create() {
        let activeRect = 2
        let rectGroup = []

        rects.forEach(index => {
            rectGroup.push(new GameUi(this, this.cameras.main.width / 2, 10 + 120 * index + 1, 200, 100, 1, index))
        });

        this.input.keyboard.on('keydown', event => {
            switch (event.key) {
              case 'ArrowUp':
                activeRect -= 1
                this.events.emit('CHANGE_BUTTON')
                break
              case 'ArrowDown':
                activeRect += 1
                this.events.emit('CHANGE_BUTTON')
                break
            }
          })
        this.events.addListener('CHANGE_BUTTON', (payload) => {
            console.log(payload);
            if (activeRect < 0) {
                activeRect += rects.length;
            }
            if (payload && typeof payload.setIndex != 'undefined') {
                activeRect = payload.setIndex;
                rectGroup.forEach((rect) => {
                    rect.setStyleActive(text.index === activeText % rects.length)
                })
            }
        })

    }
    update(time, delta) {
    }
}

