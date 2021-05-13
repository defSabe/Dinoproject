class Star {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.drawCount = 0;

    this.x = x; //valor de prueba
    this.y = y; //Math.random() * 250;

    this.w = 15;
    this.h = 15;

    this.vx = -0.5;

    this.img = new Image();
    this.img.src = "./assets/img/stars.png";
    this.img.frames = 3;
    this.img.frameIndex = 0;
    this.checkCanvas();
  }

  checkCanvas() {
    console.log(
      this.img,
      (this.img.frameIndex * this.img.height) / this.img.frames,
      0,
      this.img.height / 3,
      this.img.width,
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
      (this.img.frameIndex * this.img.height) / this.img.frames,
      0,
      this.img.height / 3,
      this.img.width,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  move() {
    this.x += this.vx;
  }

  animate() {
    this.img.frameIndex++;

    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0;
    }
  }
}
