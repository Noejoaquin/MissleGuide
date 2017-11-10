import Game from './game';



document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  let game = new Game(ctx, canvas);
  game.play();
})