import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor(){
    super('Game');
  }


  create(){
    // ground speed
    this.gameSpeed = 10;

    // Create a Ground
    const {height, width } = this.game.config;

    this.isGameRunning = false;
    this.respawnTime = 0;
    this.score = 0;
    this.id = '2hSGx2YyT4LhAoeEUhVi';

    // Sounds
    this.jumpSound = this.sound.add('jumpMusic', { volume: 0.2 });
    this.hitSound = this.sound.add('hit', { volume: 0.2 });
    this.reachSound = this.sound.add('reach', { volume: 0.2 });

    // trigger for starting game
    this.startTrigger = this.physics.add.sprite(30, 200).setOrigin(0, 1).setImmovable();

    // Background
    this.sky = this.add.tileSprite(0,height, width, 0, 'bg-sky').setOrigin(0,1);
    
    this.ground = this.add.tileSprite(0, height, width, 120, 'ground-road').setOrigin(0,1);
    this.skater_girl = this.physics.add.sprite(-105, height, 'skater-girl-roll-0');
    this.skater_girl
    .setOrigin(0,1)
    .setCollideWorldBounds(true)
    .setScale(0.2)
    .setBodySize(300, 1050)
    .setDepth(1)
    .setGravityY(2000);

    this.gameOverScreen = this.add.container(width / 2, height / 2 - 50).setAlpha(0)
    this.gameOverText = this.add.image(0, 0, 'game-over');
    this.restart = this.add.image(0, 80, 'restart').setInteractive();
    this.gameOverScreen.add([
      this.gameOverText,  this.restart
    ])


    this.environment = this.add.group();
    this.environment.addMultiple([
      this.add.image(width / 2, 300, 'bg-cloud'),
      this.add.image(width - 80, 350, 'bg-cloud'),
      this.add.image((width / 1.3), 400, 'bg-cloud'),
    ]);

    this.environment.setAlpha(0);

     // Score
     this.scoreText = this.add
     .text(width, 0, '00000', { fill: '#535353', font: '900 20px Courier', resolution: 5 })
     .setOrigin(1, 0)
     .setAlpha(0);

    this.highScoreText = this.add
     .text(0, 0, '00000', { fill: '#535353', font: '900 20px Courier', resolution: 5 })
     .setOrigin(1, 0)
     .setAlpha(0);

    this.obsticles = this.physics.add.group();

    this.initAnims();
    this.initStartTrigger();
    this.initColliders();
    this.handleInput();
    this.handleScore();
  }

  initStartTrigger() {
    const { width, height } = this.game.config;

    this.physics.add.overlap(this.startTrigger, this.skater_girl, () => {
      if(this.startTrigger.y === 200) {
        this.startTrigger.body.reset(30, height);
        return;
      }

      this.startTrigger.disableBody(true, true);
      
      const startEvent = this.time.addEvent({
        delay: 1000 / 60,
        loop: true,
        callbackScope: this,
        callback: () => {
          this.skater_girl.setVelocityX(80);
          this.skater_girl.play('girl-run', true);

          if (this.ground.width < width) {
            this.ground.width += 17 * 2;
          }

          if (this.ground.width >= width) {
            this.ground.width = width;
            this.isGameRunning = true;
            this.skater_girl.setVelocityX(0);
            
            this.scoreText.setAlpha(1);
            this.environment.setAlpha(1);
            startEvent.remove();
          }
        }
      });
    },null, this);
  }

  initAnims() {
    this.anims.create({
      key: 'girl-run',
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
      repeat: -1,
      height: 0,
    });

    // Jump
    this.anims.create({
      key: 'girl-jump',
      frames: [
        {key: 'skater-girl-jump-0'},
        {key: 'skater-girl-jump-1'},
        {key: 'skater-girl-jump-2'},
        {key: 'skater-girl-jump-3'},
        {key: 'skater-girl-jump-4'},
        {key: 'skater-girl-jump-5'},
        {key: 'skater-girl-jump-6'},
        {key: 'skater-girl-jump-7'},
        {key: 'skater-girl-jump-8'},
        {key: 'skater-girl-jump-9'},
        {key: 'skater-girl-jump-10'},
        {key: 'skater-girl-jump-11'},
      ],
      frameRate: 25,
      repeat: -1
    });

    // push start
    this.anims.create({
      key: 'girl-push-start',
      frames: [
        {key: 'skater-girl-start-0'},
        {key: 'skater-girl-start-1'},
        {key: 'skater-girl-start-2'},
        {key: 'skater-girl-start-3'},
        {key: 'skater-girl-start-4'},
        {key: 'skater-girl-start-5'},
        {key: 'skater-girl-start-6'},
        {key: 'skater-girl-start-7'},
        {key: 'skater-girl-start-8'},
        {key: 'skater-girl-start-9'},
        {key: 'skater-girl-start-10'},
        {key: 'skater-girl-start-11'},
        {key: 'skater-girl-start-12'},
        {key: 'skater-girl-start-13'},
        {key: 'skater-girl-start-14'},
        {key: 'skater-girl-start-15'},
        {key: 'skater-girl-start-16'},
        {key: 'skater-girl-start-17'},
        {key: 'skater-girl-start-18'},
      ],
      frameRate: 40,
      repeat: -1
    });

    this.anims.create({
      key: 'enemy-flyball',
      frames: this.anims.generateFrameNumbers('enemy-bird', {start: 0, end: 1}),
      frameRate: 6,
      repeat: -1
    })

  }

  // Score
  handleScore() {
    this.time.addEvent({
      delay: 1000 / 10,
      loop: true,
      callbackScope: this,
      callback: () => {
        if (!this.isGameRunning) { return; }

        this.score++;
        this.gameSpeed += 0.01;

        if (this.score % 100 === 0) {
          this.reachSound.play();

          // animation of the score text when hitting multiple of 100
          this.tweens.add({
            targets: this.scoreText,
            duration: 100,
            repeat: 3,
            alpha: 0,
            yoyo: true,
          });
        }

        const score = Array.from(String(this.score), Number);
        for (let i = 0; i < 5 - String(this.score).length; i++) {
          score.unshift(0);
        }

        this.scoreText.setText(score.join(''));
      },
    });
  }

  addScore(name, score, id) {
    // this.dom.gameButtons.classList.add('d-none');
    // this.dom.loading.classList.remove('d-none');
    const content = {
      user: name,
      score,
    };
    form.reset();
    fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
      })
      .then((response) => response.json())
      .then((response) => {
        this.dom.loading.classList.add('d-none');
        // this.dom.result.classList.remove('d-none');
        // this.dom.result.innerHTML = response.result;

        setTimeout(() => {
          // this.dom.result.classList.add('d-none');
          // this.dom.gameButtons.classList.remove('d-none');
          this.gameOverScreen.add(this.restart);
        }, 2000);
      })
      .catch(e => {
        console.log(e);
      });
  }

  placeObsticle() {
    const obsticleNum = Math.floor(Math.random() * 7) + 1;
    const distance = Phaser.Math.Between(400, 900);

    let obsticle;
    if (obsticleNum > 4) {
      const enemyHeight = [250, 400];
      obsticle = this.obsticles.create(this.game.config.width + distance, this.game.config.height - enemyHeight[Math.floor(Math.random() * 2)], 'enemy-bird')
        .setOrigin(0, 1);
      obsticle.play('enemy-flyball', 1);
      obsticle.body.height = obsticle.body.height / 1.5;
    } else {
      obsticle = this.obsticles.create(this.game.config.width + distance, this.game.config.height - 25, `ob-${obsticleNum}`)
        .setOrigin(0, 1.5);
        obsticle.setScale(0.3);
      obsticle.body.offset.y = +10;
    }

    obsticle.setImmovable();
  }

  handleInput() {
    this.restart.on('pointerdown', () => {
      this.skater_girl.setVelocityY(0);
      this.skater_girl.body.height = 244;
      this.skater_girl.body.offset.y = 380;
      this.physics.resume();
      this.obsticles.clear(true, true);
      this.isGameRunning = true;
      this.gameOverScreen.setAlpha(0);
      this.gameSpeed = 10;
      this.environment.setAlpha(1);
      this.anims.resumeAll();
    });

    this.input.keyboard.on('keydown-SPACE', () => {
      if (!this.skater_girl.body.onFloor() || this.skater_girl.body.velocity.x > 0){
        return;
      }

      this.jumpSound.play();
      this.skater_girl.body.height = 154;
      this.skater_girl.body.offset.y = 380;

      this.skater_girl.setVelocityY(-1800);
      this.skater_girl.setTexture('skater-girl-roll-0', 0);
    })
  }

  initColliders() {
    this.physics.add.collider(this.skater_girl, this.obsticles, () => {
      this.highScoreText.x = this.scoreText.x - this.scoreText.width - 20;

      const highScore = this.highScoreText.text.substr(this.highScoreText.text.length - 5);
      const newScore = Number(this.scoreText.text) > Number(highScore) ? this.scoreText.text : highScore;

      this.highScoreText.setText(`HIGH: ${newScore}`);
      this.highScoreText.setAlpha(1);

      this.physics.pause();
      this.isGameRunning = false;
      this.anims.pauseAll();
      this.skater_girl.setTexture('skater-girl-roll-0');
      this.respawnTime = 0;
      this.environment.setAlpha(0);
      this.gameSpeed = 0;
      this.gameOverScreen.setAlpha(1);
      
      // send score to leaderboard
      this.addScore(
        localStorage.getItem('current_player'),
        this.score,
        this.id,
      );
      this.score = 0;
      this.hitSound.play();
    }, null, this);
  }

  // 60 fps
  update(time, delta) {
    if(!this.isGameRunning){ return; }

    this.ground.tilePositionX += this.gameSpeed;

    Phaser.Actions.IncX(this.obsticles.getChildren(), -this.gameSpeed);
    Phaser.Actions.IncX(this.environment.getChildren(), -0.5);

    this.respawnTime += delta * this.gameSpeed * 0.08;

    if (this.respawnTime >= 2500) {
      this.placeObsticle();
      this.respawnTime = 0;
    }

    this.obsticles.getChildren().forEach(obsticle => {
      if (obsticle.getBounds().right < 0) {
        obsticle.destroy();
      }
    });

    this.environment.getChildren().forEach(env => {
      if (env.getBounds().right < 0) {
        env.x = this.game.config.width + 30;
      }
    });

    if(this.skater_girl.body.deltaAbsY() > 0) {
      this.skater_girl.setOrigin(0, 1.5).play('girl-jump', true);
    } else {
      this.skater_girl.setOrigin(0, 1.5).play('girl-run', true);
        // this.skater_girl.play('girl-run', true);
    }
  }
};