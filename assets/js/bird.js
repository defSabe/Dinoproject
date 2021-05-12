class Bird {
  constructor(ctx) {
    this.ctx = ctx;
    this.drawCount = 0;

    this.x = this.ctx.canvas.width;
    this.y = Math.random() * 250;

    this.w = 50;
    this.h = 40;

    this.vx = 0;
    this.vy = 0;
    this.ay = 0;
    this.ax = 0;
    this.g = 0.1;

    this.img = new Image();
    this.img.src = "./assets/img/enemy-bird.png";
    this.img.frames = 2;
    this.img.frameIndex = 0;
    this.checkCanvas();
  }

  checkCanvas() {
    console.log(
      this.img,
      (this.img.frameIndex * this.img.height) / this.img.frames,
      0,
      this.img.width / 2,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  draw() {
    this.drawCount++;

    if (this.drawCount >= 12) {
      this.drawCount = 0;
      this.animate();
    }

    this.ctx.drawImage(
      this.img,
      (this.img.frameIndex * this.img.width) / this.img.frames,
      0,
      this.img.width / 2,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  isFloor() {
    return this.y + this.h >= this.ctx.canvas.height;
  }

  move() {
    this.vy += this.g;
    // this.vy += this.ay;
    // this.vx += this.ax;
    // this.x += this.ax;
    // this.y += this.vx;
  }

  animate() {
    this.img.frameIndex++;

    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0;
    }
  }
}
