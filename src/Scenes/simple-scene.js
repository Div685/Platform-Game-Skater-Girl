export class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('cokecan', 'assets/skater-girl1.png');
  }

  create() {
    this.add.text(100, 100, 'Hello Phaser!', { fill: '#fff' });
    const img = this.add.image(400, 10, 'cokecan');
    img.scale.setTo(0.5, 0.5);
  }
}