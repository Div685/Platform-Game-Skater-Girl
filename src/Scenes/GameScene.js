import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor(){
    super('Game');
  }

  preload(){
    //load image
    // this.load.image('logo', 'assets/skater-girl1.png')
  }

  create(){
    // ground speed
    this.gameSpeed = 10;

    // Create a Ground
    const {height, width } = this.game.config;

    this.ground = this.add.tileSprite(0, height, width, 126, 'ground-road').setOrigin(0,1);
    this.skater_girl = this.physics.add.sprite(-80, height, 'skater-girl-roll-0' ).setOrigin(0,1.1).setScale(0.2);
  }

  // 60 fps
  update() {
    this.ground.tilePositionX += this.gameSpeed;
  }
};