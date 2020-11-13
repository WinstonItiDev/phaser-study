import Phaser from "phaser";

export class Projectile {
    constructor(scene) {
        this.bulletClass = new Phaser.Class(initBulletClass)
        this.entityLastFired = 0
        this.entityBulletsGroup = scene.add.group({
            classType: this.bulletClass,
            maxSize: 78,
            runChildUpdate: true
        })

        this.entityPhysicsGroup = scene.physics.add.group({})

        this.isShooting = false


    }

    update(time, px, py, ex, ey) {
        if (this.isShooting == true && time > this.entityLastFired) {
            let bullet = null
            bullet = this.entityBulletsGroup.get()
            bullet.fire(ex, ey, px, py);
            if (bullet) {
                this.entityLastFired = time + 200;
            }
        }

        if (this.isShooting) {
            let bullet = null
            bullet = this.entityBulletsGroup.get();
            bullet.seizeFire()
        }
    }
}


let initBulletClass = {
    Extends: Phaser.GameObjects.Ellipse,

    bulletGroup: null,
    playerSprite: null,
    velX: null,
    velY: null,

    initialize:

        function Bullet(scene) {
            Phaser.GameObjects.Ellipse.call(this, scene, 0, 0, 10, 10, "0xff0000");
            this.bulletGroup = scene.physics.add.group({
                angularDrag: 5,
                angularVelocity: 60,
                dragX: 10,
                dragY: 10
            })
            this.bulletGroup.add(this)
            this.speed = Phaser.Math.GetSpeed(400 * 100, 1);
        },

    fire: function (ex, ey, px, py) {
        this.setPosition(ex, ey);
        this.setActive(true);
        this.setVisible(true);

        let toX = px
        let toY = py
        let fromX = ex
        let fromY = ey

        const d = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2))
        this.velX = this.speed / d * (toX - fromX)
        this.velY = this.speed / d * (toY - fromY)
    },

    seizeFire: function () {
        this.setActive(false)
        this.setVisible(false)
    },

    update: function (time, delta) {

        this.bulletGroup.setVelocity(this.velX * delta, this.velY * delta)

        if (this.y < -50) {
            this.setActive(false);
            this.setVisible(false);
        }
        if (this.y > 768) {
            this.setActive(false);
            this.setVisible(false);
        }
        if (this.x > 1366) {
            this.setActive(false);
            this.setVisible(false);
        }
        if (this.x < 0) {
            this.setActive(false);
            this.setVisible(false);
        }
    }

};