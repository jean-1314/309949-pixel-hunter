import {createElement, showScreen} from '../util';
import statsElement from './stats';
import greetingElement from './greeting';
import {header} from "../page-elements/header";
import footer from '../page-elements/footer';

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
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
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
    showScreen(statsElement);
  });
});

returnBtn.addEventListener(`click`, () => showScreen(greetingElement));

export default gameThreeElement;
