/* global Phaser */
/* eslint radix: 0 */

import 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }


  preload() {
    // add logo image
    this.add.image(400, 200, 'logo').setScale(0.5);

    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    // remove progress bar when complete
    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();

      this.ready();
    });

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
    this.load.image('skater-girl-roll-sprite', 'assets/skater_girl/roll_run/roll_spritesheet.png');
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

    // Roll Run A
    this.load.image('skater-girl-rollA-0', 'assets/skater_girl/roll_A/skater girl-roll B_00.png');
    this.load.image('skater-girl-rollA-1', 'assets/skater_girl/roll_A/skater girl-roll B_01.png');
    this.load.image('skater-girl-rollA-2', 'assets/skater_girl/roll_A/skater girl-roll B_02.png');
    this.load.image('skater-girl-rollA-3', 'assets/skater_girl/roll_A/skater girl-roll B_03.png');
    this.load.image('skater-girl-rollA-4', 'assets/skater_girl/roll_A/skater girl-roll B_04.png');
    this.load.image('skater-girl-rollA-5', 'assets/skater_girl/roll_A/skater girl-roll B_05.png');
    this.load.image('skater-girl-rollA-6', 'assets/skater_girl/roll_A/skater girl-roll B_06.png');
    this.load.image('skater-girl-rollA-7', 'assets/skater_girl/roll_A/skater girl-roll B_07.png');
    this.load.image('skater-girl-rollA-8', 'assets/skater_girl/roll_A/skater girl-roll B_08.png');
    this.load.image('skater-girl-rollA-9', 'assets/skater_girl/roll_A/skater girl-roll B_09.png');

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

    // flip jump Images
    this.load.image('skater-girl-jumpA-0', 'assets/skater_girl/jump_flip/skater girl-heel flip_00.png');
    this.load.image('skater-girl-jumpA-1', 'assets/skater_girl/jump_flip/skater girl-heel flip_01.png');
    this.load.image('skater-girl-jumpA-2', 'assets/skater_girl/jump_flip/skater girl-heel flip_02.png');
    this.load.image('skater-girl-jumpA-3', 'assets/skater_girl/jump_flip/skater girl-heel flip_03.png');
    this.load.image('skater-girl-jumpA-4', 'assets/skater_girl/jump_flip/skater girl-heel flip_04.png');
    this.load.image('skater-girl-jumpA-5', 'assets/skater_girl/jump_flip/skater girl-heel flip_05.png');
    this.load.image('skater-girl-jumpA-6', 'assets/skater_girl/jump_flip/skater girl-heel flip_06.png');
    this.load.image('skater-girl-jumpA-7', 'assets/skater_girl/jump_flip/skater girl-heel flip_07.png');
    this.load.image('skater-girl-jumpA-8', 'assets/skater_girl/jump_flip/skater girl-heel flip_08.png');
    this.load.image('skater-girl-jumpA-9', 'assets/skater_girl/jump_flip/skater girl-heel flip_09.png');
    this.load.image('skater-girl-jumpA-10', 'assets/skater_girl/jump_flip/skater girl-heel flip_10.png');
    this.load.image('skater-girl-jumpA-11', 'assets/skater_girl/jump_flip/skater girl-heel flip_11.png');

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
    this.load.image('ob-b11', 'assets/box_obstacle1.png');
    this.load.image('ob-b12', 'assets/box_obstacle2.png');
    // this.load.image('ob-5', 'assets/sign_obstacle.png');
    this.load.image('ob-1', 'assets/spike A.png');
    this.load.image('ob-2', 'assets/spike B.png');
    this.load.image('ob-3', 'assets/spike C.png');
    this.load.image('ob-4', 'assets/spike D.png');
    this.load.spritesheet('enemy-bird', 'assets/enemy-bird.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    // Background and clouds
    this.load.image('bg-sky', 'assets/bg_sky.png');
    this.load.image('bg-cloud', 'assets/cloud.png');
    this.load.image('ground-road', 'assets/ground_road.png');
    this.load.image('ideal', 'assets/ideal_skater_girl.png');

    // Music file
    this.load.audio('bgMusic', 'assets/musics/theme_music.wav');
    this.load.audio('jumpMusic', 'assets/musics/jump.wav');
    this.load.audio('retroMusic', 'assets/musics/Retro-MusicNormal-02.wav');
    this.load.audio('hit', './assets/hit.m4a');
    this.load.audio('reach', './assets/reach.m4a');

    // GameOver and Restart
    this.load.image('game-over', 'assets/game-over.png');
    this.load.image('restart', 'assets/restart.png');
  }


  ready() {
    this.scene.start('Title');
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}