import Phaser from "phaser";
let bullets = null
let lastFired = 0
let isMouseDown = false
export class Projectile {
    constructor() {



        this.create = this.create.bind(this)

        this.update = this.update.bind(this)
        this.setScaleX = null
        this.setScaleY = null
        this.setMaxSize = 4

        // this.bulletClass = new Phaser.Class(initBulletClass)
        // this.entityLastFired = 0
        // this.entityBulletsGroup = scene.add.group({
        //     classType: this.bulletClass,
        //     maxSize: 78,
        //     runChildUpdate: true
        // })

        // this.entityPhysicsGroup = scene.physics.add.group({})
        // this.isShooting = true


    }

    create(scene) {

        let Bullet = new Phaser.Class(initBulletClass)


        bullets = scene.add.group({
            classType: Bullet,
            maxSize: this.setMaxSize,
            runChildUpdate: true
        })

        // console.log(bullets.get());
    }

    
    getPlayerBullets() {
        return bullets
    }

    update(scene, time, px, py) {
        scene.input.on('pointerdown', () => {
            isMouseDown = true
          })
        
          scene.input.on('pointerup', () => {
            isMouseDown = false
          })
        
          if (isMouseDown == true && time > lastFired) {
              let bullet = bullets.get();
              if (bullet){
                  bullet.fire(px, py);
                  bullet.setScale(this.setScaleX, this.setScaleY)
                  console.log(bullet);
                  lastFired = time + 300;
              }
          }

        //   console.log(bullets.get());

        // if (this.isShooting == true && time > this.entityLastFired) {
        //     let bullet = null
        //     bullet = this.entityBulletsGroup.get()
        //     bullet.fire(ex, ey, px, py);
        //     if (bullet) {
        //         this.entityLastFired = time + 200;
        //     }
        // }

        // if (this.isShooting) {
        //     let bullet = null
        //     bullet = this.entityBulletsGroup.get();
        //     bullet.seizeFire()
        // }
    }

}


let initBulletClass = {
    Extends: Phaser.GameObjects.Ellipse,
  
    bulletGroup: null,
    playerSprite: null,
    velX: null,
    velY: null,
    width: null,
    height: null,
  
    initialize:
  
      function Bullet(scene) {
        Phaser.GameObjects.Ellipse.call(this, scene, 0, 0, 6, 6, "0xff0000")
        this.bulletGroup = scene.physics.add.group({
          angularDrag: 5,
          angularVelocity: 60,
          dragX: 10,
          dragY: 10
        })
        this.bulletGroup.add(this)
        this.speed = Phaser.Math.GetSpeed(400 * 200, 1);
        // this.playerSprite = playerSprite
        
      },
  
    fire: function (x, y) {
      this.setPosition(x, y);
      this.setActive(true);
      this.setVisible(true);
  
      let pointer = this.scene.input.activePointer
      let toX = pointer.x
      let toY = pointer.y
      let fromX = x
      let fromY = y
  
      const d = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2))
  
      this.velX = this.speed / d * (toX - fromX)
      this.velY = this.speed / d * (toY - fromY)
    },

    // setSize: function (width, height) {
    //   this.width = width
    //   this.height = height
    // },
  
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
      if (this.x < 0 ) {
        this.setActive(false);
        this.setVisible(false);
      }
    }
  };
  