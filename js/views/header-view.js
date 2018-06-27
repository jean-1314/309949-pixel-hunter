import AbstractView from './abstract-view';
import {returnBtnTemplate} from '../page-elements/return-button';

const emptyHeart = `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`;
const fullHeart = `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`;

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.init();
  }
  get template() {
    return `
    <header class="header">
      ${returnBtnTemplate}
      <h1 class="game__timer">${this.state.time}</h1>
      <div class="game__lives">
        ${new Array(3 - this.state.lives).fill(emptyHeart).join(``)}
        ${new Array(this.state.lives < 0 ? 0 : this.state.lives).fill(fullHeart).join(``)}
      </div>
     </header>`;
  }

  init() {
    if (this.state.time < 6) {
      this.element.querySelector(`.game__timer`).classList.add(`game__timer--warning`);
    }
  }

  bind() {
    this.element.querySelector(`.back`).addEventListener(`click`, () => {
      this.onReturn();
    });
  }
  onReturn() {

  }
}

