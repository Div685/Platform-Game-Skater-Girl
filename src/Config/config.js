import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'game-main',
  width: 800,
  height: 600,
  pixelArt: true,
  // transparent: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
};