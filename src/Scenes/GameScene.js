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
    this.skater_girl = this.physics.add.sprite(0, height, 'ideal')
    .setOrigin(0,1.4)
    .setScale(0.2)
    .setBodySize(44, 1550)
    .setDepth(1)
    .setCollideWorldBounds(true)
    .setGravityY(5000);
    

    this.initAnims();
    this.handleInput();
  }

  initAnims() {
    this.anims.create({
      key: 'girl-run',
      // frames: this.anims.generateFrameNumbers('skater-girl-roll-sprite', {start: 0, end:17}),
      frames: [
        {key: 'skater-girl-roll-0'},
        {key: 'skater-girl-roll-1'},
        {key: 'skater-girl-roll-2'},
        {key: 'skater-girl-roll-3'},
        {key: 'skater-girl-roll-4'},
        {key: 'skater-girl-roll-5'},
        {key: 'skater-girl-roll-6'},
        {key: 'skater-girl-roll-7'},
        {key: 'skater-girl-roll-8'},
        {key: 'skater-girl-roll-9'},
        {key: 'skater-girl-roll-10'},
        {key: 'skater-girl-roll-11'},
        {key: 'skater-girl-roll-12'},
        {key: 'skater-girl-roll-13'},
        {key: 'skater-girl-roll-14'},
        {key: 'skater-girl-roll-15'},
        {key: 'skater-girl-roll-16'},
        {key: 'skater-girl-roll-17'},
        {key: 'skater-girl-roll-18'},
      ],
      frameRate: 36,
      
      repeat: -1
    });
    
    // this.anims.create({
    //   key: 'girl-down-anim',
    //   frames: [
    //     { key: 'ideal', duration: 50 },
    //   ],
    //   frameRate: 10,
    //   repeat: -1,
    // });

  }

  handleInput() {
    this.input.keyboard.on('keydown-SPACE', () => {
      if (!this.skater_girl.body.onFloor()){
        return;
      }

      this.skater_girl.setVelocityY(-1600)
    })
  }
  // 60 fps
  update() {
    this.ground.tilePositionX += this.gameSpeed;

    if(this.skater_girl.body.deltaAbsY() > 0) {
      // this.skater_girl.anims.stop();
      // this.skater_girl.play('girl-jump', true);
    } else {
      this.skater_girl.play('girl-run', true);
    }
  }
};