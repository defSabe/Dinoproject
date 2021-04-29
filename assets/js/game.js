class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.tick = 0; //what is this?

    this.bg = new Background(ctx);
    // this.dino = new Dino(ctx);
    // this.obstacles = [new Obstacle(this.ctx)];

    // this.score = new Score(ctx);
  }

  start() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.move();
      this.draw();
      //   this.checkCollisions();
      //   this.clearObstacles();
      //   this.tick++
    }, 1000 / 60);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    this.bg.draw();
    this.dino.draw();
  }

  move() {
    this.bg.move();
    this.dino.move();
  }

  onKeyEvent(event) {
    this.dino.onKeyEvent(event);
  }
}
