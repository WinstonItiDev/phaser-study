
// let normalStyle = {
//     fontSize: 52,
//     color: "#ffffff"
// }
// let activeStyle = {
//     fontSize: 30,
//     color: '#ffff00'
// }

// let rgb = Phaser.Display.Color.IntegerToRGB({r: 200, g: 100, b: 80});

let normalFill = 0x6666ff;
let activeFill = 0xff;

export class GameUi extends Phaser.GameObjects.Rectangle {


    constructor(scene, x, y, width, height, fillColor, alpha, index) {
        super(scene, x, y, width, height, fillColor, alpha, index);
        // ...
        this.isFilled = true

        this.setStrokeStyle(4, 0xefc53f);
        this.setFillStyle(normalFill, 1)
            .setInteractive()
            .on('pointerover', () => {
                scene.events.emit('CHANGE_BUTTON', { setIndex: index})
            })
        scene.add.existing(this);

        this.setStyleActive(index === 0)
    }

    setStyleActive(active) {
        if (this.isActive === active) {
            this.isActive = active
            this.setStyleActive(this.isActive ? this.setFillStyle(activeFill, 1) : this.setFillStyle(normalFill, 1))

        }
    }
    // ...
    // preUpdate(time, delta) {}
}

// let isActive = null

// export class GameUi extends Phaser.GameObjects.Text {
//     constructor(scene, x, y, text, index) {
//         super(scene, x, y, text, {}) || this
//         this.index = index;


//         isActive = false

//         scene.add.existing(this)
//         this.setStyle(normalStyle)
//             .setInteractive()
//             .on('pointerover', () => {
//                 return scene.events.emit('CHANGE_BUTTON', { setIndex: index })
//             })
//             this.setStyleActive(index === 0)

//     }

//     setStyleActive(active) {
//         if (isActive === true) {
//             isActive = active
//             this.setStyle(isActive ? activeStyle : normalStyle)
//         }
//     }
// }