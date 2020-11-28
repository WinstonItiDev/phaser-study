
// import { StateMachine } from '../classes/state/StateMachine.js'
// import { FirstProjectileState, SecondProjectileState } from '../classes/state/WeaponState.js'
// import { Player } from '../classes/Player.js'
// import { Projectile } from '../classes/Projectile.js'
// import { FirstGunProjectile, SecondGunProjectile } from '../classes/Projectile.js'

import { GameUi } from '../classes/GameUi.js'

let player = null
let keys = null
export class GameScene extends Phaser.Scene {
    constructor() {
        super('Game')
    }
    create() {
        keys = this.input.keyboard.addKeys('W, S, A, D')

        let _this = this
        let activeRect = 0
        let rectGroup = []
        let rects = [0, 1, 2, 3, 4]


        rects.forEach(index => {
            rectGroup.push(new GameUi(_this, 50 + 10 + 80 * index + 1, 550, 60, 50, index))
        });

        this.input.keyboard.on('keydown', event => {
            switch (event.key) {
                case 'ArrowLeft':
                    activeRect -= 1
                    _this.events.emit('CHANGE_BUTTON')
                    break;
                case 'ArrowRight':
                    activeRect += 1
                    _this.events.emit('CHANGE_BUTTON')
                    break;
            }
        })

        if (activeRect == 0) {
            console.log("active 0");
            this.scene.launch('FirstState')


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
                this.scene.launch('FirstState')
                // this.scene.remove('SecondState')


            }

            if (activeRect == 1) {
                console.log("active 1");
                this.scene.stop('FirstState');
                // this.scene.launch('SecondState')


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
    }

    update(time, delta) {
    }
}

import { FirstProjectile, SecondProjectile } from '../classes/Projectile.js'

export class FirstProjectileState extends Phaser.Scene {
    constructor() {
        super('FirstState')
    }

    preload() {

    }

    create() {
        console.log("FIRSTSTATE_ACTIVE");

        this.projectile = new FirstProjectile(this)
    }

    update(time) {
        let pointer = this.input.activePointer
        this.projectile.update(this, time, 0, 0, pointer)
    }
}

export class SecondProjectileState extends Phaser.Scene {
    constructor() {
        super('SecondState')
    }

    preload() {

    }

    create() {
        console.log("SECONDSTATE_ACTIVE");

        this.projectile = new SecondProjectile(this)
    }

    update(time) {
        let pointer = this.input.activePointer
        this.projectile.update(this, time, 0, 0, pointer)
    }
}

