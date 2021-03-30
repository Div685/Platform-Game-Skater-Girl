import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor(){
    super('Game');
  }

  preload(){
    //load image
    this.load.image('logo', 'assets/skater-girl1.png')
  }

  create(){
    this.add.image(400, 300, 'logo').setScale(0.2);
  }
};