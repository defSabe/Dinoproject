class Score {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 450;
    this.y = 100;
    this.value = 0;
  }

  draw() {
    this.ctx.font = "50px serif";
    this.ctx.fillText(this.value, this.x, this.y);
  }
}
