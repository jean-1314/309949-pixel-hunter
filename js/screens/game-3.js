import {createElement, showScreen} from '../util';
import greetingElement from './greeting';
import {header} from "../page-elements/header";
import footer from '../page-elements/footer';
import {renderGame} from '../game-functions/game-render';
import {gameState} from '../data/state';
import {ingameStats} from './ingame-stats';

const gameThreeTemplate = `
  <div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
    </form>
    ${ingameStats}
  </div>
`;

const gameThreeElement = createElement(`
  ${header(true)}
  ${gameThreeTemplate}
  ${footer}
`);

const returnBtn = gameThreeElement.querySelector(`.back`);
const questionArray = [...gameThreeElement.querySelectorAll(`.game__option`)];

questionArray.forEach((element) => {
  element.addEventListener(`click`, () => {
    --gameState.answersRemaining;
    showScreen(renderGame());
  });
});

returnBtn.addEventListener(`click`, () => showScreen(greetingElement));

export default gameThreeElement;
