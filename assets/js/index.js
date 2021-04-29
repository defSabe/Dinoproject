const ctx = document.getElementById("canvas").getContext("2d");

const game = new Game(ctx);

game.start();

document.addEventListener("keyup", (event) => {
  game.onKeyEvent(event);
});

// document.addEventListener('keypress', (event) => {
//     if (!game.intervalId) {
//         game.start();
//     }
// })
