
export class TitleScene extends Phaser.Scene {
    constructor() {
        super('Title')
    }

    preload() {

    }

    create() {
        this.titleText = this.add.text(20, 20, 'Title!')
        // this.titleText.setOrigin(0.5)
        this.button = this.add.image(100, 100, '')
        this.button.setInteractive();

        this.button.on('pointerdown', () => {
            this.scene.start('Game')
        })

        this.button.on('pointerover', () => {
            console.log('pointer over')

            // use setTexture to change button texture
        })

        this.button.on('pointerout', () => {
            console.log('pointer out')
        })
    }
}