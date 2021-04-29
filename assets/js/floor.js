class Floor {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = this.ctx.canvas.width;
    this.h = 10;
    this.x = 0;
    this.y = 350;

    this.vx = -2;

    this.img = new Image();
    this.img.src = "./assets/img/ground.png";
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

    this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h);
  }
  move() {
    this.x += this.vx;
    if (this.x <= -this.w) {
      this.x = 0;
    }
  }
}
