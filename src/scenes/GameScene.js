
import { StateMachine } from '../classes/state/StateMachine.js'
import { WeaponState } from '../classes/state/WeaponState.js'
// import { Player } from '../classes/Player.js'
import { Projectile } from '../classes/Projectile.js'
import { FirstGunProjectile, SecondGunProjectile } from '../classes/Projectile.js'

let player = null
let keys = null
export class GameScene extends Phaser.Scene {
    constructor() {
        super('Game')
    }

    create() {
        keys = this.input.keyboard.addKeys('W, S, A, D')
        this.projectile = new FirstGunProjectile(this)
        
    }

    update(time, delta) {
        let pointer = this.input.activePointer
        this.projectile.update(this, time, 0, 0, pointer)
    }
}

