
export class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot')
    }

    preload() {
        // Holds all assets (sprites, sound)
        this.load.image('sprite', 'assets/sprites/sprite.png')
        this.load.image('sprite2', 'assets/sprites/sprite2.png')

        // preload tileset asset
        this.load.image("tileset1", "assets/tilemaps/tiles/tileset1.png")
        // preload tilemap asset
        this.load.tilemapTiledJSON("tilemap1", "assets/tilemaps/maps/tilemap1.json" )

    }

    create() {
        this.scene.start('Game')
    }

    update() {
    }
}