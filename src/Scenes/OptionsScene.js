/* global Phaser */

import 'phaser';
import Button from '../Objects/Button';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }


  create() {
    this.model = this.sys.game.globals.model;

    this.text = this.add.text(300, 100, 'Options', { fontSize: 40 });
    this.musicButton = this.add.image(300, 200, 'playButton');
    this.musicText = this.add.text(350, 190, 'Music Enabled', { fontSize: 24 });

    this.soundButton = this.add.image(300, 300, 'unmuteButton');
    this.soundText = this.add.text(350, 290, 'Sound Enabled', { fontSize: 24 });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on('pointerdown', () => {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    });

    this.soundButton.on('pointerdown', () => {
      this.model.soundOn = !this.model.soundOn;
      this.updateAudio();
    });

    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');


    this.updateAudio();
  }

  updateAudio() {
    if (this.model.musicOn === false) {
      this.musicButton.setTexture('stopButton');
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('playButton');
      this.sys.game.globals.bgMusic.play();
      this.model.bgMusicPlaying = true;
    }

    if (this.model.soundOn === false) {
      this.soundButton.setTexture('muteButton');
    } else {
      this.soundButton.setTexture('unmuteButton');
    }
  }
}