
export class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot')
    }

    preload() {
        // Holds all assets (sprites, sound)
        this.load.image('sprite', 'assets/sprites/sprite.png')
        this.load.image('sprite2', 'assets/sprites/sprite2.png')

        // preload tileset asset
        this.load.image("tiles", "assets/tilemaps/tiles/firstTileset.png")
        // preload tilemap asset
        this.load.tilemapCSV("tilemap", "assets/tilemaps/maps/tilemap1.csv" )

    }

    create() {
        this.scene.start('Game')
    }

    update() {
    }
}