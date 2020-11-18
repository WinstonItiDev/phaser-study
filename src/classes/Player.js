
let playerSprite
let playerPhysicsGroup
let origin_marker
let circleShape
let circlePhysicsGroup

export class Player {

    constructor(game, sprite) {

        playerSprite = this.playerSprite
        playerPhysicsGroup = this.playerPhysicsGroup
        origin_marker = this.origin_marker
        circleShape = this.circleShape
        circlePhysicsGroup = this.circlePhysicsGroup

        playerSprite = game.add.sprite(undefined, undefined, sprite)
        playerPhysicsGroup = game.physics.add.group({})
        playerPhysicsGroup.add(playerSprite)

        origin_marker = game.add.circle(0, 0, 2, "0xfb00")

        circleShape = game.add.circle(0, 0, 0, "0xfb00", 0.3)
        circlePhysicsGroup = game.physics.add.group({})
        circlePhysicsGroup.add(circleShape)

        this.setPosition = this.setPosition.bind(this)
        this.setVicinityCircle = this.setVicinityCircle.bind(this)
        this.update = this.update.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.getSprite = this.getSprite.bind(this)

        createGun(game)
        
    }

    setPosition(x, y) {
        playerSprite.x = x
        playerSprite.y = y
        circleShape.x = playerSprite.x
        circleShape.y = playerSprite.y
        origin_marker.x = playerSprite.x
        origin_marker.y = playerSprite.y
    }

    setVicinityCircle(radius) {
        circleShape.body.setCircle(radius, -radius, -radius)
    }

    update(game, time) {
        playerSprite.body.setAllowDrag(true)
        playerSprite.body.setDrag(900, 900)
        playerSprite.body.setFriction(0.1, 0.1)
        playerSprite.body.setMaxVelocity(200, 200)
        circleShape.x = playerSprite.x
        circleShape.y = playerSprite.y
        origin_marker.x = playerSprite.x
        origin_marker.y = playerSprite.y

        updateGun(game, time)
        
    }

    getSprite() {
        return playerSprite
    }

    handleInput(keys, delta) {
        //keys not being pressed
        if (keys.D.isUp || keys.A.isUp) {
            playerSprite.body.acceleration.x = 0 * delta
        }
        if (keys.W.isUp || keys.S.isUp) {
            playerSprite.body.acceleration.y = 0 * delta
        }
        //keys being pressed
        if (keys.D.isDown) {
            playerSprite.body.acceleration.x = 50 * delta
        } else if (keys.A.isDown) {
            playerSprite.body.acceleration.x = -50 * delta
        } else if (keys.W.isDown) {
            playerSprite.body.acceleration.y = -50 * delta
        } else if (keys.S.isDown) {
            playerSprite.body.acceleration.y = 50 * delta
        } else {
            playerSprite.body.acceleration.x = 0 * delta
            playerSprite.body.acceleration.y = 0 * delta
        }

        //diagonal keys pressed
        if (keys.S.isDown && keys.D.isDown) {
            playerSprite.body.acceleration.x = 50 * delta
            playerSprite.body.acceleration.y = 50 * delta
        }
        if (keys.S.isDown && keys.A.isDown) {
            playerSprite.body.acceleration.x = -50 * delta
            playerSprite.body.acceleration.y = 50 * delta
        }
        if (keys.W.isDown && keys.D.isDown) {
            playerSprite.body.acceleration.x = 50 * delta
            playerSprite.body.acceleration.y = -50 * delta
        }
        if (keys.W.isDown && keys.A.isDown) {
            playerSprite.body.acceleration.y = -50 * delta
            playerSprite.body.acceleration.x = -50 * delta
        }

        //add acceleration to velocity
        playerSprite.body.velocity.x = playerSprite.body.velocity.x + playerSprite.body.acceleration.x
        playerSprite.body.velocity.y = playerSprite.body.velocity.y + playerSprite.body.acceleration.y
    }

}

let bullets = null;
let lastFired = 0;
let isMouseDown = false

export function createGun(game) {

  let Bullet = new Phaser.Class(bulletClass)

  bullets = game.add.group({
    classType: Bullet,
    maxSize: 20,
    runChildUpdate: true
  });
  
}

export function getPlayerBullets() {
    return bullets
}

export function updateGun(game, time) {

  game.input.on('pointerdown', () => {
    isMouseDown = true
  })

  game.input.on('pointerup', () => {
    isMouseDown = false
  })

  if (isMouseDown == true && time > lastFired) {
      let bullet = bullets.get();

      if (bullet){
          bullet.fire(playerSprite.x, playerSprite.y);
          lastFired = time + 300;
      }
  }
}

let bulletClass = {
  Extends: Phaser.GameObjects.Ellipse,

  bulletGroup: null,
  playerSprite: null,
  velX: null,
  velY: null,

  initialize:

    function Bullet(scene) {
      Phaser.GameObjects.Ellipse.call(this, scene, 0, 0, 10, 10, "0xff0000")
      this.bulletGroup = scene.physics.add.group({
        angularDrag: 5,
        angularVelocity: 60,
        dragX: 10,
        dragY: 10
      })
      this.bulletGroup.add(this)
      this.speed = Phaser.Math.GetSpeed(400 * 200, 1);
      this.playerSprite = playerSprite
      
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


// import Phaser from 'phaser'

// export class Player extends Phaser.Physics.Arcade.Image {
//     constructor(scene, x, y, key, frame) {
//         super(scene, x, y, key, frame) 
//         this.scene = scene;
//         this.velocity = 160;
//         // enable physics
//         this.scene.physics.world.enable(this)
//         //set immovable if another object collides with our player
//         this.setImmovable(false)
//         // scale our player
//         this.setScale();
//         // collide with world bounds
//         this.setCollideWorldBounds(true);
//         // add the player to our existing scene
//         this.scene.add.existing(this)
//     }

//     update(cursors) {
//         this.body.setVelocity(0);
//         if(cursors.A.isDown) {
//           this.body.setVelocityX(-this.velocity);
//         } else if (cursors.D.isDown) {
//           this.body.setVelocityX(this.velocity);
//         } 
//         if(cursors.W.isDown) {
//           this.body.setVelocityY(-this.velocity);
//         } else if (cursors.S.isDown) {
//           this.body.setVelocityY(this.velocity);
//         }
//     }

//     getSprite() {
//       return this
//     }
// }