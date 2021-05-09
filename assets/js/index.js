window.onload = () => {
  const ctx = document.getElementById("canvas").getContext("2d");
  const intro = document.getElementById("game-intro");
  const buttonRemove = document.getElementById("button-game-over");
  // aqui ocultaré el boton
  let game = new Game(ctx);

  document.addEventListener("keyup", (event) => {
    game.onKeyEvent(event);
  });

  document.addEventListener("keypress", (event) => {
    if (event.keyCode === UP && !game.isStarted && !game.mustReload) {
      intro.remove();
      game.start();
    } else if (event.keyCode === UP && game.mustReload) {
      console.log("entro");
      game.restart();
    }
  });
};
