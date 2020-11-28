import {
    Player
} from '../classes/Player.js'

import {
    FirstGunProjectile,
    SecondGunProjectile,
    ThirdGunProjectile,
    FourthGunProjectile
} from '../classes/Projectile.js'

import {
    GameUi
} from '../classes/GameUi.js'


let activeRect = null
let bulletCount = null
let num = null

export class GameScene extends Phaser.Scene {
    constructor() {
        super('Game')
    }
    create() {

        // create input
        this.keys = this.input.keyboard.addKeys('W, S, A, D')
        // create tilemap
        this.map = this.make.tilemap({
            key: 'tilemap',
            tileWidth: 64,
            tileHeight: 64
        })
        this.tileset = this.map.addTilesetImage("tiles")
        this.collisionLayer = this.map.createStaticLayer(0, this.tileset, 0, 0)
        this.map.setCollision(0, true)

        // create player
        this.player = new Player(this, '')
        this.player.setVicinityCircle(30)
        this.player.setPosition(400, 300)

        // create tools
        this.firstGun = new FirstGunProjectile()
        this.firstGun.createBulletGroup(this)

        this.secondGun = new SecondGunProjectile()
        this.secondGun.createBulletGroup(this)

        this.thirdGun = new ThirdGunProjectile()
        this.thirdGun.createBulletGroup(this)

        this.fourthGun = new FourthGunProjectile()
        this.fourthGun.createBulletGroup(this)

        console.log(this.firstGun);
        
        // create camera
        this.cameras.main.startFollow(this.player.getSprite(), true, 0.08, 0.08);
        bulletCount = this.add.text(20, 20, "30")
        bulletCount.setScrollFactor(0)
        bulletCount.setSize(20, 20)


        // establish rect arrays
        // set activeRect to 0 (first weapon)
        let _this = this
        activeRect = 0
        let rectGroup = []
        let rects = [0, 1, 2, 3]

        // push GameUi object into rectGroup
        rects.forEach(index => {
            rectGroup.push(new GameUi(_this, 50 + 10 + 80 * index + 1, 550, 60, 50, index))
        });

        // input set to increment selected rectangle
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
        // emit change each time selected
        this.events.addListener('CHANGE_BUTTON', (payload) => {
            if (activeRect > 3) {
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
        })

        

    }
    update(time, delta) {
        // create pointer for shooting
        this.pointer = this.input.activePointer.positionToCamera(this.cameras.main);

        this.player.update(this, time)
        this.player.handleInput(this.keys, delta)

        //count how many bullets are being used
        // if bullets used is over 30
        // then reset amount of ammo 
        if (this.firstGun.getBulletGroup().countActive() >= 30) {
            console.log("reached");
            this.firstGun.getBulletGroup().children.entries.length = 0
        }

        if (activeRect == 0) {
            

            this.firstGun.update(this, time, this.player.getSprite().x, this.player.getSprite().y, this.pointer, bulletCount)

        }
        if (activeRect == 1) {
            console.log("active 1")
            this.secondGun.update(this, time, this.player.getSprite().x, this.player.getSprite().y, this.pointer)
        }
        if (activeRect == 2) {
            console.log("active 2")
            this.thirdGun.update(this, time, this.player.getSprite().x, this.player.getSprite().y, this.pointer)
        }
        if (activeRect == 3) {
            console.log("active 3")
            this.fourthGun.update(this, time, this.player.getSprite().x, this.player.getSprite().y, this.pointer)
        }
    }
}

// import { GameUi } from '../classes/GameUi'
// import { FirstGunProjectile, SecondGunProjectile, ThirdGunProjectile, FourthGunProjectile } from '../classes/Projectile.js'
// let player = null
// let keys = null
// let activeRect = null

// export class GameScene extends Phaser.Scene {
//     constructor() {
//         super('Game')
//     }

//     create() {

//         // create guns
//         this.firstGun = new FirstGunProjectile()
//         this.firstGun.createBulletGroup(this)

//         this.secondGun = new SecondGunProjectile()
//         this.secondGun.createBulletGroup(this)

//         this.thirdGun = new ThirdGunProjectile()
//         this.thirdGun.createBulletGroup(this)

//         this.fourthGun = new FourthGunProjectile()
//         this.fourthGun.createBulletGroup(this)

//         console.log(this.firstGun);
//         console.log(this.secondGun);
//         console.log(this.thirdGun);
//         console.log(this.fourthGun);



//         // create pointer
//         this.pointer = this.input.activePointer

//         let _this = this
//         activeRect = 0
//         let rectGroup = []
//         let rects = [0, 1, 2, 3]

//         rects.forEach(index => {
//             rectGroup.push(new GameUi(_this, 50 + 10 + 80 * index + 1, 550, 60, 50, index))
//         });

//         this.input.keyboard.on('keydown', event => {
//             switch (event.key) {
//                 case 'ArrowLeft':
//                     activeRect -= 1
//                     _this.events.emit('CHANGE_BUTTON')
//                     break;
//                 case 'ArrowRight':
//                     activeRect += 1
//                     _this.events.emit('CHANGE_BUTTON')
//                     break;
//             }
//         })
//         this.events.addListener('CHANGE_BUTTON', (payload) => {
//             if (activeRect > 4) {
//                 activeRect = 0
//             }
//             if (activeRect < 0) {
//                 activeRect += rects.length;
//             }
//             if (payload && typeof payload.setIndex !== 'undefined')
//                 activeRect = payload.setIndex;
//             rectGroup.forEach((rect) => {
//                 rect.setStyleActive(rect.index == activeRect % rects.length)
//             })
//         })
//         // if (activeRect == 0) {
//         //     console.log("active 0")
//         // }

//     }

//     update(time, delta) {
//         if (activeRect == 0) {
//             console.log("active 0")

//             this.firstGun.update(this, time, 0, 0, this.pointer)
//         }


//         if (activeRect == 1) {
//             console.log("active 1")

//             this.secondGun.update(this, time, 0, 0, this.pointer)
//         }

//         if (activeRect == 2) {
//             console.log("active 2")

//             this.thirdGun.update(this, time, 0, 0, this.pointer)
//         }

//         if (activeRect == 3) {
//             console.log("active 3")

//             this.fourthGun.update(this, time, 0, 0, this.pointer)
//         }

//     }
// }

// // export class SceneA extends Phaser.Scene {
// //     constructor() {
// //         super('SceneA')
// //     }
// //     create() {
// //         console.log("SCENE_A");
// //     }
// // }

// // export class SceneB extends Phaser.Scene {
// //     constructor() {
// //         super('SceneB')
// //     }
// //     create() {
// //         console.log("SCENE_B");
// //     }
// // }