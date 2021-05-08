window.onload = () => {
  const ctx = document.getElementById("canvas").getContext("2d");
  const intro = document.getElementById("game-intro");
  const game = new Game(ctx);

  document.addEventListener("keyup", (event) => {
    game.onKeyEvent(event);
  });

  document.addEventListener("keypress", (event) => {
    if (event.keyCode === UP && !game.isStarted) {
      intro.remove();
      game.start();
    }
  });
};
