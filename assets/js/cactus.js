const cactusImages = [
  "./assets/img/cacti/cactus_big_1.png",
  "./assets/img/cacti/cactus_big_2.png",
  "./assets/img/cacti/cactus_big_3.png",
  "./assets/img/cacti/cactus_small_1.png",
  "./assets/img/cacti/cactus_small_2.png",
  "./assets/img/cacti/cactus_small_3.png",
];

const cactusWidth = [34, 60, 75, 20, 50, 50];

class Cactus {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.img = new Image();
    const randomIndex = Math.floor(Math.random() * cactusImages.length);
    this.img.src = cactusImages[randomIndex];
    this.x = x;
    // this.dist = 0
    this.y = y;
    this.w = cactusWidth[randomIndex];
    this.h = 70;
    this.vx = -3;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    this.x += this.vx;
  }
}
