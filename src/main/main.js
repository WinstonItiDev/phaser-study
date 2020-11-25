import Phaser from 'phaser'

import { BootScene } from '../scenes/BootScene'
import { GameScene } from '../scenes/GameScene'
import { TitleScene } from '../scenes/TitleScene'
import { UIScene } from '../scenes/UIScene'

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    resolution: window.devicePixelRatio,
    pixelArt: true,
    resolution: 1,
    antialias: false,
    scene: [
      BootScene,
      TitleScene,
      GameScene,
      UIScene,
    ],
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { y:0, },
      },
    },
  };

  let game = new Phaser.Game(config)


