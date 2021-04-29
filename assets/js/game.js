class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.drawCount = 0; //what is this?

    this.fl = new Floor(ctx);
    this.dino = new Dino(ctx);
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
      this.drawCount++;
    }, 1000 / 60);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    this.fl.draw();
    this.dino.draw();
  }

  move() {
    this.fl.move();
    this.dino.move();
  }

  onKeyEvent(event) {
    this.dino.onKeyEvent(event);
  }
}
