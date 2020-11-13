
export class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot')
    }

    preload() {
        // Holds all assets (sprites, sound)
    }

    create() {
        this.scene.start('Game')
    }

    update() {
    }
}