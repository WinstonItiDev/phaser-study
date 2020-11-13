
import { Projectile } from './Projectile'

export class Entity extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame) 
        this.scene = scene;
        this.velocity = 160;
        // enable physics
        this.scene.physics.world.enable(this)
        //set immovable if another object collides with our player
        this.setImmovable(false)
        // scale our player
        this.setScale();
        // collide with world bounds
        this.setCollideWorldBounds(true);
        // add the player to our existing scene
        this.scene.add.existing(this)

        this.projectile = new Projectile(scene)

        this.actionState = 0


    }
//    game.physics.moveTo(entitySprite[i], player.x, player.y, 50)

    update(scene) {    

        switch(this.actionState) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
        }
        
        // switch(this.anim) {
        //     case 0:
        //         scene.physics.moveTo(this, player.x, player.y, 90)
        //         this.projectile.isShooting = false
        //         break;
        //     case 1:
        //         this.setDragX(0.5)
        //         this.setDragY(0.5)
        //         this.setVelocityX(0)
        //         this.setVelocityY(0)
        //         this.projectile.update(time, player.x, player.y, this.x, this.y)
        //         this.projectile.isShooting = true
        //         break;
        // }
        
    }

    getEntity() {
      return this
    }

    getPosX() {
        return this.x
    }

    getPosY() {
        return this.x
    }
}

// class Entity {
// }

// export class HostileEntity extends Entity {

//     constructor() {
//         super()
//     }

//     create(scene) {
//         this.entity = scene.add.sprite(0, 0, '')
//         this.circle = scene.add.circle(0, 0, 0, "0xfb00", 0.3)
//     }

//     getEntity() {
//         return this.entity
//     }

//     getCircle() {
//         return this.circle
//     }
// }

// let entitySprite = []
// let entityPhysicsGroup = null

// let circle = []
// let circlePhysicsGroup = null

// let bulletClass = null
// let entityLastFired = []
// export let entityBulletsGroup = []

// export class Entity {

//     constructor(game, amt) {

//         bulletClass = new Phaser.Class(entityBulletClass)

//         this.isTouchingCircle = []
//         this.isShooting = []

//         for (let i = 0; i < amt; i++) {

//             entityLastFired[i] = 0

//             entityBulletsGroup[i] = game.add.group({
//                 classType: bulletClass,
//                 maxSize: 78,
//                 runChildUpdate: true
//             });

//             circlePhysicsGroup = game.physics.add.group({})
//             entityPhysicsGroup = game.physics.add.group({})

//             entitySprite[i] = game.add.sprite(0, 0, '')
//             circle[i] = game.add.circle(0, 0, 0, "0xfb00", 0.3)

//             entityPhysicsGroup.add(entitySprite[i])
//             circlePhysicsGroup.add(circle[i])
//             entitySprite[i].x = Math.floor(Math.random() * 800)
//             entitySprite[i].y = Math.floor(Math.random() * 768)
//             this.isShooting[i] = false
//             this.isTouchingCircle[i] = false
//         }
        

//         this.setVicinityCircle = this.setVicinityCircle.bind(this)
//         this.updateEntity = this.updateEntity.bind(this)
//         this.updateEntityGun = this.updateEntityGun.bind(this)
//         this.getSprite = this.getSprite.bind(this)
//         this.getCircle = this.getCircle.bind(this)
//         this.getBulletGroup = this.getBulletGroup.bind(this)


//     }

//     setVicinityCircle(size, amt) {
//         for (let i = 0; i < amt; i++) {
//             circle[i].body.setCircle(size, -size, -size)
//         }
//     }

//     // handleCircle(game, player, amt) {

//     //     for (let i = 0; i < amt; i++) {


//     //         game.physics.add.overlap(player, circle[i], () => {
//     //             this.isTouchingCircle[i] = true
//     //             if (this.isTouchingCircle[i] == true) {
//     //                 this.isShooting[i] = true
//     //             game.physics.moveTo(entitySprite[i], player.x, player.y, 50)

//     //             }
                 
//     //         })

//     //         // this.physics.add.overlap(this.player, this.hostile.getCircle(), () => {

//     //         // })

            

//     //     }
//     // }

//     updateEntity(amt) {


//         for (let i = 0; i < amt; i++) {
            
//             circle[i].x = entitySprite[i].x
//             circle[i].y = entitySprite[i].y
//             entitySprite[i].body.setAllowDrag(true)
//             entitySprite[i].body.setDrag(900, 900)
//             entitySprite[i].body.setFriction(0.1, 0.1)
//             entitySprite[i].body.setMaxVelocity(200, 200)

           
//         }
//     }

//     updateEntityGun(time, px, py, amt) {

//         for (let i = 0; i < amt; i++) {


            
//             if (this.isShooting[i] == true && time > entityLastFired[i]) {
//                 let bullet = []
//                 bullet[i] = entityBulletsGroup[i].get()
//                 bullet[i].fire(entitySprite[i].x, entitySprite[i].y, px, py);
//                 if (bullet[i]) {
//                     entityLastFired[i] = time + 800;
//                 }
//             }

//             if (this.isShooting[i]) {
//                 let bullet = []
//                 bullet[i] = entityBulletsGroup[i].get();
//                 bullet[i].seizeFire()
//             }
//             this.isTouchingCircle[i] = false
//             if (this.isTouchingCircle[i] == false) {
//                 this.isShooting[i] = false
//             }

//         }
//     }

//     getSprite() {
//         return entitySprite
//     }

//     getCircle() {
//         return circle
//     }

//     getBulletGroup() {
//         return entityBulletsGroup
//     }
// }

// let entityBulletClass = {
//     Extends: Phaser.GameObjects.Ellipse,

//     bulletGroup: null,
//     playerSprite: null,
//     velX: null,
//     velY: null,

//     initialize:

//         function Bullet(scene) {
//             Phaser.GameObjects.Ellipse.call(this, scene, 0, 0, 10, 10, "0xff0000");
//             this.bulletGroup = scene.physics.add.group({
//                 angularDrag: 5,
//                 angularVelocity: 60,
//                 dragX: 10,
//                 dragY: 10
//             })
//             this.bulletGroup.add(this)
//             this.speed = Phaser.Math.GetSpeed(400 * 100, 1);
//         },

//     fire: function (ex, ey, px, py) {
//         this.setPosition(ex, ey);
//         this.setActive(true);
//         this.setVisible(true);

//         let toX = px
//         let toY = py
//         let fromX = ex
//         let fromY = ey

//         const d = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2))
//         this.velX = this.speed / d * (toX - fromX)
//         this.velY = this.speed / d * (toY - fromY)
//     },

//     seizeFire: function () {
//         this.setActive(false)
//         this.setVisible(false)
//     },

//     update: function (time, delta) {

//         this.bulletGroup.setVelocity(this.velX * delta, this.velY * delta)

//         if (this.y < -50) {
//             this.setActive(false);
//             this.setVisible(false);
//         }
//         if (this.y > 768) {
//             this.setActive(false);
//             this.setVisible(false);
//         }
//         if (this.x > 1366) {
//             this.setActive(false);
//             this.setVisible(false);
//         }
//         if (this.x < 0) {
//             this.setActive(false);
//             this.setVisible(false);
//         }
//     }

// };