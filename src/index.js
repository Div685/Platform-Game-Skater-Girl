import 'phaser';

import config from './Config/config';
import GameScene from './Scenes/GameScene';
// import { SimpleScene } from './Scenes/simple-scene';

class Game extends Phaser.Game {
  constructor(){
    super(config);
    this.scene.add('Game', GameScene);
    this.scene.start('Game');
  }
}

window.game = new Game();