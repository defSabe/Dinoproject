class Dino {
  constructor(ctx) {
    this.ctx = ctx;
    this.drawCount = 0;

    this.x = 50;
    this.y = 290;
    this.y0 = this.y;

    this.w = 50;
    this.h = 75;
    this.h0 = this.h;

    this.vx = 0;
    this.vy = 0;

    this.ay = 0;
    this.ax = 0;
    this.g = 0.4;

    this.jumping = false;

    this.img = new Image();
    this.img.src = "./assets/img/dino-run.png";
    this.img.frames = 4;
    this.img.frameIndex = 0;
    this.checkCanvas();
  }

  checkCanvas() {
    console.log(
      this.img,
      (this.img.frameIndex * this.img.width) / this.img.frames,
      0,
      this.img.width / 4,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  onKeyEvent(event) {
    switch (event.keyCode) {
      case UP:
        if (!this.isJumping()) {
          this.vy = -10;
        }
        break;
    }
  }

  draw() {
    this.drawCount++;

    if (this.drawCount >= 4) {
      this.drawCount = 0;
      this.animate();
    }

    this.ctx.drawImage(
      this.img,
      (this.img.frameIndex * this.img.width) / this.img.frames,
      0,
      this.img.width / 4,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  isJumping() {
    return this.y < this.y0;
  }

  move() {
    if (this.isJumping()) {
      this.vy += this.g;
    }

    this.x += this.vx;
    this.y += this.vy;

    if (!this.isJumping()) {
      this.vy = 0;
      this.y = this.y0;
    }
  }

  animate() {
    this.img.frameIndex++;

    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0;
    }
  }
}
