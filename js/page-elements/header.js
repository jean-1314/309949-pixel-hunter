import {gameState} from '../data/state';

const headerBtnTemplate = `
  <header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>
`;

const emptyHeart = `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`;
const fullHeart = `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`;

export const header = (isGameScreen) => {
  let headerTemplate;
  if (isGameScreen) {
    headerTemplate = `
    <header class="header">
        ${headerBtnTemplate}
        <h1 class="game__timer">${gameState.time}</h1>
        <div class="game__lives">
            ${new Array(3 - gameState.lives).fill(emptyHeart).join(``)}
            ${new Array(gameState.lives < 0 ? 0 : gameState.lives).fill(fullHeart).join(``)}
        </div>
     </header>`;
  } else {
    headerTemplate = `
    <header class="header">
        ${headerBtnTemplate}
    </header>`;
  }
  return headerTemplate;
};
