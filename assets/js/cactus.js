class Cactus {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./assets/img/cacti/cactus_small_1.png";
    this.x = x;
    // this.dist = 0
    this.y = y;
    this.w = 34;
    this.h = 70;
    this.vx = -3;
  }

  // getRandomImage() {
  //   const randomImage = new Array();

  //   randomImage[0] = "./assets/img/cactuses_big_1.png";
  //   randomImage[1] = "./assets/img/cactuses_big_2.png";
  //   randomImage[2] = "./assets/img/cactuses_big_3.png";
  //   randomImage[3] = "./assets/img/cactuses_small_1.png";
  //   randomImage[4] = "./assets/img/cactuses_small_2.png";
  //   randomImage[5] = "./assets/img/cactuses_small_3.png";

  //   const number = Math.floor(Math.random() * randomImage.length);

  //   return randomImage[number];
  // }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    this.x += this.vx;
  }
}
