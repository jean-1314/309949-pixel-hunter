import footer from '../page-elements/footer';
import AbstractView from './abstract-view';
import {returnBtnTemplate} from '../page-elements/return-button';
import {renderStats} from '../game-functions/render-stats';
import {GameConsts} from '../data/game-data';

export default class StatsView extends AbstractView {
  constructor(state, answers) {
    super();
    this.state = state;
    this.answers = answers;
  }
  get template() {
    return `
      <header class="header">
        ${returnBtnTemplate}
      </header>
    <div class="result">
      <h1>${this.state.victory ? `Победа!` : `Поражение!`}</h1>
      ${renderStats(this.state, this.answers, GameConsts.UNIT)}
    </div>
    ${footer}
  `;
  }

  bind() {
    const returnBtn = this.element.querySelector(`.back`);
    returnBtn.addEventListener(`click`, () => {
      this.onReturn();
    });
  }

  onReturn() {

  }
}
