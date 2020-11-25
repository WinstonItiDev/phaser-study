import Phaser from "phaser";

let lastFired = 0
let isMouseDown = false

class Projectile {
}

export class FirstGunProjectile extends Projectile {
	constructor() {
		super()
		// create customized bullet group
		// this.createBulletGroup(scene, initBulletClass, 10)
    // bind functions to this class
    this.createBulletGroup = this.createBulletGroup.bind(this)
		this.update = this.update.bind(this)

	}
	createBulletGroup(scene) {
		this.Bullet = new Phaser.Class(initBulletClass)
		this.bullets = scene.add.group({
			classType: this.Bullet,
			maxSize: 30,
			runChildUpdate: true
		})
  }
	update(scene, time, px, py, pointer) {
		scene.input.on('pointerdown', () => {
			isMouseDown = true
			
		})

		scene.input.on('pointerup', () => {
			isMouseDown = false
		})

		if (isMouseDown == true && time > lastFired) {
			let bullet = this.bullets.get();
			if (bullet) {
				bullet.fire(px, py, pointer);
				bullet.setScale(1, 1)
				lastFired = time + 100;
			}
		}
	}
}
export class SecondGunProjectile extends Projectile {
	constructor() {
		super()
		// create customized bullet group
		// this.createBulletGroup(scene, initBulletClass, 10)
    // bind functions to this class
    this.createBulletGroup = this.createBulletGroup.bind(this)
		this.update = this.update.bind(this)

	}
	createBulletGroup(scene) {
		this.Bullet = new Phaser.Class(initBulletClass2)
		this.bullets = scene.add.group({
			classType: this.Bullet,
			maxSize: 10,
			runChildUpdate: true
		})
  }
	update(scene, time, px, py, pointer) {
		scene.input.on('pointerdown', () => {
			isMouseDown = true
			
		})

		scene.input.on('pointerup', () => {
			isMouseDown = false
		})

		if (isMouseDown == true && time > lastFired) {
			let bullet = this.bullets.get();
			if (bullet) {
				bullet.fire(px, py, pointer);
				bullet.setScale(2, 2)
				lastFired = time + 60;
			}
		}
	}
}
export class ThirdGunProjectile extends Projectile {
	constructor() {
		super()
		// create customized bullet group
		// this.createBulletGroup(scene, initBulletClass, 10)
    // bind functions to this class
    this.createBulletGroup = this.createBulletGroup.bind(this)
		this.update = this.update.bind(this)

	}
	createBulletGroup(scene) {
		this.Bullet = new Phaser.Class(initBulletClass3)
		this.bullets = scene.add.group({
			classType: this.Bullet,
			maxSize: 500,
			runChildUpdate: true
		})
  }
	update(scene, time, px, py, pointer) {
		scene.input.on('pointerdown', () => {
			isMouseDown = true
			
		})

		scene.input.on('pointerup', () => {
			isMouseDown = false
		})

		if (isMouseDown == true && time > lastFired) {
			let bullet = this.bullets.get();
			if (bullet) {
				bullet.fire(px, py, pointer);
				bullet.setScale(2, 2)
				lastFired = time + 20;
			}
		}
	}
}
export class FourthGunProjectile extends Projectile {
	constructor() {
		super()
		// create customized bullet group
		// this.createBulletGroup(scene, initBulletClass, 10)
    // bind functions to this class
    this.createBulletGroup = this.createBulletGroup.bind(this)
		this.update = this.update.bind(this)

	}
	createBulletGroup(scene) {
		this.Bullet = new Phaser.Class(initBulletClass4)
		this.bullets = scene.add.group({
			classType: this.Bullet,
			maxSize: 4,
			runChildUpdate: true
		})
  }
	update(scene, time, px, py, pointer) {
		scene.input.on('pointerdown', () => {
			isMouseDown = true
			
		})

		scene.input.on('pointerup', () => {
			isMouseDown = false
		})

		if (isMouseDown == true && time > lastFired) {
			let bullet = this.bullets.get();
			if (bullet) {
				bullet.fire(px, py, pointer);
				bullet.setScale(10, 10)
				lastFired = time + 40;
			}
		}
	}
}


let initBulletClass = {
  Extends: Phaser.GameObjects.Sprite,
  initialize:

    function Bullet(scene) {
      Phaser.GameObjects.Sprite.call(this, scene, 0, 0, "sprite")
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

  fire: function (px, py, _pointer) {
    this.setPosition(px, py);
    this.setActive(true);
    this.setVisible(true);

    let pointer = _pointer
    let toX = pointer.x
    let toY = pointer.y
    let fromX = px
    let fromY = py

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

let initBulletClass2 = {
  Extends: Phaser.GameObjects.Sprite,
  initialize:

    function Bullet(scene) {
      Phaser.GameObjects.Sprite.call(this, scene, 0, 0, "sprite2")
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

  fire: function (px, py, _pointer) {
    this.setPosition(px, py);
    this.setActive(true);
    this.setVisible(true);

    let pointer = _pointer
    let toX = pointer.x
    let toY = pointer.y
    let fromX = px
    let fromY = py

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

let initBulletClass3 = {
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
        angularVelocity: 30,
        dragX: 20,
        dragY: 20
      })
      this.bulletGroup.add(this)
      this.speed = Phaser.Math.GetSpeed(400 * 200, 4);
      // this.playerSprite = playerSprite
      
    },

  fire: function (px, py, _pointer) {
    this.setPosition(px, py);
    this.setActive(true);
    this.setVisible(true);

    let pointer = _pointer
    let toX = pointer.x
    let toY = pointer.y
    let fromX = px
    let fromY = py

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
let initBulletClass4 = {
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

  fire: function (px, py, _pointer) {
    this.setPosition(px, py);
    this.setActive(true);
    this.setVisible(true);

    let pointer = _pointer
    let toX = pointer.x
    let toY = pointer.y
    let fromX = px
    let fromY = py

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
