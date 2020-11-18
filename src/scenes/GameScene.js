
import { StateMachine } from '../classes/state/StateMachine.js'
import { WeaponState } from '../classes/state/WeaponState.js'
import { Projectile } from '../classes/Projectile.js'
// import { Player } from '../classes/Player.js'


let player = null
let keys = null
export class GameScene extends Phaser.Scene {
    constructor() {
        super('Game')
    }

    create() {
        keys = this.input.keyboard.addKeys('W, S, A, D')

        // player = new Player(this, '')
        // player.setVicinityCircle(30)
        // player.setPosition(800 / 2, 600 / 2)
        this.projectile = new Projectile()
        this.projectile.create(this)
        this.weaponStateMachine = new StateMachine('weaponState', {
            weaponState: new WeaponState()
        }, [this, this.projectile])
    }

    update(time, delta) {
        // player.update(this, time)
        // player.handleInput(keys, delta)
        this.projectile.update(this, time, 40, 40)
        this.weaponStateMachine.step() 

    }
}

