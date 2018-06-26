import footer from '../page-elements/footer';
import {countStats} from '../game-functions/count-stats';
import {countScore} from '../game-functions/count-score';
import {GameConsts} from '../data/game-data';
import AbstractView from './abstract-view';
import {returnBtnTemplate} from '../page-elements/return-button';
import {inGameStats} from '../page-elements/ingame-stats';

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
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            <ul class="stats">
              ${inGameStats(this.answers)}
            </ul>
          </td>
          <td class="result__points">
          ${this.state.victory ? `×&nbsp;${GameConsts.CORRECT_ANSWER}` : ``}
          </td>
          <td class="result__total">${this.state.victory ? countStats(this.answers) : GameConsts.FAIL}</td>
        </tr>
        ${this.state.fastAnswers && this.state.victory ? `<tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${this.state.fastAnswers}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;${GameConsts.BONUS}</td>
          <td class="result__total">${this.state.fastAnswers * GameConsts.BONUS}</td>
        </tr>` : ``}
        ${this.state.victory ? `
          <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${this.state.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;${GameConsts.BONUS}</td>
          <td class="result__total">${this.state.lives * GameConsts.BONUS}</td>
        </tr>
        ` : ``}
        ${this.state.slowAnswers && this.state.victory ? `
          <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${this.state.slowAnswers}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;${GameConsts.BONUS}</td>
          <td class="result__total">-${this.state.slowAnswers * GameConsts.BONUS}</td>
        </tr>
        ` : ``}
        ${this.state.victory ? `
          <tr>
          <td colspan="5" class="result__total result__total--final">${countScore(countStats(this.answers), this.state.fastAnswers, this.state.slowAnswers, this.state.lives)}</td>
        </tr>
        ` : ``}
      </table>
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
