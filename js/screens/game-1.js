import {createElement, showScreen, uncheckRadioBtn} from '../util';
import greetingElement from './greeting';
import {header} from "../page-elements/header";
import footer from '../page-elements/footer';
import {ingameStats} from './ingame-stats';
import {renderGame} from '../game-functions/game-render';
import {gameState} from '../data/state';

const gameOneTemplate = `
  <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
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
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
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
    ${ingameStats}
  </div>
`;

const gameOneElement = createElement(`
  ${header(true)}
  ${gameOneTemplate}
  ${footer}
`);

const returnBtn = gameOneElement.querySelector(`.back`);
const questionArray = [...gameOneElement.querySelectorAll(`[name*='question']`)];
const questionOneArray = [...gameOneElement.querySelectorAll(`[name='question1']`)];
const questionTwoArray = [...gameOneElement.querySelectorAll(`[name='question2']`)];

const checked = (elem) => {
  return elem.checked;
};

questionArray.forEach((element) => {
  element.addEventListener(`change`, () => {
    if (questionOneArray.some(checked) && questionTwoArray.some(checked)) {
      uncheckRadioBtn(questionArray);
      --gameState.answersRemaining;
      showScreen(renderGame());
    }
  });
});

returnBtn.addEventListener(`click`, () => showScreen(greetingElement));

export default gameOneElement;
