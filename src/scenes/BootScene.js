
export class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot')
    }

    preload() {
        // Holds all assets (sprites, sound)
        this.load.image('sprite', 'assets/sprites/sprite.png')
        this.load.image('sprite2', 'assets/sprites/sprite2.png')
    }

    create() {
        this.scene.start('Game')
    }

    update() {
    }
}