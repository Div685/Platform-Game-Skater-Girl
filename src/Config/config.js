/* global Phaser */

import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'game-main',
  width: 1000,
  height: 600,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
};