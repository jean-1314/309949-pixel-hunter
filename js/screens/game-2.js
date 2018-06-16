import {createElement, showScreen, uncheckRadioBtn} from '../util';
import gameThreeElement from './game-3';
import greetingElement from './greeting';
import {header} from "../page-elements/header";
import footer from '../page-elements/footer';

const gameTwoTemplate = `
  <div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
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

const gameTwoElement = createElement(`
  ${header(true)}
  ${gameTwoTemplate}
  ${footer}
`);

const returnBtn = gameTwoElement.querySelector(`.back`);
const questionArray = [...gameTwoElement.querySelectorAll(`[name*='question']`)];

questionArray.forEach((element) => {
  element.addEventListener(`change`, () => {
    uncheckRadioBtn(questionArray);
    showScreen(gameThreeElement);
  });
});

returnBtn.addEventListener(`click`, () => showScreen(greetingElement));

export default gameTwoElement;
