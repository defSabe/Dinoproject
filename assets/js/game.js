class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.drawCount = 0; //what is this?
    this.buttonGO = document.getElementById("button-game-over");
    this.fl = new Floor(ctx);
    this.dino = new Dino(ctx);
    this.obstacles = [];
    this.birds = [];
    this.stars = [];
    this.sound = new Audio("./assets/sounds/Scream.mp3");
    this.isStarted = false;
    this.score = new Score(ctx);
    this.mustReload = false;
  }

  start() {
    this.isStarted = true;
    this.intervalId = setInterval(() => {
      this.clear();
      this.move();
      this.draw();
      this.checkCollisions();
      this.clearObstacles();
      this.clearStars();
      this.clearBirds();
      this.drawCount++;
      if (this.drawCount >= 100) {
        this.addObstacle();
        this.addStar();
        this.addBird();
        this.drawCount = 0;
      }
      if (this.drawCount % 10 === 0) {
        this.score.value++;
      }
    }, 1000 / 60);
  }

  clearObstacles() {
    this.obstacles = this.obstacles.filter((o) => {
      return o.x + o.w > 0;
    });
  }

  clearBirds() {
    this.birds = this.birds.filter((b) => {
      return b.x + b.w > 0;
    });
  }

  addObstacle() {
    const cactus = new Cactus(this.ctx, this.ctx.canvas.width, 290);
    this.obstacles.push(cactus);
  }

  addBird() {
    const bird = new Bird(this.ctx, this.ctx.canvas.width, 290);
    this.birds.push(bird);
  }

  clearStars() {
    this.stars = this.stars.filter((s) => {
      return s.x + s.w > 0;
    });
  }

  addStar() {
    const star = new Star(this.ctx, this.ctx.canvas.width, 290);
    this.stars.push(star);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    this.fl.draw();
    this.dino.draw();
    this.obstacles.forEach((o) => {
      o.draw();
    });
    this.stars.forEach((s) => {
      s.draw();
    });
    this.birds.forEach((b) => {
      b.draw();
    });
    this.score.draw();
  }

  move() {
    this.fl.move();
    this.dino.move();
    this.obstacles.forEach((o) => {
      o.move();
    });
    this.stars.forEach((s) => {
      s.move();
    });
    this.birds.forEach((b) => {
      b.move();
    });
  }

  onKeyEvent(event) {
    this.dino.onKeyEvent(event);
  }

  checkCollisions(obstacle) {
    const collision = this.obstacles.find((cactus) => {
      const colX =
        this.dino.x + this.dino.w >= cactus.x * 1.05 &&
        this.dino.x <= cactus.x + cactus.w * 1.05;

      const colY = this.dino.y + this.dino.h >= cactus.y;

      return colX && colY;
    });

    if (collision) {
      this.gameOver();
      this.sound.play();
    }
  }

  restart() {
    this.intervalId = null;
    this.drawCount = 0;
    this.obstacles = [];
    this.stars = [];
    this.birds = [];
    this.isStarted = true;
    this.score = new Score(this.ctx);
    this.mustReload = false;
    this.clear();
    this.start();
  }

  gameOver() {
    // aqui pintare el botton
    clearInterval(this.intervalId);
    this.mustReload = true;
    this.buttonGO.style.display = "block";
    this.ctx.img = "./assets/img/game-over.png";
    // this.ctx.font = "40px consolas";
    // this.ctx.textAlign = "center";
    // this.ctx.fillText(
    //   "GAME OVER",
    this.ctx.canvas.width / 2, this.ctx.canvas.height / 2;
    // );
  }
}
