import {inGameStats} from '../page-elements/ingame-stats';
import {countScore} from './count-score';
import {GameConsts} from '../data/game-data';
import {countStats} from './count-stats';

export const renderStats = (state, answers, number) => {
  return `
    <table class="result__table">
      <tr>
        <td class="result__number">${number}.</td>
        <td colspan="2">
          <ul class="stats">
          ${inGameStats(answers)}
          </ul>
        </td>
        <td class="result__points">
          ${state.victory ? `×&nbsp;${GameConsts.CORRECT_ANSWER}` : ``}
        </td>
        <td class="result__total">${state.victory ? countStats(answers) : GameConsts.FAIL}</td>
      </tr>
          ${state.fastAnswers && state.victory ? `
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${state.fastAnswers}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;${GameConsts.BONUS}</td>
        <td class="result__total">${state.fastAnswers * GameConsts.BONUS}</td>
      </tr>` : ``}
          ${state.victory ? `
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${state.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;${GameConsts.BONUS}</td>
        <td class="result__total">${state.lives * GameConsts.BONUS}</td>
      </tr>
          ` : ``}
          ${state.slowAnswers && state.victory ? `
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${state.slowAnswers}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;${GameConsts.BONUS}</td>
        <td class="result__total">-${state.slowAnswers * GameConsts.BONUS}</td>
      </tr>
      ` : ``}
      ${state.victory ? `
      <tr>
        <td colspan="5" class="result__total result__total--final">${countScore(countStats(answers), state.fastAnswers, state.slowAnswers, state.lives)}</td>
      </tr>
      ` : ``}
    </table>
  `;
};
