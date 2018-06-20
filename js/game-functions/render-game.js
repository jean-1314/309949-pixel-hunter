import {inGameStats} from '../page-elements/ingame-stats';
import {header} from '../page-elements/header';
import footer from '../page-elements/footer';
import {gameConsts} from '../data/game-data';

export const renderGame = (level) => {
  let gameContent = ``;
  switch (level.type) {
    case `tinder-like`:
      gameContent = `
        <p class="game__task">${level.text}</p>
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src="${level.options[0].img}" alt="Option 1" width="705" height="455">
            <label class="game__answer  game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--wide  game__answer--paint">
              <input name="question1" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
        </form>
      `;
      break;
    case `two-of-two`:
      gameContent = `
        <p class="game__task">${level.text}</p>
        <form class="game__content">
          <div class="game__option">
            <img src="${level.options[0].img}" alt="Option 1" width="468" height="458">
            <label class="game__answer game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer game__answer--paint">
              <input name="question1" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
          <div class="game__option">
            <img src="${level.options[1].img}" alt="Option 2" width="468" height="458">
            <label class="game__answer  game__answer--photo">
              <input name="question2" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--paint">
              <input name="question2" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
        </form>
      `;
      break;
    case `one-of-three`:
      gameContent = `
        <p class="game__task">${level.text}</p>
        <form class="game__content  game__content--triple">
          <div class="game__option">
            <img src="${level.options[0].img}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option  game__option--selected">
            <img src="${level.options[1].img}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option">
            <img src="${level.options[2].img}" alt="Option 1" width="304" height="455">
          </div>
        </form>
      `;
      break;
    default: throw new Error(`Unknown game type`);
  }
  return gameContent;
};

export const renderCurrentGame = (level) => {
  const gameElement = `
      ${header(gameConsts.IS_GAME_SCREEN)}
      <div class="game">
        ${renderGame(level)}
        ${inGameStats()}
      </div>
      ${footer}
    `;
  return gameElement;
};
