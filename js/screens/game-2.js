import {createElement, showScreen, uncheckRadioBtn} from '../util';
import greetingElement from './greeting';
import {header} from "../page-elements/header";
import footer from '../page-elements/footer';
import {renderGame} from '../game-functions/game-render';
import {gameState} from '../data/state';
import {ingameStats} from './ingame-stats';

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
    ${ingameStats}
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
    --gameState.answersRemaining;
    showScreen(renderGame());
  });
});

returnBtn.addEventListener(`click`, () => showScreen(greetingElement));

export default gameTwoElement;
