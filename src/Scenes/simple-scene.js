export class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('cokecan', 'assets/skater-girl1.png');
  }

  create() {
    this.add.text(100, 100, 'Hello Phaser!', { fill: '#fff' });
    const img = this.add.image(100, 100, 'cokecan');
    img.setScale(0.2);
  }
}