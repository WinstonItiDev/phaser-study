let rect = null

export class GameScene extends Phaser.Scene {
    constructor() {
        super('Game')
    }

    create() {
        let fillColor = Phaser.Display.Color.HexStringToColor('#496A81').color;
        let selectFillColor = Phaser.Display.Color.HexStringToColor('#66999B').color;
        let strokeColor = Phaser.Display.Color.HexStringToColor('#B3AF8F').color;

        rect = []
        let lineWidth = 4

        for (let i = 0; i < 6; i++) {
            rect[i] = this.add.rectangle(40 * i, 200, 30, 30)
            rect[i].setOrigin(0, 0)
            rect[i].setInteractive()
            rect[i].setFillStyle(fillColor, 1)
            rect[i].setStrokeStyle(lineWidth, strokeColor, 1);
        }

        let selectedTile = null
        selectedTile = 2

        // rect[selectedTile].setFillStyle(selectFillColor, 1)

        let keyObj = this.input.keyboard.addKey('D');  // Get key object
        // keyObj.on('down', function (event) {
        //     for (let i = 0; i < rect.length; i++) {
        //         rect[i].setFillStyle(selectFillColor, 1)
        // }

        console.log(rect);

        // rect[0].setFillStyle(selectFillColor, 1)
        // rect = this.add.rectangle(200, 200, 200, 50)

    }

    update(time, delta) {
    }
}

