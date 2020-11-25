
import { Player } from '../classes/Player.js'

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
        this.player.setPosition(800 / 2, 600 / 2)


    }
    update(time, delta) {
        this.player.update(this, time)
        this.player.handleInput(this.keys, delta)
    }
}