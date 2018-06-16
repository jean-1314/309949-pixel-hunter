import {createElement, showScreen} from '../util';
import gameOneElement from './game-1';
import greetingElement from './greeting';
import {header} from "../page-elements/header";
import footer from '../page-elements/footer';

const rulestemplate = `
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
`;

const rulesElement = createElement(`
  ${header(false)}
  ${rulestemplate}
  ${footer}
`);


const nextBtn = rulesElement.querySelector(`.continue`);
const form = rulesElement.querySelector(`.rules__form`);
const nameInput = rulesElement.querySelector(`.rules__input`);
const returnBtn = rulesElement.querySelector(`.back`);

const clearInput = () => {
  nameInput.value = ``;
  nextBtn.disabled = true;
};

nameInput.addEventListener(`input`, () => {
  nextBtn.disabled = nameInput.value !== `` ? false : true;
});

form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  showScreen(gameOneElement);
  clearInput();
});

returnBtn.addEventListener(`click`, () => showScreen(greetingElement));

export default rulesElement;
