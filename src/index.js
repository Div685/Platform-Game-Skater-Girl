import 'phaser';

import { SimpleScene } from './Scenes/simple-scene';

const gameConfig = {
  width: 1000,
  height: 600,
  scene: SimpleScene
};

new Phaser.Game(gameConfig);