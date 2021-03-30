import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', 'assets/skater-girl.gif');
  }

  create() {
    this.scene.start('Preloader');
  }
}