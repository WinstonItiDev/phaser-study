
// let normalStyle = {
//     fontSize: 52,
//     color: "#ffffff"
// }
// let activeStyle = {
//     fontSize: 30,
//     color: '#ffff00'
// }

// let rgb = Phaser.Display.Color.IntegerToRGB({r: 200, g: 100, b: 80});

export class GameUi extends Phaser.GameObjects.Rectangle {


    constructor(scene, x, y, width, height, index) {
        super(scene, x, y, width, height, index);
        // ...

        this.index = index
        this.normalFill = 0x6666ff
        this.activeFill = 0xffffff

        this.isFilled = true

        this.isActive = false
        scene.add.existing(this);

        this.setStrokeStyle(4, 0xefc53f);
        this.setFillStyle(this.normalFill, 1)
            .setInteractive()
            // .on('pointerover', () => {
            //     scene.events.emit('CHANGE_BUTTON', { setIndex: index})
            // })

        this.setStyleActive(index === 0)
    }

    setStyleActive(active) {

        if (this.isActive === active)
            return;
        this.isActive = active;
        this.setFillStyle(this.isActive ? this.activeFill : this.normalFill, 1);

    }
    // ...
    // preUpdate(time, delta) {}
}