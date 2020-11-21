

import { GameUi } from '../GameUi.js'

class State {
    enter() {


    }

    execute() {
    }
}

export class WeaponState extends State {
    enter(scene) {
        console.log("WEAPON_STATE_1");


        let _this = scene
        let activeRect = 0
        let rectGroup = []
        let rects = [0, 1, 2, 3, 4]

        rects.forEach(index => {
            rectGroup.push(new GameUi(_this, 50 + 10 + 80 * index + 1, 550, 60, 50, index))
        });

        scene.input.keyboard.on('keydown', event => {
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
            console.log("active 0")
            scene.projectile.setScaleX = 2
            scene.projectile.setScaleY = 2
        }

        scene.events.addListener('CHANGE_BUTTON', (payload) => {
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
                scene.projectile.setScaleX = 2
                scene.projectile.setScaleY = 2

            }

            if (activeRect == 1) {
                console.log("active 1");
                scene.projectile.setScaleX = 20
                scene.projectile.setScaleY = 20
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

        console.log(scene.projectile);

    }

    execute(scene) {
        // console.log(scene.projectile.update());
        // scene.projectile.update(scene, time, 0, 0)

    }
}
