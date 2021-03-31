import 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init () {
    this.readyCount = 0;
  }
   
  

  preload() {

      // add logo image
  this.add.image(400, 200, 'logo');
 
  // display progress bar
  var progressBar = this.add.graphics();
  var progressBox = this.add.graphics();
  progressBox.fillStyle(0x222222, 0.8);
  progressBox.fillRect(240, 270, 320, 50);
 
  var width = this.cameras.main.width;
  var height = this.cameras.main.height;
  var loadingText = this.make.text({
    x: width / 2,
    y: height / 2 - 50,
    text: 'Loading...',
    style: {
      font: '20px monospace',
      fill: '#ffffff'
    }
  });
  loadingText.setOrigin(0.5, 0.5);
 
  var percentText = this.make.text({
    x: width / 2,
    y: height / 2 - 5,
    text: '0%',
    style: {
      font: '18px monospace',
      fill: '#ffffff'
    }
  });
  percentText.setOrigin(0.5, 0.5);
 
  var assetText = this.make.text({
    x: width / 2,
    y: height / 2 + 50,
    text: '',
    style: {
      font: '18px monospace',
      fill: '#ffffff'
    }
  });
  assetText.setOrigin(0.5, 0.5);
 
  // update progress bar
  this.load.on('progress', function (value) {
    percentText.setText(parseInt(value * 100) + '%');
    progressBar.clear();
    progressBar.fillStyle(0xffffff, 1);
    progressBar.fillRect(250, 280, 300 * value, 30);
  });
 
  // update file progress text
  this.load.on('fileprogress', function (file) {
    assetText.setText('Loading asset: ' + file.key);
  });
 
  // remove progress bar when complete
  this.load.on('complete', function () {
    progressBar.destroy();
    progressBox.destroy();
    loadingText.destroy();
    percentText.destroy();
    assetText.destroy();

    this.ready();

  }.bind(this));
 
  this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
  // load assets needed in our game
  this.load.image('blueButton1', 'assets/ui/blue_button02.png');
  this.load.image('blueButton2', 'assets/ui/blue_button03.png');
  this.load.image('phaserLogo', 'assets/logo.png');

  this.load.image('skater-girl-roll-0', 'assets/skater_girl/roll_run/skater_girl_roll_B_00.png');
  this.load.image('skater-girl-roll-1', 'assets/skater_girl/roll_run/skater_girl_roll_B_01.png');
  this.load.image('skater-girl-roll-2', 'assets/skater_girl/roll_run/skater_girl_roll_B_02.png');
  this.load.image('skater-girl-roll-3', 'assets/skater_girl/roll_run/skater_girl_roll_B_03.png');
  this.load.image('skater-girl-roll-4', 'assets/skater_girl/roll_run/skater_girl_roll_B_04.png');
  this.load.image('skater-girl-roll-5', 'assets/skater_girl/roll_run/skater_girl_roll_B_05.png');
  this.load.image('skater-girl-roll-6', 'assets/skater_girl/roll_run/skater_girl_roll_B_06.png');
  this.load.image('skater-girl-roll-7', 'assets/skater_girl/roll_run/skater_girl_roll_B_07.png');
  this.load.image('skater-girl-roll-8', 'assets/skater_girl/roll_run/skater_girl_roll_B_08.png');
  this.load.image('skater-girl-roll-9', 'assets/skater_girl/roll_run/skater_girl_roll_B_09.png');
  this.load.image('skater-girl-roll-10', 'assets/skater_girl/roll_run/skater_girl_roll_B_10.png');
  this.load.image('skater-girl-roll-11', 'assets/skater_girl/roll_run/skater_girl_roll_B_11.png');
  this.load.image('skater-girl-roll-12', 'assets/skater_girl/roll_run/skater_girl_roll_B_12.png');
  this.load.image('skater-girl-roll-13', 'assets/skater_girl/roll_run/skater_girl_roll_B_13.png');
  this.load.image('skater-girl-roll-14', 'assets/skater_girl/roll_run/skater_girl_roll_B_14.png');
  this.load.image('skater-girl-roll-15', 'assets/skater_girl/roll_run/skater_girl_roll_B_15.png');
  this.load.image('skater-girl-roll-16', 'assets/skater_girl/roll_run/skater_girl_roll_B_16.png');
  this.load.image('skater-girl-roll-17', 'assets/skater_girl/roll_run/skater_girl_roll_B_17.png');
  this.load.image('skater-girl-roll-18', 'assets/skater_girl/roll_run/skater_girl_roll_B_18.png');


  }

  ready () {
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
  
  create() {

  }
}