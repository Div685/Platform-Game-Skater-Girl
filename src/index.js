import 'phaser';

import { SimpleScene } from './Scenes/simple-scene';

const gameConfig = {
  width: 680,
  height: 400,
  scene: SimpleScene
};

new Phaser.Game(gameConfig);