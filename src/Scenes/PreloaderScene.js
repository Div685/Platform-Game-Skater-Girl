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
  this.add.image(400, 200, 'logo').setScale(0.5);
 
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
  // this.load.image('phaserLogo', 'assets/logo.png');
  this.load.image('muteButton', 'assets/ui/mute.png');
  this.load.image('unmuteButton', 'assets/ui/unmute.png');
  this.load.image('playButton', 'assets/ui/play.png');
  this.load.image('stopButton', 'assets/ui/stop_blue.png');

  this.load.image('logo', 'assets/skater-girl1.png');


  // Roll Run Images
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

  // flip jump Images
  this.load.image('skater-girl-jump-0', 'assets/skater_girl/heel_flip_jump/skater girl-heel flip_00.png');
  this.load.image('skater-girl-jump-1', 'assets/skater_girl/heel_flip_jump/skater girl-heel flip_01.png');
  this.load.image('skater-girl-jump-2', 'assets/skater_girl/heel_flip_jump/skater girl-heel flip_02.png');
  this.load.image('skater-girl-jump-3', 'assets/skater_girl/heel_flip_jump/skater girl-heel flip_03.png');
  this.load.image('skater-girl-jump-4', 'assets/skater_girl/heel_flip_jump/skater girl-heel flip_04.png');
  this.load.image('skater-girl-jump-5', 'assets/skater_girl/heel_flip_jump/skater girl-heel flip_05.png');
  this.load.image('skater-girl-jump-6', 'assets/skater_girl/heel_flip_jump/skater girl-heel flip_06.png');
  this.load.image('skater-girl-jump-7', 'assets/skater_girl/heel_flip_jump/skater girl-heel flip_07.png');
  this.load.image('skater-girl-jump-8', 'assets/skater_girl/heel_flip_jump/skater girl-heel flip_08.png');
  this.load.image('skater-girl-jump-9', 'assets/skater_girl/heel_flip_jump/skater girl-heel flip_09.png');
  this.load.image('skater-girl-jump-10', 'assets/skater_girl/heel_flip_jump/skater girl-heel flip_10.png');
  this.load.image('skater-girl-jump-11', 'assets/skater_girl/heel_flip_jump/skater girl-heel flip_11.png');

  // Single push start images
  this.load.image('skater-girl-start-0', 'assets/skater_girl/push_single_start/skater girl-push single_00.png');
  this.load.image('skater-girl-start-1', 'assets/skater_girl/push_single_start/skater girl-push single_01.png');
  this.load.image('skater-girl-start-2', 'assets/skater_girl/push_single_start/skater girl-push single_02.png');
  this.load.image('skater-girl-start-3', 'assets/skater_girl/push_single_start/skater girl-push single_03.png');
  this.load.image('skater-girl-start-4', 'assets/skater_girl/push_single_start/skater girl-push single_04.png');
  this.load.image('skater-girl-start-5', 'assets/skater_girl/push_single_start/skater girl-push single_05.png');
  this.load.image('skater-girl-start-6', 'assets/skater_girl/push_single_start/skater girl-push single_06.png');
  this.load.image('skater-girl-start-7', 'assets/skater_girl/push_single_start/skater girl-push single_07.png');
  this.load.image('skater-girl-start-8', 'assets/skater_girl/push_single_start/skater girl-push single_08.png');
  this.load.image('skater-girl-start-9', 'assets/skater_girl/push_single_start/skater girl-push single_09.png');
  this.load.image('skater-girl-start-10', 'assets/skater_girl/push_single_start/skater girl-push single_10.png');
  this.load.image('skater-girl-start-11', 'assets/skater_girl/push_single_start/skater girl-push single_11.png');
  this.load.image('skater-girl-start-12', 'assets/skater_girl/push_single_start/skater girl-push single_12.png');
  this.load.image('skater-girl-start-13', 'assets/skater_girl/push_single_start/skater girl-push single_13.png');
  this.load.image('skater-girl-start-14', 'assets/skater_girl/push_single_start/skater girl-push single_14.png');
  this.load.image('skater-girl-start-15', 'assets/skater_girl/push_single_start/skater girl-push single_15.png');
  this.load.image('skater-girl-start-16', 'assets/skater_girl/push_single_start/skater girl-push single_16.png');
  this.load.image('skater-girl-start-17', 'assets/skater_girl/push_single_start/skater girl-push single_17.png');
  this.load.image('skater-girl-start-18', 'assets/skater_girl/push_single_start/skater girl-push single_18.png');
  
  // Obstacles
  this.load.image('ob-box1', 'assets/box_obstacle1.png');
  this.load.image('ob-box2', 'assets/box_obstacle2.png');
  this.load.image('ob-sign', 'assets/sign_obstacle.png');
  this.load.image('ob-spike-A', 'assets/spike A.png');
  this.load.image('ob-spike-B', 'assets/spike B.png');
  this.load.image('ob-spike-C', 'assets/spike C.png');
  this.load.image('ob-spike-D', 'assets/spike D.png');

  // Background and clouds
  this.load.image('bg-sky', 'assets/bg_sky.png');
  this.load.image('bg-cloud', 'assets/cloud.png');

  // Music file
  this.load.audio('bgMusic', 'assets/musics/theme_music.wav');
  this.load.audio('jumpMusic', 'assets/musics/jump.wav');
  this.load.audio('menuMusic', 'assets/musics/menu_music.wav');
  this.load.audio('retroMusic', 'assets/musics/Retro-MusicNormal-02.wav');


  }


  ready () {
    this.scene.start('Title');
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
  
  create() {

  }
}